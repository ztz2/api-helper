/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* 代码生成时间:  */
/* 提示：该文件由 API Helper CLI 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,
} from '@api-helper/cli/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from './request';
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;

/**
 * @description uploads an image【请求数据类型定义】
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export interface V2PetPetIdUploadImageRequestByPost {
  // ID of pet to update
  petId: number;
  // Additional data to pass to server
  additionalMetadata?: string;
  // file to upload
  file?: File;
}
/**
 * @description uploads an image【响应数据类型定义】
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export interface V2PetPetIdUploadImageResponseByPost {
  code: number;
  type: string;
  message: string;
}
/**
 * @description uploads an image
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export declare const v2PetPetIdUploadImageByPost: {
  (
    data: V2PetPetIdUploadImageRequestByPost,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2PetPetIdUploadImageResponseByPost>;
  readonly requestConfig: {
    path: '/v2/pet/{petId}/uploadImage';
    method: 'post';
    formDataKeyNameList: ['additionalMetadata', 'file'];
    pathParamKeyNameList: ['petId'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Add a new pet to the store【请求数据类型定义】
 * @url [ POST ] /v2/pet
 */
export interface V2PetRequestByPost {
  id?: number;
  category?: {
    id?: number;
    name?: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags?: Array<{
    id?: number;
    name?: string;
  }>;
  // pet status in the store
  status?: 'available' | 'pending' | 'sold';
}
/**
 * @description Add a new pet to the store【响应数据类型定义】
 * @url [ POST ] /v2/pet
 */
export type V2PetResponseByPost = any;
/**
 * @description Add a new pet to the store
 * @url [ POST ] /v2/pet
 */
export declare const v2PetByPost: {
  (data: V2PetRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2PetResponseByPost>;
  readonly requestConfig: {
    path: '/v2/pet';
    method: 'post';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Update an existing pet【请求数据类型定义】
 * @url [ PUT ] /v2/pet
 */
export interface V2PetRequestByPut {
  id?: number;
  category?: {
    id?: number;
    name?: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags?: Array<{
    id?: number;
    name?: string;
  }>;
  // pet status in the store
  status?: 'available' | 'pending' | 'sold';
}
/**
 * @description Update an existing pet【响应数据类型定义】
 * @url [ PUT ] /v2/pet
 */
export type V2PetResponseByPut = any;
/**
 * @description Update an existing pet
 * @url [ PUT ] /v2/pet
 */
export declare const v2PetByPut: {
  (data: V2PetRequestByPut, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2PetResponseByPut>;
  readonly requestConfig: {
    path: '/v2/pet';
    method: 'put';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings【请求数据类型定义】
 * @url [ GET ] /v2/pet/findByStatus
 */
export interface V2PetFindByStatusRequestByGet {
  // Status values that need to be considered for filter
  status: Array<any>;
}
/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings【响应数据类型定义】
 * @url [ GET ] /v2/pet/findByStatus
 */
export type V2PetFindByStatusResponseByGet = Array<{
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags: Array<{
    id: number;
    name: string;
  }>;
  // pet status in the store
  status: 'available' | 'pending' | 'sold';
}>;
/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings
 * @url [ GET ] /v2/pet/findByStatus
 */
export declare const v2PetFindByStatusByGet: {
  (
    data: V2PetFindByStatusRequestByGet,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2PetFindByStatusResponseByGet>;
  readonly requestConfig: {
    path: '/v2/pet/findByStatus';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: ['status'];
  };
};
/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.【请求数据类型定义】
 * @url [ GET ] /v2/pet/findByTags
 */
export interface V2PetFindByTagsRequestByGet {
  // Tags to filter by
  tags: Array<any>;
}
/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.【响应数据类型定义】
 * @url [ GET ] /v2/pet/findByTags
 */
export type V2PetFindByTagsResponseByGet = Array<{
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags: Array<{
    id: number;
    name: string;
  }>;
  // pet status in the store
  status: 'available' | 'pending' | 'sold';
}>;
/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @url [ GET ] /v2/pet/findByTags
 */
export declare const v2PetFindByTagsByGet: {
  (
    data: V2PetFindByTagsRequestByGet,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2PetFindByTagsResponseByGet>;
  readonly requestConfig: {
    path: '/v2/pet/findByTags';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: ['tags'];
  };
};
/**
 * @description Find pet by ID、Returns a single pet【请求数据类型定义】
 * @url [ GET ] /v2/pet/{petId}
 */
export interface V2PetPetIdRequestByGet {
  // ID of pet to return
  petId: number;
}
/**
 * @description Find pet by ID、Returns a single pet【响应数据类型定义】
 * @url [ GET ] /v2/pet/{petId}
 */
export interface V2PetPetIdResponseByGet {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags: Array<{
    id: number;
    name: string;
  }>;
  // pet status in the store
  status: 'available' | 'pending' | 'sold';
}
/**
 * @description Find pet by ID、Returns a single pet
 * @url [ GET ] /v2/pet/{petId}
 */
export declare const v2PetPetIdByGet: {
  (data: V2PetPetIdRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2PetPetIdResponseByGet>;
  readonly requestConfig: {
    path: '/v2/pet/{petId}';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: ['petId'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Updates a pet in the store with form data【请求数据类型定义】
 * @url [ POST ] /v2/pet/{petId}
 */
export interface V2PetPetIdRequestByPost {
  // ID of pet that needs to be updated
  petId: number;
  // Updated name of the pet
  name?: string;
  // Updated status of the pet
  status?: string;
}
/**
 * @description Updates a pet in the store with form data【响应数据类型定义】
 * @url [ POST ] /v2/pet/{petId}
 */
export type V2PetPetIdResponseByPost = any;
/**
 * @description Updates a pet in the store with form data
 * @url [ POST ] /v2/pet/{petId}
 */
export declare const v2PetPetIdByPost: {
  (data: V2PetPetIdRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2PetPetIdResponseByPost>;
  readonly requestConfig: {
    path: '/v2/pet/{petId}';
    method: 'post';
    formDataKeyNameList: ['name', 'status'];
    pathParamKeyNameList: ['petId'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Deletes a pet【请求数据类型定义】
 * @url [ DELETE ] /v2/pet/{petId}
 */
export interface V2PetPetIdRequestByDelete {
  // Pet id to delete
  petId: number;
}
/**
 * @description Deletes a pet【响应数据类型定义】
 * @url [ DELETE ] /v2/pet/{petId}
 */
export type V2PetPetIdResponseByDelete = any;
/**
 * @description Deletes a pet
 * @url [ DELETE ] /v2/pet/{petId}
 */
export declare const v2PetPetIdByDelete: {
  (data: V2PetPetIdRequestByDelete, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2PetPetIdResponseByDelete>;
  readonly requestConfig: {
    path: '/v2/pet/{petId}';
    method: 'delete';
    formDataKeyNameList: [];
    pathParamKeyNameList: ['petId'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Place an order for a pet【请求数据类型定义】
 * @url [ POST ] /v2/store/order
 */
export interface V2StoreOrderRequestByPost {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  // Order Status
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
}
/**
 * @description Place an order for a pet【响应数据类型定义】
 * @url [ POST ] /v2/store/order
 */
export interface V2StoreOrderResponseByPost {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  // Order Status
  status: 'placed' | 'approved' | 'delivered';
  complete: boolean;
}
/**
 * @description Place an order for a pet
 * @url [ POST ] /v2/store/order
 */
export declare const v2StoreOrderByPost: {
  (data: V2StoreOrderRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2StoreOrderResponseByPost>;
  readonly requestConfig: {
    path: '/v2/store/order';
    method: 'post';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions【请求数据类型定义】
 * @url [ GET ] /v2/store/order/{orderId}
 */
export interface V2StoreOrderOrderIdRequestByGet {
  // ID of pet that needs to be fetched
  orderId: number;
}
/**
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions【响应数据类型定义】
 * @url [ GET ] /v2/store/order/{orderId}
 */
export interface V2StoreOrderOrderIdResponseByGet {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  // Order Status
  status: 'placed' | 'approved' | 'delivered';
  complete: boolean;
}
/**
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @url [ GET ] /v2/store/order/{orderId}
 */
export declare const v2StoreOrderOrderIdByGet: {
  (
    data: V2StoreOrderOrderIdRequestByGet,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2StoreOrderOrderIdResponseByGet>;
  readonly requestConfig: {
    path: '/v2/store/order/{orderId}';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: ['orderId'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors【请求数据类型定义】
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
export interface V2StoreOrderOrderIdRequestByDelete {
  // ID of the order that needs to be deleted
  orderId: number;
}
/**
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors【响应数据类型定义】
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
export type V2StoreOrderOrderIdResponseByDelete = any;
/**
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
export declare const v2StoreOrderOrderIdByDelete: {
  (
    data: V2StoreOrderOrderIdRequestByDelete,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2StoreOrderOrderIdResponseByDelete>;
  readonly requestConfig: {
    path: '/v2/store/order/{orderId}';
    method: 'delete';
    formDataKeyNameList: [];
    pathParamKeyNameList: ['orderId'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities【请求数据类型定义】
 * @url [ GET ] /v2/store/inventory
 */
export type V2StoreInventoryRequestByGet = any;
/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities【响应数据类型定义】
 * @url [ GET ] /v2/store/inventory
 */
export type V2StoreInventoryResponseByGet = any;
/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities
 * @url [ GET ] /v2/store/inventory
 */
export declare const v2StoreInventoryByGet: {
  (
    data: V2StoreInventoryRequestByGet,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2StoreInventoryResponseByGet>;
  readonly requestConfig: {
    path: '/v2/store/inventory';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Get user by user name【请求数据类型定义】
 * @url [ GET ] /v2/user/{username}
 */
export interface V2UserUsernameRequestByGet {
  // The name that needs to be fetched. Use user1 for testing.
  username: string;
}
/**
 * @description Get user by user name【响应数据类型定义】
 * @url [ GET ] /v2/user/{username}
 */
export interface V2UserUsernameResponseByGet {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  // User Status
  userStatus: number;
}
/**
 * @description Get user by user name
 * @url [ GET ] /v2/user/{username}
 */
export declare const v2UserUsernameByGet: {
  (
    data: V2UserUsernameRequestByGet,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2UserUsernameResponseByGet>;
  readonly requestConfig: {
    path: '/v2/user/{username}';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: ['username'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Updated user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ PUT ] /v2/user/{username}
 */
export interface V2UserUsernameRequestByPut {
  // name that need to be updated
  username: string;
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  // User Status
  userStatus?: number;
}
/**
 * @description Updated user、This can only be done by the logged in user.【响应数据类型定义】
 * @url [ PUT ] /v2/user/{username}
 */
export type V2UserUsernameResponseByPut = any;
/**
 * @description Updated user、This can only be done by the logged in user.
 * @url [ PUT ] /v2/user/{username}
 */
export declare const v2UserUsernameByPut: {
  (
    data: V2UserUsernameRequestByPut,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2UserUsernameResponseByPut>;
  readonly requestConfig: {
    path: '/v2/user/{username}';
    method: 'put';
    formDataKeyNameList: [];
    pathParamKeyNameList: ['username'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Delete user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ DELETE ] /v2/user/{username}
 */
export interface V2UserUsernameRequestByDelete {
  // The name that needs to be deleted
  username: string;
}
/**
 * @description Delete user、This can only be done by the logged in user.【响应数据类型定义】
 * @url [ DELETE ] /v2/user/{username}
 */
export type V2UserUsernameResponseByDelete = any;
/**
 * @description Delete user、This can only be done by the logged in user.
 * @url [ DELETE ] /v2/user/{username}
 */
export declare const v2UserUsernameByDelete: {
  (
    data: V2UserUsernameRequestByDelete,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2UserUsernameResponseByDelete>;
  readonly requestConfig: {
    path: '/v2/user/{username}';
    method: 'delete';
    formDataKeyNameList: [];
    pathParamKeyNameList: ['username'];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Logs user into the system【请求数据类型定义】
 * @url [ GET ] /v2/user/login
 */
export interface V2UserLoginRequestByGet {
  // The user name for login
  username: string;
  // The password for login in clear text
  password: string;
}
/**
 * @description Logs user into the system【响应数据类型定义】
 * @url [ GET ] /v2/user/login
 */
export type V2UserLoginResponseByGet = string;
/**
 * @description Logs user into the system
 * @url [ GET ] /v2/user/login
 */
export declare const v2UserLoginByGet: {
  (data: V2UserLoginRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2UserLoginResponseByGet>;
  readonly requestConfig: {
    path: '/v2/user/login';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: ['username', 'password'];
  };
};
/**
 * @description Logs out current logged in user session【请求数据类型定义】
 * @url [ GET ] /v2/user/logout
 */
export type V2UserLogoutRequestByGet = any;
/**
 * @description Logs out current logged in user session【响应数据类型定义】
 * @url [ GET ] /v2/user/logout
 */
export type V2UserLogoutResponseByGet = any;
/**
 * @description Logs out current logged in user session
 * @url [ GET ] /v2/user/logout
 */
export declare const v2UserLogoutByGet: {
  (data: V2UserLogoutRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2UserLogoutResponseByGet>;
  readonly requestConfig: {
    path: '/v2/user/logout';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Creates list of users with given input array【请求数据类型定义】
 * @url [ POST ] /v2/user/createWithArray
 */
export type V2UserCreateWithArrayRequestByPost = any;
/**
 * @description Creates list of users with given input array【响应数据类型定义】
 * @url [ POST ] /v2/user/createWithArray
 */
export type V2UserCreateWithArrayResponseByPost = any;
/**
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithArray
 */
export declare const v2UserCreateWithArrayByPost: {
  (
    data: V2UserCreateWithArrayRequestByPost,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2UserCreateWithArrayResponseByPost>;
  readonly requestConfig: {
    path: '/v2/user/createWithArray';
    method: 'post';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Creates list of users with given input array【请求数据类型定义】
 * @url [ POST ] /v2/user/createWithList
 */
export type V2UserCreateWithListRequestByPost = any;
/**
 * @description Creates list of users with given input array【响应数据类型定义】
 * @url [ POST ] /v2/user/createWithList
 */
export type V2UserCreateWithListResponseByPost = any;
/**
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithList
 */
export declare const v2UserCreateWithListByPost: {
  (
    data: V2UserCreateWithListRequestByPost,
    extraData?: unknown,
    ...args: CurrentRequestFunctionRestArgsType
  ): Promise<V2UserCreateWithListResponseByPost>;
  readonly requestConfig: {
    path: '/v2/user/createWithList';
    method: 'post';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Create user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ POST ] /v2/user
 */
export interface V2UserRequestByPost {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  // User Status
  userStatus?: number;
}
/**
 * @description Create user、This can only be done by the logged in user.【响应数据类型定义】
 * @url [ POST ] /v2/user
 */
export type V2UserResponseByPost = any;
/**
 * @description Create user、This can only be done by the logged in user.
 * @url [ POST ] /v2/user
 */
export declare const v2UserByPost: {
  (data: V2UserRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2UserResponseByPost>;
  readonly requestConfig: {
    path: '/v2/user';
    method: 'post';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
