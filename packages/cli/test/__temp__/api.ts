/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/** ————————————— 警告：该文件由 api-helper 自动生成，切记不能对文件进行修改（因为生成之后内容将会覆盖该文件，如果自动生成代码不满足业务，提PR） —————————————  **/

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,
  processRequestFunctionConfig,
} from '@api-helper/core/es/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from './request';
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;

/**
 * @描述 【请求数据接口定义】普通body请求-put】
 * @请求头 PUT http://127.0.0.1:17812/body/bodyPut
 */
export interface Ihttp_127_0_0_1_17812BodyBodyPutRequestByPut {
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 【响应数据接口定义】普通body请求-put】
 * @请求头 PUT http://127.0.0.1:17812/body/bodyPut
 */
export interface Ihttp_127_0_0_1_17812BodyBodyPutResponseByPut {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 普通body请求-put
 * @请求信息 [ PUT ] http://127.0.0.1:17812/body/bodyPut
 */
export function http_127_0_0_1_17812BodyBodyPutByPut(
  data: Ihttp_127_0_0_1_17812BodyBodyPutRequestByPut,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812BodyBodyPutResponseByPut>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812BodyBodyPutByPut.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812BodyBodyPutByPut.requestConfig = {
  path: 'http://127.0.0.1:17812/body/bodyPut',
  method: 'put',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】body请求】
 * @请求头 POST http://127.0.0.1:17812/user/{deviceId}/body
 */
export interface Ihttp_127_0_0_1_17812UserDeviceIdBodyRequestByPost {
  // 设备id
  deviceId: string;
}
/**
 * @描述 【响应数据接口定义】body请求】
 * @请求头 POST http://127.0.0.1:17812/user/{deviceId}/body
 */
export interface Ihttp_127_0_0_1_17812UserDeviceIdBodyResponseByPost {
  // 用户信息
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 body请求
 * @请求信息 [ POST ] http://127.0.0.1:17812/user/{deviceId}/body
 */
export function http_127_0_0_1_17812UserDeviceIdBodyByPost(
  data: Ihttp_127_0_0_1_17812UserDeviceIdBodyRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812UserDeviceIdBodyResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserDeviceIdBodyByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserDeviceIdBodyByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/user/{deviceId}/body',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['deviceId'],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】body请求1】
 * @请求头 POST http://127.0.0.1:17812/user/{deviceId}/body1
 */
export interface Ihttp_127_0_0_1_17812UserDeviceIdBody1RequestByPost {
  // 设备id
  deviceId: string;
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 【响应数据接口定义】body请求1】
 * @请求头 POST http://127.0.0.1:17812/user/{deviceId}/body1
 */
export interface Ihttp_127_0_0_1_17812UserDeviceIdBody1ResponseByPost {
  // 用户信息
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 body请求1
 * @请求信息 [ POST ] http://127.0.0.1:17812/user/{deviceId}/body1
 */
export function http_127_0_0_1_17812UserDeviceIdBody1ByPost(
  data: Ihttp_127_0_0_1_17812UserDeviceIdBody1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812UserDeviceIdBody1ResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserDeviceIdBody1ByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserDeviceIdBody1ByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/user/{deviceId}/body1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['deviceId'],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】json参数查询1】
 * @请求头 POST http://127.0.0.1:17812/user/getRequest1
 */
export interface Ihttp_127_0_0_1_17812UserGetRequest1RequestByPost {
  cade: string;
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 【响应数据接口定义】json参数查询1】
 * @请求头 POST http://127.0.0.1:17812/user/getRequest1
 */
export interface Ihttp_127_0_0_1_17812UserGetRequest1ResponseByPost {
  // 用户信息
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 json参数查询1
 * @请求信息 [ POST ] http://127.0.0.1:17812/user/getRequest1
 */
export function http_127_0_0_1_17812UserGetRequest1ByPost(
  data: Ihttp_127_0_0_1_17812UserGetRequest1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812UserGetRequest1ResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserGetRequest1ByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserGetRequest1ByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/user/getRequest1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['cade']
};

/**
 * @描述 【请求数据接口定义】创建用户-createOne、根据姓名创建用户1】
 * @请求头 POST http://127.0.0.1:17812/user/createOne
 */
export interface Ihttp_127_0_0_1_17812UserCreateOneRequestByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @描述 【响应数据接口定义】创建用户-createOne、根据姓名创建用户1】
 * @请求头 POST http://127.0.0.1:17812/user/createOne
 */
export interface Ihttp_127_0_0_1_17812UserCreateOneResponseByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @描述 创建用户-createOne、根据姓名创建用户1
 * @请求信息 [ POST ] http://127.0.0.1:17812/user/createOne
 */
export function http_127_0_0_1_17812UserCreateOneByPost(
  data: Ihttp_127_0_0_1_17812UserCreateOneRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812UserCreateOneResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserCreateOneByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserCreateOneByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/user/createOne',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】创建用户-Schema、根据姓名创建用户1】
 * @请求头 POST http://127.0.0.1:17812/user/createOneSchema
 */
export interface Ihttp_127_0_0_1_17812UserCreateOneSchemaRequestByPost {
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 【响应数据接口定义】创建用户-Schema、根据姓名创建用户1】
 * @请求头 POST http://127.0.0.1:17812/user/createOneSchema
 */
export interface Ihttp_127_0_0_1_17812UserCreateOneSchemaResponseByPost {
  // 用户信息
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 创建用户-Schema、根据姓名创建用户1
 * @请求信息 [ POST ] http://127.0.0.1:17812/user/createOneSchema
 */
export function http_127_0_0_1_17812UserCreateOneSchemaByPost(
  data: Ihttp_127_0_0_1_17812UserCreateOneSchemaRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812UserCreateOneSchemaResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserCreateOneSchemaByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserCreateOneSchemaByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/user/createOneSchema',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】创建用户1、根据姓名创建用户1】
 * @请求头 POST http://127.0.0.1:17812/user/createOne1
 */
export interface Ihttp_127_0_0_1_17812UserCreateOne1RequestByPost {
  id?: string;
  name?: string;
}
/**
 * @描述 【响应数据接口定义】创建用户1、根据姓名创建用户1】
 * @请求头 POST http://127.0.0.1:17812/user/createOne1
 */
export interface Ihttp_127_0_0_1_17812UserCreateOne1ResponseByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @描述 创建用户1、根据姓名创建用户1
 * @请求信息 [ POST ] http://127.0.0.1:17812/user/createOne1
 */
export function http_127_0_0_1_17812UserCreateOne1ByPost(
  data: Ihttp_127_0_0_1_17812UserCreateOne1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812UserCreateOne1ResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserCreateOne1ByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserCreateOne1ByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/user/createOne1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['id', 'name']
};

/**
 * @描述 【请求数据接口定义】单纯文件上传、单纯文件上传，无任何参数】
 * @请求头 POST http://127.0.0.1:17812/file/upload
 */
export interface Ihttp_127_0_0_1_17812FileUploadRequestByPost {
  file: string;
}
/**
 * @描述 【响应数据接口定义】单纯文件上传、单纯文件上传，无任何参数】
 * @请求头 POST http://127.0.0.1:17812/file/upload
 */
export interface Ihttp_127_0_0_1_17812FileUploadResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 单纯文件上传、单纯文件上传，无任何参数
 * @请求信息 [ POST ] http://127.0.0.1:17812/file/upload
 */
export function http_127_0_0_1_17812FileUploadByPost(
  data: Ihttp_127_0_0_1_17812FileUploadRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812FileUploadResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812FileUploadByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812FileUploadByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/file/upload',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】文件上传-带参数】
 * @请求头 POST http://127.0.0.1:17812/file/uploadParam
 */
export interface Ihttp_127_0_0_1_17812FileUploadParamRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: string;
}
/**
 * @描述 【响应数据接口定义】文件上传-带参数】
 * @请求头 POST http://127.0.0.1:17812/file/uploadParam
 */
export interface Ihttp_127_0_0_1_17812FileUploadParamResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 文件上传-带参数
 * @请求信息 [ POST ] http://127.0.0.1:17812/file/uploadParam
 */
export function http_127_0_0_1_17812FileUploadParamByPost(
  data: Ihttp_127_0_0_1_17812FileUploadParamRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812FileUploadParamResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812FileUploadParamByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812FileUploadParamByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/file/uploadParam',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】文件上传-带参数Header】
 * @请求头 POST http://127.0.0.1:17812/file/uploadParamHeader
 */
export interface Ihttp_127_0_0_1_17812FileUploadParamHeaderRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: string;
}
/**
 * @描述 【响应数据接口定义】文件上传-带参数Header】
 * @请求头 POST http://127.0.0.1:17812/file/uploadParamHeader
 */
export interface Ihttp_127_0_0_1_17812FileUploadParamHeaderResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 文件上传-带参数Header
 * @请求信息 [ POST ] http://127.0.0.1:17812/file/uploadParamHeader
 */
export function http_127_0_0_1_17812FileUploadParamHeaderByPost(
  data: Ihttp_127_0_0_1_17812FileUploadParamHeaderRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812FileUploadParamHeaderResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812FileUploadParamHeaderByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812FileUploadParamHeaderByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/file/uploadParamHeader',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】文件上传-带参数Path】
 * @请求头 POST http://127.0.0.1:17812/file/uploadParam/{id}
 */
export interface Ihttp_127_0_0_1_17812FileUploadParamIdRequestByPost {
  // 文件id
  id: string;
  // 文件名称
  name: string;
  // 文件
  file: string;
}
/**
 * @描述 【响应数据接口定义】文件上传-带参数Path】
 * @请求头 POST http://127.0.0.1:17812/file/uploadParam/{id}
 */
export interface Ihttp_127_0_0_1_17812FileUploadParamIdResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 文件上传-带参数Path
 * @请求信息 [ POST ] http://127.0.0.1:17812/file/uploadParam/{id}
 */
export function http_127_0_0_1_17812FileUploadParamIdByPost(
  data: Ihttp_127_0_0_1_17812FileUploadParamIdRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812FileUploadParamIdResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812FileUploadParamIdByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812FileUploadParamIdByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/file/uploadParam/{id}',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['id'],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】多文件上传】
 * @请求头 POST http://127.0.0.1:17812/file/uploadBatch
 */
export interface Ihttp_127_0_0_1_17812FileUploadBatchRequestByPost {
  files: Array<string>;
}
/**
 * @描述 【响应数据类型定义】多文件上传】
 * @请求头 POST http://127.0.0.1:17812/file/uploadBatch
 */
export type Http_127_0_0_1_17812FileUploadBatchResponseTypeByPost =
  Array<// 文件对象
  {
    // 随机名称
    random?: string;
    // 文件名称
    name?: string;
    // 文件大小
    size?: number;
    // 是否上传成功
    success?: boolean;
  }>;
/**
 * @描述 多文件上传
 * @请求信息 [ POST ] http://127.0.0.1:17812/file/uploadBatch
 */
export function http_127_0_0_1_17812FileUploadBatchByPost(
  data: Ihttp_127_0_0_1_17812FileUploadBatchRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Http_127_0_0_1_17812FileUploadBatchResponseTypeByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812FileUploadBatchByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812FileUploadBatchByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/file/uploadBatch',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】普通body请求】
 * @请求头 POST http://127.0.0.1:17812/body/body
 */
export interface Ihttp_127_0_0_1_17812BodyBodyRequestByPost {
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 【响应数据接口定义】普通body请求】
 * @请求头 POST http://127.0.0.1:17812/body/body
 */
export interface Ihttp_127_0_0_1_17812BodyBodyResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 普通body请求
 * @请求信息 [ POST ] http://127.0.0.1:17812/body/body
 */
export function http_127_0_0_1_17812BodyBodyByPost(
  data: Ihttp_127_0_0_1_17812BodyBodyRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812BodyBodyResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812BodyBodyByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812BodyBodyByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/body/body',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】普通body请求+Param】
 * @请求头 POST http://127.0.0.1:17812/body/bodyParam
 */
export interface Ihttp_127_0_0_1_17812BodyBodyParamRequestByPost {
  name: string;
  // 随机名称
  random?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 【响应数据接口定义】普通body请求+Param】
 * @请求头 POST http://127.0.0.1:17812/body/bodyParam
 */
export interface Ihttp_127_0_0_1_17812BodyBodyParamResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 普通body请求+Param
 * @请求信息 [ POST ] http://127.0.0.1:17812/body/bodyParam
 */
export function http_127_0_0_1_17812BodyBodyParamByPost(
  data: Ihttp_127_0_0_1_17812BodyBodyParamRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812BodyBodyParamResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812BodyBodyParamByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812BodyBodyParamByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/body/bodyParam',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】普通body请求+Param+Header】
 * @请求头 POST http://127.0.0.1:17812/body/bodyParamHeader
 */
export interface Ihttp_127_0_0_1_17812BodyBodyParamHeaderRequestByPost {
  // 文件名称
  name: string;
  // 随机名称
  random?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 【响应数据接口定义】普通body请求+Param+Header】
 * @请求头 POST http://127.0.0.1:17812/body/bodyParamHeader
 */
export interface Ihttp_127_0_0_1_17812BodyBodyParamHeaderResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 普通body请求+Param+Header
 * @请求信息 [ POST ] http://127.0.0.1:17812/body/bodyParamHeader
 */
export function http_127_0_0_1_17812BodyBodyParamHeaderByPost(
  data: Ihttp_127_0_0_1_17812BodyBodyParamHeaderRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812BodyBodyParamHeaderResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812BodyBodyParamHeaderByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812BodyBodyParamHeaderByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/body/bodyParamHeader',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】普通body请求+Param+Header+Path】
 * @请求头 POST http://127.0.0.1:17812/body/bodyParamHeaderPath/{id}
 */
export interface Ihttp_127_0_0_1_17812BodyBodyParamHeaderPathIdRequestByPost {
  // 文件id
  id: string;
  // 文件名称
  name: string;
  // 随机名称
  random?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 【响应数据接口定义】普通body请求+Param+Header+Path】
 * @请求头 POST http://127.0.0.1:17812/body/bodyParamHeaderPath/{id}
 */
export interface Ihttp_127_0_0_1_17812BodyBodyParamHeaderPathIdResponseByPost {
  // 文件对象
  // 随机名称
  random?: string;
  // 文件名称
  name?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @描述 普通body请求+Param+Header+Path
 * @请求信息 [ POST ] http://127.0.0.1:17812/body/bodyParamHeaderPath/{id}
 */
export function http_127_0_0_1_17812BodyBodyParamHeaderPathIdByPost(
  data: Ihttp_127_0_0_1_17812BodyBodyParamHeaderPathIdRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812BodyBodyParamHeaderPathIdResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812BodyBodyParamHeaderPathIdByPost.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812BodyBodyParamHeaderPathIdByPost.requestConfig = {
  path: 'http://127.0.0.1:17812/body/bodyParamHeaderPath/{id}',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['id'],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】json参数查询】
 * @请求头 GET http://127.0.0.1:17812/user/getRequest
 */
export interface Ihttp_127_0_0_1_17812UserGetRequestRequestByGet {
  userSchema: {
    // 主键id（注解id-title）
    id?: string;
    // 名称
    name?: string;
    // Part信息
    partSchema: {
      // part部分id
      id?: string;
      // part部分名称
      name?: string;
    };
  };
  cade: string;
}
/**
 * @描述 【响应数据接口定义】json参数查询】
 * @请求头 GET http://127.0.0.1:17812/user/getRequest
 */
export interface Ihttp_127_0_0_1_17812UserGetRequestResponseByGet {
  // 用户信息
  // 主键id（注解id-title）
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @描述 json参数查询
 * @请求信息 [ GET ] http://127.0.0.1:17812/user/getRequest
 */
export function http_127_0_0_1_17812UserGetRequestByGet(
  data: Ihttp_127_0_0_1_17812UserGetRequestRequestByGet,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Ihttp_127_0_0_1_17812UserGetRequestResponseByGet>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserGetRequestByGet.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserGetRequestByGet.requestConfig = {
  path: 'http://127.0.0.1:17812/user/getRequest',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['userSchema', 'cade']
};

/**
 * @描述 【请求数据接口定义】创建用户、根据姓名创建用户】
 * @请求头 GET http://127.0.0.1:17812/user/create
 */
export interface Ihttp_127_0_0_1_17812UserCreateRequestByGet {
  name: string;
}
/**
 * @描述 【响应数据类型定义】创建用户、根据姓名创建用户】
 * @请求头 GET http://127.0.0.1:17812/user/create
 */
export type Http_127_0_0_1_17812UserCreateResponseTypeByGet = string;
/**
 * @描述 创建用户、根据姓名创建用户
 * @请求信息 [ GET ] http://127.0.0.1:17812/user/create
 */
export function http_127_0_0_1_17812UserCreateByGet(
  data: Ihttp_127_0_0_1_17812UserCreateRequestByGet,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<Http_127_0_0_1_17812UserCreateResponseTypeByGet>(
    processRequestFunctionConfig(
      data,
      extraData,
      http_127_0_0_1_17812UserCreateByGet.requestConfig
    ),
    ...args
  );
}
http_127_0_0_1_17812UserCreateByGet.requestConfig = {
  path: 'http://127.0.0.1:17812/user/create',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};
