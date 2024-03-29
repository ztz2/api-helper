export const COMMON_HEAD = `/**
 * @description 渲染函数
 * @param params { object }
 * @param params.api { APIHelper.API } 选择的API，APIHelper 说明文档在 @api-helper/core 包中，访问地址：https://github.com/ztz2/api-helper/blob/main/packages/core/lib/types.d.ts
 * @param params.requestDataSchemaList { Array<APIHelper.Schema> } 选择的请求数据字段集合
 * @param params.responseDataSchemaList { Array<APIHelper.Schema> } 选择的响应数据字段集合
 * @param documentConfig { DocumentConfig } 文档配置信息，DocumentConfig 说明文档参考：https://github.com/ztz2/api-helper/blob/main/packages/web/src/store/document-config/interface.ts
 * @return [] { Array<APIHelper.TemplateContent> } 返回数组，里面每一项都是一个模板。例子数据 -> [{ title: '模版标题', content: '模版内容' }];
 */
function renderTemplate (params, documentConfig) {
  // 模板引擎基于 art-template，在此函数作用域中可以直接 artTemplate 变量，它是对art-template的引用
  // 使用 artTemplate 时注意：为了避免在渲染中与Vue的数据绑定语法{{}}冲突，删除了模板自带的{{}}语法，新增《》语法代替，更多语法方法参考官方文档：https://github.com/aui/art-template
  // 函数中可以使用Lodash工具包所有功能，比如 cloneDeep，使用方式：lodash.cloneDeep
`;
