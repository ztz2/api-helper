import to from 'await-to-js';
import { OpenAPI } from 'openapi-types';
import { readJson } from 'fs-extra';
import { ParserSwagger } from '@api-helper/core';
import { mergeUrl, getErrorMessage } from '@api-helper/core/lib/utils/util';
import { validateOpenAPIDocument } from '@api-helper/core/lib/utils/validator';

import {
  DocumentServers,
  ParserPluginOptions,
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '@/lib/types';
import {
  checkType,
  processRequestConfig,
} from '@/lib/tools/util';

import log from '@/lib/tools/log';
import request from '@/lib/tools/request';

export default class ParserSwaggerPlugin implements AbstractParserPlugin {
  name = 'swagger';
  async run(documentServers: DocumentServers, options: ParserPluginOptions = {}){
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
        const parsedDocumentList = await new ParserSwagger(options).parser(openAPIDocumentList as any);
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
  const requestConfig = processRequestConfig(documentServer);
  const openAPIDocumentList: Array<OpenAPI.Document> = [];
  const isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
  const serverUrlText = isHttp ? `【${documentServer.url}】` : '';

  // 本地文件，尝试读取本地文件
  if (!isHttp) {
    let [e, json] = await to(await readJson(documentServer.url));
    if (e) {
      const errorText = `swagger文件读取失败${getErrorMessage(e, ': ')}${serverUrlText}`;
      log.error('提示', errorText);
      return Promise.reject(errorText);
    }
    json = (Array.isArray(json) ? json : [json]);
    (json as any).forEach((itm: OpenAPI.Document & { documentServerUrl: string }) => {
      itm.documentServerUrl = documentServer.url;
    });
    [].push.apply(openAPIDocumentList, (json as any));
    return openAPIDocumentList;
  }

  // 直接根据资源地址获取配置
  const [, openAPIDocument] = await to(request({
    ...requestConfig,
    method: 'get',
    url: documentServer.url,
  })) as [unknown, OpenAPI.Document];
  if (validateOpenAPIDocument(openAPIDocument as any)) {
    (openAPIDocument as any).documentServerUrl = documentServer.url;
    openAPIDocumentList.push(openAPIDocument);
    return openAPIDocumentList;
  }

  const { origin } = requestConfig;
  // 获取所有分组-OpenAPI 2.0
  let [, swaggerResources] = await to<OpenAPI.Parameter>(request({
    ...requestConfig,
    method: 'get',
    url: mergeUrl(origin, '/swagger-resources', requestConfig.qs),
  }));
  // 获取所有分组-OpenAPI 3.0
  if (!(swaggerResources as any)?.length) {
    [, swaggerResources] = await to<OpenAPI.Parameter>(request({
      ...requestConfig,
      method: 'get',
      url: mergeUrl(origin, '/data/openapi.json', requestConfig.qs),
    }));
  }
  // 获取所有分组-OpenAPI 3.0
  if (!(swaggerResources as any)?.length) {
    [, swaggerResources] = await to<OpenAPI.Parameter>(request({
      ...requestConfig,
      method: 'get',
      url: mergeUrl(origin, '/openapi.json', requestConfig.qs),
    }));
  }

  if (Array.isArray(swaggerResources)) {
    const tasks2 = [];
    for (const sr of swaggerResources) {
      const documentServerUrl = mergeUrl(origin, sr.url, requestConfig.qs);
      tasks2.push(to(request<unknown, OpenAPI.Document>({
        ...requestConfig,
        method: 'get',
        url: documentServerUrl,
      }).then((openapiDocument) => {
        if (validateOpenAPIDocument(openapiDocument as any)) {
          (openapiDocument as any).documentServerUrl = documentServerUrl;
          openAPIDocumentList.push(openapiDocument);
        }
      })));
    }
    await to(Promise.all(tasks2));
  }

  return openAPIDocumentList;
}
