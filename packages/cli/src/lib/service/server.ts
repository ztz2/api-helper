import { readJson } from 'fs-extra';
import { OpenAPI } from 'openapi-types';
import { AxiosRequestConfig } from 'axios';
import { validateOpenAPIDocument } from '@api-helper/core/lib/utils/validator';

import request from '../tools/request';
import { Config, DocumentResourceList } from '@/lib';
import log from '@/lib/tools/log';

type RequestParams = {
  serverURL: string;
  auth?: {  username?: ''; password?: ''; }
  authToken?: string;
}
export async function getDocument(documentServers: Config['documentServers']): Promise<DocumentResourceList> {
  const result: DocumentResourceList = [];
  for (let i = 0; i < documentServers.length; i ++) {
    const c = documentServers[i];
    const serverURL = c.url.replace(/\/+$/, '');
    let resourceDocumentList: DocumentResourceList[number]['resourceDocumentList'] = [];
    // 文件类型
    if (!/^(http|https):\/\//.test(serverURL)) {
      try {
        const resource = await readJson(serverURL);
        if (Object.prototype.toString.call(resource) === '[object Object]') {
          result.push({ ...c, resourceDocumentList: [ resource ] });
        }
      } catch {}
      continue;
    }
    // 需要进行请求的网络资源
    const requestParams: RequestParams = {
      serverURL,
      auth: c.auth,
      authToken: c.authToken
    }
    switch (c.type) {
      case 'swagger':
        resourceDocumentList = await getOpenAPIDocumentList(requestParams);
        result.push({ ...c, resourceDocumentList });
        break;
      case 'yapi':
        resourceDocumentList = await getYAPIDocumentList(requestParams);
        result.push({ ...c, resourceDocumentList });
        break;
      case 'custom':
        resourceDocumentList = await getCustomDocumentList(requestParams);
        result.push({ ...c, resourceDocumentList });
        break;
      default:
        log.error('documentServers', `错误的类型申明 documentServers[${i}].type -> ${c.type}`);
    }
  }
  return result;
}

async function getOpenAPIDocumentList(params: RequestParams): Promise<Array<OpenAPI.Document>> {
  const requestConfig: AxiosRequestConfig = processRequestConfig({
    serverURL: params.serverURL,
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
    const originRgx = /^(http(s?):\/\/.*?)($|\/)/.exec(String(params.serverURL));
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

// 该功能待实现
async function getYAPIDocumentList(params: RequestParams): Promise<Array<OpenAPI.Document>> {
  return [];
}

// 该功能待实现
async function getCustomDocumentList(params: RequestParams): Promise<Array<Record<string, any>>> {
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

function processRequestConfig(params: RequestParams): AxiosRequestConfig {
  const { serverURL, auth, authToken } = params;
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: serverURL,
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
    requestConfig.url += `?token=${authToken}`;
  }
  return requestConfig;
}
