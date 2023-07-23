import { OpenAPI } from 'openapi-types';

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export declare namespace APIHelper {
  type TemplateContent = {
    title: string;
    content: string;
  };
  type TemplateContentList = Array<TemplateContent>;
  type CategoryList = Array<Category>;
  type APIList = Array<API>;
  type SchemaList = Array<Schema>;
  type SchemaType =
    |'string'
    |'number'
    |'object'
    |'array'
    |'boolean'
    |'null'
    |'any'
    |'File'
    |'unknown';

  // 根文档对象
  interface Document {
    // 随机生成的唯一ID
    id: string;
    // 应用的名称。
    title: OpenAPI.Document['info']['title'];
    // 对应用的简短描述
    description: OpenAPI.Document['info']['description'];
    // API文档的版本
    version: OpenAPI.Document['info']['version'];
    // 文档的版本，openapi版本，yapi版本
    documentVersion: string;
    // 基础路径
    basePath: string;
    // 分组
    categoryList: CategoryList;
  }

  // 分组
  interface Category{
    // 随机生成的唯一ID
    id: string;
    // 分组名称
    name: string;
    // 分组描述
    description: string;
    // 分组下的接口列表
    apiList: APIList;
  }

  // 定义各个的端点和操作的相对路径
  interface API {
    // 随机生成的唯一ID
    id: string;
    // 一个可选的简要总结字符串，用来描述此路径内包含的所有操作。
    title: string;
    // 一个可选的详细说明字符串，用于详细描述此路径包含的所有操作。
    description: string;
    // 对 title 和 description的取值，title优先。取值规则 -> title ? title : description ? description : '';
    label: string;
    // 接口的文档地址，预留。比如：yapi可以指定接口地址
    docURL?: string;
    // 到各个端点的相对路径，路径必须以/打头，这个路径会被直接连接到 Server 对象 的url字段以组成完整URL地址（不会考虑是否是相对路径）
    path: string;
    // 描述对一个路径可执行的有效操作。
    method: string;
    // 表单参数字段集合
    formDataKeyNameList: Array<string>;
    // 路径参数字段集合
    pathParamKeyNameList: Array<string>;
    // URL参数字段集合
    queryStringKeyNameList: Array<string>;
    // 请求数据包含了 路径参数，query参数，body为JSON对象的参数
    requestDataSchema: Schema | null;
    // 原则上，body参数会整合到requestDataSchema中，此时此字段就为null
    // 当 body 参数和 (路径|query) 参数冲突的时候，body参数将会移植到此处。例子：queryParams = { id: '10' }，body = [1, 2, 3]; 此时对象和数组不可进行兼容。生成的请求参数也会变成两个，对应的interface也将会变成两个。
    requestExtraDataSchema: Schema | null;
    // 响应数据
    responseDataSchema: Schema | null;
  }

  // Schema
  type Schema =
    | IStringSchema
    | INumberSchema
    | IObjectSchema
    | IArraySchema
    | IBooleanSchema
    | IFileSchema
    | INullSchema
    | IAnySchema
    | IUnknownSchema;

  interface IAbstractSchema {
    // 随机生成的唯一ID
    id: string;
    // 类型
    type: SchemaType | string;
    // 字段名称，当为基本类型的时候，这个字段只是一个数据类型的标记，没有keyName存在
    keyName: string;
    // 简要描述，比如 username，描述: 用户名
    title: string;
    // 详细描述，对字段的详细解释。
    description: string;
    // 对 title 和 description的取值，title优先。取值规则 -> title ? title : description ? description : '';
    label: string;
    // 校验规则
    rules: {
      // 标明此参数是否是必选参数。如果 参数位置 的值是 path，那么这个参数一定是 必选 的因此这里的值必须是true。其他的则视情况而定。此字段的默认值是false。
      required: boolean;
    },
    // 例子数据
    examples: string[],
    // 节点子对象属性Schema
    params: Schema[];
    // 枚举数据
    enum: Array<string | number>;
  }

  interface IStringSchema extends IAbstractSchema {
    type: 'string';
    rules: {
      // 标明此参数是否是必选参数。如果 参数位置 的值是 path，那么这个参数一定是 必选 的因此这里的值必须是true。其他的则视情况而定。此字段的默认值是false。
      required: boolean;
      // 字符串与数组的校验-长度
      minLength?: number;
      maxLength?: number;
      // 正则表达式-校验
      pattern?: string;
    }
  }

  interface INumberSchema extends IAbstractSchema {
    type: 'number';
    rules: {
      // 标明此参数是否是必选参数。如果 参数位置 的值是 path，那么这个参数一定是 必选 的因此这里的值必须是true。其他的则视情况而定。此字段的默认值是false。
      required: boolean;
      // 数字校验-倍数
      multipleOf?: number;
      // 数字校验-最小值
      minimum?: number;
      // 数字校验-最大值
      maximum?: number;
      // 数字校验-排除最小值
      exclusiveMinimum?: number | boolean;
      // 数字校验-排除最大值
      exclusiveMaximum?: number | boolean;
    }
  }

  interface IObjectSchema extends IAbstractSchema {
    type: 'object';
  }

  interface IArraySchema extends IAbstractSchema{
    type: 'array';
    rules: {
      // 标明此参数是否是必选参数。如果 参数位置 的值是 path，那么这个参数一定是 必选 的因此这里的值必须是true。其他的则视情况而定。此字段的默认值是false。
      required: boolean;
      // （对应数组中的minItems和maxItems）
      minLength?: number;
      maxLength?: number;
      // 元素是否全部唯一
      uniqueItems?: boolean;
    }
  }

  interface IBooleanSchema extends IAbstractSchema {
    type: 'boolean';
  }

  interface IFileSchema extends IAbstractSchema {
    type: 'File';
  }

  interface INullSchema extends IAbstractSchema {
    type: 'null';
  }

  interface IAnySchema extends IAbstractSchema {
    type: 'any';
  }

  interface IUnknownSchema extends IAbstractSchema {
    type: 'unknown';
  }
}
