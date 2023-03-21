import ora from 'ora';
import { join } from 'path';
import {
  stat,
  remove,
  ensureDir,
  outputFile
} from 'fs-extra';
import {
  APIHelper,
  generateAllApi,
  ParserOpenAPI
} from '@api-helper/core';

import {
  Config,
  DocumentParsedList,
  DocumentResourceList
} from './types';

import { getDocument } from './server';
import { getNormalizedRelativePath } from './utils/util';

const prompts = require('prompts');
const consola = require('consola');

export class CLI{
  private config: Config[] | null = null;
  private configFilePath?: string;
  constructor(configFilePath?: string) {
    this.configFilePath = configFilePath;
  }
  async run() {
    const config = await this.getConfigFile();
    let len = config.length;
    for (let i = 0; i < config.length; i++) {
      const c = config[i];
      let spinner = len > 1 ? ora(`正在处理，第${i + 1}项...`).start() : null;
      try {
        await this.checkOutputPathExisted(c);
        await this.checkRequestFunctionFileExisted(c);
        const documentResourceList = await this.fetchSourceDocumentList(c);
        const parsedDocumentList = await this.parserSourceDocument(c, documentResourceList);
        const chooseDocumentList = await this.chooseDocument(c, parsedDocumentList);
        const code = await this.genCode(c, chooseDocumentList);
        await this.output(c, code);
        spinner && spinner.succeed();
      } catch {
        spinner && spinner.fail(`第${i}项生成失败`);
      }
    }
  }

  // 1. 获取配置文件
  private async getConfigFile() {
    const { configFilePath } = this;
    const oraText = '读取 apih.config.(ts|js) 配置文件';
    const spinner = ora(oraText).start();
    let config: Config[] = [];

    if (configFilePath) {
      try {
        await stat(configFilePath);
        const c = require(configFilePath).default;
        if (c) {
          config = Array.isArray(c) ? c : [c];
        }
      } catch {}
    }

    if (!this.config) {
      const f = ['apih.config.ts', 'apih.config.js'];
      for (let i = 0; i < f.length; i++) {
        try {
          const path = join(process.cwd(), `./${f[i]}`);
          await stat(path);
          const c = require(path).default;
          if (c) {
            config = Array.isArray(c) ? c : [c];
            break
          }
        } catch {}
      }
    }

    if (config && config.length > 0) {
      spinner.succeed();
    } else {
      const failText = oraText + '【失败：配置文件不存在，程序即将退出】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }

    return config;
  }

  // 2. 检测输出目录是否存在
  private async checkOutputPathExisted(config: Config) {
    const oraText = '检测输出目录';
    const spinner = ora(oraText).start();
    try {
      await ensureDir(config.output.path);
      spinner.succeed();
    } catch {
      const failText = oraText + '【失败：输出不存在】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }
  }

  // 3. 检测request函数是否存在
  private async checkRequestFunctionFileExisted(config: Config) {
    const oraText = '检测 request 请求函数文件';
    const spinner = ora(oraText).start();

    const requestFunctionFilePath = config.requestFunctionFilePath;
    let hasRequestFile = false;
    let requestFileSuffixName = ['.ts', '.js', '.tsx', '.jsx'];
    // 有后缀名，直接根据路径获取
    if (requestFileSuffixName.includes(requestFunctionFilePath)) {
      try {
        await stat(config.requestFunctionFilePath);
        hasRequestFile = true;
        spinner.succeed();
      } catch {}
    }

    // 根据内置默认后缀名规则获取
    if (!hasRequestFile) {
      for (let i = 0; i < requestFileSuffixName.length; i++) {
        try {
          await stat(config.requestFunctionFilePath + requestFileSuffixName[i]);
          hasRequestFile = true;
          spinner.succeed();
          break;
        } catch {}
      }
    }

    if (!hasRequestFile){
      const failText = oraText + '【失败：没有获取到request文件，请检查目录是否正确】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }

  }

  // 4. 获取源文档
  private async fetchSourceDocumentList(config: Config): Promise<DocumentResourceList> {
    const oraText = '请求 config.serverURL 获取文档';
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
  private async parserSourceDocument(config: Config, documentResourceList: DocumentResourceList): Promise<DocumentParsedList> {
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
  private async chooseDocument (config: Config, documentParsedList: DocumentParsedList): Promise<APIHelper.Document[]> {
    let result: APIHelper.Document[] = [];
    const choicesDocumentListOptions: { title: string; value: string }[] = [];
    documentParsedList.forEach((d) => {
      d.documentList.forEach((item) => {
        result.push(item);
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
      result = result.filter((p) => answers.documentList.includes(p.id));
    }

    if (result.length === 0) {
      const failText = '没有选择任何项目文档';
      consola.error(failText);
      return Promise.reject(failText);
    }

    return result;
  }

  // 7. 生成代码
  private async genCode(config: Config, documentList: APIHelper.Document[]): Promise<string> {
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
} from '@api-helper/core';
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
import { processRequestFunctionConfig } from '@api-helper/core';
// prettier-ignore
import request from '${getNormalizedRelativePath(outputFilename, config.requestFunctionFilePath)}';
`);
    }

    // 生成代码
    const spinner = ora(oraText).start();
    for (const d of documentList) {
      code.push(generateAllApi(d, {
        codeType: isTS ? 'typescript' : 'javascript'
      }));
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
      consola.success('Done. 代码生成成功');
    } catch {
      const failText = oraText + '【失败】';
      spinner.fail(failText);
      return Promise.reject(failText);
    }
  }
}
