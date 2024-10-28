import { FileOptions } from 'tmp';
import { AxiosRequestConfig } from 'axios';
import { Config, AbstractParserPlugin, ParserPluginRunResult } from '../../lib';
import { ParserPluginOptions } from "../../lib/types";
declare type DocumentServers = Config['documentServers'];
declare type DocumentServer = DocumentServers[number];
export declare function resolve(p?: string): string;
export declare function getExtensionName(name: string): string;
/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options { object }
 * @return {string} 临时文件绝对路径
 */
export declare function createTempFile(content?: string | null, options?: {
    folder?: string;
    prefix?: string;
    postfix?: string;
    onlyClearTempFolder?: boolean;
}): string;
/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
export declare function createTempFileByTMP(content?: string, options?: FileOptions): string;
export declare function checkType<T>(value: T, target: string): boolean;
export declare function createFolder(path: string, isFile?: boolean): string;
export declare function removeFolder(path?: string): boolean;
/**
 * @description 加载JSON对象
 * @param jsonFile {string} 模块路径。
 * @return { T } 模块默认返回的内容
 */
export declare function loadJSON<T>(jsonFile: string): T;
/**
 * @description 将路径统一为 unix 风格的路径。
 * @param {string} path 路径
 * @return {string} unix 风格的路径
 */
export declare function toUnixPath(path: string): string;
/**
 * @description 获得规范化的相对路径。
 * @param {string} from 来源路径
 * @param {string} to 去向路径
 * @return { string } 相对路径
 */
export declare function getNormalizedRelativePath(from: string, to: string): string;
export declare function processRequestConfig(documentServer: DocumentServer, options?: {
    path?: string;
    method?: string;
    dataKey?: string;
    queryParams?: Recordable;
} & AxiosRequestConfig): AxiosRequestConfig & {
    qs: string;
    origin: string;
};
export declare function documentServersRunParserPlugins(documentServers: DocumentServers, parserPlugins: AbstractParserPlugin[], options?: ParserPluginOptions): Promise<{
    noParserPluginNames: string[];
    parserPluginRunResult: ParserPluginRunResult;
}>;
export declare function processTSFile(filename: string): string;
export declare function getAbsolutePath(pathStr: string): string;
export declare function removeCwdPath(pathStr: string): string;
export declare function md5(content: string, options?: {
    outputLength?: 16 | 32;
}): string;
export {};
