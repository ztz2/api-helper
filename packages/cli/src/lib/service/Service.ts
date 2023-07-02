import ora from 'ora';
import { join } from 'path';
import fg from 'fast-glob';
import {
  stat,
  remove,
  ensureDir,
  outputFile
} from 'fs-extra';
import {
  APIHelper,
  ParserOpenAPI
} from '@api-helper/core';
import { renderAllApi } from '@api-helper/template';

import {
  Config,
  DocumentParsedList,
  DocumentResourceList
} from '@/lib';

import { getDocument } from './server';
import {
  loadModule,
  toUnixPath,
  getNormalizedRelativePath,
} from '../tools/util';
import { EXTENSION } from '@/lib/service/const';
import log from '@/lib/tools/log';

const prompts = require('prompts');

type ChooseDocument = {
  documentList: APIHelper.Document[],
} & Partial<DocumentResourceList[number]>;

class Service{
  static init: () => void;

  private configFilePath?: string;
  constructor(configFilePath?: string) {
    this.configFilePath = configFilePath;
  }
  async run() {
    try {
      const config = await this.getConfigFile();
      let len = config.length;
      for (let i = 0; i < config.length; i++) {
        const c = config[i];
        let spinner = len > 1 ? ora(`正在处理，第${i + 1}项...`).start() : null;
        try {
          await this.checkOutputPathExisted(c);
          await this.checkRequestFunctionFileExisted(c);
          const documentResourceList = await this.fetchSourceDocumentList(c);
          const parsedDocumentList = await this.parserSourceDocument(documentResourceList);
          const chooseDocumentList = await this.chooseDocument(parsedDocumentList);
          const code = await this.genCode(c, chooseDocumentList);
          await this.output(c, code);
          spinner && spinner.succeed();
        } catch {
          spinner && spinner.fail(`第${i}项生成失败`);
        }
      }
    } catch {}
  }

  // 1. 获取配置文件
  private async getConfigFile() {
    const { configFilePath } = this;
    const oraText = '读取 apih.config.(ts|js|cjs|mjs) 配置文件';
    const spinner = ora(oraText).start();

    // 有配置文件
    if (configFilePath) {
      const c = await loadModule(configFilePath);
      if (c) {
        spinner.succeed();
        return Array.isArray(c) ? c : [c];
      }
    }

    // 没有从根目录寻找
    const files = await fg(['apih.config.(ts|js|cjs|mjs)'], { cwd: process.cwd(), absolute: true });
    if (files.length) {
      const c = await loadModule(files[0]);
      if (c) {
        spinner.succeed();
        return Array.isArray(c) ? c : [c];
      }
    }

    const failText = oraText + '【失败：配置文件不存在，程序即将退出】';
    spinner.fail(failText);

    process.exit(1);
  }

  // 2. 检测输出目录是否存在
  private async checkOutputPathExisted(config: Config) {
    const oraText = '检测输出目录';
    const spinner = ora(oraText).start();
    try {
      await ensureDir(config.output.path);
      spinner.succeed();
    } catch {
      const failText = oraText + '【失败：输出不存在，重新即将退出】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }
  }

  // 3. 检测request函数是否存在
  private async checkRequestFunctionFileExisted(config: Config) {
    const oraText = '检测 request 请求函数文件';
    const spinner = ora(oraText).start();

    let requestFunctionFilePath = config.requestFunctionFilePath;

    if (EXTENSION.every((ext) => !requestFunctionFilePath.endsWith(ext))) {
      requestFunctionFilePath += `.(${EXTENSION.map((ext) => ext.slice(1)).join('|')})`;
    }
    const files = await fg([toUnixPath(requestFunctionFilePath)], {
      cwd: process.cwd(),
      absolute: true
    });
    if (files.length > 0){
      spinner.succeed();
    } else {
      const failText = oraText + '【失败：没有获取到request文件】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }
  }

  // 4. 获取源文档
  private async fetchSourceDocumentList(config: Config): Promise<DocumentResourceList> {
    const oraText = '请求 config.url 获取文档';
    const spinner = ora(oraText).start();
    try {
      const documentResourceList = await getDocument(config.documentServers);
      spinner.succeed();
      return documentResourceList;
    } catch {
      const failText = oraText + '【失败】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }
  }

  // 5. 解析文档
  private async parserSourceDocument(documentResourceList: DocumentResourceList): Promise<DocumentParsedList> {
    const oraText = '解析文档';

    const documentList: DocumentParsedList = [];
    const spinner = ora(oraText).start();
    try {
      for (const d of documentResourceList) {
        const row: Config['documentServers'][number] = { ...d };
        if ('resourceDocumentList' in row) {
          // @ts-ignore
          delete row.resourceDocumentList;
        }
        if (d.events?.onParseDocument) {
          documentList.push({
            ...row,
            documentList: d.events?.onParseDocument(d.resourceDocumentList)
          });
        } else if (d.type === 'swagger') {
          documentList.push({
            ...row,
            documentList: await new ParserOpenAPI().parser(d.resourceDocumentList)
          });
        } else if (d.type === 'yapi') {
          // TODO 等待解析yapi文档
        }
      }

      spinner.succeed();
      return documentList;
    } catch {
      const failText = oraText + '【失败】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }
  }

  // 6. 选择项目文档
  private async chooseDocument (documentParsedList: DocumentParsedList): Promise<DocumentParsedList> {
    const choicesDocumentListOptions: { title: string; value: string }[] = [];

    documentParsedList.forEach((d) => {
      d.documentList.forEach((item) => {
        choicesDocumentListOptions.push({
          title: `${item.title}【${d.url}】`,
          value: item.id
        });
      });
    });

    if (choicesDocumentListOptions.length > 1) {
      const answers = await prompts([{
        type: 'multiselect',
        name: 'documentList',
        message: '当前存在多个项目文档，请选择项目文档？',
        choices: choicesDocumentListOptions,
      }]);
      if (answers.documentList.length === 0) {
        const failText = '没有选择任何项目文档';
        log.error('提示', failText);
        return Promise.reject(failText);
      }
      documentParsedList = documentParsedList.filter((d) => {
        d.documentList = d.documentList.filter((item) => answers.documentList.includes(item.id));
        return d.documentList.length > 0;
      });
    }

    if (documentParsedList.length === 0) {
      const failText = '没有选择任何项目文档';
      log.error('提示', failText);
      return Promise.reject(failText);
    }

    return documentParsedList;
  }

  // 7. 生成代码
  private async genCode(config: Config, documentParsedList: DocumentParsedList): Promise<string> {
    const oraText = '生成代码';
    const outputFilename = join(config.output.path, config.output.filename);
    const isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');

    const code = [];
    if (isTS) {
      code.push(`/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/** ————————————— 警告：该文件由 api-helper 自动生成，切记不能对文件进行修改（因为生成之后内容将会覆盖该文件，如果自动生成代码不满足业务，提PR） —————————————  **/

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,
  processRequestFunctionConfig,
} from '@api-helper/core/es/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from '${getNormalizedRelativePath(outputFilename, config.requestFunctionFilePath)}';
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;
`);
    } else {
      code.push(`/* eslint-disable */
/* prettier-ignore-start */

/** ————————————— 警告：该文件由 api-helper 自动生成，切记不能对文件进行修改（因为生成之后内容将会覆盖该文件，如果自动生成代码不满足业务，提PR） —————————————  **/

// prettier-ignore
import { processRequestFunctionConfig } from '@api-helper/core/es/lib/helpers';
// prettier-ignore
import request from '${getNormalizedRelativePath(outputFilename, config.requestFunctionFilePath)}';
`);
    }

    // 生成代码
    const spinner = ora(oraText).start();
    for (const { dataKey, documentList } of documentParsedList) {
      for (const d of documentList) {
        let str = renderAllApi(d, {
          codeType: isTS ? 'typescript' : 'javascript',
          responseDataKey: dataKey,
        });
        if (!str.endsWith('\n')) {
          str += '\n';
        }
        code.push(str);
      }
    }
    spinner.succeed();

    return code.filter(Boolean).join('\n');
  }

  // 8. output
  private async output(config: Config, code: string) {
    const oraText = '输出文件';
    const outputFilename = join(config.output.path, config.output.filename);
    const spinner = ora(oraText).start();

    // 删除源文件
    try {
      await remove(outputFilename);
    } catch {}

    // 输出
    try {
      await outputFile(outputFilename, code);
      spinner.succeed();
      log.info('提示', 'Done. 代码生成成功');
    } catch {
      const failText = oraText + '【失败】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }
  }
}

Service.init = async function () {
  const answers = await prompts([{
    type: 'select',
    name: 'codeType',
    message: '请选择配置文件类型？',
    choices: [
      { title: 'JavaScript（apih.config.js）', value: 'apih.config.js' },
      { title: 'TypeScript（apih.config.ts）', value: 'apih.config.ts' }
    ],
  }]);

  if (!answers.codeType) {
    return;
  }

  // 检测文件是否已经存在
  try {
    await stat(join(process.cwd(), answers.codeType));
    const overrideAnswer = await prompts([{
      type: 'confirm',
      name: 'override',
      message: '检测到已经存在配置文件，是否覆盖已有配置文件？'
    }]);
    if (!overrideAnswer.override) {
      return;
    }
  } catch {}

  const code =
    `import { resolve } from 'path';
import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  documentServers: [
    {
      // 文档地址
      url: 'https://petstore.swagger.io/v2/swagger.json',
      // 文档类型，默认可以解析 swagger 和 yapi，其他文档 custom 类型，需要自行实现 onParseDocument 钩子函数
      type: 'swagger',
      // 获取数据的key，body[dataKey]
      dataKey: ''
    }
  ],
  // 请求函数文件路径
  requestFunctionFilePath: 'src/utils/request',
  // 输出信息
  output: {
    // 输出路径
    path: resolve(process.cwd(), 'src/api'),
    // 输出文件名称，会根据后缀名(.js|.ts)判断是生成TS还是JS文件
    filename: 'index.ts',
  }
});
`
  try {
    await outputFile(join(process.cwd(), answers.codeType), code);
    log.info('提示', '已生成配置文件');
  } catch (e) {
    return log.error('提示', '配置文件生成失败');
  }
}

export default Service;
