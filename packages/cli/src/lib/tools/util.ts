import qs from 'qs';
import ora from 'ora';
import {
  join,
  dirname,
  relative,
  isAbsolute,
  resolve as pathResolve,
} from 'path';
import fs from 'node:fs';
import parse from 'url-parse';
import { merge } from 'lodash';
import { URL } from 'node:url';
import tmp, { FileOptions } from 'tmp';
import { AxiosRequestConfig } from 'axios';
import { mergeUrl } from '@api-helper/core/lib/utils/util';
import esbuild, { BuildOptions, BuildResult } from 'esbuild';

import { AbstractParserPlugin, Config, ParserPluginRunResult } from '@/lib';
import log from '@/lib/tools/log';

type DocumentServers = Config['documentServers'];
type DocumentServer = DocumentServers[number];

export function resolve(p = '') {
  const args = Array.from(arguments) as unknown as string[];
  if (isAbsolute(p)) {
    return join.apply(null, args);
  }
  args.unshift(process.cwd());
  return pathResolve.apply(null, args);
}

export function getExtensionName (name: string) {
  if (!name.includes('.')) {
    return '';
  }
  return name.substring(name.lastIndexOf('.'));
}

/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
export function createTempFile(content?: string, options?: FileOptions): string {
  const currentOptions = merge({
    prefix: 'temp-build',
    postfix: '.js'
  }, options);
  const { name } = tmp.fileSync(currentOptions);
  if (content) {
    fs.writeFileSync(name, content);
  }
  return name;
}

export function checkType<T>(value: T, target: string) {
  return Object.prototype.toString.call(value) === `[object ${target}]`;
}

/**
 * @description 模块加载
 * @param file {string} 模块路径，绝对路径。
 * @param isAsync {boolean} 是否异步执行，默认true。
 * @return {T} 模块默认返回的内容
 */
export function loadModule<T>(file: string, isAsync = true): Promise<T> | T {
  file = isAbsolute(file) ? file : resolve(file);
  try {
    fs.accessSync(file, fs.constants.F_OK);
  } catch (e) {
    throw Error(`can't resolve ${file}`);
  }

  // 编译文件
  const buildParams: BuildOptions = {
    entryPoints: [file],
    bundle: false,
    splitting: false,
    format: 'cjs',
    platform: 'node',
    minify: false,
    color: true,
    write: false
  };

  const handleModule = (res: BuildResult): T => {
    const { outputFiles } = res;
    const [ outputFile ] = outputFiles ?? [];
    const { text } = outputFile;
    const filePath = createTempFile(text,  { postfix: '.js' });
    const moduleContent = require(filePath);
    if (moduleContent.__esModule) {
      return moduleContent.default;
    }
    return moduleContent;
  }

  if (isAsync) {
    return new Promise(async (resolve) => {
      const res = await esbuild.build(buildParams);
      resolve(handleModule(res));
    });
  }
  const res = esbuild.buildSync(buildParams);
  return handleModule(res);
}

/**
 * @description 将路径统一为 unix 风格的路径。
 * @param {string} path 路径
 * @return {string} unix 风格的路径
 */
export function toUnixPath(path: string) {
  return path.replace(/[/\\]+/g, '/');
}

/**
 * @description 获得规范化的相对路径。
 * @param {string} from 来源路径
 * @param {string} to 去向路径
 * @return { string } 相对路径
 */
export function getNormalizedRelativePath(from: string, to: string) {
  return toUnixPath(relative(dirname(from), to))
    .replace(/^(?=[^.])/, './')
    .replace(/\.(ts|js)x?$/i, '')
}

export function processRequestConfig(documentServer: DocumentServer, options?: {
  path?: string,
  method?: string,
  dataKey?: string,
  queryParams?: Recordable
} & AxiosRequestConfig): AxiosRequestConfig & { qs: string; origin: string; } {
  const { auth, authToken } = documentServer;
  const isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
  const path = options?.path ?? '';
  const method = options?.method ?? 'get';
  const urlInfo = (isHttp ? parse(documentServer.url): {}) as Recordable;
  const origin = urlInfo?.origin ?? '';
  const queryParams = isHttp ? Object.assign(qs.parse(urlInfo?.query?.slice(1) || ''), options?.queryParams ?? {}) : {};
  const requestConfig = {
    ...options,
    method,
    headers: documentServer?.headers ?? {},
    url: mergeUrl(origin, path),
    qs: '',
    documentServerUrl: documentServer.url,
    origin
  };

  // 有密码
  if (auth?.username && auth?.password) {
    requestConfig.auth = {
      username: auth?.username,
      password: auth?.password
    };
  }

  // 有token
  if (authToken) {
    queryParams.token = authToken;
  }

  // URL参数
  const queryParamsStr = qs.stringify(queryParams);
  if (queryParamsStr) {
    const qs = `?${queryParamsStr}`;
    requestConfig.url += qs;
    requestConfig.qs = qs;
  }

  return requestConfig;
}

export async function documentServersRunParserPlugins(documentServers: DocumentServers, parserPlugins: AbstractParserPlugin[]): Promise<{
  noParserPluginNames: string[],
  parserPluginRunResult: ParserPluginRunResult
}> {
  const parserPluginMap = new Map();
  for (const parserPlugin of parserPlugins) {
    parserPluginMap.set(parserPlugin.name, parserPlugin);
  }

  const result = {
    noParserPluginNames: [] as string[],
    parserPluginRunResult: [] as ParserPluginRunResult,
  };

  const execParserPluginMap = new Map();
  const oraText = '文档获取与解析';
  const spinner = ora(oraText).start();
  for (const documentServer of documentServers) {
    if (!documentServer.url) {
      log.error('提示', `documentServers.url 不可为空!`);
      continue;
    }

    if (documentServer.type && !parserPluginMap.has(documentServer.type)) {
      result.noParserPluginNames.push(documentServer.type);
      continue;
    }

    // 默认使用 swagger 解析
    const parserPlugin = !documentServer.type ? parserPluginMap.get('swagger') : parserPluginMap.get(documentServer.type);

    if (execParserPluginMap.has(parserPlugin)) {
      execParserPluginMap.get(parserPlugin).push(documentServer);
    } else {
      execParserPluginMap.set(parserPlugin, [documentServer]);
    }
  }

  const tasks = [];
  for (const [parserPlugin, _documentServers] of execParserPluginMap) {
    tasks.push(
      parserPlugin.run(_documentServers).then((res: ParserPluginRunResult) => {
        [].push.apply(result.parserPluginRunResult, res as any);
      })
    );
  }
  try {
    await Promise.all(tasks);
  } catch {}

  if (result.noParserPluginNames.length > 0) {
    log.error('提示', `文档：${result.noParserPluginNames.join('、')}，缺少对应类型的解析插件。`);
  }

  if (result.parserPluginRunResult.length === 0) {
    const failText = oraText + '【程序终止，没有获取或者解析出文档】';
    spinner.fail(failText);
    return Promise.reject(failText);
  }

  spinner.succeed();
  return result;
}

export function getErrorMessage(error: string | Error & { msg?: string }, prefix = '', postfix = ''): string {
  function mergeMessage<T>(msg: T) {
    return msg ? `${prefix}${msg}${postfix}` : '';
  }
  if (!error) {
    return '';
  }
  if (typeof error === 'string') {
    return mergeMessage(error);
  }
  if (error?.message) {
    return mergeMessage(error.message);
  }
  if (error?.msg) {
    return mergeMessage(error.msg);
  }
  return '';
}
