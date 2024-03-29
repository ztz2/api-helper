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
export interface V2PetPetIdUploadImageRequestByPost {
  // ID of pet  * 换行符测试 * to update
  petId: number;
  // Additional data to pass to server
  additionalMetadata: string;
  // file to upload
  file: File;
}
/**
 * @description uploads an image【响应数据类型定义】
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export interface V2PetPetIdUploadImageResponseByPost {
  code?: number;
  type?: string;
  message?: string;
}
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
export interface V2PetRequestByPost {
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
 * @description Add a new pet to the store【响应数据类型定义】
 * @url [ POST ] /v2/pet
 */
export type V2PetResponseByPost = any;
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
export interface V2PetRequestByPut {
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
 * @description Update an existing pet【响应数据类型定义】
 * @url [ PUT ] /v2/pet
 */
export type V2PetResponseByPut = any;
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
export interface V2PetFindByStatusRequestByGet {
  // Status values that need to be considered for filter
  status: Array<'available' | 'pending' | 'sold'>;
}
/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings【响应数据类型定义】
 * @url [ GET ] /v2/pet/findByStatus
 */
export type V2PetFindByStatusResponseByGet = Array<{
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
}>;
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
export interface V2PetFindByTagsRequestByGet {
  // Tags to filter by
  tags: Array<string>;
}
/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.【响应数据类型定义】
 * @url [ GET ] /v2/pet/findByTags
 */
export type V2PetFindByTagsResponseByGet = Array<{
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
}>;
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
export interface V2PetPetIdRequestByGet {
  // ID of pet to return
  petId: number;
}
/**
 * @description Find pet by ID、Returns a single pet【响应数据类型定义】
 * @url [ GET ] /v2/pet/{petId}
 */
export interface V2PetPetIdResponseByGet {
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
export interface V2PetPetIdRequestByPost {
  // ID of pet that needs to be updated
  petId: number;
  // Updated name of the pet
  name: string;
  // Updated status of the pet
  status: string;
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
 * @description Place an order for a pet【请求数据类型定义】
 * @url [ POST ] /v2/store/order
 */
export interface V2StoreOrderRequestByPost {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  // Order Status
  status: 'placed' | 'approved' | 'delivered';
  // Order Tag
  tag: Array<
    // Order Tag Child
    Array<{
      tagName: 'error' | 'waring' | 'info';
    }>
  >;
  complete: boolean;
}
/**
 * @description Place an order for a pet【响应数据类型定义】
 * @url [ POST ] /v2/store/order
 */
export interface V2StoreOrderResponseByPost {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  // Order Status
  status?: 'placed' | 'approved' | 'delivered';
  // Order Tag
  tag?: Array<
    // Order Tag Child
    Array<{
      tagName?: 'error' | 'waring' | 'info';
    }>
  >;
  complete?: boolean;
}
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
export interface V2StoreOrderOrderIdRequestByGet {
  // ID of pet that needs to be fetched
  orderId: number;
}
/**
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions【响应数据类型定义】
 * @url [ GET ] /v2/store/order/{orderId}
 */
export interface V2StoreOrderOrderIdResponseByGet {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  // Order Status
  status?: 'placed' | 'approved' | 'delivered';
  // Order Tag
  tag?: Array<
    // Order Tag Child
    Array<{
      tagName?: 'error' | 'waring' | 'info';
    }>
  >;
  complete?: boolean;
}
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
 * @description Returns pet inventories by status、Returns a map of status codes to quantities【请求数据类型定义】
 * @url [ GET ] /v2/store/inventory
 */
export type V2StoreInventoryRequestByGet = Record<string, any>;
/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities【响应数据类型定义】
 * @url [ GET ] /v2/store/inventory
 */
export type V2StoreInventoryResponseByGet = any;
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
 * @description Creates list of users with given input array【请求数据类型定义】
 * @url [ POST ] /v2/user/createWithArray
 */
export interface V2UserCreateWithArrayRequestByPost {
  // List of user object
  userName: Array<string>;
  // The password for login in clear text
  password: string;
  // The name that needs to be fetched. Use user1 for testing.
  userId: number;
}
/**
 * @description Creates list of users with given input array【响应数据类型定义】
 * @url [ POST ] /v2/user/createWithArray
 */
export type V2UserCreateWithArrayResponseByPost = any;
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
  pathParamKeyNameList: ['userId'],
  queryStringKeyNameList: ['userName', 'password'],
};
/**
 * @description Creates list of users with given input array【请求数据类型定义】
 * @url [ POST ] /v2/user/createWithList
 */
export type V2UserCreateWithListRequestByPost = Array<{
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  // User Status
  userStatus: number;
}>;
/**
 * @description Creates list of users with given input array【响应数据类型定义】
 * @url [ POST ] /v2/user/createWithList
 */
export type V2UserCreateWithListResponseByPost = any;
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
export interface V2UserUsernameRequestByGet {
  // The name that needs to be fetched. Use user1 for testing.
  username1: string;
}
/**
 * @description Get user by user name【响应数据类型定义】
 * @url [ GET ] /v2/user/{username}
 */
export interface V2UserUsernameResponseByGet {
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
  pathParamKeyNameList: ['username1'],
  queryStringKeyNameList: [],
};
/**
 * @description Updated user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ PUT ] /v2/user/{username}
 */
export interface V2UserUsernameRequestByPut {
  // name that need to be updated
  username: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  // User Status
  userStatus: number;
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
export interface V2UserUsernameRequestByDelete {
  // The name that needs to be deleted
  username1: string;
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
  pathParamKeyNameList: ['username1'],
  queryStringKeyNameList: [],
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
export type V2UserLogoutRequestByGet = Record<string, any>;
/**
 * @description Logs out current logged in user session【响应数据类型定义】
 * @url [ GET ] /v2/user/logout
 */
export type V2UserLogoutResponseByGet = any;
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
 * @description Create user、This can only be done by the logged in user.【请求数据类型定义】
 * @url [ POST ] /v2/user
 */
export interface V2UserRequestByPost {
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
 * @description Create user、This can only be done by the logged in user.【响应数据类型定义】
 * @url [ POST ] /v2/user
 */
export type V2UserResponseByPost = any;
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
