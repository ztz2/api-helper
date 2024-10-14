import ora from 'ora';
import fg from 'fast-glob';
// import os from 'node:os';
import { pinyin } from 'pinyin-pro';
// import { Worker } from 'node:worker_threads';
import path, {
  join,
  isAbsolute,
} from 'path';
import {
  stat,
  outputFile,
  pathExistsSync,
} from 'fs-extra';
import {
  artTemplate,
  renderAllApi,
} from '@api-helper/template';
import { merge, pick, castArray } from 'lodash';
import { APIHelper } from '@api-helper/core/lib/types';
import { uuid, formatDate } from '@api-helper/core/lib/utils/util';

import {
  resolve,
  toUnixPath,
  removeFolder,
  getAbsolutePath,
  getExtensionName,
  getNormalizedRelativePath,
  documentServersRunParserPlugins,
} from '../tools/util';
import {
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '@/lib';
// import './worker-thread';
import Locales from '@/lib/locales';
import logger from '@/lib/tools/logger';
import { Config, formatCode } from '@/lib';
import { EXTENSIONS } from '@/lib/service/const';
import ParserYapiPlugin from './parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from './parser-plugins/parser-swagger-plugin';
import { ServerConfig } from '@/lib/types';

type DocumentServers = Config['documentServers'];

const prompts = require('prompts');
// const cpus = os.cpus().length;
// const CHUNK_NUM = 30;

let outputDiscardWarn = false;

type GenCodeType = Array<{ outputFilePath: string; code: string; codeDeclare: string;}>;

export type ServerOptions = {
  // 配置文件路径
  config: string;
  // 其余属性也是 Config 项，来自CLI直接操作
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

  private locales: Locales;

  constructor(options: ServerOptions = {} as ServerOptions, isTestEnv = false) {
    this.isTestEnv = isTestEnv;
    this.configFilePath = options.config;
    this.constructorOptions = options;
    this.locales = new Locales();
  }

  async run() {
    await this.locales.init();
    this.startDate = Date.now();

    const configList = await this.getConfigFile();
    const len = configList.length;

    // 添加解析插件
    this.injectParserPlugins(configList);

    for (let i = 0; i < configList.length; i++) {
      try {
        const config = configList[i];
        if (len > 1) {
          logger.info(`———————————————————— \x1B[34m${this.locales.$t('正在处理').replace('%0', String(i + 1))}\x1B[0m ————————————————————`);
        }
        // 缺少文档配置，跳过该项
        if (!config.documentServers?.length) {
          logger.error(this.locales.$t('缺少 documentServers 配置'));
          continue;
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
          logger.warn(this.locales.$t('插件已经注册').replace('%0', parserPlugin.name));
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
    // npx apih -url https://xxxx.com/swagger-ui.html
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
    const spinner = ora(this.locales.$t('读取配置文件')).start();

    // 有配置文件
    if (configFilePath) {
      const c = getAbsolutePath(configFilePath);
      if (!pathExistsSync(c)) {
        spinner.fail();
        logger.error(this.locales.$t('配置文件不存在，程序退出'));
        return process.exit(1);
      }
      const configList = castArray(require(c).default);
      if (!configList.length) {
        spinner.fail();
        logger.error(this.locales.$t('配置为空，程序退出'));
        return process.exit(1);
      }
      spinner.succeed();
      logger.info(this.locales.$t('配置已加载：') + toUnixPath(configFilePath));
      return configList;
    }

    // 没有从根目录寻找
    const files = await fg(['apih.config.(ts|js|cjs|mjs)'], { cwd: process.cwd(), absolute: true });
    let configList = [];
    let configPath = '';
    let hasConfigFile = false;
    for (const file of files) {
      const c = getAbsolutePath(file);
      if (pathExistsSync(c)) {
        hasConfigFile = true;
        const temp = castArray(require(c).default);
        if (temp && temp.length) {
          configPath = file;
          configList = temp;
        }
      }
    }

    if (!hasConfigFile) {
      spinner.fail();
      logger.error(this.locales.$t('配置文件不存在，程序退出'));
      process.exit(1);
    }

    if (!configList.length) {
      spinner.fail();
      logger.error(this.locales.$t('配置为空，程序退出'));
      return process.exit(1);
    }

    spinner.succeed();
    logger.info(this.locales.$t('配置已加载：') + toUnixPath(configPath));
    return configList;
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
        const failText = this.locales.$t('未选择接口文档');
        logger.error(failText);
        return Promise.reject(failText);
      }
      parserPluginRunResult = parserPluginRunResult.filter((d) => {
        d.parsedDocumentList = d.parsedDocumentList.filter((item) => answers.documentList.includes(item.id));
        return d.parsedDocumentList.length > 0;
      });
    }

    if (parserPluginRunResult.length === 0) {
      const failText = this.locales.$t('未选择接口文档');
      logger.error(failText);
      return Promise.reject(failText);
    }

    return parserPluginRunResult;
  }

  // 4. 生成代码
  private async genCode(config: Config, parserPluginRunResult: ParserPluginRunResult): Promise<GenCodeType> {
    const result: GenCodeType = [];
    const outputFilePath = await getOutputPath(config);
    const isTS = await checkOutputTS(config);

    // 生成代码
    const spinner = ora(this.locales.$t('代码生成，这可能需要等待一段时间...')).start();
    const _genCode = (documentList: APIHelper.Document | APIHelper.CategoryList, params: Recordable) => {
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
        const mgConfig = mergeConfig(config, documentServer);
        const eventTemp = mgConfig.events;
        delete mgConfig.events;
        Object.assign(mgConfig, eventTemp);
        const param = {
          ...mgConfig,
          codeType: isTS ? 'typescript' : 'javascript',
          dataKey: dataKey,
          isDeclare: false,
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
              const [code, codeDeclare] = _genCode([category], param);
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
              }, this.locales);
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
          const [code, codeDeclare] = _genCode(d, param);
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
          }, this.locales);
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
    const isTS = await checkOutputTS(config);

    const spinner = ora(this.locales.$t('文件输出')).start();
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
      logger.info(this.locales.$t('Done. 代码生成成功.'));
    } catch (error: any) {
      spinner.fail();
      logger.error(error);
      return Promise.reject(error);
    }
  }
}

Service.init = async function (options: ServerOptions = {} as ServerOptions) {
  const locales = await new Locales().init();

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
      message: locales.$t('请选择配置文件类型？'),
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
      message: locales.$t('检测到已经存在配置文件，是否覆盖已有配置文件？')
    }]);
    if (!overrideAnswer.override) {
      return;
    }
  } catch {}

  const code =
    `import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  // ${locales.$t('group')}
  group: false,
  // ${locales.$t('onlyTyping')}
  onlyTyping: false,
  // ${locales.$t('outputPath')}
  outputPath: 'src/api/index.ts',
  // ${locales.$t('target')}
  target: 'typescript',
  // ${locales.$t('requestFunctionFilePath')}
  requestFunctionFilePath: 'src/api/request.ts',
  // ${locales.$t('requiredRequestField')}
  requiredRequestField: false,
  // ${locales.$t('requiredResponseField')}
  requiredResponseField: true,
  // ${locales.$t('documentServers')}
  documentServers: [{
    // ${locales.$t('url')}
    url: '${locales.$t('urlValue')}',
    // ${locales.$t('type')}
    type: 'swagger',
    // ${locales.$t('name')}
    name: '',
    // ${locales.$t('dataKey')}
    dataKey: '',
    // ${locales.$t('auth')}
    auth: {
      username: '',
      password: '',
    },
    // ${locales.$t('authToken')}
    authToken: '',
  }],
});
`
  try {
    await outputFile(configFile, code);
    await getRequestFunctionFilePath({ outputFilePath: 'src/api/index.ts' } as any);
    logger.info(locales.$t('已生成配置文件.'));
  } catch (e) {
    return logger.error(locales.$t('配置文件生成失败.'));
  }
}

function renderHeader(isTestEnv = false, options1: Recordable = {}, options2: Recordable = {}, locales: Locales) {
  const genTimeStr = isTestEnv ? '' : formatDate(Date.now());
  const codeHeadTpl = `《if onlyTyping !== true》《if isTS》/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* ${locales.$t('代码生成时间：')}${genTimeStr} */
/* ${locales.$t('提示：该文件由 API Helper CLI 自动生成，请勿直接修改。')} */
/* ${locales.$t('文档参考：')}https://github.com/ztz2/api-helper */

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

/* ${locales.$t('代码生成时间：')}${genTimeStr} */
/* ${locales.$t('提示：该文件由 API Helper CLI 自动生成，请勿直接修改。')} */
/* ${locales.$t('文档参考：')}https://github.com/ztz2/api-helper */

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
async function checkOutputTS(config: Config) {
  const outputFilePath = await getOutputPath(config);
  if (config.target != null) {
    return config.target !== 'javascript';
  }
  return !(outputFilePath.endsWith('.js') || outputFilePath.endsWith('.jsx'));
}
async function getOutputPath(config: Config & { output?: { path: string; filename: string; } }, showDiscardWarn = false): Promise<string> {
  const locales = await new Locales().init();
  const outputPath = config.outputPath ?? config.outputFilePath;
  // 兼容旧版的配置路径
  if (config.outputFilePath) {
    if (showDiscardWarn) {
      if (!outputDiscardWarn) {
        outputDiscardWarn = true;
        logger.warn(locales.$t('documentServers.outputFilePath 属性已经废弃，请使用 documentServers.outputPath'));
      }
    }
  }
  if (config.output) {
    // 使用旧版配置，警告提示该配置已经废弃
    if (showDiscardWarn) {
      if (!outputDiscardWarn) {
        outputDiscardWarn = true;
        logger.warn(locales.$t('documentServers.output 属性已经废弃，请使用 documentServers.outputPath'));
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
  const locales = await new Locales().init();
  const outputFilename = await getOutputPath(config);
  const extensionName = getExtensionName(outputFilename);
  let isTS = await checkOutputTS(config);
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
// ${locales.$t('自定义配置')}
export type RequestOptions = {
  //
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

// ${locales.$t('自定义配置')}
export type RequestOptions = {
  //
};

export default async function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData> {
  return new Promise((resolve, reject) => {
    // ${locales.$t('以axios为例的请求配置')}
    const requestConfig = {
      url: config.path,
      method: config.method,
      data: config.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // ${locales.$t('处理表单数据请求头')}
    if (config.hasFormData) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }
    console.log('${locales.$t('请求配置：')}', requestConfig);
    // ${locales.$t('TODO 待实现具体request请求逻辑...')}
    /**
      // axios example
      axios(requestConfig).then((res) => {
        resolve(res as unknown as ResponseData);
      }).catch(reject);
    */
    // ${locales.$t('先用异步模拟request请求逻辑')}
    setTimeout(() => {
      resolve({} as unknown as ResponseData);
    }, 1500);
  });
}
`: `export default async function request(config, options) {
  return new Promise((resolve, reject) => {
    // ${locales.$t('以axios为例的请求配置')}
    const requestConfig = {
      url: config.path,
      method: config.method,
      data: config.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // ${locales.$t('处理表单数据请求头')}
    if (config.hasFormData) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }

    console.log('${locales.$t('请求配置：')}', requestConfig);
    // ${locales.$t('TODO 待实现具体request请求逻辑...')}
    /**
      // axios example
      axios(requestConfig).then((res) => {
        resolve(res as unknown as ResponseData);
      }).catch(reject);
    */
    // ${locales.$t('先用异步模拟request请求逻辑')}
    setTimeout(() => {
      resolve({});
    }, 1500);
  });
}
`);
  } catch {
    logger.error(`${locales.$t('请求文件创建失败：')}${requestFunctionFilePath}`);
    process.exit(1);
  }
  return requestFunctionFilePath;
}

function mergeConfig(rootConfig: Config, serverConfig: ServerConfig): ServerConfig {
  return { ...merge(serverConfig, pick(rootConfig, [
      'genHeaders',
      'genCookies',
      'genResponseContentType',
      'requestFunctionFilePath',
      'requiredRequestField',
      'requiredResponseField',
      'events',
    ])) };
}

export default Service;
