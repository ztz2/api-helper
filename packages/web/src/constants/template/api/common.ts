export const COMMON_HEAD = `/**
 * @description 渲染函数
 * @param params { object }
 * @param params.apiList { Array<APIHelper.API> } 选择的API集合，APIHelper 说明文档在 @api-helper/core 包中，访问地址：https://github.com/ztz2/api-helper/blob/main/packages/core/lib/types.d.ts
 * @param config { Project } 项目配置对象，Project 说明文档参考：https://github.com/ztz2/api-helper/blob/main/packages/web/src/store/project/interface.ts
 * @return [] { Array<APIHelper.TemplateContent> } 返回数组，里面每一项都是一个模板。例子数据 -> [{ title: '模版标题', content: '模版内容' }];
 */
function renderTemplate (params, config) {
  // 模板引擎基于 art-template，在此函数作用域中可以直接 artTemplate 变量，它是对art-template的引用
  // 使用 artTemplate 时注意：为了避免在渲染中与Vue的数据绑定语法{{}}冲突，删除了模板自带的{{}}语法，新增《》语法代替，更多语法方法参考官方文档：https://github.com/aui/art-template
  // 函数中可以使用Lodash工具包所有功能，比如 cloneDeep，使用方式：lodash.cloneDeep
`;
