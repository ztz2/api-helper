import { OpenAPI } from 'openapi-types';
import { JSONSchema4 } from 'json-schema';
import { dereference } from '@apidevtools/json-schema-ref-parser';

import { APIHelper } from '../types';

import {
  isHttp,
  mergeUrl,
  randomId,
  checkType,
  filterDesc,
  parserSchema,
  filterKeyName,
  deepMergeSchema,
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
  createSchema,
  transformType,
  TransformTypeOptions
} from "../helpers";
import ParserKeyName2Schema from './parser-key-name-2-schema';

export default class ParserSwagger {
  private autoGenerateId = true;
  // 请求数据所有字段设置成必有属性，默认: false
  private requiredRequestField?: boolean;
  // 响应数据所有字段设置成必有属性，默认：true
  private requiredResponseField?: boolean;
  private transformType: TransformTypeOptions['transformTypeMap'];

  constructor(options?: {
    autoGenerateId?: boolean;
    requiredResponseField?: boolean;
    requiredRequestField?: boolean;
    transformType?: TransformTypeOptions['transformTypeMap'];
  } | boolean) {
    this.autoGenerateId = typeof options === 'boolean' ? options : typeof options?.autoGenerateId === 'boolean' ? options?.autoGenerateId : true;
    const currentOptions = Object.assign({
      requiredResponseField: true,
      requiredRequestField: false,
      transformType: {},
    }, checkType(options, 'Object') ? options : {});
    this.requiredRequestField = currentOptions.requiredRequestField;
    this.requiredResponseField = currentOptions.requiredResponseField;
    this.transformType = currentOptions.transformType;
  }

  async parser(documentList: Array<APIHelper.OpenAPIDocument>): Promise<Array<APIHelper.Document>> {
    const openAPIDocumentList: Array<APIHelper.OpenAPIDocument> = [];

    if (!documentList || documentList.length === 0) {
      return [];
    }

    for (const document of documentList) {
      if (validateOpenAPIDocument(document)) {
        try {
          const openAPIDocument = (await dereference(document)) as OpenAPI.Document;
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

      const isV2 = apiDocument.documentVersion?.startsWith?.('2') ?? false;

      const pathsEntries = Object.entries(paths);
      const categoryMap = this.parserCategory(openAPIDocument);
      for (let i = 0; i < pathsEntries.length; i++) {
        const [path, methodMap] = pathsEntries[i];
        const methodMapEntries = Object.entries(methodMap);
        for (let w = 0; w < methodMapEntries.length; w++) {
          const method = methodMapEntries[w][0].toLowerCase();
          const apiMap: any = methodMapEntries[w][1];
          try {
            const requestKeyNameMemo: string[] = [];
            // fix: 重复项问题
            const requestSchemaRecord: Array<JSONSchema4> = [];
            const parserKeyName2SchemaWrap: Array<APIHelper.Schema> = [];
            // fix: basePath为/，导致//
            const mPath = mergeUrl(isHttp(apiDocument.basePath) ? '' : apiDocument.basePath, path);
            // 请求 body 数据都在这个wrap对象中
            const requestExtraDataSchemaWrap: { value: APIHelper.Schema | null } = { value: null };
            const requestDataSchema = createSchema('object', {
              id: this.generateId(),
            });

            // 接口
            const api: APIHelper.API = createApi({
              id: this.generateId(),
              title: filterDesc(apiMap.summary),
              description: filterDesc(apiMap.description),
              path: mPath,
              method,
            });
            api.label = api.title ? api.title : api.description ? api.description : '';

            this.parseCommonParam({ apiDocument, api, apiMap, requestDataSchema, requestKeyNameMemo, parserKeyName2SchemaWrap });
            if (isV2) {
              this.parseV2Param({ api, apiMap, requestExtraDataSchemaWrap, requestDataSchema, requestKeyNameMemo, requestSchemaRecord, parserKeyName2SchemaWrap });
            } else {
              this.parseV3Param({ api, apiMap, requestExtraDataSchemaWrap, requestDataSchema, requestKeyNameMemo, requestSchemaRecord });
            }

            processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchemaWrap.value, this);
            processResponseSchemaPipeline(api, this);

            // 没有获取到请求ContentType，根据参数类型进行推断
            if (!api?.requestContentType?.length) {
              if (api.formDataKeyNameList?.length) {
                api.requestContentType = ['multipart/form-data'];
              }
            }

            // 将该API添加到所依赖的模块中
            const apiTags = apiMap?.tags?.length > 0 ? apiMap.tags : [UNKNOWN_GROUP_NAME];
            for (const tagName of apiTags) {
              const recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(UNKNOWN_GROUP_NAME);
              recordCategory && recordCategory.apiList.push(api);
            }
          } catch (e) {
            console.log(`${method.toUpperCase()} ${path} 接口解析失败，请联系 @api-helper 作者修复该问题，或提交issue，https://github.com/ztz2/api-helper/issues\n${e}`);
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

  // 解析：路径参数、查询字符串参数(v2[x-www-form-urlencoded])、响应数据。预留header、cookie
  private parseCommonParam ({ apiDocument, api, apiMap, requestDataSchema, requestKeyNameMemo, parserKeyName2SchemaWrap }: {
    apiDocument: APIHelper.Document,
    api: APIHelper.API,
    apiMap: any,
    requestDataSchema: APIHelper.Schema,
    requestKeyNameMemo: string[],
    parserKeyName2SchemaWrap: APIHelper.Schema[],
  }) {
    const parameters = apiMap.parameters;
    const cookieSchema = createSchema('object');
    const headerSchema = createSchema('object');
    const isV2 = apiDocument.documentVersion.startsWith('2');
    // parameters 包含了：路径参数、query-params、headers、cookies
    if (parameters?.length > 0) {
      for (let j = 0; j < parameters.length; j++) {
        const parameter = parameters[j];
        // fix: 当为Object类型，属性为空，导致成为一个异常的对象
        // name是一个字段名称，没有字段名称，属于无效的属性
        if (parameter.name?.trim?.() === '') {
          continue;
        }
        const parameterIn = parameter?.in ?? '';
        let keyName = filterKeyName(parameter.name);
        // parameter?.type 为 'array' 类型对象，例子数据源：v2.0/petstore.json  [ GET ] /v2/pet/findByStatus status字段
        // 通过直接 parameter.schema 获取类型对象，V3
        // v2 通过 parameter?.type 判断
        const parameterSchema = isV2 ? parameter : parameter.schema;
        switch (parameterIn) {
          case 'path': case 'query': {
            if (requestKeyNameMemo.includes(keyName)) {
              continue;
            }

            const type = transformType(parameter.type, {
              format: parameter?.format,
              emptyType: 'string',
              transformTypeMap: this.transformType,
            });
            let scm = parserSchema(
              parameterSchema,
              undefined,
              keyName,
              undefined,
              {
                autoGenerateId: this.autoGenerateId,
                transformTypeMap: this.transformType ?? {},
              }
            );

            let parserKeyName2SchemaWrapNode = null;

            // dot 参数
            if (keyName.includes('.') || keyName.includes('[')) {
              const parserKeyName2SchemaRes = new ParserKeyName2Schema(keyName, type).parse();
              // dot 对象
              if (parserKeyName2SchemaRes) {
                parserKeyName2SchemaWrap.push(parserKeyName2SchemaRes.wrapSchema);
                // fix: 当为路径参数时候，必填项
                if (parameter.in === 'path') {
                  parserKeyName2SchemaRes.wrapSchema.rules.required = true;
                }
                parserKeyName2SchemaWrapNode = parserKeyName2SchemaRes.wrapSchema;
                scm = parserKeyName2SchemaRes.targetSchema;
                keyName = filterKeyName(parserKeyName2SchemaWrapNode.keyName);
              }
            }

            if (scm == null) {
              break;
            }

            if (!scm.id && this.autoGenerateId) {
              scm.id = this.generateId();
            }

            if (parserKeyName2SchemaWrapNode == null) {
              scm.rules.required = parameterIn === 'path' ? true : checkType(parameter.required, 'Boolean') ? parameter.required : false;
            } else {
              scm.rules.required = checkType(parameter.required, 'Boolean') ? parameter.required : false;
            }

            scm.description = filterDesc(parameter.description);
            scm.label = scm.title ? scm.title : scm.description ? scm.description : '';

            // 路径参数
            if (parameterIn === 'path') {
              !api.pathParamKeyNameList.includes(keyName) && api.pathParamKeyNameList.push(keyName);
            } // URL参数
            else if (parameterIn === 'query') {
              !api.queryStringKeyNameList.includes(keyName) && api.queryStringKeyNameList.push(keyName);
            }

            // 最后处理完scm，如果该dot参数包装根节点存在，将scm指向它
            if (parserKeyName2SchemaWrapNode) {
              scm = parserKeyName2SchemaWrapNode;
            }

            // fix: 重复提取到根节点问题
            const previousSchema = requestDataSchema.params.find((item) => item.keyName === keyName && item.type === scm?.type);
            // 存在相同节点，进行合并
            if (previousSchema) {
              deepMergeSchema(previousSchema, scm);
            } else {
              requestDataSchema.params.push(scm);
            }

            !requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);
            break;
          }
          case 'header': case 'cookie': {
            const temp = parserSchema(
              parameterSchema,
              undefined,
              keyName,
              undefined,
              {
                autoGenerateId: this.autoGenerateId,
                transformTypeMap: this.transformType ?? { a: '4'},
              }
            );
            if (temp) {
              if (parameterIn === 'cookie') {
                cookieSchema.params.push(temp);
              } else {
                headerSchema.params.push(temp);
              }
            }
            break;
          }
        }
      }
      if (cookieSchema.params.length > 0) {
        api.cookies = cookieSchema;
      }
      if (headerSchema.params.length > 0) {
        api.headers = headerSchema;
      }
      // 合并 name[0].a.rule 属性。
      ParserKeyName2Schema.appendSchemeList(
        parserKeyName2SchemaWrap,
        requestDataSchema,
        requestKeyNameMemo,
      );
    }
    // V2-响应Content-Type获取
    if (isV2 && apiMap.produces) {
      api.responseContentType = apiMap.produces;
    }
    // 响应数据：V2
    let responsesSchemaSource = apiMap.responses?.['200']?.schema;
    // 响应数据：V3，同时获取对于的Content-Type
    if (!responsesSchemaSource){
      const responsesSchemaTypes = [
        'application/json',
        'text/json',
        'application/xml',
        'text/plain',
        '*/*',
      ];
      responsesSchemaTypes.find((item) => {
        const temp = apiMap.responses?.['200']?.content?.[item]?.schema;
        if (temp) {
          api.requestContentType = [item];
          responsesSchemaSource = temp;
          return temp;
        }
      });
    }
    if (responsesSchemaSource && validateSchema(responsesSchemaSource)) {
      api.responseDataSchema = parserSchema(
        responsesSchemaSource,
        undefined,
        undefined,
        undefined,
        {
          autoGenerateId: this.autoGenerateId,
          transformTypeMap: this.transformType ?? {},
        }
      );
      if (api.responseDataSchema?.type === 'object') {
        api.responseDataSchema.keyName = '';
      }
    }
  }

  // 解析v2：请求json数据、formData
  private parseV2Param ({ api, apiMap, requestExtraDataSchemaWrap, requestDataSchema, requestKeyNameMemo, requestSchemaRecord, parserKeyName2SchemaWrap }: {
    api: APIHelper.API,
    apiMap: any,
    requestExtraDataSchemaWrap: { value: APIHelper.Schema | null },
    requestDataSchema: APIHelper.Schema,
    requestKeyNameMemo: string[],
    requestSchemaRecord: JSONSchema4[],
    parserKeyName2SchemaWrap: APIHelper.Schema[],
  }) {
    if (apiMap?.consumes) {
      api.requestContentType = apiMap?.consumes;
    }
    if (apiMap?.parameters?.length > 0) {
      const parameters = apiMap.parameters;
      for (let j = 0; j < parameters.length; j++) {
        const parameter = parameters[j];
        // fix: 当为Object类型，属性为空，导致成为一个异常的对象
        if (parameter.name?.trim?.() === '') {
          continue;
        }
        const parameterIn = parameter?.in ?? '';
        let keyName = filterKeyName(parameter.name);
        // 路径参数 | url 参数
        switch (parameterIn) {
          // 兼容这个非标准的写法
          case 'formData': {
            if (requestKeyNameMemo.includes(keyName)) {
              continue;
            }
            const scm = parserSchema(
              parameter,
              undefined,
              keyName,
              undefined,
              {
                autoGenerateId: this.autoGenerateId,
                transformTypeMap: this.transformType ?? { a: '2'},
              }
            );
            if (scm == null) {
              break;
            }
            scm.label = filterDesc(scm.title ? scm.title : scm.description ? scm.description : '');
            // application/x-www-form-urlencoded 类型不属于真正的formData，这是v2独有的特征
            if (!apiMap.consumes?.includes?.('application/x-www-form-urlencoded')) {
              !api.formDataKeyNameList.includes(keyName) && api.formDataKeyNameList.push(keyName);
            }
            !requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);
            requestDataSchema.params.push(scm);
            break;
          }
          case 'body': {
            if (parameter.schema?.type === 'object' || parameter.schema?.type === 'array') {
              requestExtraDataSchemaWrap.value = processRequestSchema(
                requestDataSchema,
                requestSchemaRecord,
                parameter.schema,
                requestKeyNameMemo,
                {
                  autoGenerateId: this.autoGenerateId,
                  transformTypeMap: this.transformType,
                }
              );
              // application/json 数据
              // 如果是普通属性，合并平台属性，整理成一个对象
              // 还有可能是 'text/plain' 数据
              // { in: 'body', name: 'body' }
            } else if (parameter.schema?.type && parameter?.name) {
              const isTextPlain = apiMap.consumes?.includes('text/plain');
              const isOctetStream = apiMap.consumes?.includes('application/octet-stream');
              const isRootBody = isTextPlain || isOctetStream;
              const t = transformType(parameter.schema.type, {
                format: parameter?.schema?.format,
                emptyType: 'string',
                transformTypeMap: this.transformType,
              });
              const temp = parserSchema(
                parameter.schema,
                undefined,
                undefined,
                undefined,
                {
                  autoGenerateId: this.autoGenerateId,
                  transformTypeMap: this.transformType ?? { a: '1'},
                }
              );
              if (isRootBody) {
                requestExtraDataSchemaWrap.value = temp;
              } else {
                requestDataSchema.params.push(createSchema('object', {
                  params: temp ? [temp] : [],
                  id: this.generateId(),
                  keyName: parameter?.name,
                  title: filterDesc(parameter?.title),
                  description: filterDesc(parameter?.description),
                  type: t,
                  examples: parameter.examples ?? [],
                  rules: {
                    required: !!parameter?.required || !!parameter.schema?.required,
                  },
                  rawType: 'object',
                  format: parameter?.format ?? '',
                }));
              }
            }
            break;
          }
        }
      }
      // 合并 name[0].a.rule 属性。
      ParserKeyName2Schema.appendSchemeList(
        parserKeyName2SchemaWrap,
        requestDataSchema,
        requestKeyNameMemo,
      );
    }
  }

  // 请求参数
  private parseV3Param ({ api, apiMap, requestExtraDataSchemaWrap, requestDataSchema, requestKeyNameMemo, requestSchemaRecord }: {
    api: APIHelper.API,
    apiMap: any,
    requestExtraDataSchemaWrap: { value: APIHelper.Schema | null },
    requestDataSchema: APIHelper.Schema,
    requestKeyNameMemo: string[],
    requestSchemaRecord: JSONSchema4[],
  }) {
    // FormData数据
    const formDataSource = apiMap.requestBody?.content?.['multipart/form-data']?.schema;
    if (formDataSource) {
      api.requestContentType = ['multipart/form-data'];
      const formDataSchema = processRequestSchema(
        requestDataSchema,
        requestSchemaRecord,
        formDataSource,
        undefined,
        {
          autoGenerateId: this.autoGenerateId,
          transformTypeMap: this.transformType,
        }
      );
      // 记录表单数据key
      if (formDataSchema) {
        formDataSchema?.params?.forEach(({keyName}) => {
          api.formDataKeyNameList.push(keyName);
          requestKeyNameMemo.push(keyName);
        });
      }
    }
    const requestSchemaTypes = [
      'application/json',
      'text/json',
      'text/plain',
      'application/x-www-form-urlencoded',
      'application/xml',
      'application/octet-stream',
    ];
    for (const item of requestSchemaTypes) {
      const requestSchemaSource = apiMap.requestBody?.content?.[item]?.schema;
      if (requestSchemaSource) {
        api.requestContentType = [item];
        requestExtraDataSchemaWrap.value = processRequestSchema(
          requestDataSchema,
          requestSchemaRecord,
          requestSchemaSource,
          undefined,
          {
            autoGenerateId: this.autoGenerateId,
            transformTypeMap: this.transformType,
          }
        );
        break;
      }
    }
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
