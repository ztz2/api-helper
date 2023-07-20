// @ts-ignore
import artTemplate from '@/lib/utils/template/art-template-web.js';

// @ts-ignore
artTemplate.defaults.escape = false;
artTemplate.defaults.minimize = false;
// 新增模板《》语法的界定符规则
artTemplate.defaults.rules[2] = {
  ...artTemplate.defaults.rules[1],
  test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/
};
artTemplate.defaults.imports.renderCharacterByBoolean = function (booleanStatus = true, trueValue = '', falseValue = '') {
  return booleanStatus ? trueValue : falseValue;
}
artTemplate.defaults.imports.renderTemplateLiteral = function(booleanStatus = true, defaultValue = '\'') {
  return booleanStatus ? '`' : defaultValue;
}

export default artTemplate;
