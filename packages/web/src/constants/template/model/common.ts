export const COMMON_HEAD = `/**
 * @description 渲染函数
 * @param params { object }
 * @param config.api { APIHelper.API } 选择的API
 * @param params.requestDataSchemaList { Array<APIHelper.Schema> } 选择的请求数据字段集合
 * @param params.responseDataSchemaList { Array<APIHelper.Schema> } 选择的响应数据字段集合
 * @param config { RenderModelConfig } 配置对象
 * @return [] { Array<string> } 返回数组，里面每一项字符串都是一个模板
 */
function renderTemplate (params, config) {
  // 模板引擎基于 art-template 使用，template 变量就是对art-template的引用，更多语法方法参考官方文档：https://github.com/aui/art-template
  // 函数中可以使用Lodash工具包所有功能，比如 cloneDeep，使用方式：lodash.cloneDeep
  const result = [];
  config = Object.assign(new RenderAPIConfig(), utils.checkType(config, 'Object') ? config : {});
`;
