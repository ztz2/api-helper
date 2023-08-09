/**
 * @description 普通body请求-put【请求数据类型定义】
 * @url [ PUT ] /body/bodyPut
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
 * @description 普通body请求-put【响应数据类型定义】
 * @url [ PUT ] /body/bodyPut
 */
export interface IBodyBodyPutResponseByPut {
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
export interface IUserDeviceIdBody1RequestByPost {
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
export interface IUserDeviceIdBody1ResponseByPost {
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
export interface IUserGetRequest1RequestByPost {
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
export interface IUserGetRequest1ResponseByPost {
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
export interface IUserCreateOneRequestByPost {
  // 主键id
  id?: string;
  // 名称
  name?: string;
}
/**
 * @description 创建用户-createOne、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOne
 */
export interface IUserCreateOneResponseByPost {
  // 主键id
  id: string;
  // 名称
  name: string;
}

/**
 * @description 创建用户-Schema、根据姓名创建用户1【请求数据类型定义】
 * @url [ POST ] /user/createOneSchema
 */
export interface IUserCreateOneSchemaRequestByPost {
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
export interface IUserCreateOneSchemaResponseByPost {
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
export interface IUserCreateOne1RequestByPost {
  id?: string;
  name?: string;
}
/**
 * @description 创建用户1、根据姓名创建用户1【响应数据类型定义】
 * @url [ POST ] /user/createOne1
 */
export interface IUserCreateOne1ResponseByPost {
  // 主键id
  id: string;
  // 名称
  name: string;
}

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
 * @description 普通body请求【响应数据类型定义】
 * @url [ POST ] /body/body
 */
export interface IBodyBodyResponseByPost {
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
 * @description 普通body请求+Param【响应数据类型定义】
 * @url [ POST ] /body/bodyParam
 */
export interface IBodyBodyParamResponseByPost {
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
 * @description 普通body请求+Param+Header【响应数据类型定义】
 * @url [ POST ] /body/bodyParamHeader
 */
export interface IBodyBodyParamHeaderResponseByPost {
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
 * @description 普通body请求+Param+Header+Path【响应数据类型定义】
 * @url [ POST ] /body/bodyParamHeaderPath/{id}
 */
export interface IBodyBodyParamHeaderPathIdResponseByPost {
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
export interface IUserGetRequestRequestByGet {
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
export interface IUserGetRequestResponseByGet {
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
export interface IUserCreateRequestByGet {
  name: string;
}
/**
 * @description 创建用户、根据姓名创建用户【响应数据类型定义】
 * @url [ GET ] /user/create
 */
export type UserCreateResponseTypeByGet = string;
