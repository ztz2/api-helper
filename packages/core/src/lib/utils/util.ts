import qs from 'qs';
import { JSONSchema4 } from 'json-schema';
import cloneDeep from 'lodash/cloneDeep';
import isPlainObject from 'lodash/isPlainObject';

import { APIHelper } from '../types';
import {
  TS_TYPE,
  LINE_FEED_CODE,
  COMMENT_END_CODE,
  COMMENT_START_CODE,
} from '../constant';
import { validateSchema } from './validator';

export function checkType<T>(value: T, type: string): boolean{
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

export function isHttp<T>(value: T) {
  return /^(http(s?):\/\/.*?)($|\/)/.test(String(value));
}

export function filterEmpty(value: any) {
  return (value !== '' && value != null) ? value : '';
}

export function Try<T>(fn: () => T, err: (e: Error) => any): T {
  try {
    return fn()
  } catch (e) {
    return err(e as Error)
  }
}

export function arrayUniquePush(array: Array<any>, item: any) {
  if (!array.includes(item)) {
    array.push(item);
  }
  return array.length;
}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function randomId() {
  return uuid();
}

// 过滤 keyName 为空的数据，并且合并 array<object>
export function filterSchema(schemaList: APIHelper.Schema[], deepClone = false): APIHelper.Schema[] {
  if (deepClone) {
    schemaList = cloneDeep(schemaList);
  }
  return schemaList;
}

export function mergeUrl(...args: string[]) {
  let queryParams = {};
  let url = args.reduce((value: string, itm: string) => {
    if (value.includes('?')) {
      const sp = value.split('?');
      value = sp[0];
      queryParams = Object.assign({}, queryParams, qs.parse(sp[1]));
    }
    if (itm.includes('?')) {
      const sp = itm.split('?');
      itm = sp[0];
      queryParams = Object.assign({}, queryParams, qs.parse(sp[1]));
    }
    if (value.endsWith('/') && itm.startsWith('/')) {
      itm = itm.slice(1);
    }
    return value + itm;
  }, '');

  // URL参数
  let queryParamsStr = qs.stringify(queryParams);
  if (queryParamsStr) {
    queryParamsStr = `?${queryParamsStr}`;
  }

  return `${url}${queryParamsStr}`;
}

export function filterDesc(value = ''): string {
  value = value == null ? '' : value;
  // 换行符移除
  value = value.replace(/\n/gim, LINE_FEED_CODE);
  // 注释开始符号移除
  value = value.replace(/\/\*/gim, COMMENT_START_CODE);
  // 注释结束符号移除
  value = value.replace(/\*\//gim, COMMENT_END_CODE);
  return value;
}

export function filterKeyName(value = ''): string {
  value = value == null ? '' : value;
  // keyName[0] => keyName
  value = value.replace(/\[.*?\]/gim, '');
  return value;
}

export function transformType(type: string): APIHelper.SchemaType {
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

  return TS_TYPE.includes(typeValue) ? typeValue : 'unknown';
}

export function parserSchema(
  schema: JSONSchema4,
  parentSchema: JSONSchema4 = {},
  keyName = '',
  memo: Map<JSONSchema4, null> = new Map(),
  options: {
    autoGenerateId: boolean;
  } = {
    autoGenerateId: true
  }
): APIHelper.Schema | null {
  if (!schema) {
    return null;
  }

  if (memo.has(schema)) {
    return memo.get(schema) as null;
  }

  memo.set(schema, null);

  keyName = filterKeyName(keyName);
  const requiredFieldList = (Array.isArray(parentSchema.required) ? parentSchema.required : checkType(parentSchema.required, 'String') ? [parentSchema.required] : []) as string[];

  // 定义数据，收集类型，对象类型在下面在进行单独处理
  const resultSchema: APIHelper.Schema = {
    id: options.autoGenerateId ? randomId() : '',
    title: filterDesc(schema.title),
    description: filterDesc(schema.description),
    keyName,
    type: transformType(schema.type as string),
    params: [],
    enum: [],
    examples: schema.examples ?? [],
    rules: {
      required: requiredFieldList.includes(keyName),
    }
  };

  try {
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
              const tmp = parserSchema(
                childSchema,
                schema as JSONSchema4,
                childKeyName,
                memo,
                options,
              );
              tmp && resultSchema.params.push(tmp);
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
              const tmp = parserSchema(item, schema, '', memo, options);
              if (tmp) {
                resultSchema.params.push(tmp);
              }
            }
          }
          // 数组单一类型 schema.properties
        } else if (checkType(schema.items, 'Object')) {
          if (schema.items && validateSchema(schema.items)) {
            const tmp = parserSchema(schema.items, schema, '', memo, options);
            if (tmp) {
              resultSchema.params.push(tmp);
            }
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
  } catch (e) {}

  return resultSchema;
}

// 处理参数兼容，如果不兼容，返回schema，作为参数body
export function processRequestSchema(
  requestDataSchema: APIHelper.Schema,
  requestSchemaRecord: Array<JSONSchema4>,
  requestJSONSchemaSource: JSONSchema4,
  keyNameMemo: string[] = [],
  options: {
    autoGenerateId: boolean,
    callback?(parsedSchema: APIHelper.Schema): void
  } = {
    autoGenerateId: true,
  }
) {
  if (!requestJSONSchemaSource || !validateSchema(requestJSONSchemaSource)) {
    return null;
  }
  const parsedSchema = parserSchema(
    requestJSONSchemaSource,
    undefined,
    undefined,
    undefined,
    options
  );
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
    options?.callback?.(parsedSchema);
    return parsedSchema;
  }

  // 类型不同
  if (parsedSchema && parsedSchema.type !== 'object') {
    options?.callback?.(parsedSchema);
    return parsedSchema;
  }

  return null;
}

export function uniqueRequestDataRootSchema(api: APIHelper.API) {
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
  return api;
}

export function deepAddSchemaRules(schema: null | APIHelper.Schema | APIHelper.Schema[], rules: Recordable = {}) {
  schema = schema == null ? [] : Array.isArray(schema) ? schema : [schema];
  if (Object.keys(rules).length === 0) {
    return undefined;
  }
  const memo: APIHelper.Schema[] = [];
  const deepLoop = (s: APIHelper.Schema[]) => {
    for (const itm of s) {
      if (!itm || memo.includes(itm)) {
        continue;
      }
      memo.push(itm);
      itm.rules = Object.assign({}, itm.rules, rules);
      deepLoop(itm.params);
    }
  }
  deepLoop(schema);
}

// 请求数据通用处理
export function processRequestSchemaPipeline(
  api: APIHelper.API,
  requestDataSchema: APIHelper.Schema,
  requestExtraDataSchema: APIHelper.Schema | null,
  options: Recordable
) {
  if (requestDataSchema.params.length === 0) {
    api.requestDataSchema = requestExtraDataSchema;
  } else if (requestDataSchema.params.length > 0) {
    api.requestDataSchema = requestDataSchema;
  } else {
    api.requestExtraDataSchema = requestExtraDataSchema;
  }

  // 请求数据根对象属性去重
  uniqueRequestDataRootSchema(api);
  // 请求数据规则处理
  if (options.requiredRequestField) {
    deepAddSchemaRules(api.requestDataSchema, {
      required: true
    });
    deepAddSchemaRules(api.requestExtraDataSchema, {
      required: true
    });
  }
  return api;
}

// 响应数据通用处理
export function processResponseSchemaPipeline(api: APIHelper.API, options: Recordable) {
  if (options.requiredResponseField) {
    deepAddSchemaRules(api.responseDataSchema, {
      required: true
    });
  }
}
