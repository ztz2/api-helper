import {OpenAPI} from 'openapi-types';
import {JSONSchema4} from 'json-schema';
// @ts-ignore
import SwaggerParser from 'bundle-shims/lib/apidevtools.swagger-parser';

import {APIHelper} from '../types';

import {
  isHttp,
  mergeUrl,
  randomId,
  checkType,
  filterDesc,
  parserSchema,
  filterKeyName,
  processRequestSchema,
  processRequestSchemaPipeline,
  processResponseSchemaPipeline,
} from '../utils/util';
import {
  UNKNOWN_GROUP_DESC,
  UNKNOWN_GROUP_NAME,
} from '../constant';
import {
  validateSchema,
  validateOpenAPIDocument,
} from '../utils/validator';
import {
  createApi,
  createCategory,
  createDocument,
  createSchema, transformType
} from '../helpers';

export default class ParserSwagger {
  private autoGenerateId = true;
  // 请求数据所有字段设置成必有属性，默认: false
  private requiredRequestField?: boolean;
  // 响应数据所有字段设置成必有属性，默认：true
  private requiredResponseField?: boolean;

  constructor(options?: {
    autoGenerateId?: boolean;
    requiredResponseField?: boolean;
    requiredRequestField?: boolean;
  } | boolean) {
    this.autoGenerateId = typeof options === 'boolean' ? options : typeof options?.autoGenerateId === 'boolean' ? options?.autoGenerateId : true;
    const currentOptions = Object.assign({
      requiredResponseField: true,
      requiredRequestField: false,
    }, checkType(options, 'Object') ? options : {});
    this.requiredRequestField = currentOptions.requiredRequestField;
    this.requiredResponseField = currentOptions.requiredResponseField;
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
      let documentVersion = '';

      // 2.0 版本OpenAPI
      if ('swagger' in openAPIDocument && openAPIDocument.swagger.startsWith('2')) {
        basePath = openAPIDocument?.basePath ?? '';
        documentVersion = openAPIDocument.swagger ?? '';
      }  // 3.0 版本OpenAPI
      else if ('openapi' in openAPIDocument && openAPIDocument.openapi.startsWith('3')) {
        basePath = openAPIDocument.servers?.[0]?.url ?? '';
        documentVersion = openAPIDocument.openapi ?? '';
      }
      const document = createDocument({
        id: this.generateId(),
        title: filterDesc(openAPIDocument.info.title),
        description: filterDesc(openAPIDocument.info.description),
        version: openAPIDocument.info.version,
        documentVersion,
        basePath,
        categoryList: [] as APIHelper.CategoryList
      });
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
          const mPath = mergeUrl(isHttp(apiDocument.basePath) ? '' : apiDocument.basePath, path);
          // 接口
          const api: APIHelper.API = createApi({
            id: this.generateId(),
            title: filterDesc(apiMap.summary),
            description: filterDesc(apiMap.description),
            path: mPath,
            method,
          });
          api.label = api.title ? api.title : api.description ? api.description : '';

          /****************** 处理请求参数--开始 ******************/
          let requestExtraDataSchema: APIHelper.Schema | null = null;
          const requestDataSchema = createSchema('object', {
            id: this.generateId(),
          });
          const requestKeyNameMemo: string[] = [];
          // fix: 重复项问题
          const requestSchemaRecord: Array<JSONSchema4> = [];

          // FormData数据
          const formDataSource = apiMap.requestBody?.content?.['multipart/form-data']?.schema;
          const formDataSchema = processRequestSchema(
            requestDataSchema,
            requestSchemaRecord,
            formDataSource,
            undefined,
            {
              autoGenerateId: this.autoGenerateId,
            }
          );
          // 记录表单数据key
          if (formDataSchema) {
            formDataSchema?.params?.forEach(({keyName}) => {
              api.formDataKeyNameList.push(keyName);
            });
          }

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
                let scm = createSchema('string', {
                  id: this.generateId(),
                  keyName,
                });

                // fix: url参数也是一个对象问题.
                if (parameter.schema) {
                  const parsedSchema = parserSchema(
                    parameter.schema,
                    undefined,
                    undefined,
                    undefined,
                    {
                      autoGenerateId: this.autoGenerateId,
                    }
                  );
                  if (parsedSchema) {
                    scm = parsedSchema;
                  }
                }

                // 路径参数
                if (parameter.in === 'path') {
                  api.pathParamKeyNameList.push(keyName);
                } // URL参数
                else if (parameter.in === 'query') {
                  api.queryStringKeyNameList.push(keyName);
                } // 表单参数（这个可能不是标准规范）
                else if (parameter.in === 'formData') {
                  scm.type = transformType(parameter.type, undefined, 'string') as any;
                  api.formDataKeyNameList.push(keyName);
                }

                scm.id = this.generateId();
                scm.keyName = keyName;
                scm.rules.required = parameter.in === 'path' ? true : checkType(parameter.required, 'Boolean') ? parameter.required : false;
                scm.description = filterDesc(parameter.description);
                scm.label = scm.title ? scm.title : scm.description ? scm.description : '';

                requestKeyNameMemo.push(keyName);
                requestDataSchema.params.push(scm);
              } else if (parameter.in === 'body') { // body 参数
                requestExtraDataSchema = processRequestSchema(
                  requestDataSchema,
                  requestSchemaRecord,
                  parameter.schema,
                  requestKeyNameMemo,
                  {
                    autoGenerateId: this.autoGenerateId,
                  }
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

          processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchema, this);
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
          processResponseSchemaPipeline(api, this);
          /****************** 处理响应参数--结束 ******************/

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
        result.set(tag.name, createCategory({
          id: this.generateId(),
          name: tag.name,
          description: filterDesc(tag?.description),
        }));
      }
    }
    result.set(UNKNOWN_GROUP_NAME, createCategory( {
      id: this.generateId(),
      name: UNKNOWN_GROUP_NAME,
      description: UNKNOWN_GROUP_DESC,
    }));
    return result;
  }

  private generateId(): string {
    return this.autoGenerateId ? randomId() : '';
  }
}
