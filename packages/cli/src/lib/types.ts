import type { AxiosHeaders } from 'axios';
import type { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '@api-helper/template/lib/render-interface';
import { renderRequestFunctionName } from '@api-helper/template/lib/render-request-function';

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

export type Config = {
  // 使用分组功能，启用该功能后，按照分组多文件代码生成
  group?: boolean;
  // 是否只生成接口请求数据和返回数据的 TypeScript 类型。是，则请求文件和请求函数都不会生成。
  onlyTyping?: boolean;
  // 代码生成后的输出路径
  outputPath: string;
  // 功能和作用和output一样，向下兼容，该字段已废弃，使用上面字段
  outputFilePath?: string;
  // 生成的目标代码类型。默认: typescript
  target?: 'javascript' | 'typescript';
  // 接口请求函数文件路径
  requestFunctionFilePath: string;
  // 请求数据所有字段设置成必有属性，默认: false
  requiredRequestField?: boolean;
  // 响应数据所有字段设置成必有属性，默认：true
  requiredResponseField?: boolean;
  // 接口文档服务配置
  documentServers: Array<{
    // 文档地址【当下面的type为'swagger'类型时，可以读取本地文件，这里就是一个本地文件路径】
    url: string;
    // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
    type: 'swagger' | 'yapi' | string;
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
    headers?: AxiosHeaders,
    // 执行过程的钩子事件
    events?: {
      // 当生成interface名称时候事件回调
      onRenderInterfaceName?: typeof renderInterfaceName;
      // 当生成API名称时候事件回调
      onRenderRequestFunctionName?: typeof renderRequestFunctionName;
    };
  }>,
  // 解析扩展插件
  parserPlugins?: AbstractParserPlugin[],
}
