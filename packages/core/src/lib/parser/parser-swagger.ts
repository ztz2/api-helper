import {JSONSchema4} from 'json-schema';
// @ts-ignore
import SwaggerParser from 'bundle-shims/lib/apidevtools.swagger-parser';

import { APIHelper } from '../types';

import {
  isHttp,
  mergeUrl,
  randomId,
  checkType,
  filterDesc,
  parserSchema,
  filterKeyName,
  filterDotKeyName,
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
import ParserKeyName2Schema from './parser-key-name-2-schema';

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

  async parser(documentList: Array<APIHelper.OpenAPIDocument>): Promise<Array<APIHelper.Document>> {
    const openAPIDocumentList: Array<APIHelper.OpenAPIDocument> = [];

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

  private parserDocument(openAPIDocumentList: Array<APIHelper.OpenAPIDocument>): Map<APIHelper.Document, APIHelper.OpenAPIDocument> {
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
      const title = filterDesc(openAPIDocument.info.title);
      const document = createDocument({
        id: this.generateId(),
        title: title ? title : '接口文档',
        description: filterDesc(openAPIDocument.info.description),
        version: openAPIDocument.info.version,
        documentVersion,
        documentServerUrl: openAPIDocument.documentServerUrl ?? '',
        basePath,
        categoryList: [] as APIHelper.CategoryList
      });
      result.set(document, openAPIDocument);
    }
    return result;
  }

  private parserPath2API(parsedDocumentMap: Map<APIHelper.Document, APIHelper.OpenAPIDocument> ): Array<APIHelper.Document> {
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
          const method = methodMapEntries[w][0].toLowerCase();
          const apiMap: any = methodMapEntries[w][1];
          try {
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
            const parserKeyName2SchemaWrap: Array<APIHelper.Schema> = [];
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
                requestKeyNameMemo.push(keyName);
              });
            }

            if ('parameters' in apiMap) {
              const parameters = apiMap.parameters;
              for (let j = 0; j < parameters.length; j++) {
                const parameter = parameters[j];

                // fix: 当为Object类型，属性为空，导致成为一个异常的对象
                if (parameter.name?.trim?.() === '') {
                  continue;
                }

                let keyName = filterKeyName(parameter.name);
                // 路径参数 | url 参数
                if (parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'formData') {
                  if (
                    requestKeyNameMemo.includes(keyName) &&
                    api.pathParamKeyNameList.includes(keyName)
                  ) {
                    continue;
                  }
                  requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);

                  const type = transformType(parameter.type, parameter?.format, 'string');

                  let scm = createSchema(type, {
                    id: this.generateId(),
                    keyName,
                  });

                  let parserKeyName2SchemaRes = null;
                  let parserKeyName2SchemaTarget = null;
                  // 存在 Schema 的dot参数
                  if (
                    // fix: 2.0中array参数问题
                    parameter?.type === 'array' ||
                    (checkType(parameter.schema, 'Object') && (keyName.includes('.') || keyName.includes('[')))
                  ) {
                    keyName = filterDotKeyName(keyName);
                    const temp = parameter?.type === 'array' ? parameter : parameter.schema;
                    scm = parserSchema(
                      temp,
                      undefined,
                      keyName,
                      undefined,
                      {
                        autoGenerateId: this.autoGenerateId
                      }
                    ) as APIHelper.Schema;
                  } else {
                    // dot 参数
                    parserKeyName2SchemaRes = new ParserKeyName2Schema(keyName, type).parse();
                    if (parserKeyName2SchemaRes) {
                      parserKeyName2SchemaWrap.push(parserKeyName2SchemaRes.wrapSchema);
                      // fix: 当为路径参数时候，必填项
                      if (parameter.in === 'path') {
                        parserKeyName2SchemaRes.wrapSchema.rules.required = true;
                      }
                      scm = parserKeyName2SchemaTarget = parserKeyName2SchemaRes.targetSchema;
                      keyName = filterKeyName(parserKeyName2SchemaRes.wrapSchema.keyName);
                    } else { // 普通schema对象
                      // fix: url参数也是一个对象问题.
                      if (parameter.schema) {
                        const parsedSchema = parserSchema(
                          parameter.schema,
                          undefined,
                          keyName,
                          undefined,
                          {
                            autoGenerateId: this.autoGenerateId,
                          }
                        );
                        if (parsedSchema) {
                          scm = parsedSchema;
                        }
                      }
                    }
                  }

                  scm.id = this.generateId();
                  if (parserKeyName2SchemaTarget == null) {
                    scm.rules.required = parameter.in === 'path' ? true : checkType(parameter.required, 'Boolean') ? parameter.required : false;
                  } else {
                    scm.rules.required = checkType(parameter.required, 'Boolean') ? parameter.required : false;
                  }
                  scm.description = filterDesc(parameter.description);
                  scm.label = scm.title ? scm.title : scm.description ? scm.description : '';

                  // 路径参数
                  if (parameter.in === 'path') {
                    !api.pathParamKeyNameList.includes(keyName) && api.pathParamKeyNameList.push(keyName);
                  } // URL参数
                  else if (parameter.in === 'query') {
                    !api.queryStringKeyNameList.includes(keyName) && api.queryStringKeyNameList.push(keyName);
                  } // 表单参数（这个可能不是标准规范）
                  else if (parameter.in === 'formData') {
                    // fix: swagger2.0 文件类型识别失败问题
                    scm.type = parameter?.format ? transformType(scm.type, parameter?.format, scm.type) : scm.type;
                    !api.formDataKeyNameList.includes(keyName) && api.formDataKeyNameList.push(keyName);
                  }

                  // fix: dot参数属性不应该提取到根节点上的问题
                  if (parserKeyName2SchemaTarget == null) {
                    requestDataSchema.params.push(scm);
                  }
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
              // 合并 name[0].a.rule 属性。
              ParserKeyName2Schema.appendSchemeList(
                parserKeyName2SchemaWrap,
                requestDataSchema,
                requestKeyNameMemo,
              );
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
            // fix: requestExtraDataSchema 参数丢失问题
            if (requestSchemaSource) {
              requestExtraDataSchema = processRequestSchema(
                requestDataSchema,
                requestSchemaRecord,
                requestSchemaSource,
                undefined,
                {
                  autoGenerateId: this.autoGenerateId,
                }
              );
            }

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
          } catch (e) {
            console.log(`${method.toUpperCase()} ${path} 接口解析失败，请联系 @api-helper 作者修复该问题，或提交issue，https://github.com/ztz2/api-helper/issues\n\n${e}`);
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

  private parserCategory(openAPIDocument: APIHelper.OpenAPIDocument): Map<string, APIHelper.Category>{
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
