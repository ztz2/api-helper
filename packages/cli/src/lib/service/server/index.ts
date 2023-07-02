import { readJson } from 'fs-extra';
import { AxiosRequestConfig } from 'axios';

import { Config, DocumentResourceList } from '@/lib';
import log from '@/lib/tools/log';
import getOpenAPIDocumentList from './swagger';
import getYAPIDocumentList from './yapi';
import getCustomDocumentList from './custom';

export type RequestParams = {
  url: string;
  auth?: {  username?: ''; password?: ''; }
  authToken?: string;
}

export async function getDocument(documentServers: Config['documentServers']): Promise<DocumentResourceList> {
  const result: DocumentResourceList = [];
  for (let i = 0; i < documentServers.length; i ++) {
    const c = documentServers[i];
    const url = c.url.replace(/\/+$/, '');
    let resourceDocumentList: DocumentResourceList[number]['resourceDocumentList'] = [];
    // 文件类型
    if (!/^(http|https):\/\//.test(url)) {
      try {
        const resource = await readJson(url);
        if (Object.prototype.toString.call(resource) === '[object Object]') {
          result.push({ ...c, resourceDocumentList: [ resource ] });
        }
      } catch {}
      continue;
    }
    // 需要进行请求的网络资源
    const requestParams: RequestParams = {
      url,
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

export function processRequestConfig(params: RequestParams, dataKey?: string): AxiosRequestConfig {
  const { url, auth, authToken } = params;
  const requestConfig: AxiosRequestConfig & Recordable = {
    method: 'get',
    url: url,
    dataKey,
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
    requestConfig.headers = { token: authToken };
  }
  return requestConfig;
}
