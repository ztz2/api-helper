import { AxiosHeaders } from 'axios';
import { APIHelper } from '@api-helper/core';
import { renderInterfaceName } from '@api-helper/template';

export type ParserPluginRunResult = Array<{
  documentServer: Config['documentServers'][number];
  parsedDocumentList: Array<APIHelper.Document>;
}>

export abstract class AbstractParserPlugin {
  abstract name: string;
  abstract run(documentServers: Config['documentServers']): Promise<ParserPluginRunResult>;
}

export type Config = {
  // 代码生成后的输出路径，会根据后缀名(.js|.ts)判断是生成TS还是JS文件
  outputFilePath: string;
  // request请求工具函数文件路径。
  requestFunctionFilePath: string;
  // 接口文档服务配置
  documentServers: Array<{
    // 文档地址【当下面的type为swagger类型时，可以读取本地文件，这里就是一个本地文件路径】
    url: string;
    // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
    type: 'swagger' | 'yapi' | string;
    // 获取响应数据的key，body[dataKey]
    dataKey?: string;
    // 访问文档可能需要认证信息，http auth验证方式
    auth?: {
      username: '';
      password: '';
    };
    // 访问文档可能需要认证信息，通过使用token访问
    authToken?: '';
    // 自定义一些请求头
    headers?: AxiosHeaders,
    // 执行过程的回调
    events?: {
      // 生成接口名称
      onRenderInterfaceName?: typeof renderInterfaceName;
    };
  }>,
  // 解析扩展插件
  parserPlugins?: AbstractParserPlugin[],
}
