// @ts-ignore
import artTemplate from '@/lib/utils/template/art-template-web.js';

// @ts-ignore
artTemplate.defaults.escape = false;
artTemplate.defaults.minimize = false;
// 新增模板《》语法的界定符规则
artTemplate.defaults.rules.push({
  ...artTemplate.defaults.rules[1],
  test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/
});
// 为了避免和Vue数据绑定语法{{}}冲突，移除自带的{{}}语法规则
artTemplate.defaults.rules = artTemplate.defaults.rules.filter((rule: Recordable) => !rule?.test?.test?.('{{}}'));

export default artTemplate;
