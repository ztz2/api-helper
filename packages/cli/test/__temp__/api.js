/* eslint-disable */
/* prettier-ignore-start */

/** ————————————— 警告：该文件由 api-helper 自动生成，切记不能对文件进行修改（因为生成之后内容将会覆盖该文件，如果自动生成代码不满足业务，提PR） —————————————  **/

// prettier-ignore
import { processRequestFunctionConfig } from '@api-helper/core/es/lib/helpers';
// prettier-ignore
import request from './request';

/**
 * @描述 uploads an image
 * @请求信息 [ POST ] /v2/pet/{petId}/uploadImage
 */
export function v2PetPetIdUploadImageByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2PetPetIdUploadImageByPost.requestConfig
    ),
    ...args
  );
}
v2PetPetIdUploadImageByPost.requestConfig = {
  path: '/v2/pet/{petId}/uploadImage',
  method: 'post',
  formDataKeyNameList: ['additionalMetadata', 'file'],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: []
};

/**
 * @描述 Add a new pet to the store
 * @请求信息 [ POST ] /v2/pet
 */
export function v2PetByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(data, extraData, v2PetByPost.requestConfig),
    ...args
  );
}
v2PetByPost.requestConfig = {
  path: '/v2/pet',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 Update an existing pet
 * @请求信息 [ PUT ] /v2/pet
 */
export function v2PetByPut(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(data, extraData, v2PetByPut.requestConfig),
    ...args
  );
}
v2PetByPut.requestConfig = {
  path: '/v2/pet',
  method: 'put',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 Finds Pets by status、Multiple status values can be provided with comma separated strings
 * @请求信息 [ GET ] /v2/pet/findByStatus
 */
export function v2PetFindByStatusByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2PetFindByStatusByGet.requestConfig
    ),
    ...args
  );
}
v2PetFindByStatusByGet.requestConfig = {
  path: '/v2/pet/findByStatus',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['status']
};

/**
 * @描述 Finds Pets by tags、Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @请求信息 [ GET ] /v2/pet/findByTags
 */
export function v2PetFindByTagsByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2PetFindByTagsByGet.requestConfig
    ),
    ...args
  );
}
v2PetFindByTagsByGet.requestConfig = {
  path: '/v2/pet/findByTags',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['tags']
};

/**
 * @描述 Find pet by ID、Returns a single pet
 * @请求信息 [ GET ] /v2/pet/{petId}
 */
export function v2PetPetIdByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2PetPetIdByGet.requestConfig
    ),
    ...args
  );
}
v2PetPetIdByGet.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: []
};

/**
 * @描述 Updates a pet in the store with form data
 * @请求信息 [ POST ] /v2/pet/{petId}
 */
export function v2PetPetIdByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2PetPetIdByPost.requestConfig
    ),
    ...args
  );
}
v2PetPetIdByPost.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'post',
  formDataKeyNameList: ['name', 'status'],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: []
};

/**
 * @描述 Deletes a pet
 * @请求信息 [ DELETE ] /v2/pet/{petId}
 */
export function v2PetPetIdByDelete(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2PetPetIdByDelete.requestConfig
    ),
    ...args
  );
}
v2PetPetIdByDelete.requestConfig = {
  path: '/v2/pet/{petId}',
  method: 'delete',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['petId'],
  queryStringKeyNameList: []
};

/**
 * @描述 Place an order for a pet
 * @请求信息 [ POST ] /v2/store/order
 */
export function v2StoreOrderByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2StoreOrderByPost.requestConfig
    ),
    ...args
  );
}
v2StoreOrderByPost.requestConfig = {
  path: '/v2/store/order',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 Find purchase order by ID、For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @请求信息 [ GET ] /v2/store/order/{orderId}
 */
export function v2StoreOrderOrderIdByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2StoreOrderOrderIdByGet.requestConfig
    ),
    ...args
  );
}
v2StoreOrderOrderIdByGet.requestConfig = {
  path: '/v2/store/order/{orderId}',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['orderId'],
  queryStringKeyNameList: []
};

/**
 * @描述 Delete purchase order by ID、For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @请求信息 [ DELETE ] /v2/store/order/{orderId}
 */
export function v2StoreOrderOrderIdByDelete(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2StoreOrderOrderIdByDelete.requestConfig
    ),
    ...args
  );
}
v2StoreOrderOrderIdByDelete.requestConfig = {
  path: '/v2/store/order/{orderId}',
  method: 'delete',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['orderId'],
  queryStringKeyNameList: []
};

/**
 * @描述 Returns pet inventories by status、Returns a map of status codes to quantities
 * @请求信息 [ GET ] /v2/store/inventory
 */
export function v2StoreInventoryByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2StoreInventoryByGet.requestConfig
    ),
    ...args
  );
}
v2StoreInventoryByGet.requestConfig = {
  path: '/v2/store/inventory',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 Creates list of users with given input array
 * @请求信息 [ POST ] /v2/user/createWithArray
 */
export function v2UserCreateWithArrayByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2UserCreateWithArrayByPost.requestConfig
    ),
    ...args
  );
}
v2UserCreateWithArrayByPost.requestConfig = {
  path: '/v2/user/createWithArray',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 Creates list of users with given input array
 * @请求信息 [ POST ] /v2/user/createWithList
 */
export function v2UserCreateWithListByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2UserCreateWithListByPost.requestConfig
    ),
    ...args
  );
}
v2UserCreateWithListByPost.requestConfig = {
  path: '/v2/user/createWithList',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 Get user by user name
 * @请求信息 [ GET ] /v2/user/{username}
 */
export function v2UserUsernameByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2UserUsernameByGet.requestConfig
    ),
    ...args
  );
}
v2UserUsernameByGet.requestConfig = {
  path: '/v2/user/{username}',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: []
};

/**
 * @描述 Updated user、This can only be done by the logged in user.
 * @请求信息 [ PUT ] /v2/user/{username}
 */
export function v2UserUsernameByPut(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2UserUsernameByPut.requestConfig
    ),
    ...args
  );
}
v2UserUsernameByPut.requestConfig = {
  path: '/v2/user/{username}',
  method: 'put',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: []
};

/**
 * @描述 Delete user、This can only be done by the logged in user.
 * @请求信息 [ DELETE ] /v2/user/{username}
 */
export function v2UserUsernameByDelete(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2UserUsernameByDelete.requestConfig
    ),
    ...args
  );
}
v2UserUsernameByDelete.requestConfig = {
  path: '/v2/user/{username}',
  method: 'delete',
  formDataKeyNameList: [],
  pathParamKeyNameList: ['username'],
  queryStringKeyNameList: []
};

/**
 * @描述 Logs user into the system
 * @请求信息 [ GET ] /v2/user/login
 */
export function v2UserLoginByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2UserLoginByGet.requestConfig
    ),
    ...args
  );
}
v2UserLoginByGet.requestConfig = {
  path: '/v2/user/login',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['username', 'password']
};

/**
 * @描述 Logs out current logged in user session
 * @请求信息 [ GET ] /v2/user/logout
 */
export function v2UserLogoutByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      v2UserLogoutByGet.requestConfig
    ),
    ...args
  );
}
v2UserLogoutByGet.requestConfig = {
  path: '/v2/user/logout',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 Create user、This can only be done by the logged in user.
 * @请求信息 [ POST ] /v2/user
 */
export function v2UserByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(data, extraData, v2UserByPost.requestConfig),
    ...args
  );
}
v2UserByPost.requestConfig = {
  path: '/v2/user',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};
