import { stringify } from 'qs';

import { APIHelper } from './types';
import { checkType } from './utils/util';

export class FormDataItem<T> {
  private value: T | undefined;
  constructor(value?: T) {
    this.value = value;
  }
  get() {
    return this.value;
  }
  set(value: T) {
    this.value = value;
  }
}

export function getSchema(schema: APIHelper.Schema | null, path = '', clearKeyName = true): APIHelper.Schema | null {
  if (!schema || !path) {
    return null;
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

export type RequestFunctionRestArgsType<T> = T extends (params: any, ...args: infer K) => any ? K : any;

export type RequestFunctionConfig = {
  // 请求路径，可以看做是URL
  path: string;
  // HTTP请求方法
  method: string;
  // 经过处理后的请求数据【不包含：路径参数，URL参数，表单数据】，可以看做是post请求，body为JSON的数据
  // 如果有文件上传，就是FormData对象，可以使用 instanceof FormData 来判断是否为表单数据，或者使用hasFormData判断
  data: Record<string, any> | FormData | undefined;
  // 是否包含表单数据
  hasFormData: boolean;
  // 原始数据对象
  rowData: unknown;
  // 和上面不兼容冲突的额外数据。
  // 例子上面数据是URL参数，用对象表示 { username: 'ztz2' }，不巧的是，还有body参数Array<string>类型，此时对象和数组不能合并到一起，body数据将会提取到 extraData 中
  // 所有当 rowExtraData 存在值的时候，说明参数不能兼容到一个对象中，建议重新设计接口参数，确保能符合JSON规范
  rowExtraData?: unknown;
}
export function processRequestFunctionConfig<T extends object, R>(data: T, extraData: R, requestConfig: {
  path: string;
  method: string;
  // 表单参数字段集合
  formDataKeyNameList: APIHelper.API['formDataKeyNameList'];
  // 路径参数字段集合
  pathParamKeyNameList: APIHelper.API['pathParamKeyNameList'];
  // URL参数字段集合
  queryStringKeyNameList: APIHelper.API['queryStringKeyNameList'];
}): RequestFunctionConfig {
  const requestFunctionConfig = {
    data: null,
    rowData: data,
    rowExtraData: extraData,
    path: requestConfig.path,
    method: requestConfig.method
  } as any;

  const queryParams: Recordable = {};
  const cloneData = (checkType(data, 'Object') ? { ...data } : {}) as  Recordable;
  const hasNativeFormData = typeof FormData !== 'undefined';
  const hasNodeFormData = !hasNativeFormData && global?.['process']?.['versions']?.['node'] != null;
  const FormDataPolyfill: typeof FormData | undefined = hasNativeFormData ? FormData : hasNodeFormData ? eval(`require('form-data')`) : undefined;

  if (FormDataPolyfill == null) {
    throw new Error('当前环境不支持 FormData');
  }

  const formData = new FormDataPolyfill();
  const appendFormData = (key: string, val: any) => {
    formData.append(key, val, val instanceof File ? val.name : val instanceof Blob ? 'blob' : undefined);
  }

  // 数据处理
  for (const [k, v] of Object.entries(cloneData)) {
    // FormData处理
    if (v instanceof FormDataItem || requestConfig.formDataKeyNameList.includes(k)) {
      const val = v.get();
      requestFunctionConfig.hasFormData = true;
      if (Array.isArray(val)) {
        val.forEach((p, index) => {
          appendFormData(`${k}[${index}]`, p);
        });
      } else {
        appendFormData(k, v);
      }
      delete cloneData[k];
      continue;
    }
    // 路径参数处理
    if (requestConfig.pathParamKeyNameList?.includes(k)) {
      // 合并路径参数
      requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp(`\{${k}\}`, 'g'), v);
      delete cloneData[k];
    }
    // URL 参数处理
    if (requestConfig.queryStringKeyNameList?.includes(k)) {
      queryParams[k] = v;
      delete cloneData[k];
    }
  }

  // 合并URL参数
  const queryString = stringify(queryParams);
  if (queryString.length) {
    requestFunctionConfig.path += `?${queryString}`;
  }

  // 合并Data
  if (requestFunctionConfig.hasFormData) {
    requestFunctionConfig.data = formData;
  } else if (extraData) {
    requestFunctionConfig.data = extraData;
  } else {
    requestFunctionConfig.data = cloneData;
  }

  return requestFunctionConfig;
}
