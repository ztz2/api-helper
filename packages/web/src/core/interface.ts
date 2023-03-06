import { nanoid } from 'nanoid';
import { IJsonSchema } from 'openapi-types';

// 项目
export class AhProject {
  id = nanoid();
  title = '';
  description = '';
  version = '';
  openapiVersion = '';
  basePath = '';
  host = '';
  categoryList = [] as Array<AhModule>;
}

// 项目下面的模块
export class AhModule {
  id = nanoid();
  name = '';
  description = '';
  apiList = [] as Array<AhAPI>;
}


// 模块下的API接口
export class AhAPI {
  id = nanoid();
  url = '';
  method = '';
  contentType = [];
  description = '';
  summary = '';
  requestFields = [] as Array<AhAPIField>;
  responseFields = [] as Array<AhAPIField>;
}

// API接口数据字段
export class AhAPIField {
  id = nanoid();
  field = '';
  // 数据类型 [number, array, object]
  type = '';
  childrenType = '';
  children = [] as Array<AhAPIField>;
  enum = [];
  // body | query | param
  in = '';
  required = false;
  title = '';
  description = '';
}

export interface IAhJsonSchema extends IJsonSchema {
  properties?: {
    [name: string]: IJsonSchema & IAhJsonSchema;
  } & IAhJsonSchema;
  items: IJsonSchema['items'] & {
    title: string;
    properties: IAhJsonSchema;
    type: string | Array<string>;
    required: string[];
  } & IAhJsonSchema;
}
