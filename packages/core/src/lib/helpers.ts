import merge from 'lodash/merge';

import { APIHelper } from './types';

class AbstractSchema implements APIHelper.IAbstractSchema{
  id = '';
  type = '';
  keyName = '';
  title = '';
  description = '';
  label = '';
  rules = { required: false } as APIHelper.IAbstractSchema['rules'];
  examples = [] as APIHelper.IAbstractSchema['examples'];
  params = [] as APIHelper.IAbstractSchema['params'];
  enum = [] as APIHelper.IAbstractSchema['enum'];
}

class StringSchema extends AbstractSchema implements APIHelper.IStringSchema{
  type = 'string' as 'string';
  rules = {
    required: false,
    minLength: undefined,
    maxLength: undefined,
    pattern: undefined,
  } as APIHelper.IAbstractSchema['rules'];
}

class NumberSchema extends AbstractSchema implements APIHelper.INumberSchema{
  type = 'number' as 'number';
  rules = {
    required: false,
    multipleOf: undefined,
    minimum: undefined,
    maximum: undefined,
    exclusiveMinimum: undefined,
    exclusiveMaximum: undefined,
  } as APIHelper.INumberSchema['rules'];
}

class ObjectSchema extends AbstractSchema implements APIHelper.IObjectSchema{
  type = 'object' as 'object';
}

class ArraySchema extends AbstractSchema implements APIHelper.IArraySchema{
  type = 'array' as 'array';
  rules = {
    required: false,
    minLength: undefined,
    maxLength: undefined,
    uniqueItems: undefined,
  } as APIHelper.IArraySchema['rules'];
}

class BooleanSchema extends AbstractSchema implements APIHelper.IBooleanSchema{
  type = 'boolean' as 'boolean';
}

class NullSchema extends AbstractSchema implements APIHelper.INullSchema{
  type = 'null' as 'null';
}

class FileSchema extends AbstractSchema implements APIHelper.IFileSchema{
  type = 'File' as 'File';
}

class AnySchema extends AbstractSchema implements APIHelper.IAnySchema{
  type = 'any' as 'any';
}

class UnknownSchema extends AbstractSchema implements APIHelper.IUnknownSchema{
  type = 'unknown' as 'unknown';
}

export function createSchema(
  type: APIHelper.SchemaType | 'enum' | 'file',
  options?: Partial<AbstractSchema & Recordable>
): APIHelper.Schema {
  let instance = new AbstractSchema();
  switch (type) {
    case 'string': case 'enum' :{
      instance = new StringSchema();
      break;
    }
    case 'number':{
      instance = new NumberSchema();
      break;
    }
    case 'object':{
      instance = new ObjectSchema();
      break;
    }
    case 'array':{
      instance = new ArraySchema();
      break;
    }
    case 'boolean':{
      instance = new BooleanSchema();
      break;
    }
    case 'File': case 'file':{
      instance = new FileSchema();
      break;
    }
    case 'null':{
      instance = new NullSchema();
      break;
    }
    case 'any':{
      instance = new AnySchema();
      break;
    }
    case 'unknown':{
      instance = new UnknownSchema();
      break;
    }
  }
  if (Object.prototype.toString.call(options) === '[object Object]') {
    instance = merge(instance, options);
  }
  return instance as APIHelper.Schema;
}

export function createDocument(options?: Partial<APIHelper.Document & Recordable>): APIHelper.Document {
  let instance: APIHelper.Document = {
    id: '',
    title: '',
    description: '',
    version: '',
    documentVersion: '',
    documentServerUrl: '',
    basePath: '',
    categoryList: [] as APIHelper.Document['categoryList'],
  };
  if (Object.prototype.toString.call(options) === '[object Object]') {
    instance = merge(instance, options);
  }
  return instance;
}
export function createCategory(options?: Partial<APIHelper.Category & Recordable>): APIHelper.Category {
  let instance: APIHelper.Category = {
    id: '',
    name: '',
    description: '',
    apiList: [] as APIHelper.Category['apiList'],
  };
  if (Object.prototype.toString.call(options) === '[object Object]') {
    instance = merge(instance, options);
  }
  return instance;
}
export function createApi(options?: Partial<APIHelper.API & Recordable>): APIHelper.API {
  let instance: APIHelper.API = {
    id: '',
    title: '',
    description: '',
    label: '',
    docURL: '',
    path: '',
    method: '',
    formDataKeyNameList: [],
    pathParamKeyNameList: [],
    queryStringKeyNameList: [],
    requestDataSchema: null,
    requestExtraDataSchema: null,
    responseDataSchema: null,
  };
  if (Object.prototype.toString.call(options) === '[object Object]') {
    instance = merge(instance, options);
  }
  return instance;
}

export function transformType(type: string, format?: string | 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password', emptyType?: APIHelper.SchemaType): APIHelper.SchemaType {
  if (Array.isArray(type)) {
    type = type?.[0] ?? 'string';
  }
  const typeMap: Record<string, APIHelper.SchemaType> = {
    number: 'number',
    byte: 'number',
    short: 'number',
    int: 'number',
    integer: 'number',

    float: 'number',
    double: 'number',

    // 原则上下面三个类型都属于number类型，但是在他们最大精度位数上时，会超出js精度，导致精度丢失，故以字符串处理
    bigdecimal: 'string',
    long: 'string',
    'long long': 'string',

    string: 'string',
    char: 'string',
    date: 'string',
    dateTime: 'string',
    password: 'string',
    text: 'string',

    boolean: 'boolean',

    void: 'null',
    null: 'null',

    array: 'array',
    object: 'object',

    file: 'File',
    File: 'File',
    binary: 'File',
  }
  if (format === 'binary') {
    return 'File';
  }
  const typeValue = typeMap[type];
  return typeValue ? typeValue : emptyType ? emptyType : 'unknown';
}

export function getSchema(schema: APIHelper.Schema | null, path = '', clearKeyName = true): APIHelper.Schema | null {
  if (!schema || !path) {
    return schema;
  }
  const pathList = path.replace(/\[/gim, '.').replace(/\]/gim, '').split('.');
  if (pathList.length === 0) {
    return null;
  }
  let t: APIHelper.Schema = schema;
  let runCount = 0;
  const len = pathList.length;
  try {
    while (pathList.length) {
      const p = pathList.shift();
      for (let i = 0; i < t.params.length; i++) {
        const s = t.params[i];
        if (s.keyName === p) {
          t = s;
          runCount++;
          break;
        }
        if (i === t.params.length - 1) {
          return null;
        }
      }
    }
  } catch {
    return null;
  }

  if (clearKeyName) {
    t = { ...t };
    t.keyName = '';
  }

  if (runCount === len) {
    return t;
  }

  return null;
}
