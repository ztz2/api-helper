/* eslint-disable */
/* prettier-ignore-start */

/* 提示：该文件由 API Helper Cli 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// prettier-ignore
import { processRequestFunctionConfig } from '@api-helper/core/es/lib/helpers';
// prettier-ignore
import request from './request';

/**
 * @description uploads an image
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export function v2PetPetIdUploadImageByPost(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetPetIdUploadImageByPost.requestConfig), ...args);
}
v2PetPetIdUploadImageByPost.requestConfig = {
  path: '/v2/pet/{petId}/uploadImage',
  method: 'post',
  formDataKeyNameList: ['additionalMetadata', 'file'],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};

/**
 * @description Add a new pet to the store
 * @url [ POST ] /v2/pet
 */
export function v2PetByPost(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetByPost.requestConfig), ...args);
}
v2PetByPost.requestConfig = {
  path: '/v2/pet',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description Update an existing pet
 * @url [ PUT ] /v2/pet
 */
export function v2PetByPut(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetByPut.requestConfig), ...args);
}
v2PetByPut.requestConfig = {
  path: '/v2/pet',
  method: 'put',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description Finds Pets by status、Multiple status values can be provided with comma separated strings
 * @url [ GET ] /v2/pet/findByStatus
 */
export function v2PetFindByStatusByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetFindByStatusByGet.requestConfig), ...args);
}
v2PetFindByStatusByGet.requestConfig = {
  path: '/v2/pet/findByStatus',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['status'],
};

/**
 * @description Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @url [ GET ] /v2/pet/findByTags
 */
export function v2PetFindByTagsByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetFindByTagsByGet.requestConfig), ...args);
}
v2PetFindByTagsByGet.requestConfig = {
  path: '/v2/pet/findByTags',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['tags'],
};

/**
 * @description Find pet by ID、Returns a single pet
 * @url [ GET ] /v2/pet/{petId}
 */
export function v2PetPetIdByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetPetIdByGet.requestConfig), ...args);
}
v2PetPetIdByGet.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};

/**
 * @description Updates a pet in the store with form data
 * @url [ POST ] /v2/pet/{petId}
 */
export function v2PetPetIdByPost(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetPetIdByPost.requestConfig), ...args);
}
v2PetPetIdByPost.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'post',
  formDataKeyNameList: ['name', 'status'],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};

/**
 * @description Deletes a pet
 * @url [ DELETE ] /v2/pet/{petId}
 */
export function v2PetPetIdByDelete(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2PetPetIdByDelete.requestConfig), ...args);
}
v2PetPetIdByDelete.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'delete',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: [],
};

/**
 * @description Place an order for a pet
 * @url [ POST ] /v2/store/order
 */
export function v2StoreOrderByPost(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2StoreOrderByPost.requestConfig), ...args);
}
v2StoreOrderByPost.requestConfig = {
  path: '/v2/store/order',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @url [ GET ] /v2/store/order/{orderId}
 */
export function v2StoreOrderOrderIdByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2StoreOrderOrderIdByGet.requestConfig), ...args);
}
v2StoreOrderOrderIdByGet.requestConfig = {
  path: '/v2/store/order/{orderId}',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['orderId'],
  queryStringKeyNameList: [],
};

/**
 * @description Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
export function v2StoreOrderOrderIdByDelete(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2StoreOrderOrderIdByDelete.requestConfig), ...args);
}
v2StoreOrderOrderIdByDelete.requestConfig = {
  path: '/v2/store/order/{orderId}',
  method: 'delete',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['orderId'],
  queryStringKeyNameList: [],
};

/**
 * @description Returns pet inventories by status、Returns a map of status codes to quantities
 * @url [ GET ] /v2/store/inventory
 */
export function v2StoreInventoryByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2StoreInventoryByGet.requestConfig), ...args);
}
v2StoreInventoryByGet.requestConfig = {
  path: '/v2/store/inventory',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithArray
 */
export function v2UserCreateWithArrayByPost(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserCreateWithArrayByPost.requestConfig), ...args);
}
v2UserCreateWithArrayByPost.requestConfig = {
  path: '/v2/user/createWithArray',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description Creates list of users with given input array
 * @url [ POST ] /v2/user/createWithList
 */
export function v2UserCreateWithListByPost(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserCreateWithListByPost.requestConfig), ...args);
}
v2UserCreateWithListByPost.requestConfig = {
  path: '/v2/user/createWithList',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description Get user by user name
 * @url [ GET ] /v2/user/{username}
 */
export function v2UserUsernameByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserUsernameByGet.requestConfig), ...args);
}
v2UserUsernameByGet.requestConfig = {
  path: '/v2/user/{username}',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: [],
};

/**
 * @description Updated user、This can only be done by the logged in user.
 * @url [ PUT ] /v2/user/{username}
 */
export function v2UserUsernameByPut(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserUsernameByPut.requestConfig), ...args);
}
v2UserUsernameByPut.requestConfig = {
  path: '/v2/user/{username}',
  method: 'put',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: [],
};

/**
 * @description Delete user、This can only be done by the logged in user.
 * @url [ DELETE ] /v2/user/{username}
 */
export function v2UserUsernameByDelete(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserUsernameByDelete.requestConfig), ...args);
}
v2UserUsernameByDelete.requestConfig = {
  path: '/v2/user/{username}',
  method: 'delete',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: [],
};

/**
 * @description Logs user into the system
 * @url [ GET ] /v2/user/login
 */
export function v2UserLoginByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserLoginByGet.requestConfig), ...args);
}
v2UserLoginByGet.requestConfig = {
  path: '/v2/user/login',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['username', 'password'],
};

/**
 * @description Logs out current logged in user session
 * @url [ GET ] /v2/user/logout
 */
export function v2UserLogoutByGet(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserLogoutByGet.requestConfig), ...args);
}
v2UserLogoutByGet.requestConfig = {
  path: '/v2/user/logout',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};

/**
 * @description Create user、This can only be done by the logged in user.
 * @url [ POST ] /v2/user
 */
export function v2UserByPost(data, extraData, ...args) {
  return request(processRequestFunctionConfig(data, extraData, v2UserByPost.requestConfig), ...args);
}
v2UserByPost.requestConfig = {
  path: '/v2/user',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
