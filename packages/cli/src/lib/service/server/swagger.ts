import { OpenAPI } from 'openapi-types';
import { AxiosRequestConfig } from 'axios';
import { validateOpenAPIDocument } from '@api-helper/core/lib/utils/validator';

import request from '@/lib/tools/request';
import getCustomDocumentList from './custom';
import { processRequestConfig, RequestParams } from './index';

export default async function getOpenAPIDocumentList(params: RequestParams): Promise<Array<OpenAPI.Document>> {
  const requestConfig: AxiosRequestConfig = processRequestConfig({
    url: params.url,
    auth: params.auth
  });

  const openAPIDocumentList: Array<OpenAPI.Document> = [];

  // 直接通过链接地址获取配置文件，可能是标准文档，可能不是
  const customDocumentList = await getCustomDocumentList(params);
  customDocumentList.forEach((item) => {
    if (validateOpenAPIDocument(item as any)) {
      openAPIDocumentList.push(item as any);
    }
  });

  // 上面没有获取到配置数据，尝试访问所有配置项目
  if (openAPIDocumentList.length === 0) {
    const originRgx = /^(http(s?):\/\/.*?)($|\/)/.exec(String(params.url));
    if (originRgx?.[1]) {
      const origin = originRgx[1];
      const swaggerResources: OpenAPI.Parameter = await request({
        ...requestConfig,
        url: `${origin}/swagger-resources`,
      });
      if (Array.isArray(swaggerResources)) {
        // 自动获取V2版本文档
        for (const sr of swaggerResources) {
          try {
            const url = origin + sr.url;
            const openapiDocument: any = (await request({
              ...requestConfig,
              url,
            })) as OpenAPI.Document;
            if (validateOpenAPIDocument(openapiDocument)) {
              openAPIDocumentList.push(openapiDocument);
            }
          } catch (e) {
            debugger;
          }
        }
      }
    }
  }
  return openAPIDocumentList;
}
