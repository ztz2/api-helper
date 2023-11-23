/**
 * @description uploads an image【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969388
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export interface V2PetPetIdUploadImageRequestByPost {
  // ID of pet to update
  petId: string;
  // Additional data to pass to server
  additionalMetadata?: string;
  // file to upload
  file?: File;
}
/**
 * @description uploads an image【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969388
 * @url [ POST ] /v2/pet/{petId}/uploadImage
 */
export interface V2PetPetIdUploadImageResponseByPost {
  code: number;
  type: string;
  message: string;
}

/**
 * @description Add a new pet to the store【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969390
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
 * @doc https://yapi.pro/project/16095/interface/api/969390
 * @url [ POST ] /v2/pet
 */
export type V2PetResponseByPost = any;

/**
 * @description Update an existing pet【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969392
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
 * @doc https://yapi.pro/project/16095/interface/api/969392
 * @url [ PUT ] /v2/pet
 */
export type V2PetResponseByPut = any;

/**
 * @description Finds Pets by status【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969394
 * @url [ GET ] /v2/pet/findByStatus
 */
export interface V2PetFindByStatusRequestByGet {
  // Status values that need to be considered for filter
  status: string;
}
/**
 * @description Finds Pets by status【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969394
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
 * @description Finds Pets by tags【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969396
 * @url [ GET ] /v2/pet/findByTags
 */
export interface V2PetFindByTagsRequestByGet {
  // Tags to filter by
  tags: string;
}
/**
 * @description Finds Pets by tags【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969396
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
 * @description Find pet by ID【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969398
 * @url [ GET ] /v2/pet/{petId}
 */
export interface V2PetPetIdRequestByGet {
  // ID of pet to return
  petId: string;
}
/**
 * @description Find pet by ID【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969398
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
 * @description Updates a pet in the store with form data【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969400
 * @url [ POST ] /v2/pet/{petId}
 */
export interface V2PetPetIdRequestByPost {
  // ID of pet that needs to be updated
  petId: string;
  // Updated name of the pet
  name?: string;
  // Updated status of the pet
  status?: string;
}
/**
 * @description Updates a pet in the store with form data【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969400
 * @url [ POST ] /v2/pet/{petId}
 */
export type V2PetPetIdResponseByPost = any;

/**
 * @description Deletes a pet【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969402
 * @url [ DELETE ] /v2/pet/{petId}
 */
export interface V2PetPetIdRequestByDelete {
  // Pet id to delete
  petId: string;
}
/**
 * @description Deletes a pet【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969402
 * @url [ DELETE ] /v2/pet/{petId}
 */
export type V2PetPetIdResponseByDelete = any;

/**
 * @description Place an order for a pet【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969404
 * @url [ POST ] /v2/store/order
 */
export interface V2StoreOrderRequestByPost {
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
      // The password \r\r\n\n for login in clear text.
      tagName?: 'error' | 'waring' | 'info';
    }>
  >;
  complete?: boolean;
}
/**
 * @description Place an order for a pet【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969404
 * @url [ POST ] /v2/store/order
 */
export interface V2StoreOrderResponseByPost {
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
      // The password \r\r\n\n for login in clear text.
      tagName: 'error' | 'waring' | 'info';
    }>
  >;
  complete: boolean;
}

/**
 * @description Find purchase order by ID【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969406
 * @url [ GET ] /v2/store/order/{orderId}
 */
export interface V2StoreOrderOrderIdRequestByGet {
  // ID of pet that needs to be fetched
  orderId: string;
}
/**
 * @description Find purchase order by ID【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969406
 * @url [ GET ] /v2/store/order/{orderId}
 */
export interface V2StoreOrderOrderIdResponseByGet {
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
 * @description Delete purchase order by ID【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969408
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
export interface V2StoreOrderOrderIdRequestByDelete {
  // ID of the order that needs to be deleted
  orderId: string;
}
/**
 * @description Delete purchase order by ID【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969408
 * @url [ DELETE ] /v2/store/order/{orderId}
 */
export type V2StoreOrderOrderIdResponseByDelete = any;

/**
 * @description Returns pet inventories by status【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969410
 * @url [ GET ] /v2/store/inventory
 */
export type V2StoreInventoryRequestByGet = Record<string, any>;
/**
 * @description Returns pet inventories by status【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969410
 * @url [ GET ] /v2/store/inventory
 */
export type V2StoreInventoryResponseByGet = any;

/**
 * @description Creates list of users with given input array【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969412
 * @url [ POST ] /v2/user/createWithArray
 */
export interface V2UserCreateWithArrayRequestByPost {
  // The name that needs to be fetched. Use user1 for testing.
  userId: string;
  // List of user object
  userName: string;
  // The password for login in clear text
  password: string;
}
/**
 * @description Creates list of users with given input array【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969412
 * @url [ POST ] /v2/user/createWithArray
 */
export type V2UserCreateWithArrayResponseByPost = any;

/**
 * @description Creates list of users with given input array【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969414
 * @url [ POST ] /v2/user/createWithList
 */
export type V2UserCreateWithListRequestByPost = Array<{
  id?: number;
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
 * @doc https://yapi.pro/project/16095/interface/api/969414
 * @url [ POST ] /v2/user/createWithList
 */
export type V2UserCreateWithListResponseByPost = any;

/**
 * @description Get user by user name【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969416
 * @url [ GET ] /v2/user/{username}
 */
export interface V2UserUsernameRequestByGet {
  // The name that needs to be fetched. Use user1 for testing.
  username1: string;
  username: string;
}
/**
 * @description Get user by user name【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969416
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
 * @description Updated user【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969418
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
 * @description Updated user【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969418
 * @url [ PUT ] /v2/user/{username}
 */
export type V2UserUsernameResponseByPut = any;

/**
 * @description Delete user【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969420
 * @url [ DELETE ] /v2/user/{username}
 */
export interface V2UserUsernameRequestByDelete {
  // The name that needs to be deleted
  username1: string;
  username: string;
}
/**
 * @description Delete user【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969420
 * @url [ DELETE ] /v2/user/{username}
 */
export type V2UserUsernameResponseByDelete = any;

/**
 * @description Logs user into the system【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969422
 * @url [ GET ] /v2/user/login
 */
export interface V2UserLoginRequestByGet {
  // The user name for login
  username: string;
  // The password \r\r\n\n for login in clear text.
  password: string;
}
/**
 * @description Logs user into the system【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969422
 * @url [ GET ] /v2/user/login
 */
export type V2UserLoginResponseByGet = string;

/**
 * @description Logs out current logged in user session【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969424
 * @url [ GET ] /v2/user/logout
 */
export type V2UserLogoutRequestByGet = Record<string, any>;
/**
 * @description Logs out current logged in user session【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969424
 * @url [ GET ] /v2/user/logout
 */
export type V2UserLogoutResponseByGet = any;

/**
 * @description Create user【请求数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969426
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
 * @description Create user【响应数据类型定义】
 * @doc https://yapi.pro/project/16095/interface/api/969426
 * @url [ POST ] /v2/user
 */
export type V2UserResponseByPost = any;
