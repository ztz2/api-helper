import to from 'await-to-js';
import parse from 'url-parse';
import { OpenAPI } from 'openapi-types';
import { readJsonSync } from 'fs-extra';
import { ParserSwagger } from '@api-helper/core';
import { mergeUrl } from '@api-helper/core/lib/utils/util';
import { validateOpenAPIDocument } from '@api-helper/core/lib/utils/validator';

import {
  DocumentServers,
  ParserPluginOptions,
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '@/lib/types';
import {
  checkType,
  getErrorMessage,
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

  const { origin } = requestConfig;

  /* swagger-ui v2处理 */
  // 获取域名，拼接v2版本的默认文档路径获取配置
  try {
    const openAPIDocument = await request<unknown, OpenAPI.Document>({
      ...requestConfig,
      url: mergeUrl(origin, '/v2/api-docs', requestConfig.qs),
    });
    if (openAPIDocument && validateOpenAPIDocument(openAPIDocument as any)) {
      openAPIDocumentList.push(openAPIDocument);
      return openAPIDocumentList;
    }
  } catch {}

  // 根据 swagger-resources 获取全部。
  const [, swagger2Resources] = await to<OpenAPI.Parameter>(request({
    ...requestConfig,
    url: mergeUrl(origin, '/swagger-resources', requestConfig.qs),
  }));
  if (Array.isArray(swagger2Resources)) {
    const tasks2 = [];
    for (const sr of swagger2Resources) {
      tasks2.push(to(request<unknown, OpenAPI.Document>({
        ...requestConfig,
        url: mergeUrl(origin, sr.url, requestConfig.qs),
      }).then((openapiDocument) => {
        if (validateOpenAPIDocument(openapiDocument as any)) {
          openAPIDocumentList.push(openapiDocument);
        }
      })));
    }
    await to(Promise.all(tasks2));
  }
  if (openAPIDocumentList.length > 0) {
    return openAPIDocumentList;
  }

  /* swagger-ui v3处理 */
  const urlInfo = (isHttp ? parse(documentServer.url): {}) as Recordable;
  const serverPath = (urlInfo?.pathname?.split('/') ?? []).filter(Boolean);
  const serverHash = (urlInfo.hash?.slice(1)?.split('/') ?? []).filter(Boolean);
  const selectDoc = decodeURIComponent(serverHash[0] ?? '');
  if (serverPath[serverPath.length - 1] === 'doc.html' || serverPath[serverPath.length - 1] === 'swagger-ui.html') {
    serverPath.pop();
  }
  const resourcesPath = [...serverPath, 'data', 'openapi.json'];
  const serverUrl = mergeUrl(origin, '/', resourcesPath.join('/'), requestConfig.qs);
  const [, swagger3Resources] = await to<OpenAPI.Parameter>(request({
    ...requestConfig,
    url: serverUrl,
  }));
  if (Array.isArray(swagger3Resources)) {
    const tasks3 = [];
    let swagger3ResourcesFilter = swagger3Resources.filter((itm: Recordable) => selectDoc && itm?.name === selectDoc);
    if (swagger3ResourcesFilter.length === 0) {
      swagger3ResourcesFilter = swagger3Resources;
    }
    for (const sr of swagger3ResourcesFilter) {
      tasks3.push(to(request<unknown, OpenAPI.Document>({
        ...requestConfig,
        url: mergeUrl(origin, '/', serverPath.join('/'), sr.url, requestConfig.qs),
      }).then((openapiDocument) => {
        if (validateOpenAPIDocument(openapiDocument as any)) {
          openAPIDocumentList.push(openapiDocument);
        }
      })));
    }
    await to(Promise.all(tasks3));
  }
  return openAPIDocumentList;
}
