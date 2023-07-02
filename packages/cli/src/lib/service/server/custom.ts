import { AxiosRequestConfig } from 'axios';

import request from '@/lib/tools/request';
import { processRequestConfig, RequestParams } from './index';

export default async function getCustomDocumentList(params: RequestParams): Promise<Array<Record<string, any>>> {
  const getOpenApiConfig: AxiosRequestConfig = processRequestConfig(params);

  const openAPIDocumentList: Array<Record<string, any>> = [];

  // 直接通过链接地址获取配置文件，可能是标准文档，可能不是
  let openapiDocument: any;
  try {
    openapiDocument = (await request(
      getOpenApiConfig,
    ));
  } catch {}
  if (Object.prototype.toString.call(openapiDocument) === '[object Object]') {
    openAPIDocumentList.push(openapiDocument);
  }
  return openAPIDocumentList;
}
