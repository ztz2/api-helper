import { JSONSchema4 } from 'json-schema';
import { APIHelper, GenerateInterfaceName } from '@api-helper/core';

export type Config = {
  documentServers: Array<{
    // 文档地址
    url: string;
    // 文档类型（也可以是本地文档JSON文件路径），默认可以解析 swagger ，其他文档 custom 类型，需要自行实现 onParseDocument 钩子函数
    type: 'swagger' | 'yapi' | 'custom';
    // 获取数据的key，body[dataKey]
    dataKey?: string;
    // 访问文档可能需要认证信息，http auth验证方式
    auth?: {
      username: '';
      password: '';
    };
    // 访问文档可能需要认证信息，通过使用token访问
    authToken?: '';
    // 执行过程的回调
    events?: {
      // 生成接口名称
      onGenerateInterfaceName?: GenerateInterfaceName;
      // 解析接口文档
      onParseDocument?(resourceDocumentList: Array<unknown>): APIHelper.Document[];
    };
  }>,
  // 请求函数文件路径
  requestFunctionFilePath: string;
  // 输出信息
  output: {
    // 输出路径
    path: string;
    // 输出文件名称，会根据后缀名(.js|.ts)判断是生成TS还是JS文件
    filename: string;
  }
}

export type DocumentResourceList = Array<{
  resourceDocumentList: Array<JSONSchema4 | any>
} & Config['documentServers'][number]>

export type DocumentParsedList = Array<{
  documentList: Array<APIHelper.Document>
} & Config['documentServers'][number]>
