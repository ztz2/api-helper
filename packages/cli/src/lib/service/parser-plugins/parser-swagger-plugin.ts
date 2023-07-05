import to from 'await-to-js';
import { readJsonSync } from 'fs-extra';
import { OpenAPI } from 'openapi-types';
import { AxiosRequestConfig } from 'axios';
import { ParserSwagger } from '@api-helper/core';
import { validateOpenAPIDocument } from '@api-helper/core/lib/utils/validator';

import { Config } from '@/lib';
import log from '@/lib/tools/log';
import request from '@/lib/tools/request';
import { AbstractParserPlugin, ParserPluginRunResult } from '@/lib/types';
import { checkType, getErrorMessage, processRequestConfig } from '@/lib/tools/util';

type DocumentServers = Config['documentServers'];

export default class ParserSwaggerPlugin implements AbstractParserPlugin {
  name = 'swagger';
  async run(documentServers: DocumentServers){
    const result: ParserPluginRunResult = [];

    if (documentServers.length === 0) {
      return result;
    }

    const tasks = [];
    for (const documentServer of documentServers) {
      const serverUrlText = `【${documentServer.url}】`;
      tasks.push((async () => {
        const openAPIDocumentList = await getDocument(documentServer);
        if (openAPIDocumentList.length === 0) {
          log.error('提示', `没有获取到swagger配置文档${serverUrlText}`);
          return;
        }
        const parsedDocumentList = await new ParserSwagger().parser(openAPIDocumentList as any);
        if (parsedDocumentList.length === 0) {
          log.error('提示', `解析swagger配置失败${serverUrlText}`);
          return;
        }
        result.push({
          documentServer,
          parsedDocumentList
        });
      })());
    }

    await to(Promise.all(tasks));

    return result;
  }
}

async function getDocument(documentServer: DocumentServers[number]): Promise<Array<OpenAPI.Document>> {
  const serverUrlText = /^http/.test(documentServer.url) ? `【${documentServer.url}】` : '';
  const requestConfig: AxiosRequestConfig = processRequestConfig(documentServer);
  const openAPIDocumentList: Array<OpenAPI.Document> = [];

  const originRgx = /^(http(s?):\/\/.*?)($|\/)/.exec(String(documentServer.url));
  const origin = originRgx?.[1];

  // 本地文件，尝试读取本地文件
  if (!originRgx) {
    let json
    try {
      json = readJsonSync(documentServer.url) ?? [];
    } catch(e: any) {
      const errorText = `swagger文件读取失败${getErrorMessage(e, ': ')}${serverUrlText}`;
      log.error('提示', errorText);
      return Promise.reject(errorText);
    }
    if (Array.isArray(json)) {
      [].push.apply(openAPIDocumentList, json as any);
    } else if (checkType(json, 'Object')) {
      openAPIDocumentList.push(json);
    }
    return openAPIDocumentList;
  }

  // 直接根据资源地址获取配置
  try {
    const openAPIDocument: OpenAPI.Document = await request({
      ...requestConfig,
      url: documentServer.url,
    });
    if (validateOpenAPIDocument(openAPIDocument as any)) {
      openAPIDocumentList.push(openAPIDocument);
      return openAPIDocumentList;
    }
  } catch {}

  // 获取域名，拼接v2版本的默认文档路径获取配置
  try {
    const openAPIDocument = await request<unknown, OpenAPI.Document>({
      ...requestConfig,
      url: `${origin}/v2/api-docs`,
    });
    if (openAPIDocument && validateOpenAPIDocument(openAPIDocument as any)) {
      openAPIDocumentList.push(openAPIDocument);
      return openAPIDocumentList;
    }
  } catch {}

  // 兜底：根据 swagger-resources 获取全部。
  const [, swaggerResources] = await to<OpenAPI.Parameter>(request({
    ...requestConfig,
    url: `${origin}/swagger-resources`,
  }));
  const tasks = [];
  if (Array.isArray(swaggerResources)) {
    for (const sr of swaggerResources) {
      tasks.push(to(request<unknown, OpenAPI.Document>({
        ...requestConfig,
        url: origin + sr.url,
      }).then((openapiDocument) => {
        if (validateOpenAPIDocument(openapiDocument as any)) {
          openAPIDocumentList.push(openapiDocument);
        }
      })));
    }
  }

  await to(Promise.all(tasks));

  return openAPIDocumentList;
}
