import { readJsonSync } from 'fs-extra';
import { OpenAPI } from 'openapi-types';
import { AxiosRequestConfig } from 'axios';
import { ParserSwagger } from '@api-helper/core';
import { validateOpenAPIDocument } from '@api-helper/core/lib/utils/validator';

import { Config } from '@/lib';
import request from '@/lib/tools/request';
import { checkType, processRequestConfig } from '@/lib/tools/util';
import { AbstractParserPlugin, ParserPluginRunResult } from '@/lib/types';

type DocumentServers = Config['documentServers'];

export default class ParserSwaggerPlugin implements AbstractParserPlugin {
  name = 'swagger';
  async run(documentServers: DocumentServers){
    const result: ParserPluginRunResult = [];

    if (documentServers.length === 0) {
      return result;
    }

    const dsTasks = [];
    for (const documentServer of documentServers) {
      dsTasks.push((async () => {
        const requestConfig: AxiosRequestConfig = processRequestConfig(documentServer);
        const openAPIDocumentList: Array<OpenAPI.Document> = [];

        const originRgx = /^(http(s?):\/\/.*?)($|\/)/.exec(String(documentServer.url));
        // 网络地址
        if (originRgx?.[1]) {
          // 直接根据地址获取。
          const openAPIDocument: OpenAPI.Document = await request({
            ...requestConfig,
            url: documentServer.url,
          });
          if (validateOpenAPIDocument(openAPIDocument as any)) {
            openAPIDocumentList.push(openAPIDocument);
          } else {
            const origin = originRgx[1];
            // 获取v2下默认的文档
            const openAPIDocument: OpenAPI.Document = await request({
              ...requestConfig,
              url: `${origin}/v2/api-docs`,
            });
            if (validateOpenAPIDocument(openAPIDocument as any)) {
              openAPIDocumentList.push(openAPIDocument);
            } else {
              // 兜底：根据 swagger-resources 获取全部。
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
                  } catch {}
                }
              }
            }
          }
        } else { // 可能是本地文件，尝试读取本地文件
          try {
            const json = readJsonSync(documentServer.url) ?? [];
            if (Array.isArray(json)) {
              [].push.apply(openAPIDocumentList, json as any);
            } else if (checkType(json, 'Object')) {
              openAPIDocumentList.push(json);
            }
          } catch {}
        }

        const parsedDocumentList = await new ParserSwagger().parser(openAPIDocumentList as any);

        if (parsedDocumentList.length > 0) {
          result.push({
            documentServer,
            parsedDocumentList
          });
        }
      })());
    }

    try {
      await Promise.all(dsTasks);
    } finally {}

    return result;
  }
}
