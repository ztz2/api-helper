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
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
export declare function createTempFile(content?: string, options?: FileOptions): string;
export declare function checkType<T>(value: T, target: string): boolean;
/**
 * @description 模块加载
 * @param file {string} 模块路径，绝对路径。
 * @param isAsync {boolean} 是否异步执行，默认true。
 * @return {T} 模块默认返回的内容
 */
export declare function loadModule<T>(file: string, isAsync?: boolean): Promise<T> | T;
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
export {};
