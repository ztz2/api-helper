import ora from 'ora';
import fg from 'fast-glob';
// import os from 'node:os';
import { pinyin } from 'pinyin-pro';
// import { Worker } from 'node:worker_threads';
import {
  join,
  isAbsolute,
} from 'path';
import {
  stat,
  outputFile,
} from 'fs-extra';
import {
  artTemplate,
  renderAllApi,
} from '@api-helper/template';
import { APIHelper } from '@api-helper/core/lib/types';
import { uuid, formatDate } from '@api-helper/core/lib/utils/util';

import logger from '@/lib/tools/logger';
import {
  resolve,
  loadModule,
  removeFolder,
  getExtensionName,
  getNormalizedRelativePath,
  documentServersRunParserPlugins, toUnixPath,
} from '../tools/util';
import {
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '../types';
import './worker-thread';
import { Config, formatCode } from '@/lib';
import { EXTENSIONS } from '@/lib/service/const';
import ParserYapiPlugin from './parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from './parser-plugins/parser-swagger-plugin';

type DocumentServers = Config['documentServers'];

const prompts = require('prompts');
// const cpus = os.cpus().length;
// const CHUNK_NUM = 30;

let outputDiscardWarn = false;

type GenCodeType = Array<{ outputFilePath: string; code: string; codeDeclare: string;}>;

export type ServerOptions = {
  // 配置文件路径
  config: string;
  url?: string;
  outputPath?: string;
  target?: string;
  type?: string;
  authToken?: string;
}

class Service{
  static init: (options: ServerOptions) => void;
  private startDate = 0;
  private parserPlugins: AbstractParserPlugin[] = [
    new ParserYapiPlugin(),
    new ParserSwaggerPlugin(),
  ];

  private readonly isTestEnv: boolean;
  private configFilePath?: string;

  private tempFolder = join(__dirname, './.cache.server');

  private constructorOptions: ServerOptions;

  constructor(options: ServerOptions = {} as ServerOptions, isTestEnv = false) {
    this.isTestEnv = isTestEnv;
    this.configFilePath = options.config;
    this.constructorOptions = options;
  }

  async run() {
    this.startDate = Date.now();

    const configList = await this.getConfigFile();
    const len = configList.length;

    // 添加解析插件
    this.injectParserPlugins(configList);

    for (let i = 0; i < configList.length; i++) {
      try {
        const config = configList[i];
        if (len > 1) {
          logger.info(`\n———————————————————— \x1B[34m正 在 处 理 ${i + 1} 项\x1B[0m ————————————————————`);
        }
        const parserPluginRunResult = await this.parserDocument(config.documentServers, config);

        const chooseDocumentList = await this.chooseDocument(parserPluginRunResult);

        const codes = await this.genCode(config, chooseDocumentList);

        await this.output(config, codes);
      } catch {}
    }

    await this.clear();
  }

  async clear() {
    removeFolder(this.tempFolder);
  }

  private injectParserPlugins(configList: Config[]) {
    for (const config of configList) {
      const parserPlugins = config?.parserPlugins ?? [];
      for (const parserPlugin of parserPlugins) {
        const parserPluginMap = this.getParserPluginMap();
        if (parserPluginMap.has(parserPlugin.name)) {
          logger.warn(`${parserPlugin.name}插件已经存在.`);
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
    const constructorOptions = this.constructorOptions;
    // 如果基于CLI执行，不需要在进行查找文件
    if (constructorOptions.url) {
      const outputPath: string = constructorOptions?.outputPath ?? '';
      const isJS = outputPath.endsWith('.js') || constructorOptions.target === 'javascript';
      const target = constructorOptions.target ?? isJS ? 'javascript' : 'typescript';
      const suffixName = `.${ isJS ? 'js' : 'ts'}`;
      return [{
        target,
        outputPath: outputPath || `src/api/index${suffixName}`,
        requestFunctionFilePath: `src/api/request${suffixName}`,
        documentServers: [
          {
            url: constructorOptions.url,
            type: constructorOptions.type ?? 'swagger',
            authToken: constructorOptions.authToken,
          },
        ],
      } as Config];
    }

    const { configFilePath } = this;
    const spinner = ora('读取配置文件').start();

    // 有配置文件
    if (configFilePath) {
      try {
        const c = await loadModule(configFilePath, {
          folder: this.tempFolder
        });
        if (c) {
          spinner.succeed();
          return Array.isArray(c) ? c : [c];
        }
      } catch (e: any) {
        spinner.fail();
        logger.error(e);
        process.exit(1);
      }
    }

    // 没有从根目录寻找
    const files = await fg(['apih.config.(js|ts|cjs|mjs)'], { cwd: process.cwd(), absolute: true });
    if (files.length) {
      const c = await loadModule(files[0], {
        folder: this.tempFolder
      });
      if (c) {
        spinner.succeed();
        return Array.isArray(c) ? c : [c];
      }
    }

    spinner.fail();
    logger.error('配置文件不存在，程序退出');
    process.exit(1);
  }

  // 2. 文档获取与解析
  private async parserDocument(documentServers: DocumentServers, config: Config): Promise<ParserPluginRunResult> {
    const result = await documentServersRunParserPlugins(documentServers, this.parserPlugins, config);
    return result.parserPluginRunResult;
  }

  // 3. 选择项目文档
  private async chooseDocument (parserPluginRunResult: ParserPluginRunResult): Promise<ParserPluginRunResult> {
    const choicesDocumentListOptions: Recordable[] = [];

    parserPluginRunResult.forEach((d, idx) => {
      d.parsedDocumentList.forEach((item) => {
        const choice: Recordable = {
          title: item.title,
          description: d.documentServer.url,
          value: item.id,
          selected: true,
        }
        if (!choice.title) {
          choice.title = `[${idx}]${d.documentServer.url}`;
          delete choice.description;
        }
        choicesDocumentListOptions.push(choice);
      });
    });

    if (choicesDocumentListOptions.length > 1) {
      const answers = await prompts([{
        type: 'multiselect',
        name: 'documentList',
        message: '配置中存在多个项目，请选择项目文档(默认全部)',
        choices: choicesDocumentListOptions,
      }]);
      if (answers.documentList.length === 0) {
        const failText = '未选择接口文档';
        logger.error(failText);
        return Promise.reject(failText);
      }
      parserPluginRunResult = parserPluginRunResult.filter((d) => {
        d.parsedDocumentList = d.parsedDocumentList.filter((item) => answers.documentList.includes(item.id));
        return d.parsedDocumentList.length > 0;
      });
    }

    if (parserPluginRunResult.length === 0) {
      const failText = '未选择接口文档';
      logger.error(failText);
      return Promise.reject(failText);
    }

    return parserPluginRunResult;
  }

  // 4. 生成代码
  private async genCode(config: Config, parserPluginRunResult: ParserPluginRunResult): Promise<GenCodeType> {
    const result: GenCodeType = [];
    const outputFilePath = getOutputPath(config);
    const isTS = checkOutputTS(config);

    // 生成代码
    const spinner = ora('代码生成，这可能需要等待一段时间...').start();
    const genCode = (documentList: APIHelper.Document | APIHelper.CategoryList, params: Recordable) => {
      params = {...params};
      let code: string = renderAllApi(documentList, params) || '';
      let codeDeclare =  '';
      if (!code.endsWith('\n')) {
        code += '\n';
      }
      if (!isTS) {
        params.isDeclare = true;
        params.codeType = 'typescript';
        codeDeclare = renderAllApi(documentList, params);
        if (!codeDeclare.endsWith('\n')) {
          codeDeclare += '\n';
        }
      }
      return [code, codeDeclare];
    }
    const formatResultCode = async (codes: Array<string> = [], codeDeclares: Array<string>  = []) => {
      const result = [];
      result.push(await formatCode({
        sourceCode: codes.filter(Boolean).join('\n'),
        formatCodeExtension: isTS ? '.ts' : '.js',
      }) as string);
      if (!isTS) {
        result.push(await formatCode({
          sourceCode: codeDeclares.filter(Boolean).join('\n'),
          formatCodeExtension: '.ts',
        }) as string);
      }
      return result;
    };

    for (const item of parserPluginRunResult) {
      const { documentServer, parsedDocumentList } = item;
      const { dataKey} = documentServer;
      const serverName = documentServer.name ? pinyin(documentServer.name, { toneType: 'none', type: 'array' }).join('') : '';
      await Promise.all(parsedDocumentList.map(async (d) => {
        const param = {
          ...config,
          ...documentServer,
          codeType: isTS ? 'typescript' : 'javascript',
          dataKey: dataKey,
          isDeclare: false,
          onRenderInterfaceName: documentServer?.events?.onRenderInterfaceName,
          onRenderRequestFunctionName: documentServer?.events?.onRenderRequestFunctionName,
        };

        // let workerStartError = false;
        // const categoryListLength = d.categoryList.length;
        // const enableParallel = config.parallel !== false && cpus > 1 && categoryListLength > CHUNK_NUM;
        // const enableParallel = config.parallel !== false && cpus > 1 && categoryListLength > CHUNK_NUM;
        // // 使用多线程生成
        // if (enableParallel) {
        //   const categoryWrap: Array<APIHelper.CategoryList> = [];
        //   const chunkSize = Math.abs(categoryListLength / cpus);
        //   let temp: APIHelper.CategoryList = [];
        //   for (let i = 0; i < d.categoryList.length; i++) {
        //     temp.push(d.categoryList[i]);
        //     if (temp.length >= chunkSize || (i === categoryListLength - 1 && temp.length > 0)) {
        //       categoryWrap.push([...temp]);
        //       temp = [];
        //     }
        //   }
        //   const parallelResult: Array<{code: string; codeDeclare: string;}> = [];
        //   await Promise.all(categoryWrap.map((categoryList, index) => new Promise((resolve) => {
        //     try{
        //       const worker = new Worker(processTSFile(join(__filename, '../worker-thread.ts')), {
        //         workerData: {
        //           isTS,
        //           param,
        //           categoryList,
        //         }
        //       });
        //       worker.on('message', (res) => {
        //         parallelResult[index] = res;
        //         resolve(1);
        //       });
        //       worker.on('error', (e) => {
        //         console.error(e);
        //         resolve(1);
        //       });
        //       worker.on('exit', (code) => {
        //         resolve(1);
        //       });
        //     } catch (e) {
        //       resolve(1);
        //       workerStartError = true;
        //     }
        //   })));
        //   for (const item of parallelResult) {
        //     if (item && 'code' in item) {
        //       codes.push(item.code);
        //       if (!isTS) {
        //         codeDeclares.push(item.codeDeclare);
        //       }
        //     }
        //   }
        //   if (!workerStartError) {
        //     return;
        //   }
        // }
        // 普通模式

        if (config.group) {
          const fileNameRecord: Record<string, number> = {};
          const codes: Array<string> = [];
          const codeDeclares: Array<string> = [];
          const fileNameMap: Record<string, string> = {};
          await Promise.all(d.categoryList.map(async (category) => {
            try {
              const [code, codeDeclare] = genCode([category], param);
              const lastName: string = category.name.split('/').filter(Boolean).pop()?.replace(/[.\s]/gim, '') as string;
              const fileNameBase = pinyin(lastName, { toneType: 'none', type: 'array' }).join('');
              fileNameRecord[fileNameBase] = fileNameRecord[fileNameBase] ? fileNameRecord[fileNameBase] + 1 : 1;
              const fileName = (fileNameRecord[fileNameBase] > 1 ? `${fileNameBase}${fileNameRecord[fileNameBase]}` : fileNameBase) + `${isTS ? '.ts' : '.js'}`;
              const currentOutputFilePath = join(outputFilePath, serverName ? (join(serverName, fileName)) : fileName);

              const tag = uuid().replace(/-/gim, '');
              fileNameMap[tag] = currentOutputFilePath;
              codes.push(`\n//模块分组-开始:${tag}\n${code} \n//模块分组-结束:${tag}\n`);
              codeDeclares.push(`\n//模块分组-开始:${tag}\n${codeDeclare} \n//模块分组-结束:${tag}\n`);
            } catch (e: any) {
              logger.error(e);
            }
          }));
          try {
            const [code2 = '', codeDeclare2 = ''] = await formatResultCode(codes,  codeDeclares);
            await Promise.all(Object.entries(fileNameMap).map(async ([item, currentOutputFilePath], index) => {
              const rex = new RegExp(`\/\/模块分组-开始:${item}([\\s\\S]*)\/\/模块分组-结束:${item}`, 'gim');
              const code = (rex?.exec(code2)?.[1] ?? '').trim();
              rex.lastIndex = 0;
              const codeDeclare = (rex?.exec(codeDeclare2)?.[1] ?? '').trim();
              const requestFilePath = removeExtensionName(getNormalizedRelativePath(currentOutputFilePath, await getRequestFunctionFilePath(config)), EXTENSIONS);

              const renderHeaderParams = {
                isTS,
                config,
                requestFilePath,
                onlyTyping: config.onlyTyping && isTS
              };
              const [codeHead, codeHeadDeclare] = renderHeader(this.isTestEnv, renderHeaderParams, {
                ...renderHeaderParams,
                isTS: true,
                onlyTyping: config.onlyTyping
              });
              result.push({
                outputFilePath: currentOutputFilePath,
                code: code ? `${codeHead}${code}` : '',
                codeDeclare: codeDeclare ? `${codeHeadDeclare}${codeDeclare}` : '',
              });
            }));
          } catch (e: any) {
            logger.error(e);
          }
          return;
        }

        try {
          const [code, codeDeclare] = genCode(d, param);
          let currentOutputFilePath = outputFilePath;
          if (serverName) {
            const outputFilePathList = toUnixPath(outputFilePath).split('/');
            const lastPath = outputFilePathList[outputFilePathList.length - 1];
            if (lastPath?.includes('.')) {
              outputFilePathList.pop();
              const lastPathSplit = lastPath.split('.');
              outputFilePathList.push([...lastPathSplit].slice(0, lastPathSplit.length - 1).join('.'));
              outputFilePathList.push(serverName + '.' + [...lastPathSplit].pop());
            } else {
              outputFilePathList.push(serverName);
            }
            currentOutputFilePath = outputFilePathList.join('/');
          }
          const outputFilePathList = toUnixPath(currentOutputFilePath).split('/');
          if (outputFilePathList.pop()?.includes?.('.') === false) {
            currentOutputFilePath += isTS ? '.ts' : '.js';
          }
          const requestFilePath = removeExtensionName(getNormalizedRelativePath(currentOutputFilePath, await getRequestFunctionFilePath(config)), EXTENSIONS);
          const renderHeaderParams = {
            isTS,
            config,
            requestFilePath,
            onlyTyping: config.onlyTyping && isTS
          };
          const [codeHead, codeHeadDeclare] = renderHeader(this.isTestEnv, renderHeaderParams, {
            ...renderHeaderParams,
            isTS: true,
  onlyTyping: config.onlyTyping
          });
          const [code2, codeDeclare2] = await formatResultCode([codeHead, code],  [codeHeadDeclare, codeDeclare]);
          result.push({
            outputFilePath: currentOutputFilePath,
            code: code2,
            codeDeclare: codeDeclare2,
          });
        } catch (e: any) {
          logger.error(e);
        }
      }));
    }

    spinner.succeed();

    return result;
  }

  // 5. 输出
  private async output(config: Config, genCodes: GenCodeType) {
    const isTS = checkOutputTS(config);

    const spinner = ora('文件输出').start();
    try {
      for (const genCode of genCodes) {
        const outputFilePath = genCode.outputFilePath;
        await outputFile(outputFilePath, genCode.code);
        if (!isTS) {
          const declareFilePath = filterDeclareFilename(outputFilePath);
          await outputFile(declareFilePath, genCode.codeDeclare);
        }
      }
      spinner.succeed();
      // 耗时：${((Date.now() - this.startDate) / 1000).toFixed(2)}秒
      logger.info(`Done. 代码生成成功. `);
    } catch (error: any) {
      spinner.fail();
      logger.error(error);
      return Promise.reject(error);
    }
  }
}

Service.init = async function (options: ServerOptions = {} as ServerOptions) {
  let configFile: string;
  if (options?.config) {
    if (isAbsolute(options.config)) {
      configFile = options.config;
    } else {
      configFile = join(process.cwd(), options.config);
    }
  } else {
    const answers = await prompts([{
      type: 'select',
      name: 'codeType',
      message: '请选择配置文件类型？',
      choices: [
        { title: 'JavaScript', description: 'apih.config.js', value: 'apih.config.js' },
        { title: 'TypeScript', description: 'apih.config.ts', value: 'apih.config.ts' },
      ],
    }]);
    if (!answers.codeType) {
      return;
    }
    configFile = join(process.cwd(), answers.codeType);
  }

  // 检测文件是否已经存在
  try {
    await stat(configFile);
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
    `import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  // 使用分组功能，启用该功能后，按照分组多文件代码生成
  group: false,
  // 是否只生成接口请求数据和返回数据的 TypeScript 类型。是，则请求文件和请求函数都不会生成。
  onlyTyping: false,
  // 代码生成后的输出路径
  outputPath: 'src/api/index.ts',
  // 生成的目标代码类型。默认: typescript
  target: 'typescript',
  // request请求工具函数文件路径。
  requestFunctionFilePath: 'src/api/request.ts',
  // 请求数据所有字段设置成必有属性，默认: false
  requiredRequestField: false,
  // 响应数据所有字段设置成必有属性，默认：true
  requiredResponseField: true,
  // 接口文档服务配置
  documentServers: [{
    // 文档地址【当下面的type为'swagger'类型时，可以读取本地文件，这里就可以一个本地文件路径】
    url: 'http://接口文档地址.com',
    // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
    type: 'swagger',
    // 当前接口文档服务名称，有值的情况下，文件输出变成 -> 路径/当前name
    name: '',
    // 获取响应数据的key，body[dataKey]
    dataKey: '',
    // 访问文档可能需要认证信息，http auth 验证方式
    auth: {
      username: '',
      password: '',
    },
    // 访问文档可能需要认证信息，通过使用token访问，yapi的验证token
    authToken: '',
  }],
});
`
  try {
    await outputFile(configFile, code);
    await getRequestFunctionFilePath({ outputFilePath: 'src/api/index.ts' } as any);
    logger.info('已生成配置文件.');
  } catch (e) {
    return logger.error('配置文件生成失败.');
  }
}

function renderHeader(isTestEnv = false, options1: Recordable = {}, options2: Recordable = {}) {
  const genTimeStr = isTestEnv ? '' : formatDate(Date.now());
  const codeHeadTpl = `《if onlyTyping !== true》《if isTS》/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* 代码生成时间: ${genTimeStr} */
/* 提示：该文件由 API Helper CLI 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,《if isTS && !onlyTyping》
  processRequestFunctionConfig,《/if》
} from '@api-helper/cli/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from '《requestFilePath》';《if isTS && !onlyTyping》
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;《/if》
  《else》
/* eslint-disable */
/* prettier-ignore-start */

/* 代码生成时间: ${genTimeStr} */
/* 提示：该文件由 API Helper CLI 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// prettier-ignore
import { processRequestFunctionConfig } from '@api-helper/cli/lib/helpers';
// prettier-ignore
import request from '《requestFilePath》';
  《/if》
《/if》

`;
  let codeHead = artTemplate.render(codeHeadTpl, options1)?.trim?.() ?? '';
  let codeHeadDeclare = artTemplate.render(codeHeadTpl, options2)?.trim?.() ?? '';
  codeHead = codeHead ? codeHead + '\n\n' : codeHead;
  codeHeadDeclare = codeHeadDeclare ? codeHeadDeclare + '\n\n' : codeHeadDeclare;
  return [codeHead, codeHeadDeclare];
}

function filterDeclareFilename(filename: string): string {
  const types = ['.ts', '.js', '.tsx', '.jsx', '.mjs', '.ejs'];
  const type = types.find((t) => filename.endsWith(t));
  if (type) {
    return `${filename.slice(0, filename.length - type.length)}.d.ts`;
  }
  return `${filename}.d.ts`;
}
function checkOutputTS(config: Config) {
  const outputFilePath = getOutputPath(config);
  if (config.target != null) {
    return config.target !== 'javascript';
  }
  return !(outputFilePath.endsWith('.js') || outputFilePath.endsWith('.jsx'));
}
function getOutputPath(config: Config & { output?: { path: string; filename: string; } }, showDiscardWarn = false): string {
  const outputPath = config.outputPath ?? config.outputFilePath;
  // 兼容旧版的配置路径
  if (config.outputFilePath) {
    if (showDiscardWarn) {
      if (!outputDiscardWarn) {
        outputDiscardWarn = true;
        logger.warn('documentServers.outputFilePath 属性已经废弃，请使用 documentServers.outputPath');
      }
    }
  }
  if (config.output) {
    // 使用旧版配置，警告提示该配置已经废弃
    if (showDiscardWarn) {
      if (!outputDiscardWarn) {
        outputDiscardWarn = true;
        logger.warn('documentServers.output 属性已经废弃，请使用 documentServers.outputPath');
      }
    }
    if (isAbsolute(config.output.filename)) {
      return config.output.filename;
    }
    if (isAbsolute(config.output.path)) {
      join(config.output.path, config.output.filename);
    }
    return join(resolve(config.output.path), config.output.filename);
  }
  if (outputPath && isAbsolute(outputPath)) {
    return outputPath;
  }
  return resolve(outputPath);
}

function removeExtensionName(filepath = '', extensions: Array<string> = []) {
  for (const extension of EXTENSIONS) {
    if (filepath.endsWith(extension)) {
      filepath = filepath.slice(0, filepath.length - extension.length);
      break;
    }
  }
  return filepath;
}

async function getRequestFunctionFilePath(config: Config & { output?: { path: string; filename: string; } }): Promise<string> {
  const outputFilename = getOutputPath(config);
  const extensionName = getExtensionName(outputFilename);
  let isTS = checkOutputTS(config);
  config.requestFunctionFilePath = config.requestFunctionFilePath ? config.requestFunctionFilePath : `src/api/request.${isTS?'ts':'js'}`;
  let requestFunctionFilePath = config.requestFunctionFilePath;
  // 兼容旧版配置
  if (['src/utils/request', 'src/tools/request'].includes(requestFunctionFilePath)) {
    requestFunctionFilePath += extensionName;
  }
  requestFunctionFilePath = resolve(requestFunctionFilePath);

  isTS = requestFunctionFilePath.endsWith('.ts') || requestFunctionFilePath.endsWith('.tsx');

  if (config.target) {
    isTS = config.target === 'typescript';
  }

  const requestDeclareFunctionFilePath = filterDeclareFilename(requestFunctionFilePath);
  // 创建request文件类型申明文件
  if (
    !isTS &&
    !requestFunctionFilePath.endsWith('.ts') &&
    !requestFunctionFilePath.endsWith('.tsx')
  ) {
    try {
      await stat(resolve(requestDeclareFunctionFilePath));
    } catch {
      try {
        await outputFile(requestDeclareFunctionFilePath,
`import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';
// 自定义配置
export type RequestOptions = {
  // 自定义配置属性
};
export default function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData>;
`);
      } catch {}
    }
  }

  if (config.onlyTyping && isTS) {
    return requestFunctionFilePath;
  }

  try { // 路径可以访问，文件已经创建，直接返回
    await stat(resolve(requestFunctionFilePath));
    return requestFunctionFilePath;
  } catch {}
  try {  // 不可访问，重新创建文件
    await outputFile(requestFunctionFilePath,
      isTS ? `import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';

// 自定义配置
export type RequestOptions = {
  // 自定义配置属性
};

export default async function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData> {
  return new Promise((resolve, reject) => {
    // 以axios为例的请求配置
    const requestConfig = {
      url: config.path,
      method: config.method,
      data: config.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // 处理表单数据请求头
    if (config.hasFormData) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }
    // TODO待实现具体request请求逻辑...
    // 先用异步模拟request请求逻辑
    setTimeout(() => {
      resolve({} as unknown as ResponseData);
    }, 1500);
  });
}
`: `export default async function request(config, options) {
  return new Promise((resolve, reject) => {
    // 以axios为例的请求配置
    const requestConfig = {
      url: config.path,
      method: config.method,
      data: config.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // 处理表单数据请求头
    if (config.hasFormData) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }

    console.log('请求配置：', requestConfig);
    // TODO待实现具体request请求逻辑...
    // 先用异步模拟request请求逻辑
    setTimeout(() => {
      resolve({});
    }, 1500);
  });
}
`);
  } catch {
    logger.error(`统一请求文件创建失败：${requestFunctionFilePath}`);
    process.exit(1);
  }
  return requestFunctionFilePath;
}

export default Service;
