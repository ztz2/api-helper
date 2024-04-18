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
  processRequestFunctionConfig,
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
declare interface V2PetPetIdUploadImageRequestByPost {
  // ID of pet to update
  petId: string;
  // Additional data to pass to server
  additionalMetadata?: string;
  // file to upload
  file?: File;
}
/**
 * @description uploads an image【响应数据类型定义】
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
declare interface V2PetPetIdUploadImageResponseByPost {
  code: number;
  type: string;
  message: string;
}
/**
 * @description uploads an image
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
declare const v2PetPetIdUploadImageByPost: {
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
 * @description uploads an image
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export function v2PetPetIdUploadImageByPost(
  data: V2PetPetIdUploadImageRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2PetPetIdUploadImageResponseByPost>(
    processRequestFunctionConfig(data, extraData, v2PetPetIdUploadImageByPost.requestConfig),
    ...args
  );
}
v2PetPetIdUploadImageByPost.requestConfig = {
  path: '/v2/pet/{petId}/uploadImage',
  method: 'POST',
  formDataKeyNameList: ['additionalMetadata', 'file'],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};
/**
 * @description Add a new pet to the store【请求数据类型定义】
 * @url [ POST ] /v2/pet
 */
declare interface V2PetRequestByPost {
  id?: string;
  category?: {
    id?: string;
    name?: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags?: Array<{
    id?: string;
    name?: string;
  }>;
  // pet status in the store
  status?: 'available' | 'pending' | 'sold';
}
/**
 * @description Add a new pet to the store【响应数据类型定义】
 * @url [ POST ] /v2/pet
 */
declare type V2PetResponseByPost = any;
/**
 * @description Add a new pet to the store
 * @url [ POST ] /v2/pet
 */
declare const v2PetByPost: {
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
 * @description Add a new pet to the store
 * @url [ POST ] /v2/pet
 */
export function v2PetByPost(data: V2PetRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2PetResponseByPost>(processRequestFunctionConfig(data, extraData, v2PetByPost.requestConfig), ...args);
}
v2PetByPost.requestConfig = {
  path: '/v2/pet',
  method: 'POST',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
/**
 * @description Update an existing pet【请求数据类型定义】
 * @url [ PUT ] /v2/pet
 */
declare interface V2PetRequestByPut {
  id?: string;
  category?: {
    id?: string;
    name?: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags?: Array<{
    id?: string;
    name?: string;
  }>;
  // pet status in the store
  status?: 'available' | 'pending' | 'sold';
}
/**
 * @description Update an existing pet【响应数据类型定义】
 * @url [ PUT ] /v2/pet
 */
declare type V2PetResponseByPut = any;
/**
 * @description Update an existing pet
 * @url [ PUT ] /v2/pet
 */
declare const v2PetByPut: {
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
 * @description Update an existing pet
 * @url [ PUT ] /v2/pet
 */
export function v2PetByPut(data: V2PetRequestByPut, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2PetResponseByPut>(processRequestFunctionConfig(data, extraData, v2PetByPut.requestConfig), ...args);
}
v2PetByPut.requestConfig = {
  path: '/v2/pet',
  method: 'PUT',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings【请求数据类型定义】
 * @url [ GET ] /v2/pet/findByStatus
 */
declare interface V2PetFindByStatusRequestByGet {
  // Status values that need to be considered for filter
  status: Array<'available' | 'pending' | 'sold'>;
}
/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings【响应数据类型定义】
 * @url [ GET ] /v2/pet/findByStatus
 */
declare type V2PetFindByStatusResponseByGet = Array<{
  id: string;
  category: {
    id: string;
    name: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags: Array<{
    id: string;
    name: string;
  }>;
  // pet status in the store
  status: 'available' | 'pending' | 'sold';
}>;
/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings
 * @url [ GET ] /v2/pet/findByStatus
 */
declare const v2PetFindByStatusByGet: {
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
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings
 * @url [ GET ] /v2/pet/findByStatus
 */
export function v2PetFindByStatusByGet(
  data: V2PetFindByStatusRequestByGet,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2PetFindByStatusResponseByGet>(
    processRequestFunctionConfig(data, extraData, v2PetFindByStatusByGet.requestConfig),
    ...args
  );
}
v2PetFindByStatusByGet.requestConfig = {
  path: '/v2/pet/findByStatus',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['status'],
};
/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.【请求数据类型定义】
 * @url [ GET ] /v2/pet/findByTags
 */
declare interface V2PetFindByTagsRequestByGet {
  // Tags to filter by
  tags: Array<string>;
}
/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.【响应数据类型定义】
 * @url [ GET ] /v2/pet/findByTags
 */
declare type V2PetFindByTagsResponseByGet = Array<{
  id: string;
  category: {
    id: string;
    name: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags: Array<{
    id: string;
    name: string;
  }>;
  // pet status in the store
  status: 'available' | 'pending' | 'sold';
}>;
/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @url [ GET ] /v2/pet/findByTags
 */
declare const v2PetFindByTagsByGet: {
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
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @url [ GET ] /v2/pet/findByTags
 */
export function v2PetFindByTagsByGet(data: V2PetFindByTagsRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2PetFindByTagsResponseByGet>(processRequestFunctionConfig(data, extraData, v2PetFindByTagsByGet.requestConfig), ...args);
}
v2PetFindByTagsByGet.requestConfig = {
  path: '/v2/pet/findByTags',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['tags'],
};
/**
 * @description Find pet by ID、Returns a single pet【请求数据类型定义】
 * @url [ GET ] /v2/pet/{petId}
 */
declare interface V2PetPetIdRequestByGet {
  // ID of pet to return
  petId: string;
}
/**
 * @description Find pet by ID、Returns a single pet【响应数据类型定义】
 * @url [ GET ] /v2/pet/{petId}
 */
declare interface V2PetPetIdResponseByGet {
  id: string;
  category: {
    id: string;
    name: string;
  };
  name: string;
  photoUrls: Array<string>;
  tags: Array<{
    id: string;
    name: string;
  }>;
  // pet status in the store
  status: 'available' | 'pending' | 'sold';
}
/**
 * @description Find pet by ID、Returns a single pet
 * @url [ GET ] /v2/pet/{petId}
 */
declare const v2PetPetIdByGet: {
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
 * @description Find pet by ID、Returns a single pet
 * @url [ GET ] /v2/pet/{petId}
 */
export function v2PetPetIdByGet(data: V2PetPetIdRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2PetPetIdResponseByGet>(processRequestFunctionConfig(data, extraData, v2PetPetIdByGet.requestConfig), ...args);
}
v2PetPetIdByGet.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};
/**
 * @description Updates a pet in the store with form data【请求数据类型定义】
 * @url [ POST ] /v2/pet/{petId}
 */
declare interface V2PetPetIdRequestByPost {
  // ID of pet that needs to be updated
  petId: string;
  // Updated name of the pet
  name?: string;
  // Updated status of the pet
  status?: string;
}
/**
 * @description Updates a pet in the store with form data【响应数据类型定义】
 * @url [ POST ] /v2/pet/{petId}
 */
declare type V2PetPetIdResponseByPost = any;
/**
 * @description Updates a pet in the store with form data
 * @url [ POST ] /v2/pet/{petId}
 */
declare const v2PetPetIdByPost: {
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
 * @description Updates a pet in the store with form data
 * @url [ POST ] /v2/pet/{petId}
 */
export function v2PetPetIdByPost(data: V2PetPetIdRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2PetPetIdResponseByPost>(processRequestFunctionConfig(data, extraData, v2PetPetIdByPost.requestConfig), ...args);
}
v2PetPetIdByPost.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'POST',
  formDataKeyNameList: ['name', 'status'],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};
/**
 * @description Deletes a pet【请求数据类型定义】
 * @url [ DELETE ] /v2/pet/{petId}
 */
declare interface V2PetPetIdRequestByDelete {
  // Pet id to delete
  petId: string;
}
/**
 * @description Deletes a pet【响应数据类型定义】
 * @url [ DELETE ] /v2/pet/{petId}
 */
declare type V2PetPetIdResponseByDelete = any;
/**
 * @description Deletes a pet
 * @url [ DELETE ] /v2/pet/{petId}
 */
declare const v2PetPetIdByDelete: {
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
 * @description Deletes a pet
 * @url [ DELETE ] /v2/pet/{petId}
 */
export function v2PetPetIdByDelete(data: V2PetPetIdRequestByDelete, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2PetPetIdResponseByDelete>(processRequestFunctionConfig(data, extraData, v2PetPetIdByDelete.requestConfig), ...args);
}
v2PetPetIdByDelete.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'DELETE',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};
/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities【请求数据类型定义】
 * @url [ GET ] /v2/store/inventory
 */
declare type V2StoreInventoryRequestByGet = Record<string, any>;
/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities【响应数据类型定义】
 * @url [ GET ] /v2/store/inventory
 */
declare type V2StoreInventoryResponseByGet = any;
/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities
 * @url [ GET ] /v2/store/inventory
 */
declare const v2StoreInventoryByGet: {
  (
    data?: V2StoreInventoryRequestByGet,
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
 * @description Returns pet inventories by status、Returns a map of status codes to quantities
 * @url [ GET ] /v2/store/inventory
 */
export function v2StoreInventoryByGet(
  data: V2StoreInventoryRequestByGet = {},
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2StoreInventoryResponseByGet>(
    processRequestFunctionConfig(data, extraData, v2StoreInventoryByGet.requestConfig),
    ...args
  );
}
v2StoreInventoryByGet.requestConfig = {
  path: '/v2/store/inventory',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
/**
 * @description Place an order for a pet【请求数据类型定义】
 * @url [ POST ] /v2/store/order
 */
declare interface V2StoreOrderRequestByPost {
  id?: string;
  petId?: string;
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
declare interface V2StoreOrderResponseByPost {
  id: string;
  petId: string;
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
declare const v2StoreOrderByPost: {
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
 * @description Place an order for a pet
 * @url [ POST ] /v2/store/order
 */
export function v2StoreOrderByPost(data: V2StoreOrderRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2StoreOrderResponseByPost>(processRequestFunctionConfig(data, extraData, v2StoreOrderByPost.requestConfig), ...args);
}
v2StoreOrderByPost.requestConfig = {
  path: '/v2/store/order',
  method: 'POST',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
/**
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions【请求数据类型定义】
 * @url [ GET ] /v2/store/order/{orderId}
 */
declare interface V2StoreOrderOrderIdRequestByGet {
  // ID of pet that needs to be fetched
  orderId: string;
}
/**
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions【响应数据类型定义】
 * @url [ GET ] /v2/store/order/{orderId}
 */
declare interface V2StoreOrderOrderIdResponseByGet {
  id: string;
  petId: string;
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
declare const v2StoreOrderOrderIdByGet: {
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
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @url [ GET ] /v2/store/order/{orderId}
 */
export function v2StoreOrderOrderIdByGet(
  data: V2StoreOrderOrderIdRequestByGet,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2StoreOrderOrderIdResponseByGet>(
    processRequestFunctionConfig(data, extraData, v2StoreOrderOrderIdByGet.requestConfig),
    ...args
  );
}
v2StoreOrderOrderIdByGet.requestConfig = {
  path: '/v2/store/order/{orderId}',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['orderId'],
  queryStringKeyNameList: [],
};
/**
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors【请求数据类型定义】
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
declare interface V2StoreOrderOrderIdRequestByDelete {
  // ID of the order that needs to be deleted
  orderId: string;
}
/**
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors【响应数据类型定义】
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
declare type V2StoreOrderOrderIdResponseByDelete = any;
/**
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
declare const v2StoreOrderOrderIdByDelete: {
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
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
export function v2StoreOrderOrderIdByDelete(
  data: V2StoreOrderOrderIdRequestByDelete,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2StoreOrderOrderIdResponseByDelete>(
    processRequestFunctionConfig(data, extraData, v2StoreOrderOrderIdByDelete.requestConfig),
    ...args
  );
}
v2StoreOrderOrderIdByDelete.requestConfig = {
  path: '/v2/store/order/{orderId}',
  method: 'DELETE',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['orderId'],
  queryStringKeyNameList: [],
};
/**
 * @description Creates list of users with given input array【请求数据类型定义】
 * @url [ POST ] /v2/user/createWithList
 */
declare type V2UserCreateWithListRequestByPost = Array<{
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  // User Status
  userStatus?: number;
}>;
/**
 * @description Creates list of users with given input array【响应数据类型定义】
 * @url [ POST ] /v2/user/createWithList
 */
declare type V2UserCreateWithListResponseByPost = any;
/**
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithList
 */
declare const v2UserCreateWithListByPost: {
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
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithList
 */
export function v2UserCreateWithListByPost(
  data: V2UserCreateWithListRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2UserCreateWithListResponseByPost>(
    processRequestFunctionConfig(data, extraData, v2UserCreateWithListByPost.requestConfig),
    ...args
  );
}
v2UserCreateWithListByPost.requestConfig = {
  path: '/v2/user/createWithList',
  method: 'POST',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
/**
 * @description Get user by user name【请求数据类型定义】
 * @url [ GET ] /v2/user/{username}
 */
declare interface V2UserUsernameRequestByGet {
  // The name that needs to be fetched. Use user1 for testing.
  username: string;
}
/**
 * @description Get user by user name【响应数据类型定义】
 * @url [ GET ] /v2/user/{username}
 */
declare interface V2UserUsernameResponseByGet {
  id: string;
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
declare const v2UserUsernameByGet: {
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
 * @description Get user by user name
 * @url [ GET ] /v2/user/{username}
 */
export function v2UserUsernameByGet(data: V2UserUsernameRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2UserUsernameResponseByGet>(processRequestFunctionConfig(data, extraData, v2UserUsernameByGet.requestConfig), ...args);
}
v2UserUsernameByGet.requestConfig = {
  path: '/v2/user/{username}',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: [],
};
/**
 * @description Updated user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ PUT ] /v2/user/{username}
 */
declare interface V2UserUsernameRequestByPut {
  // name that need to be updated
  username: string;
  id?: string;
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
declare type V2UserUsernameResponseByPut = any;
/**
 * @description Updated user、This can only be done by the logged in user.
 * @url [ PUT ] /v2/user/{username}
 */
declare const v2UserUsernameByPut: {
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
 * @description Updated user、This can only be done by the logged in user.
 * @url [ PUT ] /v2/user/{username}
 */
export function v2UserUsernameByPut(data: V2UserUsernameRequestByPut, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2UserUsernameResponseByPut>(processRequestFunctionConfig(data, extraData, v2UserUsernameByPut.requestConfig), ...args);
}
v2UserUsernameByPut.requestConfig = {
  path: '/v2/user/{username}',
  method: 'PUT',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: [],
};
/**
 * @description Delete user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ DELETE ] /v2/user/{username}
 */
declare interface V2UserUsernameRequestByDelete {
  // The name that needs to be deleted
  username: string;
}
/**
 * @description Delete user、This can only be done by the logged in user.【响应数据类型定义】
 * @url [ DELETE ] /v2/user/{username}
 */
declare type V2UserUsernameResponseByDelete = any;
/**
 * @description Delete user、This can only be done by the logged in user.
 * @url [ DELETE ] /v2/user/{username}
 */
declare const v2UserUsernameByDelete: {
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
 * @description Delete user、This can only be done by the logged in user.
 * @url [ DELETE ] /v2/user/{username}
 */
export function v2UserUsernameByDelete(
  data: V2UserUsernameRequestByDelete,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2UserUsernameResponseByDelete>(
    processRequestFunctionConfig(data, extraData, v2UserUsernameByDelete.requestConfig),
    ...args
  );
}
v2UserUsernameByDelete.requestConfig = {
  path: '/v2/user/{username}',
  method: 'DELETE',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: [],
};
/**
 * @description Logs user into the system【请求数据类型定义】
 * @url [ GET ] /v2/user/login
 */
declare interface V2UserLoginRequestByGet {
  // The user name for login
  username: string;
  // The password for login in clear text
  password: string;
}
/**
 * @description Logs user into the system【响应数据类型定义】
 * @url [ GET ] /v2/user/login
 */
declare type V2UserLoginResponseByGet = string;
/**
 * @description Logs user into the system
 * @url [ GET ] /v2/user/login
 */
declare const v2UserLoginByGet: {
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
 * @description Logs user into the system
 * @url [ GET ] /v2/user/login
 */
export function v2UserLoginByGet(data: V2UserLoginRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2UserLoginResponseByGet>(processRequestFunctionConfig(data, extraData, v2UserLoginByGet.requestConfig), ...args);
}
v2UserLoginByGet.requestConfig = {
  path: '/v2/user/login',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['username', 'password'],
};
/**
 * @description Logs out current logged in user session【请求数据类型定义】
 * @url [ GET ] /v2/user/logout
 */
declare type V2UserLogoutRequestByGet = Record<string, any>;
/**
 * @description Logs out current logged in user session【响应数据类型定义】
 * @url [ GET ] /v2/user/logout
 */
declare type V2UserLogoutResponseByGet = any;
/**
 * @description Logs out current logged in user session
 * @url [ GET ] /v2/user/logout
 */
declare const v2UserLogoutByGet: {
  (data?: V2UserLogoutRequestByGet, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2UserLogoutResponseByGet>;
  readonly requestConfig: {
    path: '/v2/user/logout';
    method: 'get';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Logs out current logged in user session
 * @url [ GET ] /v2/user/logout
 */
export function v2UserLogoutByGet(data: V2UserLogoutRequestByGet = {}, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2UserLogoutResponseByGet>(processRequestFunctionConfig(data, extraData, v2UserLogoutByGet.requestConfig), ...args);
}
v2UserLogoutByGet.requestConfig = {
  path: '/v2/user/logout',
  method: 'GET',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
/**
 * @description Creates list of users with given input array【请求数据类型定义】
 * @url [ POST ] /v2/user/createWithArray
 */
declare type V2UserCreateWithArrayRequestByPost = Array<{
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  // User Status
  userStatus?: number;
}>;
/**
 * @description Creates list of users with given input array【响应数据类型定义】
 * @url [ POST ] /v2/user/createWithArray
 */
declare type V2UserCreateWithArrayResponseByPost = any;
/**
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithArray
 */
declare const v2UserCreateWithArrayByPost: {
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
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithArray
 */
export function v2UserCreateWithArrayByPost(
  data: V2UserCreateWithArrayRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<V2UserCreateWithArrayResponseByPost>(
    processRequestFunctionConfig(data, extraData, v2UserCreateWithArrayByPost.requestConfig),
    ...args
  );
}
v2UserCreateWithArrayByPost.requestConfig = {
  path: '/v2/user/createWithArray',
  method: 'POST',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
/**
 * @description Create user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ POST ] /v2/user
 */
declare interface V2UserRequestByPost {
  id?: string;
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
declare type V2UserResponseByPost = any;
/**
 * @description Create user、This can only be done by the logged in user.
 * @url [ POST ] /v2/user
 */
declare const v2UserByPost: {
  (data: V2UserRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType): Promise<V2UserResponseByPost>;
  readonly requestConfig: {
    path: '/v2/user';
    method: 'post';
    formDataKeyNameList: [];
    pathParamKeyNameList: [];
    queryStringKeyNameList: [];
  };
};
/**
 * @description Create user、This can only be done by the logged in user.
 * @url [ POST ] /v2/user
 */
export function v2UserByPost(data: V2UserRequestByPost, extraData?: unknown, ...args: CurrentRequestFunctionRestArgsType) {
  return request<V2UserResponseByPost>(processRequestFunctionConfig(data, extraData, v2UserByPost.requestConfig), ...args);
}
v2UserByPost.requestConfig = {
  path: '/v2/user',
  method: 'POST',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
