/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* 提示：该文件由 API Helper Cli 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

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
 * @description 普通body请求-put【请求数据类型定义】
 * @url [ PUT ] /body/bodyPut
 */
export interface IBodyBodyPutRequestByPut {
  // 随机名称
  random: string;
  // 文件名称
  name: string;
  // 文件大小
  size: number;
  // 是否上传成功
  success: boolean;
}
/**
 * @description 普通body请求-put【响应数据类型定义】
 * @url [ PUT ] /body/bodyPut
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
 * @description 普通body请求-put
 * @url [ PUT ] /body/bodyPut
 */
export function bodyBodyPutByPut(data: IBodyBodyPutRequestByPut, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<IBodyBodyPutResponseByPut>(processRequestFunctionConfig(data, extraData, bodyBodyPutByPut.requestConfig), ...args);
}
bodyBodyPutByPut.requestConfig = {
  path: '/body/bodyPut',
  method: 'put',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description body请求【请求数据类型定义】
 * @url [ POST ] /user/{deviceId}/body
 */
export interface IUserDeviceIdBodyRequestByPost {
  // 设备id
  deviceId: string;
}
/**
 * @description body请求【响应数据类型定义】
 * @url [ POST ] /user/{deviceId}/body
 */
export interface IUserDeviceIdBodyResponseByPost {
  // 用户信息
  // 注解id-title
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema?: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @description body请求
 * @url [ POST ] /user/{deviceId}/body
 */
export function userDeviceIdBodyByPost(
  data: IUserDeviceIdBodyRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserDeviceIdBodyResponseByPost>(
    processRequestFunctionConfig(data, extraData, userDeviceIdBodyByPost.requestConfig),
    ...args
  );
}
userDeviceIdBodyByPost.requestConfig = {
  path: '/user/{deviceId}/body',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['deviceId'],
  queryStringKeyNameList: [],
};

/**
 * @description body请求1【请求数据类型定义】
 * @url [ POST ] /user/{deviceId}/body1
 */
export interface IUserDeviceIdBody1RequestByPost {
  // 设备id
  deviceId: string;
  // 注解id-title
  id: string;
  // 名称
  name: string;
  // Part信息
  partSchema: {
    // part部分id
    id: string;
    // part部分名称
    name: string;
  };
}
/**
 * @description body请求1【响应数据类型定义】
 * @url [ POST ] /user/{deviceId}/body1
 */
export interface IUserDeviceIdBody1ResponseByPost {
  // 用户信息
  // 注解id-title
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema?: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @description body请求1
 * @url [ POST ] /user/{deviceId}/body1
 */
export function userDeviceIdBody1ByPost(
  data: IUserDeviceIdBody1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserDeviceIdBody1ResponseByPost>(
    processRequestFunctionConfig(data, extraData, userDeviceIdBody1ByPost.requestConfig),
    ...args
  );
}
userDeviceIdBody1ByPost.requestConfig = {
  path: '/user/{deviceId}/body1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['deviceId'],
  queryStringKeyNameList: [],
};

/**
 * @description json参数查询1【请求数据类型定义】
 * @url [ POST ] /user/getRequest1
 */
export interface IUserGetRequest1RequestByPost {
  cade: string;
  // 注解id-title
  id: string;
  // 名称
  name: string;
  // Part信息
  partSchema: {
    // part部分id
    id: string;
    // part部分名称
    name: string;
  };
}
/**
 * @description json参数查询1【响应数据类型定义】
 * @url [ POST ] /user/getRequest1
 */
export interface IUserGetRequest1ResponseByPost {
  // 用户信息
  // 注解id-title
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema?: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @description json参数查询1
 * @url [ POST ] /user/getRequest1
 */
export function userGetRequest1ByPost(
  data: IUserGetRequest1RequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserGetRequest1ResponseByPost>(
    processRequestFunctionConfig(data, extraData, userGetRequest1ByPost.requestConfig),
    ...args
  );
}
userGetRequest1ByPost.requestConfig = {
  path: '/user/getRequest1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['cade'],
};

/**
 * @description 创建用户-createOne、根据姓名创建用户1【请求数据类型定义】
 * @url [ POST ] /user/createOne
 */
export interface IUserCreateOneRequestByPost {
  // 主键id
  id: string;
  // 名称
  name: string;
}
/**
 * @description 创建用户-createOne、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOne
 */
export interface IUserCreateOneResponseByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @description 创建用户-createOne、根据姓名创建用户1
 * @url [ POST ] /user/createOne
 */
export function userCreateOneByPost(data: IUserCreateOneRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<IUserCreateOneResponseByPost>(processRequestFunctionConfig(data, extraData, userCreateOneByPost.requestConfig), ...args);
}
userCreateOneByPost.requestConfig = {
  path: '/user/createOne',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description 创建用户-Schema、根据姓名创建用户1【请求数据类型定义】
 * @url [ POST ] /user/createOneSchema
 */
export interface IUserCreateOneSchemaRequestByPost {
  // 注解id-title
  id: string;
  // 名称
  name: string;
  // Part信息
  partSchema: {
    // part部分id
    id: string;
    // part部分名称
    name: string;
  };
}
/**
 * @description 创建用户-Schema、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOneSchema
 */
export interface IUserCreateOneSchemaResponseByPost {
  // 用户信息
  // 注解id-title
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema?: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @description 创建用户-Schema、根据姓名创建用户1
 * @url [ POST ] /user/createOneSchema
 */
export function userCreateOneSchemaByPost(
  data: IUserCreateOneSchemaRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IUserCreateOneSchemaResponseByPost>(
    processRequestFunctionConfig(data, extraData, userCreateOneSchemaByPost.requestConfig),
    ...args
  );
}
userCreateOneSchemaByPost.requestConfig = {
  path: '/user/createOneSchema',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description 创建用户1、根据姓名创建用户1【请求数据类型定义】
 * @url [ POST ] /user/createOne1
 */
export interface IUserCreateOne1RequestByPost {
  id: string;
  name: string;
}
/**
 * @description 创建用户1、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOne1
 */
export interface IUserCreateOne1ResponseByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @description 创建用户1、根据姓名创建用户1
 * @url [ POST ] /user/createOne1
 */
export function userCreateOne1ByPost(data: IUserCreateOne1RequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<IUserCreateOne1ResponseByPost>(processRequestFunctionConfig(data, extraData, userCreateOne1ByPost.requestConfig), ...args);
}
userCreateOne1ByPost.requestConfig = {
  path: '/user/createOne1',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['id', 'name'],
};

/**
 * @description 单纯文件上传、单纯文件上传，无任何参数【请求数据类型定义】
 * @url [ POST ] /file/upload
 */
export interface IFileUploadRequestByPost {
  file: File;
}
/**
 * @description 单纯文件上传、单纯文件上传，无任何参数【响应数据类型定义】
 * @url [ POST ] /file/upload
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
 * @description 单纯文件上传、单纯文件上传，无任何参数
 * @url [ POST ] /file/upload
 */
export function fileUploadByPost(data: IFileUploadRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<IFileUploadResponseByPost>(processRequestFunctionConfig(data, extraData, fileUploadByPost.requestConfig), ...args);
}
fileUploadByPost.requestConfig = {
  path: '/file/upload',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description 文件上传-带参数【请求数据类型定义】
 * @url [ POST ] /file/uploadParam
 */
export interface IFileUploadParamRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: File;
}
/**
 * @description 文件上传-带参数【响应数据类型定义】
 * @url [ POST ] /file/uploadParam
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
 * @description 文件上传-带参数
 * @url [ POST ] /file/uploadParam
 */
export function fileUploadParamByPost(
  data: IFileUploadParamRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IFileUploadParamResponseByPost>(
    processRequestFunctionConfig(data, extraData, fileUploadParamByPost.requestConfig),
    ...args
  );
}
fileUploadParamByPost.requestConfig = {
  path: '/file/uploadParam',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name'],
};

/**
 * @description 文件上传-带参数Header【请求数据类型定义】
 * @url [ POST ] /file/uploadParamHeader
 */
export interface IFileUploadParamHeaderRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: File;
}
/**
 * @description 文件上传-带参数Header【响应数据类型定义】
 * @url [ POST ] /file/uploadParamHeader
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
 * @description 文件上传-带参数Header
 * @url [ POST ] /file/uploadParamHeader
 */
export function fileUploadParamHeaderByPost(
  data: IFileUploadParamHeaderRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IFileUploadParamHeaderResponseByPost>(
    processRequestFunctionConfig(data, extraData, fileUploadParamHeaderByPost.requestConfig),
    ...args
  );
}
fileUploadParamHeaderByPost.requestConfig = {
  path: '/file/uploadParamHeader',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name'],
};

/**
 * @description 文件上传-带参数Path【请求数据类型定义】
 * @url [ POST ] /file/uploadParam/{id}
 */
export interface IFileUploadParamIdRequestByPost {
  // 文件id
  id: string;
  // 文件名称
  name: string;
  // 文件
  file: File;
}
/**
 * @description 文件上传-带参数Path【响应数据类型定义】
 * @url [ POST ] /file/uploadParam/{id}
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
 * @description 文件上传-带参数Path
 * @url [ POST ] /file/uploadParam/{id}
 */
export function fileUploadParamIdByPost(
  data: IFileUploadParamIdRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IFileUploadParamIdResponseByPost>(
    processRequestFunctionConfig(data, extraData, fileUploadParamIdByPost.requestConfig),
    ...args
  );
}
fileUploadParamIdByPost.requestConfig = {
  path: '/file/uploadParam/{id}',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['id'],
  queryStringKeyNameList: ['name'],
};

/**
 * @description 多文件上传【请求数据类型定义】
 * @url [ POST ] /file/uploadBatch
 */
export interface IFileUploadBatchRequestByPost {
  files: Array<File>;
}
/**
 * @description 多文件上传【响应数据类型定义】
 * @url [ POST ] /file/uploadBatch
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
 * @description 多文件上传
 * @url [ POST ] /file/uploadBatch
 */
export function fileUploadBatchByPost(
  data: IFileUploadBatchRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<FileUploadBatchResponseTypeByPost>(
    processRequestFunctionConfig(data, extraData, fileUploadBatchByPost.requestConfig),
    ...args
  );
}
fileUploadBatchByPost.requestConfig = {
  path: '/file/uploadBatch',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description 普通body请求【请求数据类型定义】
 * @url [ POST ] /body/body
 */
export interface IBodyBodyRequestByPost {
  // 随机名称
  random: string;
  // 文件名称
  name: string;
  // 文件大小
  size: number;
  // 是否上传成功
  success: boolean;
}
/**
 * @description 普通body请求【响应数据类型定义】
 * @url [ POST ] /body/body
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
 * @description 普通body请求
 * @url [ POST ] /body/body
 */
export function bodyBodyByPost(data: IBodyBodyRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<IBodyBodyResponseByPost>(processRequestFunctionConfig(data, extraData, bodyBodyByPost.requestConfig), ...args);
}
bodyBodyByPost.requestConfig = {
  path: '/body/body',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description 普通body请求+Param【请求数据类型定义】
 * @url [ POST ] /body/bodyParam
 */
export interface IBodyBodyParamRequestByPost {
  name: string;
  // 随机名称
  random: string;
  // 文件大小
  size: number;
  // 是否上传成功
  success: boolean;
}
/**
 * @description 普通body请求+Param【响应数据类型定义】
 * @url [ POST ] /body/bodyParam
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
 * @description 普通body请求+Param
 * @url [ POST ] /body/bodyParam
 */
export function bodyBodyParamByPost(data: IBodyBodyParamRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<IBodyBodyParamResponseByPost>(processRequestFunctionConfig(data, extraData, bodyBodyParamByPost.requestConfig), ...args);
}
bodyBodyParamByPost.requestConfig = {
  path: '/body/bodyParam',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name'],
};

/**
 * @description 普通body请求+Param+Header【请求数据类型定义】
 * @url [ POST ] /body/bodyParamHeader
 */
export interface IBodyBodyParamHeaderRequestByPost {
  // 文件名称
  name: string;
  // 随机名称
  random: string;
  // 文件大小
  size: number;
  // 是否上传成功
  success: boolean;
}
/**
 * @description 普通body请求+Param+Header【响应数据类型定义】
 * @url [ POST ] /body/bodyParamHeader
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
 * @description 普通body请求+Param+Header
 * @url [ POST ] /body/bodyParamHeader
 */
export function bodyBodyParamHeaderByPost(
  data: IBodyBodyParamHeaderRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IBodyBodyParamHeaderResponseByPost>(
    processRequestFunctionConfig(data, extraData, bodyBodyParamHeaderByPost.requestConfig),
    ...args
  );
}
bodyBodyParamHeaderByPost.requestConfig = {
  path: '/body/bodyParamHeader',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name'],
};

/**
 * @description 普通body请求+Param+Header+Path【请求数据类型定义】
 * @url [ POST ] /body/bodyParamHeaderPath/{id}
 */
export interface IBodyBodyParamHeaderPathIdRequestByPost {
  // 文件id
  id: string;
  // 文件名称
  name: string;
  // 随机名称
  random: string;
  // 文件大小
  size: number;
  // 是否上传成功
  success: boolean;
}
/**
 * @description 普通body请求+Param+Header+Path【响应数据类型定义】
 * @url [ POST ] /body/bodyParamHeaderPath/{id}
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
 * @description 普通body请求+Param+Header+Path
 * @url [ POST ] /body/bodyParamHeaderPath/{id}
 */
export function bodyBodyParamHeaderPathIdByPost(
  data: IBodyBodyParamHeaderPathIdRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<IBodyBodyParamHeaderPathIdResponseByPost>(
    processRequestFunctionConfig(data, extraData, bodyBodyParamHeaderPathIdByPost.requestConfig),
    ...args
  );
}
bodyBodyParamHeaderPathIdByPost.requestConfig = {
  path: '/body/bodyParamHeaderPath/{id}',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['id'],
  queryStringKeyNameList: ['name'],
};

/**
 * @description json参数查询【请求数据类型定义】
 * @url [ GET ] /user/getRequest
 */
export interface IUserGetRequestRequestByGet {
  userSchema: {
    // 注解id-title
    id: string;
    // 名称
    name: string;
    // Part信息
    partSchema: {
      // part部分id
      id: string;
      // part部分名称
      name: string;
    };
  };
  cade: string;
}
/**
 * @description json参数查询【响应数据类型定义】
 * @url [ GET ] /user/getRequest
 */
export interface IUserGetRequestResponseByGet {
  // 用户信息
  // 注解id-title
  id?: string;
  // 名称
  name?: string;
  // Part信息
  partSchema?: {
    // part部分id
    id?: string;
    // part部分名称
    name?: string;
  };
}
/**
 * @description json参数查询
 * @url [ GET ] /user/getRequest
 */
export function userGetRequestByGet(data: IUserGetRequestRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<IUserGetRequestResponseByGet>(processRequestFunctionConfig(data, extraData, userGetRequestByGet.requestConfig), ...args);
}
userGetRequestByGet.requestConfig = {
  path: '/user/getRequest',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['userSchema', 'cade'],
};

/**
 * @description 创建用户、根据姓名创建用户【请求数据类型定义】
 * @url [ GET ] /user/create
 */
export interface IUserCreateRequestByGet {
  name: string;
}
/**
 * @description 创建用户、根据姓名创建用户【响应数据类型定义】
 * @url [ GET ] /user/create
 */
export type UserCreateResponseTypeByGet = string;
/**
 * @description 创建用户、根据姓名创建用户
 * @url [ GET ] /user/create
 */
export function userCreateByGet(data: IUserCreateRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<UserCreateResponseTypeByGet>(processRequestFunctionConfig(data, extraData, userCreateByGet.requestConfig), ...args);
}
userCreateByGet.requestConfig = {
  path: '/user/create',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['name'],
};
