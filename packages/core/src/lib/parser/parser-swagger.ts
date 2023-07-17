import { OpenAPI } from 'openapi-types';
import { JSONSchema4 } from 'json-schema';
// @ts-ignore
import SwaggerParser from 'bundle-shims/lib/apidevtools.swagger-parser';

import { APIHelper } from '../types';

import {
  randomId,
  mergeUrl,
  checkType,
  filterDesc,
  filterKeyName,
  parserSchema,
  processRequestSchema, transformType,
} from '../utils/util';
import {
  UNKNOWN_GROUP_DESC,
  UNKNOWN_GROUP_NAME,
} from '../constant';
import {
  validateSchema,
  validateOpenAPIDocument,
} from '../utils/validator';

export default class ParserSwagger {
  private autoGenerateId = true;

  constructor(autoGenerateId = true) {
    this.autoGenerateId = autoGenerateId;
  }

  async parser(documentList: Array<OpenAPI.Document>): Promise<Array<APIHelper.Document>> {
    const openAPIDocumentList: Array<OpenAPI.Document> = [];

    if (!documentList || documentList.length === 0) {
      return [];
    }

    for (const document of documentList) {
      if (validateOpenAPIDocument(document)) {
        try {
          const openAPIDocument = await new SwaggerParser().dereference(document);
          if (validateOpenAPIDocument(openAPIDocument)) {
            openAPIDocumentList.push(openAPIDocument);
          }
        } catch (e) {
          throw e;
        }
      }
    }

    const parsedDocumentMap = this.parserDocument(openAPIDocumentList);
    return this.parserPath2API(parsedDocumentMap);
  }

  private parserDocument(openAPIDocumentList: Array<OpenAPI.Document>): Map<APIHelper.Document, OpenAPI.Document> {
    const result = new Map();
    for (let i = 0; i < openAPIDocumentList.length; i++) {
      const openAPIDocument = openAPIDocumentList[i];

      let basePath = '';
      let openapiVersion = '';

      // 2.0 版本OpenAPI
      if ('swagger' in openAPIDocument && openAPIDocument.swagger.startsWith('2')) {
        basePath = openAPIDocument?.basePath ?? '';
        openapiVersion = openAPIDocument.swagger ?? '';
      }  // 3.0 版本OpenAPI
      else if ('openapi' in openAPIDocument && openAPIDocument.openapi.startsWith('3')) {
        basePath = openAPIDocument.servers?.[0]?.url ?? '';
        openapiVersion = openAPIDocument.openapi ?? '';
      }
      const document: APIHelper.Document = {
        id: this.generateId(),
        title: filterDesc(openAPIDocument.info.title),
        description: filterDesc(openAPIDocument.info.description),
        version: openAPIDocument.info.version,
        openapiVersion,
        basePath,
        categoryList: [] as APIHelper.CategoryList
      };
      result.set(document, openAPIDocument);
    }
    return result;
  }

  private parserPath2API(parsedDocumentMap: Map<APIHelper.Document, OpenAPI.Document> ): Array<APIHelper.Document> {
    const result: Array<APIHelper.Document> = [];

    for (const [apiDocument, openAPIDocument] of parsedDocumentMap) {
      const { paths } = openAPIDocument;
      if (!paths) {
        continue;
      }

      const pathsEntries = Object.entries(paths);
      const categoryMap = this.parserCategory(openAPIDocument);
      for (let i = 0; i < pathsEntries.length; i++) {
        const [path, methodMap] = pathsEntries[i];
        const methodMapEntries = Object.entries(methodMap);

        for (let w = 0; w < methodMapEntries.length; w++) {
          const method = methodMapEntries[w][0];
          const apiMap: any = methodMapEntries[w][1];
          // fix: basePath为/，导致//
          const mPath = mergeUrl(apiDocument.basePath, path);
          // 接口
          const api: APIHelper.API = {
            id: this.generateId(),
            summary: filterDesc(apiMap.summary),
            description: filterDesc(apiMap.description),
            path: mPath,
            method,
            formDataKeyNameList: [],
            pathParamKeyNameList: [],
            queryStringKeyNameList: [],
            requestDataSchema: null,
            requestExtraDataSchema: null,
            responseDataSchema: null,
          }

          /****************** 处理请求参数--开始 ******************/
          let requestExtraDataSchema: APIHelper.Schema | null = null;
          const requestDataSchema = {
            type: 'object',
            params: [] as APIHelper.SchemaList
          } as APIHelper.Schema;
          const requestKeyNameMemo: string[] = [];
          // fix: 重复项问题
          const requestSchemaRecord: Array<JSONSchema4> = [];

          if ('parameters' in apiMap) {
            const parameters = apiMap.parameters;
            for (let j = 0; j < parameters.length; j++) {
              const parameter = parameters[j];
              const keyName = filterKeyName(parameter.name);
              // 路径参数 | url 参数
              if (parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'formData') {
                if (requestKeyNameMemo.includes(keyName)) {
                  continue;
                }
                let scm = {
                  examples: [],
                  id: this.generateId(),
                  title: '',
                  description: '',
                  type: 'string',
                  keyName,
                  params: [],
                  rules: {
                    required: false
                  }
                } as APIHelper.Schema;

                // fix: url参数也是一个对象问题.
                if (parameter.schema) {
                  const parsedSchema = parserSchema(
                    parameter.schema,
                    undefined,
                    undefined,
                    undefined,
                    {
                      autoGenerateId: this.autoGenerateId
                    }
                  );
                  if (parsedSchema) {
                    scm = parsedSchema;
                    if (!scm.type) {
                      // @ts-ignore
                      scm.type = 'string';
                      // @ts-ignore
                      scm.params = [];
                    }
                  }
                }
                scm.id = this.generateId();
                scm.keyName = keyName;

                // 路径参数
                if (parameter.in === 'path') {
                  api.pathParamKeyNameList.push(keyName);
                } // URL参数
                else if (parameter.in === 'query') {
                  api.queryStringKeyNameList.push(keyName);
                } // 表单参数（可能这个不是标准规范）
                else if (parameter.in === 'formData') {
                  api.formDataKeyNameList.push(keyName);
                }

                scm.rules.required = parameter.in === 'path' ? true : checkType(parameter.required, 'Boolean') ? parameter.required : false;
                scm.description = filterDesc(parameter.description);

                requestKeyNameMemo.push(keyName);
                requestDataSchema.params.push(scm);
              } else if (parameter.in === 'body') { // body 参数
                requestExtraDataSchema = processRequestSchema(
                  requestDataSchema,
                  requestSchemaRecord,
                  parameter.schema,
                  requestKeyNameMemo,
                  { autoGenerateId: this.autoGenerateId }
                );
              } else if (parameter.in === 'header' || parameter.in === 'cookie') {
                // header 和 cookie信息，暂无特殊处理
              }
            }
          }

          // URL query 参数，query参数必须包含key，不存在不兼容问题
          processRequestSchema(
            requestDataSchema,
            requestSchemaRecord,
            apiMap.requestBody?.content?.['application/x-www-form-urlencoded']?.schema,
            requestKeyNameMemo,
            {
              autoGenerateId: this.autoGenerateId,
              callback(parsedSchema: APIHelper.Schema) {
                // 收集URL query 参数字段
                if (parsedSchema?.params) {
                  parsedSchema?.params.forEach((itm) => itm?.keyName && api.queryStringKeyNameList.push(itm.keyName));
                }
              }
            }
          );

          // 请求 Body 为 json参数
          const requestSchemaSource = apiMap.requestBody?.content?.['application/json']?.schema
            ?? apiMap.requestBody?.content?.['text/json']?.schema;
          requestExtraDataSchema = processRequestSchema(
            requestDataSchema,
            requestSchemaRecord,
            requestSchemaSource,
            undefined,
            {
              autoGenerateId: this.autoGenerateId,
            }
          );

          if (requestDataSchema.params.length === 0) {
            api.requestDataSchema = requestExtraDataSchema;
          } else if (requestDataSchema.params.length > 0) {
            api.requestDataSchema = requestDataSchema;
          } else {
            api.requestExtraDataSchema = requestExtraDataSchema;
          }

          // 请求参数根对象属性去重
          if (api.requestDataSchema?.params) {
            const requestDataSchemaMemo: string[] = [];
            api.requestDataSchema.params = api.requestDataSchema.params.filter((s) => {
              if (!s.keyName) {
                return true;
              }
              const hasKeyName = requestDataSchemaMemo.includes(s.keyName);
              requestDataSchemaMemo.push(s.keyName);
              return !hasKeyName;
            });
          }
          /****************** 处理请求参数--结束 ******************/

          /****************** 处理响应参数--开始 ******************/
          const responsesSchemaSource = apiMap.responses?.['200']?.schema
            ?? apiMap.responses?.['200']?.content?.['application/json']?.schema
            ?? apiMap.responses?.['200']?.content?.['text/json']?.schema
            ?? apiMap.responses?.['200']?.content?.['*/*']?.schema;
          if (validateSchema(responsesSchemaSource)) {
            api.responseDataSchema = parserSchema(
              responsesSchemaSource,
              undefined,
              undefined,
              undefined,
              {
                autoGenerateId: this.autoGenerateId
              }
            );
            if (api.responseDataSchema?.type === 'object') {
              api.responseDataSchema.keyName = '';
            }
          }
          /****************** 处理响应参数--开始 ******************/

          // 将该API添加到所依赖的模块中
          for (const tagName of apiMap.tags) {
            const recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(UNKNOWN_GROUP_NAME);
            recordCategory && recordCategory.apiList.push(api);
          }
        }
      }

      // 将转换完成的分组添加到文档中
      for (const [, category] of categoryMap) {
        apiDocument.categoryList.push(category);
      }

      result.push(apiDocument);
    }

    return result;
  }

  private parserCategory(openAPIDocument: OpenAPI.Document): Map<string, APIHelper.Category>{
    const result: Map<string, APIHelper.Category> = new Map();
    if (openAPIDocument.tags) {
      for (const tag of openAPIDocument.tags) {
        result.set(tag.name, {
          id: this.generateId(),
          // 分组名称
          name: tag.name,
          // 分组描述
          description: filterDesc(tag?.description),
          // 分组下的接口列表
          apiList: [],
        })
      }
    }
    result.set(UNKNOWN_GROUP_NAME, {
      id: this.generateId(),
      // 分组名称
      name: UNKNOWN_GROUP_NAME,
      // 分组描述
      description: UNKNOWN_GROUP_DESC,
      // 分组下的接口列表
      apiList: [],
    });
    return result;
  }

  private generateId(): string {
    return this.autoGenerateId ? randomId() : '';
  }
}
