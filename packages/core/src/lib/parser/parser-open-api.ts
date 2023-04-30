import { isPlainObject } from 'lodash';
import { OpenAPI } from 'openapi-types';
import { JSONSchema4 } from 'json-schema';

import {
  TSType,
  APIHelper,
} from '../types';
import {
  COMMENT_END_CODE,
  COMMENT_START_CODE,
  LINE_FEED_CODE
} from '../constant';
import { checkType, randomId } from '../utils/util';
import { validateOpenAPIDocument, validateSchema } from '../utils/validator';

const SwaggerParser = require('@apidevtools/swagger-parser');

export default class ParserOpenAPI {
  private autoGenerateId = true;

  constructor(autoGenerateId = true) {
    this.autoGenerateId = autoGenerateId;
  }

  async parser(documentList: Array<OpenAPI.Document>): Promise<Array<APIHelper.Document>> {
    const openAPIDocumentList: Array<OpenAPI.Document> = [];

    for (const document of documentList) {
      if (validateOpenAPIDocument(document)) {
        try {
          const openAPIDocument = await new SwaggerParser().dereference(document);
          if (validateOpenAPIDocument(openAPIDocument)) {
            openAPIDocumentList.push(openAPIDocument);
          }
        } catch (e) {
          // TODO 等待记录失败日志
          console.log();
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
        title: this.filterDesc(openAPIDocument.info.title),
        description: this.filterDesc(openAPIDocument.info.description),
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
          // 接口
          const api: APIHelper.API = {
            id: this.generateId(),
            summary: this.filterDesc(apiMap.summary),
            description: this.filterDesc(apiMap.description),
            path: apiDocument.basePath + path,
            method,
            formDataKeyNameList: [],
            pathParamKeyNameList: [],
            queryStringKeyNameList: [],
            requestDataSchema: null,
            requestExtraDataSchema: null,
            responseDataSchema: null,
          }
          let requestExtraDataSchema: APIHelper.Schema | null = null;

          /* ———————————————————————————————————————— 处理请求参数--开始 ———————————————————————————————————————— */
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
              const keyName = this.filterKeyName(parameter.name);
              // 路径参数 | url 参数
              if (parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'formData') {
                if (requestKeyNameMemo.includes(keyName)) {
                  continue;
                }
                // 字段
                const scm: APIHelper.Schema = {
                  examples: [],
                  id: this.generateId(),
                  title: '',
                  description: '',
                  keyName,
                  type: 'string',
                  params: [],
                  rules: {
                    required: false
                  }
                };

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
                scm.description = this.filterDesc(parameter.description);

                requestKeyNameMemo.push(keyName);
                requestDataSchema.params.push(scm);
              } else if (parameter.in === 'body') { // body 参数
                requestExtraDataSchema = this.processRequestSchema(
                  requestDataSchema,
                  requestSchemaRecord,
                  parameter.schema,
                  requestKeyNameMemo
                );
              } else if (parameter.in === 'header' || parameter.in === 'cookie') {
                // header 和 cookie信息，暂无特殊处理
              }
            }
          }

          // URL query 参数，query参数必须包含key，不存在不兼容问题
          this.processRequestSchema(
            requestDataSchema,
            requestSchemaRecord,
            apiMap.requestBody?.content?.['application/x-www-form-urlencoded']?.schema,
            requestKeyNameMemo,
            (schema) => {
              // 收集URL query 参数字段
              if (schema?.params) {
                schema?.params.forEach((itm) => itm?.keyName && api.queryStringKeyNameList.push(itm.keyName));
              }
            }
          );

          // Body 为 json参数
          requestExtraDataSchema = this.processRequestSchema(
            requestDataSchema,
            requestSchemaRecord,
            apiMap.requestBody?.content?.['application/json']?.schema
          );

          if (requestDataSchema.params.length > 0) {
            api.requestDataSchema = requestDataSchema;
          }
          api.requestExtraDataSchema = requestExtraDataSchema;
          /* ———————————————————————————————————————— 处理请求参数--结束 ———————————————————————————————————————— */

          /* ———————————————————————————————————————— 处理响应参数--开始 ———————————————————————————————————————— */
          const responsesSchemaSource = apiMap.responses?.['200']?.schema;
          if (validateSchema(responsesSchemaSource)) {
            api.responseDataSchema = this.parserSchema(responsesSchemaSource);
            if (api.responseDataSchema?.type === 'object') {
              api.responseDataSchema.keyName = '';
            }
          }
          /* ———————————————————————————————————————— 处理响应参数--开始 ———————————————————————————————————————— */

          // // 将该API添加到所依赖的模块中
          for (const tagName of apiMap.tags) {
            const recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get('未知分组');
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

  private parserSchema(
    schema: JSONSchema4,
    parentSchema: JSONSchema4 = {},
    keyName = '',
    memo: Map<JSONSchema4,
      APIHelper.Schema> = new Map()): APIHelper.Schema {
    if (memo.has(schema)) {
      return memo.get(schema) as APIHelper.Schema;
    }
    keyName = this.filterKeyName(keyName);
    const requiredFieldList = (Array.isArray(parentSchema.required) ? parentSchema.required : checkType(parentSchema.required, 'String') ? [parentSchema.required] : []) as string[];

    // 定义数据，收集类型，对象类型在下面在进行单独处理
    const resultSchema: APIHelper.Schema = {
      id: this.generateId(),
      title: this.filterDesc(schema.title),
      description: this.filterDesc(schema.description),
      keyName,
      type: this.transformType(schema.type as string),
      params: [],
      enum: [],
      examples: schema.examples ?? [],
      rules: {
        required: requiredFieldList.includes(keyName),
      }
    };

    // 枚举类型单独处理
    // 注意：过滤非对象类型
    if (schema.enum) {
      // @ts-ignore
      resultSchema.enum = schema.enum.filter((t) => !isPlainObject(t)) as string[];
    } else {
      // @ts-ignore
      delete resultSchema.enum;
    }
    // 其他类型处理
    // eslint-disable-next-line default-case
    switch (schema.type) {
      case 'string':
        const stringRules: APIHelper.IString['rules'] = {
          required: requiredFieldList.includes(keyName),
        };
        if (schema.minLength != null) stringRules.minLength = schema.minLength;
        if (schema.maxLength != null) stringRules.maxLength = schema.maxLength;
        if (schema.pattern != null) stringRules.pattern = schema.pattern;

        resultSchema.rules = stringRules;
        break;
      case 'number':
        const numberRules: APIHelper.INumber['rules'] = {
          required: requiredFieldList.includes(keyName),
        };
        if (schema.multipleOf != null) numberRules.multipleOf = schema.multipleOf;
        if (schema.minimum != null) numberRules.minimum = schema.minimum;
        if (schema.maximum != null) numberRules.maximum = schema.maximum;
        if (schema.exclusiveMinimum != null) numberRules.exclusiveMinimum = schema.exclusiveMinimum;
        if (schema.exclusiveMaximum != null) numberRules.exclusiveMaximum = schema.exclusiveMaximum;

        resultSchema.rules = numberRules;
        break;
      // 对象类型
      case 'object':
        if (schema.properties) {
          const schemaProperties = Object.entries(schema.properties);
          for (let i = 0; i < schemaProperties.length; i++) {
            const [childKeyName, childSchema] = schemaProperties[i];
            if (validateSchema(childSchema)) {
              resultSchema.params.push(this.parserSchema(childSchema, schema as JSONSchema4, childKeyName, memo));
            }
          }
        }
        break;
      // 数组类型
      case 'array':
        // 数组内存在多种类型
        if (Array.isArray(schema.items)) {
          for (const item of schema.items) {
            if (validateSchema(item)) {
              resultSchema.params.push(this.parserSchema(item, schema, '', memo));
            }
          }
          // 数组单一类型 schema.properties
        } else if (checkType(schema.items, 'Object')) {
          if (schema.items && validateSchema(schema.items)) {
            resultSchema.params.push(this.parserSchema(schema.items, schema, '', memo));
          }
        }
        const arrayRules: APIHelper.IArray['rules'] = {
          required: requiredFieldList.includes(keyName),
        };
        if (schema.minItems != null) arrayRules.minLength = schema.minItems;
        if (schema.maxItems != null) arrayRules.maxLength = schema.maxItems;
        if (schema.uniqueItems != null) arrayRules.uniqueItems = schema.uniqueItems;
        break;
    }

    memo.set(schema, resultSchema);

    return resultSchema;
  }

  private transformType(type: string): APIHelper.SchemaType {
    const typeMap: Record<string, string> = {
      int: 'number',
      integer: 'number',
      double: 'number',
      short: 'number',
      float: 'number',
      bigdecimal: 'number',

      long: 'string',
      string: 'string',
      byte: 'string',
      binary: 'string',
      boolean: 'boolean',
      date: 'string',
      dateTime: 'string',
      password: 'string',
      void: 'null',

      array: 'array',
      object: 'object',
    }

    const typeValue = (typeMap[type] ?? type) as APIHelper.SchemaType;

    return TSType.includes(typeValue) ? typeValue : 'unknown';
  }

  // 处理参数兼容，如果不兼容，返回schema，作为参数body
  private processRequestSchema(
    requestDataSchema: APIHelper.Schema,
    requestSchemaRecord: Array<JSONSchema4>,
    requestJSONSchemaSource: JSONSchema4,
    keyNameMemo: string[] = [],
    callback?: (schema: APIHelper.Schema) => void
  ) {
    if (!requestJSONSchemaSource || !validateSchema(requestJSONSchemaSource)) {
      return null;
    }
    const parsedSchema = this.parserSchema(requestJSONSchemaSource);
    // 类型相同可以整合，非重复
    if (parsedSchema?.type === 'object' && requestJSONSchemaSource && !requestSchemaRecord.includes(requestJSONSchemaSource)) {
      const requestSchemaList = parsedSchema?.params ?? [];
      requestSchemaList.forEach((item) => {
        if (!keyNameMemo.includes(item.keyName as string)) {
          keyNameMemo.push(item.keyName as string);
          requestDataSchema.params.push(item);
        }
      });
      requestSchemaRecord.push(requestJSONSchemaSource);
      callback?.(parsedSchema);
      return null;
    }

    // 类型不同
    if (parsedSchema && parsedSchema.type !== 'object') {
      callback?.(parsedSchema);
      return parsedSchema;
    }

    return null;
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
          description: this.filterDesc(tag?.description),
          // 分组下的接口列表
          apiList: [],
        })
      }
    }
    result.set('未知分组', {
      id: this.generateId(),
      // 分组名称
      name: '未知分组',
      // 分组描述
      description: '没有设置分组的接口集合',
      // 分组下的接口列表
      apiList: [],
    });
    return result;
  }

  private generateId(): string {
    return this.autoGenerateId ? randomId() : '';
  }

  private filterDesc(value = ''): string {
    value = value == null ? '' : value;
    // 换行符移除
    value = value.replace(/\n/gim, LINE_FEED_CODE);
    // 注释开始符号移除
    value = value.replace(/\/\*/gim, COMMENT_START_CODE);
    // 注释结束符号移除
    value = value.replace(/\*\//gim, COMMENT_END_CODE);
    return value;
  }

  private filterKeyName(value = ''): string {
    value = value == null ? '' : value;
    // keyName[0] => keyName
    value = value.replace(/\[.*?\]/gim, '');
    return value;
  }
}
