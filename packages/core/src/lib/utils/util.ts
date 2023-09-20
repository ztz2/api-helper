import qs from 'qs';
import cloneDeep from 'lodash/cloneDeep';
import { JSONSchema4 } from 'json-schema';
import isPlainObject from 'lodash/isPlainObject';

import { APIHelper } from '../types';
import {
  LINE_FEED_CODE,
  COMMENT_END_CODE,
  COMMENT_START_CODE,
  LINE_FEED_CODE_MAC
} from '../constant';
import { validateSchema } from './validator';
import { createSchema, transformType } from '../helpers';

export function pushArray<T, R>(target: T, value: R): T {
  [].push.apply(target, value as any);
  return target;
}

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

export function randomChar(size = 16) {
  const str = uuid().replace(/-/gim, '').toLocaleLowerCase();
  size = Number.parseInt((size > str.length ? str.length : size < 1 ? 1 : size) as unknown as string, 10);
  return str.slice(str.length - size);
}

export function randomId(size?: number) {
  return randomChar(size);
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
  // 换行符移除-windows
  value = value.replace(/\n/gim, LINE_FEED_CODE);
  // 换行符移除-mac
  value = value.replace(/\r/gim, LINE_FEED_CODE_MAC);
  // 注释开始符号移除
  value = value.replace(/\/\*/gim, COMMENT_START_CODE);
  // 注释结束符号移除
  value = value.replace(/\*\//gim, COMMENT_END_CODE);
  return value;
}

export function filterSchemaRoot(schemaList: Array<APIHelper.Schema>) {
  if (!schemaList) {
    return [];
  }
  const result = [];
  for (const schema of schemaList) {
    result.push(cloneDeep({
      ...schema,
      params: [],
    }));
  }
  return result;
}

// 预留，用于统一处理keyName，目前不需要进行任何处理。
export function filterKeyName<T>(v: T) {
  return v;
}

export function filterSchemaRequired(schemaList: Array<APIHelper.Schema>) {
  if (!schemaList) {
    return [];
  }
  function dfs(ls: Array<APIHelper.Schema>) {
    const result = [];
    for (const itm of ls) {
      if (itm.rules.required) {
        itm.params = dfs(itm.params);
        result.push(itm);
      }
    }
    return result;
  }
  return dfs(cloneDeep(schemaList));
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
  const resultSchema = createSchema(transformType(schema.type as string), {
    id: options.autoGenerateId ? randomId() : '',
    title: filterDesc(schema.title),
    description: filterDesc(schema.description),
    keyName,
    type: transformType(schema.type as string, schema.format),
    examples: schema.examples ?? [],
    rules: {
      required: requiredFieldList.includes(keyName),
    }
  })
  resultSchema.label = resultSchema.title ? resultSchema.title : resultSchema.description ? resultSchema.description : '';

  try {
    // 枚举类型单独处理，过滤非对象类型
    if (schema.enum) {
      resultSchema.enum = schema.enum.filter((t) => !isPlainObject(t)) as string[];
    }
    // 其他类型处理
    // eslint-disable-next-line default-case
    switch (schema.type) {
      case 'string':
        const stringRules: APIHelper.IStringSchema['rules'] = {
          required: requiredFieldList.includes(keyName),
        };
        if (schema.minLength != null) stringRules.minLength = schema.minLength;
        if (schema.maxLength != null) stringRules.maxLength = schema.maxLength;
        if (schema.pattern != null) stringRules.pattern = schema.pattern;

        resultSchema.rules = stringRules;
        break;
      case 'number':
        const numberRules: APIHelper.INumberSchema['rules'] = {
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
        const arrayRules: APIHelper.IArraySchema['rules'] = {
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

export function deepAddSchemaRules(schema: null | APIHelper.Schema | APIHelper.SchemaList, rules: Recordable = {}) {
  schema = schema == null ? [] : Array.isArray(schema) ? schema : [schema];
  if (Object.keys(rules).length === 0) {
    return undefined;
  }
  const memo: APIHelper.SchemaList = [];
  const deepLoop = (s: APIHelper.SchemaList) => {
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

// 判断是否为对象类型的Schema, Array | Object
export function isSchemaObject(schema: APIHelper.Schema | null) {
  if (!schema) {
    return false;
  }
  return !schema.keyName && (schema.type === 'array' || schema.type === 'object');
}

// 判断是否是原始值的Schema。
export function isSchemaPrimitiveValue(schema: APIHelper.Schema | null) {
  if (!schema) {
    return false;
  }
  return !schema.keyName && schema.type !== 'array' && schema.type !== 'object';
}

/**
 * @description 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
 * @example 例子说明：
    源数据：[
            { keyName: '', type: 'string' },
            { keyName: 'username', type: 'string' }
          ]
    过滤后：[
            { keyName: 'username', type: 'string' }
          ]
 * @param schema { schema: APIHelper.Schema | APIHelper.SchemaList | null } schema对象
 * @return APIHelper.Schema | APIHelper.SchemaList | null
 */
export function filterSchemaPrimitiveValue<T>(schema: APIHelper.Schema | APIHelper.SchemaList | null): T {
  if (!schema) {
    return schema as unknown as T;
  }
  const schemaList: Array<APIHelper.Schema> = Array.isArray(schema) ? schema : [schema];
  const filter = (scmList: Array<APIHelper.Schema>, memo: Map<Array<APIHelper.Schema>, Array<APIHelper.Schema>> = new Map()) => {
    if (memo.has(scmList)) {
      return memo.get(scmList) as Array<APIHelper.Schema>;
    }
    const result: Array<APIHelper.Schema> = [];
    memo.set(scmList, result);
    for (const scm of scmList) {
      if (isSchemaPrimitiveValue(scm)) {
        continue;
      }
      if (scm.params?.length > 0) {
        scm.params = filter(scm.params, memo);
      }
      result.push(scm);
    }
    return result;
  }
  const res = filter(schemaList);
  if (Array.isArray(schema)) {
    return res as unknown as T;
  }
  return schemaList[0] as unknown as T;
}

export function getErrorMessage<T extends string | Error & { msg?: string }>(error: T, prefix = '', postfix = ''): string {
  function mergeMessage<T>(msg: T) {
    return msg ? `${prefix}${msg}${postfix}` : '';
  }
  if (!error) {
    return '';
  }
  if (typeof error === 'string') {
    return mergeMessage(error);
  }
  if (error?.message) {
    return mergeMessage(error.message);
  }
  if (error?.msg) {
    return mergeMessage(error.msg);
  }
  return '';
}

export function formatDate(date: number | string | Date, format = 'YYYY-MM-dd HH:mm:ss') {
  date = !(date instanceof Date) ? new Date(date) : date;
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  if (/(Y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) { // @ts-ignore
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k] as string).substr(('' + o[k]).length)));
    }
  }
  return format;
}
