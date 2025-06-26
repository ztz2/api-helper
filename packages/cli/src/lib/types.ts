import type { AxiosHeaders } from 'axios';
import type { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '@api-helper/template/lib/render-interface';
import { renderRequestFunctionName } from '@api-helper/template/lib/render-request-function';
import { transformType } from "@api-helper/core/src";

export type ParserPluginRunResult = Array<{
  documentServer: Config['documentServers'][number];
  parsedDocumentList: Array<APIHelper.Document>;
}>

export type DocumentServers = Config['documentServers'];

export type ParserPluginOptions = Pick<Config, 'requiredRequestField'|'requiredResponseField'>;
export abstract class AbstractParserPlugin {
  abstract name: string;
  abstract run(documentServers: DocumentServers, options?: ParserPluginOptions): Promise<ParserPluginRunResult>;
}
export interface CommonConfig {
  // 生成headers，默认：false
  genHeaders?: boolean;
  // 生成Cookies，默认：false
  genCookies?: boolean;
  // 生成响应Content-Type，默认：false
  genResponseContentType?: boolean;
  // 接口请求函数文件路径
  requestFunctionFilePath?: string;
  // 请求数据所有字段设置成必有属性，默认: false
  requiredRequestField?: boolean;
  // 响应数据所有字段设置成必有属性，默认：true
  requiredResponseField?: boolean;
  // 执行过程的钩子事件
  events?: {
    // 当生成interface名称时候事件回调
    onRenderInterfaceName?: typeof renderInterfaceName;
    // 当生成API名称时候事件回调
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
  };

  // 自定义类型转换
  transformType: Record<string, string | ((type: string, format?: string | 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password', emptyType?: string) => string)>,

  // 生成只包含这些分类的接口
  includeCategory?: Array<string> | ((category: APIHelper.Category) => boolean);
  // 排除这些分类的接口
  excludeCategory?: Array<string> | ((category: APIHelper.Category) => boolean);

  // 生成指定接口
  // 例子：['/v1/logon', ['/v1/login', 'get'], ['/v1/login', '(get|post|put)'], ['/v1/login', '*']]，例子中*表示所有的请求方式
  // 更多匹配规则语法参考：https://github.com/micromatch/micromatch
  includeAPI?: Array<string | [string, string?]> | ((api: APIHelper.API) => boolean);
  // 排除指定接口
  excludeAPI?: Array<string | [string, string?]> | ((api: APIHelper.API) => boolean);

  // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
  type?: 'swagger' | 'yapi' | string;
  // 服务名称
  name?: string;
  // 获取响应数据的key，body[dataKey]
  dataKey?: string;
  // 访问文档可能需要认证信息，http auth 验证方式
  auth?: {
    username: string;
    password: string;
  };
  // 访问文档可能需要认证信息，通过使用token访问，yapi的验证token
  authToken?: '';
  // 访问接口文档时候，自定义的一些请求头
  headers?: AxiosHeaders;
}

export interface ServerConfig extends CommonConfig {
  // 文档地址【type为'swagger'类型时，可以读取本地文件，这里就是一个本地文件路径】
  url: string;
}

export interface Config extends CommonConfig {
  // 是否只生成接口请求数据和返回数据的 TypeScript 类型。是，则请求文件和请求函数都不会生成。
  onlyTyping?: boolean;
  // 代码生成后的输出路径
  outputPath: string;
  // 功能和作用和output一样，向下兼容，该字段已废弃，使用上面字段
  outputFilePath?: string;
  // 使用分类输出，启用该功能后，按照接口分类进行多文件代码输出
  outputByCategory?: boolean;
  // 生成的目标代码类型。默认: typescript
  target?: 'javascript' | 'typescript';
  // 接口文档服务配置
  documentServers: Array<ServerConfig>,
  // 解析扩展插件
  parserPlugins?: AbstractParserPlugin[],
}
