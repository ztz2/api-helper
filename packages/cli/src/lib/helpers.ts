// @ts-ignore
import stringify from 'qs/lib/stringify';
import type { APIHelper } from '@api-helper/core/lib/types';

export type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export type RequestFunctionRestArgsType<T> = T extends (params: any, ...args: infer K) => any ? K : any;

function checkType<T>(value: T, type: string): boolean{
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

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

interface RequestConfig {
  path: string;
  method: RequestMethod | string;
  formDataKeyNameList: APIHelper.API['formDataKeyNameList'];
  pathParamKeyNameList: APIHelper.API['pathParamKeyNameList'];
  queryStringKeyNameList: APIHelper.API['queryStringKeyNameList'];
  requestContentType?: APIHelper.API['requestContentType'];
  responseContentType?: APIHelper.API['responseContentType'];
  headers?: APIHelper.API['headers'];
  cookies?: APIHelper.API['cookies'];
};

export interface RequestFunctionConfig extends RequestConfig {
  // 请求路径，可以看做是URL，该资源路径包含了url参数，合并了路径参数等
  path: string;
  // 源请求路径，没有经过任何处理
  rawPath: string;
  // HTTP请求方法
  method: RequestMethod
  // 经过处理后的请求数据【不包含：路径参数，URL参数，表单数据】，可以看做是post请求，body为JSON的数据
  // 如果有文件上传，就是FormData对象，可以使用 instanceof FormData 来判断是否为表单数据，或者使用hasFormData判断
  data: string | number | boolean | null | undefined | Record<any, any> | FormData;
  // 是否包含表单数据
  hasFormData: boolean;
  // 原始数据对象
  rawData: unknown;
  // 和上面不兼容冲突的额外数据。
  // 例子上面数据是URL参数，用对象表示 { username: 'ztz2' }，不巧的是，还有body参数Array<string>类型，此时对象和数组不能合并到一起，body数据将会提取到 extraData 中
  // 所有当 rawExtraData 存在值的时候，说明参数不能兼容到一个对象中，建议重新设计接口参数，确保能符合JSON规范
  rawExtraData?: unknown;
}

export function checkMiniProgramEnv(): boolean {
  try {
    const ua = navigator?.userAgent?.toLowerCase() ?? '';
    // 微信小程序环境
    if (
      (ua.match(/micromessenger/i) && ua.match(/miniprogram/i)) || // @ts-ignore
      window?.__wxjs_environment === 'miniprogram'
    ) {
      return true;
    }
    // 百度小程序
    if (/swan\//.test(ua) || /^webswan-/.test(window?.name)) {
      return true;
    }
    // 支付宝小程序
    if (/alipayclient/i.test(ua)) {
      return true;
    }
    // 抖音小程序
    if (/toutiaomicroapp/i.test(ua)) {
      return true;
    }
  } catch (e) {
    return false;
  }

  return false;
}

const hasNativeFormData = typeof FormData !== 'undefined';
const hasNodeFormData = !hasNativeFormData && global?.['process']?.['versions']?.['node'] != null;
const FormDataPolyfill: typeof FormData | undefined = hasNativeFormData ? FormData : hasNodeFormData ? eval(`require('form-data')`) : undefined;
const isMiniProgramEnv = checkMiniProgramEnv();

function omit<T>(obj: Recordable, keys: string[]) {
  const result: Recordable = {};
  for (let key in obj) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

export function processRequestFunctionConfig<T, R>(data: T, extraData: R, requestConfig: RequestConfig) {
  const requestFunctionConfig: RequestFunctionConfig = {
    ...requestConfig,
    path: requestConfig.path,
    rawPath: requestConfig.path,
    method: requestConfig.method as RequestMethod,
    data: undefined as any,
    rawData: data,
    rawExtraData: extraData,
    hasFormData: false,
  };

  let isBinary = false;
  try {
    isBinary = data instanceof File || data instanceof Blob;
  } catch {}
  if (data == null || typeof data !== 'object' || isBinary) {
    requestFunctionConfig.data = data;
    return requestFunctionConfig;
  }

  const queryParams: Recordable = {};
  const cloneData = (checkType(data, 'Object') ? { ...data } : {}) as Recordable;
  const isFormUrlencodedType = requestConfig?.requestContentType?.includes?.('application/x-www-form-urlencoded');
  const isJSONCodeType = requestConfig?.requestContentType?.some((item) => ['application/json', 'text/json'].includes(item));
  let formData: any;

  let appendFormData = (key: string, val: any) => {};
  if (!isMiniProgramEnv) {
    if (FormDataPolyfill != null) {
      formData = new FormDataPolyfill();
    } else {
      console.warn('提示：当前环境不支持 FormData，自动忽略FormData字段处理！');
    }
    appendFormData = (key: string, v: any) => {
      if (FormDataPolyfill != null) {
        const val = v instanceof FormDataItem ? v.get() : v;
        if (val instanceof File) {
          (formData as FormData).append(key, val, val.name);
        } else if (val instanceof Blob) {
          (formData as FormData).append(key, val, 'blob');
        } else {
          (formData as FormData).append(key, val);
        }
      }
    }
  }
  // 数据处理
  for (const [k, v] of Object.entries(cloneData)) {
    // 路径参数处理
    if (requestConfig.pathParamKeyNameList?.includes(k)) {
      // 合并路径参数
      requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp(`\{${k}\}`, 'g'), v);
      delete cloneData[k];
    }
    // FormData处理
    if (!isMiniProgramEnv && (v instanceof FormDataItem || requestConfig.formDataKeyNameList?.includes(k))) {
      requestFunctionConfig.hasFormData = true;
      const val = v instanceof FormDataItem ? v.get() : v;
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
    // URL 参数处理
    if (requestConfig.queryStringKeyNameList?.includes(k)) {
      queryParams[k] = v;
      delete cloneData[k];
    }
  }
  // 合并URL参数
  const queryString = stringify(queryParams, { allowDots: true });
  if (queryString.length) {
    requestFunctionConfig.path += `?${queryString}`;
  }
  // application/x-www-form-urlencoded 单独处理
  if ((!isJSONCodeType && isFormUrlencodedType) || (isFormUrlencodedType && requestConfig.method?.toLowerCase() === 'get')) {
    const formUrlencodedData = omit((checkType(data, 'Object') ? data : {}), [
      ...requestConfig.formDataKeyNameList,
      ...requestConfig.queryStringKeyNameList,
      ...requestConfig.pathParamKeyNameList,
    ]);
    const formUrlencodedStr = stringify(formUrlencodedData);
    if (formUrlencodedStr) {
      const keyText = requestFunctionConfig.path.includes('?') ? '&' : '?';
      if (requestConfig.method.toLowerCase() === 'get') {
        requestFunctionConfig.path += `${keyText}${formUrlencodedStr}`;
      } else {
        requestFunctionConfig.data = formUrlencodedStr;
      }
    }
  } else {
    // 合并Data
    if (requestFunctionConfig.hasFormData) {
      requestFunctionConfig.data = formData;
      // @ts-ignore
    } else if (data instanceof FormDataPolyfill) {
      requestFunctionConfig.data = data;
    } else {
      requestFunctionConfig.data = cloneData;
    }
  }

  return requestFunctionConfig;
}
