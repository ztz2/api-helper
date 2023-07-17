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
 * @请求头 PUT /body/bodyPut
 */
export interface IBodyBodyPutRequestByPut {
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
 * @请求头 PUT /body/bodyPut
 */
export interface IBodyBodyPutResponseByPut {
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
 * @请求信息 [ PUT ] /body/bodyPut
 */
export function bodyBodyPutByPut(
  data: IBodyBodyPutRequestByPut,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IBodyBodyPutResponseByPut>(
    processRequestFunctionConfig(
      data,
      extraData,
      bodyBodyPutByPut.requestConfig
    ),
    ...args
  );
}
bodyBodyPutByPut.requestConfig = {
  path: '/body/bodyPut',
  method: 'put',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】body请求】
 * @请求头 POST /user/{deviceId}/body
 */
export interface IUserDeviceIdBodyRequestByPost {
  // 设备id
  deviceId: string;
}
/**
 * @描述 【响应数据接口定义】body请求】
 * @请求头 POST /user/{deviceId}/body
 */
export interface IUserDeviceIdBodyResponseByPost {
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
 * @请求信息 [ POST ] /user/{deviceId}/body
 */
export function userDeviceIdBodyByPost(
  data: IUserDeviceIdBodyRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserDeviceIdBodyResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      userDeviceIdBodyByPost.requestConfig
    ),
    ...args
  );
}
userDeviceIdBodyByPost.requestConfig = {
  path: '/user/{deviceId}/body',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['deviceId'],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】body请求1】
 * @请求头 POST /user/{deviceId}/body1
 */
export interface IUserDeviceIdBody1RequestByPost {
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
 * @请求头 POST /user/{deviceId}/body1
 */
export interface IUserDeviceIdBody1ResponseByPost {
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
 * @请求信息 [ POST ] /user/{deviceId}/body1
 */
export function userDeviceIdBody1ByPost(
  data: IUserDeviceIdBody1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserDeviceIdBody1ResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      userDeviceIdBody1ByPost.requestConfig
    ),
    ...args
  );
}
userDeviceIdBody1ByPost.requestConfig = {
  path: '/user/{deviceId}/body1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['deviceId'],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】json参数查询1】
 * @请求头 POST /user/getRequest1
 */
export interface IUserGetRequest1RequestByPost {
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
 * @请求头 POST /user/getRequest1
 */
export interface IUserGetRequest1ResponseByPost {
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
 * @请求信息 [ POST ] /user/getRequest1
 */
export function userGetRequest1ByPost(
  data: IUserGetRequest1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserGetRequest1ResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      userGetRequest1ByPost.requestConfig
    ),
    ...args
  );
}
userGetRequest1ByPost.requestConfig = {
  path: '/user/getRequest1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['cade']
};

/**
 * @描述 【请求数据接口定义】创建用户-createOne、根据姓名创建用户1】
 * @请求头 POST /user/createOne
 */
export interface IUserCreateOneRequestByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @描述 【响应数据接口定义】创建用户-createOne、根据姓名创建用户1】
 * @请求头 POST /user/createOne
 */
export interface IUserCreateOneResponseByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @描述 创建用户-createOne、根据姓名创建用户1
 * @请求信息 [ POST ] /user/createOne
 */
export function userCreateOneByPost(
  data: IUserCreateOneRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserCreateOneResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      userCreateOneByPost.requestConfig
    ),
    ...args
  );
}
userCreateOneByPost.requestConfig = {
  path: '/user/createOne',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】创建用户-Schema、根据姓名创建用户1】
 * @请求头 POST /user/createOneSchema
 */
export interface IUserCreateOneSchemaRequestByPost {
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
 * @请求头 POST /user/createOneSchema
 */
export interface IUserCreateOneSchemaResponseByPost {
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
 * @请求信息 [ POST ] /user/createOneSchema
 */
export function userCreateOneSchemaByPost(
  data: IUserCreateOneSchemaRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserCreateOneSchemaResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      userCreateOneSchemaByPost.requestConfig
    ),
    ...args
  );
}
userCreateOneSchemaByPost.requestConfig = {
  path: '/user/createOneSchema',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】创建用户1、根据姓名创建用户1】
 * @请求头 POST /user/createOne1
 */
export interface IUserCreateOne1RequestByPost {
  id?: string;
  name?: string;
}
/**
 * @描述 【响应数据接口定义】创建用户1、根据姓名创建用户1】
 * @请求头 POST /user/createOne1
 */
export interface IUserCreateOne1ResponseByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @描述 创建用户1、根据姓名创建用户1
 * @请求信息 [ POST ] /user/createOne1
 */
export function userCreateOne1ByPost(
  data: IUserCreateOne1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserCreateOne1ResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      userCreateOne1ByPost.requestConfig
    ),
    ...args
  );
}
userCreateOne1ByPost.requestConfig = {
  path: '/user/createOne1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['id', 'name']
};

/**
 * @描述 【请求数据接口定义】单纯文件上传、单纯文件上传，无任何参数】
 * @请求头 POST /file/upload
 */
export interface IFileUploadRequestByPost {
  file: string;
}
/**
 * @描述 【响应数据接口定义】单纯文件上传、单纯文件上传，无任何参数】
 * @请求头 POST /file/upload
 */
export interface IFileUploadResponseByPost {
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
 * @请求信息 [ POST ] /file/upload
 */
export function fileUploadByPost(
  data: IFileUploadRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IFileUploadResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      fileUploadByPost.requestConfig
    ),
    ...args
  );
}
fileUploadByPost.requestConfig = {
  path: '/file/upload',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】文件上传-带参数】
 * @请求头 POST /file/uploadParam
 */
export interface IFileUploadParamRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: string;
}
/**
 * @描述 【响应数据接口定义】文件上传-带参数】
 * @请求头 POST /file/uploadParam
 */
export interface IFileUploadParamResponseByPost {
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
 * @请求信息 [ POST ] /file/uploadParam
 */
export function fileUploadParamByPost(
  data: IFileUploadParamRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IFileUploadParamResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      fileUploadParamByPost.requestConfig
    ),
    ...args
  );
}
fileUploadParamByPost.requestConfig = {
  path: '/file/uploadParam',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】文件上传-带参数Header】
 * @请求头 POST /file/uploadParamHeader
 */
export interface IFileUploadParamHeaderRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: string;
}
/**
 * @描述 【响应数据接口定义】文件上传-带参数Header】
 * @请求头 POST /file/uploadParamHeader
 */
export interface IFileUploadParamHeaderResponseByPost {
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
 * @请求信息 [ POST ] /file/uploadParamHeader
 */
export function fileUploadParamHeaderByPost(
  data: IFileUploadParamHeaderRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IFileUploadParamHeaderResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      fileUploadParamHeaderByPost.requestConfig
    ),
    ...args
  );
}
fileUploadParamHeaderByPost.requestConfig = {
  path: '/file/uploadParamHeader',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】文件上传-带参数Path】
 * @请求头 POST /file/uploadParam/{id}
 */
export interface IFileUploadParamIdRequestByPost {
  // 文件id
  id: string;
  // 文件名称
  name: string;
  // 文件
  file: string;
}
/**
 * @描述 【响应数据接口定义】文件上传-带参数Path】
 * @请求头 POST /file/uploadParam/{id}
 */
export interface IFileUploadParamIdResponseByPost {
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
 * @请求信息 [ POST ] /file/uploadParam/{id}
 */
export function fileUploadParamIdByPost(
  data: IFileUploadParamIdRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IFileUploadParamIdResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      fileUploadParamIdByPost.requestConfig
    ),
    ...args
  );
}
fileUploadParamIdByPost.requestConfig = {
  path: '/file/uploadParam/{id}',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['id'],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】多文件上传】
 * @请求头 POST /file/uploadBatch
 */
export interface IFileUploadBatchRequestByPost {
  files: Array<string>;
}
/**
 * @描述 【响应数据类型定义】多文件上传】
 * @请求头 POST /file/uploadBatch
 */
export type FileUploadBatchResponseTypeByPost = Array<// 文件对象
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
 * @请求信息 [ POST ] /file/uploadBatch
 */
export function fileUploadBatchByPost(
  data: IFileUploadBatchRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<FileUploadBatchResponseTypeByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      fileUploadBatchByPost.requestConfig
    ),
    ...args
  );
}
fileUploadBatchByPost.requestConfig = {
  path: '/file/uploadBatch',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】普通body请求】
 * @请求头 POST /body/body
 */
export interface IBodyBodyRequestByPost {
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
 * @请求头 POST /body/body
 */
export interface IBodyBodyResponseByPost {
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
 * @请求信息 [ POST ] /body/body
 */
export function bodyBodyByPost(
  data: IBodyBodyRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IBodyBodyResponseByPost>(
    processRequestFunctionConfig(data, extraData, bodyBodyByPost.requestConfig),
    ...args
  );
}
bodyBodyByPost.requestConfig = {
  path: '/body/body',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 【请求数据接口定义】普通body请求+Param】
 * @请求头 POST /body/bodyParam
 */
export interface IBodyBodyParamRequestByPost {
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
 * @请求头 POST /body/bodyParam
 */
export interface IBodyBodyParamResponseByPost {
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
 * @请求信息 [ POST ] /body/bodyParam
 */
export function bodyBodyParamByPost(
  data: IBodyBodyParamRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IBodyBodyParamResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      bodyBodyParamByPost.requestConfig
    ),
    ...args
  );
}
bodyBodyParamByPost.requestConfig = {
  path: '/body/bodyParam',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】普通body请求+Param+Header】
 * @请求头 POST /body/bodyParamHeader
 */
export interface IBodyBodyParamHeaderRequestByPost {
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
 * @请求头 POST /body/bodyParamHeader
 */
export interface IBodyBodyParamHeaderResponseByPost {
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
 * @请求信息 [ POST ] /body/bodyParamHeader
 */
export function bodyBodyParamHeaderByPost(
  data: IBodyBodyParamHeaderRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IBodyBodyParamHeaderResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      bodyBodyParamHeaderByPost.requestConfig
    ),
    ...args
  );
}
bodyBodyParamHeaderByPost.requestConfig = {
  path: '/body/bodyParamHeader',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】普通body请求+Param+Header+Path】
 * @请求头 POST /body/bodyParamHeaderPath/{id}
 */
export interface IBodyBodyParamHeaderPathIdRequestByPost {
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
 * @请求头 POST /body/bodyParamHeaderPath/{id}
 */
export interface IBodyBodyParamHeaderPathIdResponseByPost {
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
 * @请求信息 [ POST ] /body/bodyParamHeaderPath/{id}
 */
export function bodyBodyParamHeaderPathIdByPost(
  data: IBodyBodyParamHeaderPathIdRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IBodyBodyParamHeaderPathIdResponseByPost>(
    processRequestFunctionConfig(
      data,
      extraData,
      bodyBodyParamHeaderPathIdByPost.requestConfig
    ),
    ...args
  );
}
bodyBodyParamHeaderPathIdByPost.requestConfig = {
  path: '/body/bodyParamHeaderPath/{id}',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['id'],
  queryStringKeyNameList: ['name']
};

/**
 * @描述 【请求数据接口定义】json参数查询】
 * @请求头 GET /user/getRequest
 */
export interface IUserGetRequestRequestByGet {
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
 * @请求头 GET /user/getRequest
 */
export interface IUserGetRequestResponseByGet {
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
 * @请求信息 [ GET ] /user/getRequest
 */
export function userGetRequestByGet(
  data: IUserGetRequestRequestByGet,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserGetRequestResponseByGet>(
    processRequestFunctionConfig(
      data,
      extraData,
      userGetRequestByGet.requestConfig
    ),
    ...args
  );
}
userGetRequestByGet.requestConfig = {
  path: '/user/getRequest',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['userSchema', 'cade']
};

/**
 * @描述 【请求数据接口定义】创建用户、根据姓名创建用户】
 * @请求头 GET /user/create
 */
export interface IUserCreateRequestByGet {
  name: string;
}
/**
 * @描述 【响应数据类型定义】创建用户、根据姓名创建用户】
 * @请求头 GET /user/create
 */
export type UserCreateResponseTypeByGet = string;
/**
 * @描述 创建用户、根据姓名创建用户
 * @请求信息 [ GET ] /user/create
 */
export function userCreateByGet(
  data: IUserCreateRequestByGet,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<UserCreateResponseTypeByGet>(
    processRequestFunctionConfig(
      data,
      extraData,
      userCreateByGet.requestConfig
    ),
    ...args
  );
}
userCreateByGet.requestConfig = {
  path: '/user/create',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name']
};
