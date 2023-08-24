/**
 * @description 普通body请求-put【请求数据类型定义】
 * @url [ PUT ] /body/bodyPut
 */
export interface BodyBodyPutRequestByPut {
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
 * @description 普通body请求-put【响应数据类型定义】
 * @url [ PUT ] /body/bodyPut
 */
export interface BodyBodyPutResponseByPut {
  // 文件对象
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
 * @description body请求【请求数据类型定义】
 * @url [ POST ] /user/{deviceId}/body
 */
export interface UserDeviceIdBodyRequestByPost {
  // 设备id
  deviceId: string;
}
/**
 * @description body请求【响应数据类型定义】
 * @url [ POST ] /user/{deviceId}/body
 */
export interface UserDeviceIdBodyResponseByPost {
  // 用户信息
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
 * @description body请求1【请求数据类型定义】
 * @url [ POST ] /user/{deviceId}/body1
 */
export interface UserDeviceIdBody1RequestByPost {
  // 设备id
  deviceId: string;
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
 * @description body请求1【响应数据类型定义】
 * @url [ POST ] /user/{deviceId}/body1
 */
export interface UserDeviceIdBody1ResponseByPost {
  // 用户信息
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
 * @description json参数查询1【请求数据类型定义】
 * @url [ POST ] /user/getRequest1
 */
export interface UserGetRequest1RequestByPost {
  cade: string;
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
 * @description json参数查询1【响应数据类型定义】
 * @url [ POST ] /user/getRequest1
 */
export interface UserGetRequest1ResponseByPost {
  // 用户信息
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
 * @description 创建用户-createOne、根据姓名创建用户1【请求数据类型定义】
 * @url [ POST ] /user/createOne
 */
export interface UserCreateOneRequestByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @description 创建用户-createOne、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOne
 */
export interface UserCreateOneResponseByPost {
  // 主键id
  id: string;
  // 名称
  name: string;
}

/**
 * @description 创建用户-Schema、根据姓名创建用户1【请求数据类型定义】
 * @url [ POST ] /user/createOneSchema
 */
export interface UserCreateOneSchemaRequestByPost {
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
 * @description 创建用户-Schema、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOneSchema
 */
export interface UserCreateOneSchemaResponseByPost {
  // 用户信息
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
 * @description 创建用户1、根据姓名创建用户1【请求数据类型定义】
 * @url [ POST ] /user/createOne1
 */
export interface UserCreateOne1RequestByPost {
  id?: string;
  name?: string;
}
/**
 * @description 创建用户1、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOne1
 */
export interface UserCreateOne1ResponseByPost {
  // 主键id
  id: string;
  // 名称
  name: string;
}

/**
 * @description 单纯文件上传、单纯文件上传，无任何参数【请求数据类型定义】
 * @url [ POST ] /file/upload
 */
export interface FileUploadRequestByPost {
  file: File;
}
/**
 * @description 单纯文件上传、单纯文件上传，无任何参数【响应数据类型定义】
 * @url [ POST ] /file/upload
 */
export interface FileUploadResponseByPost {
  // 文件对象
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
 * @description 文件上传-带参数【请求数据类型定义】
 * @url [ POST ] /file/uploadParam
 */
export interface FileUploadParamRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: File;
}
/**
 * @description 文件上传-带参数【响应数据类型定义】
 * @url [ POST ] /file/uploadParam
 */
export interface FileUploadParamResponseByPost {
  // 文件对象
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
 * @description 文件上传-带参数Header【请求数据类型定义】
 * @url [ POST ] /file/uploadParamHeader
 */
export interface FileUploadParamHeaderRequestByPost {
  // 文件名称
  name: string;
  // 文件
  file: File;
}
/**
 * @description 文件上传-带参数Header【响应数据类型定义】
 * @url [ POST ] /file/uploadParamHeader
 */
export interface FileUploadParamHeaderResponseByPost {
  // 文件对象
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
 * @description 文件上传-带参数Path【请求数据类型定义】
 * @url [ POST ] /file/uploadParam/{id}
 */
export interface FileUploadParamIdRequestByPost {
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
export interface FileUploadParamIdResponseByPost {
  // 文件对象
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
 * @description 多文件上传【请求数据类型定义】
 * @url [ POST ] /file/uploadBatch
 */
export interface FileUploadBatchRequestByPost {
  files: Array<File>;
}
/**
 * @description 多文件上传【响应数据类型定义】
 * @url [ POST ] /file/uploadBatch
 */
export type FileUploadBatchResponseByPost = Array<// 文件对象
{
  // 随机名称
  random: string;
  // 文件名称
  name: string;
  // 文件大小
  size: number;
  // 是否上传成功
  success: boolean;
}>;

/**
 * @description 普通body请求【请求数据类型定义】
 * @url [ POST ] /body/body
 */
export interface BodyBodyRequestByPost {
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
 * @description 普通body请求【响应数据类型定义】
 * @url [ POST ] /body/body
 */
export interface BodyBodyResponseByPost {
  // 文件对象
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
 * @description 普通body请求+Param【请求数据类型定义】
 * @url [ POST ] /body/bodyParam
 */
export interface BodyBodyParamRequestByPost {
  name: string;
  // 随机名称
  random?: string;
  // 文件大小
  size?: number;
  // 是否上传成功
  success?: boolean;
}
/**
 * @description 普通body请求+Param【响应数据类型定义】
 * @url [ POST ] /body/bodyParam
 */
export interface BodyBodyParamResponseByPost {
  // 文件对象
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
 * @description 普通body请求+Param+Header【请求数据类型定义】
 * @url [ POST ] /body/bodyParamHeader
 */
export interface BodyBodyParamHeaderRequestByPost {
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
 * @description 普通body请求+Param+Header【响应数据类型定义】
 * @url [ POST ] /body/bodyParamHeader
 */
export interface BodyBodyParamHeaderResponseByPost {
  // 文件对象
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
 * @description 普通body请求+Param+Header+Path【请求数据类型定义】
 * @url [ POST ] /body/bodyParamHeaderPath/{id}
 */
export interface BodyBodyParamHeaderPathIdRequestByPost {
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
 * @description 普通body请求+Param+Header+Path【响应数据类型定义】
 * @url [ POST ] /body/bodyParamHeaderPath/{id}
 */
export interface BodyBodyParamHeaderPathIdResponseByPost {
  // 文件对象
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
 * @description json参数查询【请求数据类型定义】
 * @url [ GET ] /user/getRequest
 */
export interface UserGetRequestRequestByGet {
  userSchema: {
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
  };
  cade: string;
}
/**
 * @description json参数查询【响应数据类型定义】
 * @url [ GET ] /user/getRequest
 */
export interface UserGetRequestResponseByGet {
  // 用户信息
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
 * @description 创建用户、根据姓名创建用户【请求数据类型定义】
 * @url [ GET ] /user/create
 */
export interface UserCreateRequestByGet {
  name: string;
}
/**
 * @description 创建用户、根据姓名创建用户【响应数据类型定义】
 * @url [ GET ] /user/create
 */
export type UserCreateResponseByGet = string;
