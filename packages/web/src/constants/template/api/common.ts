export const COMMON_HEAD = `/**
 * @description 渲染函数
 * @param params { object }
 * @param config.apiList { Array<APIHelper.API> } 选择的API集合
 * @param config { Project } 配置对象
 * @return [] { Array<string> } 返回数组，里面每一项字符串都是一个模板
 */
function renderTemplate (params, config) {
  // 模板引擎基于 art-template 使用，artTemplate 变量就是对art-template的引用，为了避免使用{}冲突，新增取值《》语法，效果和 {{}} 取值一样，更多语法方法参考官方文档：https://github.com/aui/art-template
  // 函数中可以使用Lodash工具包所有功能，比如 cloneDeep，使用方式：lodash.cloneDeep
  const result = [];
  config = config || {};
`;
