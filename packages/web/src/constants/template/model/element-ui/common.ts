
export const COMMON_HEAD = `/**
// 项目
export class AhProject {
  id = nanoid();
  title = '';
  description = '';
  version = '';
  openapiVersion = '';
  basePath = '';
  host = '';
  categoryList = [];
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
  requestFields = [];
  responseFields = [];
}

// API接口数据字段
export class AhAPIField {
  id = nanoid();
  field = '';
  // 数据类型
  type = [] as Array<string>;
  childrenType = [] as Array<string>;
  children = [] as Array<AhAPIField>;
  enum = [];
  // body | query | param
  in = '';
  required = false;
  title = '';
  description = '';
}

export class RenderAPIConfig {
  // 模板ID
  tplId = '';

  // 代码类型
  codeType = 'typescript';

  // 请求参数类型约束
  requestDataConstraint = true;

  // 响应参数类型约束
  responseDataConstraint = true;

  // 只生成API函数
  onlyApiFunc = false;

  // 函数命名是否需要baseUrl
  generateNameByBasePath = true;

  // 头部代码
  headCodeText = \`import request from '@/utils/request';\n\`;

  // 是否生成分号
  semi = true;

  // 重复请求
  duplicateRequest = false;
}

 * @description 渲染函数
 * @param params { object }
 * @param config.project { AhProject } 项目对象
 * @param params.categoryList { Array<AhModule> }  选择的项目下的模块
 * @param params.api { Array<AhAPI> } 选择的API 
 * @param params.apiList { Array<AhAPI> } 选择的模块下的API 
 * @param params.requestFields { Array<AhAPIField> } 选择的请求数据字段集合 
 * @param params.responseFields { Array<AhAPIField> } 选择的响应数据字段集合 
 * @param config { RenderModelConfig } 配置对象 
 * @return [] { Array<string> } 返回数组，里面每一项字符串都是一个模板
 */
function renderTemplate (params, config) {
  // 模板引擎基于 art-template 使用，template 变量就是对art-template的引用，更多语法方法参考官方文档：https://github.com/aui/art-template
  // 函数中可以使用Lodash工具包所有功能，比如 cloneDeep，使用方式：lodash.cloneDeep
  const result = [];
  config = Object.assign(new RenderAPIConfig(), utils.checkType(config, 'Object') ? config : {});
`;
