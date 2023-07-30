import ora from 'ora';
import fg from 'fast-glob';
import {
  join,
  isAbsolute,
} from 'path';
import {
  stat,
  outputFile,
} from 'fs-extra';
import { renderAllApi } from '@api-helper/template';
import { getErrorMessage } from '@api-helper/core/lib/utils/util';

import log from '@/lib/tools/log';
import {
  resolve,
  loadModule,
  getExtensionName,
  getNormalizedRelativePath,
  documentServersRunParserPlugins,
} from '../tools/util';
import {
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '@/lib/types';
import { Config, formatCode } from '@/lib';
import { EXTENSIONS } from '@/lib/service/const';
import ParserYapiPlugin from './parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from './parser-plugins/parser-swagger-plugin';

type DocumentServers = Config['documentServers'];

const prompts = require('prompts');

let outputDiscardWarn = false;

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
    const configList = await this.getConfigFile();
    const len = configList.length;

    // 添加解析插件
    this.injectParserPlugins(configList);

    for (let i = 0; i < configList.length; i++) {
      try {
        const config = configList[i];
        if (len > 1) {
          console.log(`\n———————————————————— \x1B[34m正 在 处 理 ${i + 1} 项\x1B[0m ————————————————————`);
        }
        const parserPluginRunResult = await this.parserDocument(config.documentServers, config);

        const chooseDocumentList = await this.chooseDocument(parserPluginRunResult);

        const code = await this.genCode(config, chooseDocumentList);

        await this.output(config, code);
      } catch {}
    }
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
    const oraText = '读取 apih.config.(js|ts) 配置文件';
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
    const files = await fg(['apih.config.(js|ts|cjs|mjs)'], { cwd: process.cwd(), absolute: true });
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

  // 4. 生成代码
  private async genCode(config: Config, parserPluginRunResult: ParserPluginRunResult): Promise<string> {
    const oraText = `代码生成`;
    const outputFilename = getOutputFilePath(config);
    const isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');
    let requestFilePath = getNormalizedRelativePath(outputFilename, await getRequestFunctionFilePath(config));

    // 移除request文件后缀名
    for (const extension of EXTENSIONS) {
      if (requestFilePath.endsWith(extension)) {
        requestFilePath = requestFilePath.slice(0, requestFilePath.length - extension.length);
        break;
      }
    }

    const code = [];
    if (isTS) {
      code.push(`/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* 提示：该文件由 API Helper Cli 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,
  processRequestFunctionConfig,
} from '@api-helper/core/es/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from '${requestFilePath}';
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;
`);
    } else {
      code.push(`/* eslint-disable */
/* prettier-ignore-start */

/* 提示：该文件由 API Helper Cli 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// prettier-ignore
import { processRequestFunctionConfig } from '@api-helper/core/es/lib/helpers';
// prettier-ignore
import request from '${requestFilePath}';
`);
    }

    // 生成代码
    const spinner = ora(oraText).start();
    for (const item of parserPluginRunResult) {
      const { documentServer, parsedDocumentList } = item;
      const { dataKey } = documentServer;
      for (const d of parsedDocumentList) {
        try {
          let str = renderAllApi(d, {
            codeType: isTS ? 'typescript' : 'javascript',
            dataKey: dataKey,
            onRenderInterfaceName: documentServer?.events?.onRenderInterfaceName,
            onRenderRequestFunctionName: documentServer?.events?.onRenderRequestFunctionName,
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

    return await formatCode({
      sourceCode: code.filter(Boolean).join('\n'),
      formatCodeExtension: isTS ? '.ts' : '.js',
    }) as string;
  }

  // 5. 输出
  private async output(config: Config, code: string) {
    const oraText = `文件输出`;
    const outputFilename = getOutputFilePath(config, true);
    const spinner = ora(oraText).start();

    // 输出
    try {
      await outputFile(outputFilename, code);
      spinner.succeed();
      log.info('提示', `Done. 代码生成成功`);
    } catch (error) {
      const failText = oraText + `【失败：${getErrorMessage(error as Error)}】`;
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
      { title: 'JavaScript', description: 'apih.config.js', value: 'apih.config.js' },
      { title: 'TypeScript', description: 'apih.config.ts', value: 'apih.config.ts' },
    ],
  }]);


  if (!answers.codeType) {
    return;
  }

  await getRequestFunctionFilePath({ outputFilePath: 'src/api/index.ts' } as any);

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
    `import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  // 输出文件路径，会根据后缀名(.js|.ts)判断是生成TS还是JS文件
  outputFilePath: 'src/api/index.ts',
  // 接口请求函数文件路径
  requestFunctionFilePath: 'src/api/request.ts',
  // 响应数据所有字段设置成必有属性
  requiredResponseField: true,
  // 接口文档服务配置
  documentServers: [
    {
      // 文档地址【当下面的type为swagger类型时，可以读取本地文件，这里就是一个本地文件路径】
      url: 'http://需要填写的项目文档地址',
      // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
      type: 'swagger',
      // 获取数据的key，body[dataKey]
      dataKey: '',
    },
  ],
});
`
  try {
    await outputFile(join(process.cwd(), answers.codeType), code);
    log.info('提示', '已生成配置文件');
  } catch (e) {
    return log.error('提示', '配置文件生成失败');
  }
}

function getOutputFilePath(config: Pick<Config, 'outputFilePath' | 'requestFunctionFilePath'> & { output?: { path: string; filename: string; } }, showDiscardWarn = false): string {
  // 兼容旧版的配置路径
  if (config.output) {
    // 使用旧版配置，警告提示该配置已经废弃
    if (showDiscardWarn) {
      if (!outputDiscardWarn) {
        outputDiscardWarn = true;
        log.warn('提示', 'documentServers.output配置已经废弃，请使用documentServers.outputFilePath');
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
  if (isAbsolute(config.outputFilePath)) {
    return config.outputFilePath;
  }
  return resolve(config.outputFilePath);
}

async function getRequestFunctionFilePath(config: Pick<Config, 'outputFilePath' | 'requestFunctionFilePath'> & { output?: { path: string; filename: string; } }): Promise<string> {
  const outputFilename = getOutputFilePath(config);
  const extensionName = getExtensionName(outputFilename);
  const isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');
  config.requestFunctionFilePath = config.requestFunctionFilePath ? config.requestFunctionFilePath : `src/api/request.${isTS?'ts':'js'}`;
  let requestFunctionFilePath = config.requestFunctionFilePath;
  // 兼容旧版配置
  if (['src/utils/request', 'src/tools/request'].includes(requestFunctionFilePath)) {
    requestFunctionFilePath += extensionName;
  }
  requestFunctionFilePath = resolve(requestFunctionFilePath);

  try { // 路径可以访问，文件已经创建，直接返回
    await stat(resolve(requestFunctionFilePath));
    return requestFunctionFilePath;
  } catch {}
  try {  // 不可访问，重新创建文件
    await outputFile(requestFunctionFilePath,
      isTS ? `import { RequestFunctionConfig } from '@api-helper/core/es/lib/helpers';

export default async function request<T>(config: RequestFunctionConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const { method, data, path } = config;
    console.log(path, method, data);
    // TODO待实现具体request请求逻辑...
    // 先用异步模拟request请求逻辑，具体实现再删除
    setTimeout(() => {
      resolve({} as unknown as T);
    }, 1500);
  });
}
`: `export default async function request(config) {
  return new Promise((resolve, reject) => {
    const { method, data, path } = config;
    console.log(path, method, data);
    // TODO待实现具体request请求逻辑...
    // 先用异步模拟request请求逻辑，具体实现再删除
    setTimeout(() => {
      resolve({});
    }, 1500);
  });
}
`)
  } catch {
    log.error('提示', `统一请求文件创建失败：${requestFunctionFilePath}`);
    process.exit(1);
  }
  return requestFunctionFilePath;
}

export default Service;
