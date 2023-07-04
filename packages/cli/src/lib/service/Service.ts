import ora from 'ora';
import { join } from 'path';
import fg from 'fast-glob';
import {
  stat,
  remove,
  ensureDir,
  outputFile
} from 'fs-extra';
import { renderAllApi } from '@api-helper/template';

import log from '@/lib/tools/log';
import {
  loadModule,
  toUnixPath,
  getNormalizedRelativePath, documentServersRunParserPlugins,
} from '../tools/util';
import {
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '@/lib/types';
import { Config } from '@/lib';
import { EXTENSION } from '@/lib/service/const';
import ParserYapiPlugin from './parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from './parser-plugins/parser-swagger-plugin';

type DocumentServers = Config['documentServers'];

const prompts = require('prompts');

class Service{
  static init: () => void;
  private parserPlugins: AbstractParserPlugin[] = [
    new ParserYapiPlugin(),
    new ParserSwaggerPlugin(),
  ];
  private configFilePath?: string;
  constructor(configFilePath?: string) {
    this.configFilePath = configFilePath;
  }

  async run() {
    try {
      const configList = await this.getConfigFile();
      const len = configList.length;

      // 添加解析插件
      this.injectParserPlugins(configList);

      for (let i = 0; i < configList.length; i++) {
        const config = configList[i];
        let spinner = len > 1 ? ora(`正在处理，第${i + 1}项...`).start() : null;
        try {
          await this.checkOutputPathExisted(config);
          await this.checkRequestFunctionFileExisted(config);

          const parserPluginRunResult = await this.parserDocument(config.documentServers);
          const chooseDocumentList = await this.chooseDocument(parserPluginRunResult);
          const code = await this.genCode(config, chooseDocumentList);
          await this.output(config, code);

          spinner && spinner.succeed();
        } catch {
          spinner && spinner.fail(`第${i}项生成失败`);
        }
      }
    } catch {}
  }

  private injectParserPlugins(configList: Config[]) {
    for (const config of configList) {
      const parserPlugins = config?.parserPlugins ?? [];
      for (const parserPlugin of parserPlugins) {
        const parserPluginMap = this.getParserPluginMap();
        if (parserPluginMap.has(parserPlugin.name)) {
          log.warn('提示', `${parserPlugin.name}插件已经存在.`);
          continue;
        }
        this.parserPlugins.push(parserPlugin);
      }
    }
  }

  private getParserPluginMap() {
    const map = new Map();
    for (const parserPlugin of this.parserPlugins) {
      map.set(parserPlugin.name, parserPlugin);
    }
    return map;
  }

  // 1. 获取配置文件
  private async getConfigFile(): Promise<Config[]> {
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

  // 4. 文档获取与解析
  private async parserDocument(documentServers: DocumentServers): Promise<ParserPluginRunResult> {
    const result = await documentServersRunParserPlugins(documentServers, this.parserPlugins);
    return result.parserPluginRunResult;
  }

  // 5. 选择项目文档
  private async chooseDocument (parserPluginRunResult: ParserPluginRunResult): Promise<ParserPluginRunResult> {
    const choicesDocumentListOptions: { title: string; value: string }[] = [];

    parserPluginRunResult.forEach((d) => {
      d.parsedDocumentList.forEach((item) => {
        choicesDocumentListOptions.push({
          title: `${item.title}【${d.documentServer.url}】`,
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
      parserPluginRunResult = parserPluginRunResult.filter((d) => {
        d.parsedDocumentList = d.parsedDocumentList.filter((item) => answers.documentList.includes(item.id));
        return d.parsedDocumentList.length > 0;
      });
    }

    if (parserPluginRunResult.length === 0) {
      const failText = '没有选择任何项目文档';
      log.error('提示', failText);
      return Promise.reject(failText);
    }

    return parserPluginRunResult;
  }

  // 6. 生成代码
  private async genCode(config: Config, parserPluginRunResult: ParserPluginRunResult): Promise<string> {
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
    for (const item of parserPluginRunResult) {
      const { documentServer: { dataKey }, parsedDocumentList } = item;
      for (const d of parsedDocumentList) {
        try {
          let str = renderAllApi(d, {
            codeType: isTS ? 'typescript' : 'javascript',
            dataKey: dataKey,
          });
          if (!str.endsWith('\n')) {
            str += '\n';
          }
          code.push(str);
        } catch (e) {
          console.log(e);
        }
      }
    }
    spinner.succeed();

    return code.filter(Boolean).join('\n');
  }

  // 7. 输出
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
      // 文档地址【当下面的type为swagger类型时，可以读取本地文件，这里就是一个本地文件路径】
      url: 'https://petstore.swagger.io/v2/swagger.json',
      // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
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
