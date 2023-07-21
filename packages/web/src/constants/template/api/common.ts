export const COMMON_HEAD = `/**
 * @description 渲染函数
 * @param params { object }
 * @param params.apiList { Array<APIHelper.API> } 选择的API集合，APIHelper 说明文档在 @api-helper/core 包中，访问地址：https://github.com/ztz2/api-helper/blob/main/packages/core/lib/types.d.ts
 * @param config { Project } 项目配置对象，Project 说明文档参考：https://github.com/ztz2/api-helper/blob/main/packages/web/src/store/project/interface.ts
 * @return [] { Array<APIHelper.TemplateContent> } 返回数组，里面每一项都是一个模板。例子数据 -> [{ title: '模版标题', content: '模版内容' }];
 */
function renderTemplate (params, config) {
  // 模板引擎基于 art-template 使用，artTemplate 变量就是对art-template的引用，为了避免使用{}冲突，新增取值《》语法，效果和 {{}} 取值一样，更多语法方法参考官方文档：https://github.com/aui/art-template
  // 函数中可以使用Lodash工具包所有功能，比如 cloneDeep，使用方式：lodash.cloneDeep
  config = config || {};
`;
