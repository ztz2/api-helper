// @ts-ignore
import stringify from 'qs/lib/stringify';
import type { APIHelper } from '@api-helper/core/lib/types';

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

export type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

export type RequestFunctionRestArgsType<T> = T extends (params: any, ...args: infer K) => any ? K : any;

export type RequestFunctionConfig = {
  // 请求路径，可以看做是URL，该资源路径包含了url参数，合并了路径参数等
  path: string;
  // 源请求路径，没有经过任何处理
  sourcePath: string;
  // HTTP请求方法
  method: RequestMethod
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

export function processRequestFunctionConfig<T extends object, R>(data: T, extraData: R, requestConfig: {
  // 请求资源路径地址
  path: string;
  // 请求方法
  method: RequestMethod | string;
  // 表单参数字段集合
  formDataKeyNameList: APIHelper.API['formDataKeyNameList'];
  // 路径参数字段集合
  pathParamKeyNameList: APIHelper.API['pathParamKeyNameList'];
  // URL参数字段集合
  queryStringKeyNameList: APIHelper.API['queryStringKeyNameList'];
}): RequestFunctionConfig {
  const requestFunctionConfig: RequestFunctionConfig = {
    path: requestConfig.path,
    sourcePath: requestConfig.path,
    method: requestConfig.method as RequestMethod,
    data: undefined,
    rowData: data,
    rowExtraData: extraData,
    hasFormData: false,
  };

  const queryParams: Recordable = {};
  const cloneData = (checkType(data, 'Object') ? { ...data } : {}) as Recordable;

  let formData: any;
  let appendFormData = (key: string, val: any) => {};
  if (!isMiniProgramEnv) {
    if (FormDataPolyfill != null) {
      formData = new FormDataPolyfill();
    } else {
      console.warn(new Error('当前环境不支持 FormData'));
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
    if (!isMiniProgramEnv && (v instanceof FormDataItem || requestConfig.formDataKeyNameList.includes(k))) {
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
