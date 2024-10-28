import qs from 'qs';
import ora from 'ora';
import path, {
  join,
  dirname,
  relative,
  isAbsolute,
  resolve as pathResolve,
} from 'path';
import fs from 'node:fs';
import fsExtra from 'fs-extra';
import parse from 'url-parse';
import { merge } from 'lodash';
import cryptoJsMD5 from 'crypto-js/md5';
import tmp, { FileOptions } from 'tmp';
import * as process from 'node:process';
import { AxiosRequestConfig } from 'axios';
import { mergeUrl, uuid } from '@api-helper/core/lib/utils/util';

import {
  Config,
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '@/lib';
import Locales from '@/lib/locales';
import logger from '@/lib/tools/logger';
import { ParserPluginOptions } from "@/lib/types";

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
 * @param options { object }
 * @return {string} 临时文件绝对路径
 */
export function createTempFile(content: string | null = '', options?: {
  folder?: string,
  prefix?: string;
  postfix?: string;
  onlyClearTempFolder?: boolean;
}): string {
  const currentOptions = merge({
    folder: '',
    prefix: 'temp.api.helper.cli',
    postfix: '.js',
    onlyClearTempFolder: false,
  }, options);
  const tmpFolder = createFolder(currentOptions.folder ? currentOptions.folder : path.join(__dirname, `./.temp`));
  const fileName = path.join(tmpFolder, `./${currentOptions.prefix}${uuid()}${currentOptions.postfix}`);

  if (currentOptions.onlyClearTempFolder) {
    try {
      fsExtra.removeSync(tmpFolder);
    } catch {}
    return '';
  }

  fsExtra.ensureFileSync(fileName);

  if (content) {
    fs.writeFileSync(fileName, content);
  }

  return fileName;
}

/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
export function createTempFileByTMP(content?: string, options?: FileOptions): string {
  const currentOptions = merge({
    prefix: 'temp.api.helper.cli',
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

export function createFolder(path: string, isFile = false) {
  if (isFile) {
    fsExtra.ensureFileSync(path);
    return path;
  }
  fsExtra.ensureDirSync(path);
  return path;
}

export function removeFolder(path = '') {
  try {
    fsExtra.removeSync(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * @description 加载JSON对象
 * @param jsonFile {string} 模块路径。
 * @return { T } 模块默认返回的内容
 */
export function loadJSON<T>(jsonFile: string): T {
  try {
    return fsExtra.readJSONSync(jsonFile);
  } catch (error) {}
  return null as unknown as T;
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
  let origin = urlInfo?.origin ?? '';
  const queryParams = isHttp ? Object.assign(qs.parse(urlInfo?.query?.slice(1) || ''), options?.queryParams ?? {}) : {};

  // 公共路径
  if (documentServer.url.includes('doc.html') || documentServer.url.includes('swagger-ui.html')) {
    const str = documentServer.url.replace(origin, '');
    const p = /(\/.*?)\/(doc|swagger-ui)\.html/.exec(str)?.[1] ?? '';
    origin += p;
  }

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

export async function documentServersRunParserPlugins(
  documentServers: DocumentServers,
  parserPlugins: AbstractParserPlugin[],
  options: ParserPluginOptions = {},
): Promise<{
  noParserPluginNames: string[],
  parserPluginRunResult: ParserPluginRunResult
}> {
  const locales = await new Locales().init();
  const parserPluginMap = new Map();
  for (const parserPlugin of parserPlugins) {
    parserPluginMap.set(parserPlugin.name, parserPlugin);
  }

  const result = {
    noParserPluginNames: [] as string[],
    parserPluginRunResult: [] as ParserPluginRunResult,
  };

  const execParserPluginMap = new Map();
  const spinner = ora(locales.$t('文档获取与解析，这可能需要等待一段时间...')).start();
  for (let i = 0; i < documentServers.length; i++) {
    const documentServer = documentServers[i];
    if (!documentServer.url) {
      logger.error(locales.$t(`documentServers.url 不可为空!`).replace('%0', String(i)));
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
      parserPlugin.run(_documentServers, options).then((res: ParserPluginRunResult) => {
        [].push.apply(result.parserPluginRunResult, res as any);
      })
    );
  }
  try {
    await Promise.all(tasks);
  } catch {}

  if (result.noParserPluginNames.length > 0) {
    logger.error(`${locales.$t('接口文档缺少对应类型的解析插件：')}${result.noParserPluginNames.join('、')}`);
  }

  if (result.parserPluginRunResult.length === 0) {
    spinner.fail();
    const errorText = locales.$t('没有获取或者解析到文档');
    logger.error(errorText);
    return Promise.reject(errorText);
  }

  spinner.succeed();
  return result;
}

export function processTSFile (filename:string){
  // @ts-ignore // check if code is not running under ts-node
  if (!process[Symbol.for('ts-node.register.instance')]) {
    return filename.replace('.ts','.js');
  }
  return filename;
}

export function getAbsolutePath(pathStr: string) {
  return isAbsolute(pathStr) ? pathStr : join(process.cwd(), pathStr);
}

export function removeCwdPath(pathStr: string) {
  pathStr = toUnixPath(pathStr);
  const cwdPath = toUnixPath(process.cwd());
  const temp = pathStr.replace(cwdPath, '');
  return temp.startsWith('/') ? temp.slice(1) : temp;
}

export function md5(content: string, options?: { outputLength?: 16 | 32 }) {
  const outputLength = [16, 32].includes(options?.outputLength as number) ? options?.outputLength : 32;
  const text = cryptoJsMD5(content).toString();
  return outputLength === 16 ? text.substring(8, 16) : text;
}
