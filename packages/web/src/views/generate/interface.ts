export class RenderModelConfig {
  // API Id
  apiId = '';

  // 模板Id
  tplId = '对象_UI8QKroW6B3Kfq_fNsRhY';

  // 是否生成分号
  semi = true;

  // 是否生成CRUD
  crud = false;

  // 是否使用格栅布局
  grid = false;

  // 输入框属性
  maxlength = 100;

  // 输入框是否生成placeholder
  placeholder = false;

  // 表单是否生成label
  generateLabel = true;

  // 请求参数类型约束
  requestDataConstraint = true;

  // 响应参数类型约束
  responseDataConstraint = true;

  // 当没有字段时候是否继续生成
  ignoreEmpty = false;
}

export class RenderAPIConfig {
  // 模板ID
  tplId = 'API_gAHoEYCIUVnAlqIifY9S5';

  // 接口baseURL
  baseURLCodeText = '';

  // 代码类型
  codeType = 'ts';

  // 请求参数类型约束
  requestDataConstraint = true;

  // 响应参数类型约束
  responseDataConstraint = true;

  // 只生成API函数
  onlyApiFunc = false;

  // 函数命名是否需要baseUrl
  generateNameByBasePath = true;

  // 头部代码
  headCodeText = `import request from '@/utils/request';`;

  // 是否生成分号
  semi = true;

  // 重复请求
  duplicateRequest = false;
}

export class GenerateAllApiConfig extends RenderAPIConfig{
  // API模板ID
  apiTplId = 'API_gAHoEYCIUVnAlqIifY9S5';

  // 接口模板ID
  interfaceTplId = 'interface_Y4AIsXBlcKRXjU95av0Cx';

  generateInterface = true;
}
