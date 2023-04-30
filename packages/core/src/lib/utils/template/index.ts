// @ts-ignore
import template from './art-template-web.js';

// @ts-ignore
template.defaults.escape = false;
template.defaults.minimize = false;
// 新增模板《》语法的界定符规则
template.defaults.rules[2] = {
  ...template.defaults.rules[1],
  test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/
};
template.defaults.imports.renderCharacterByBoolean = function (booleanStatus = true, trueValue = '', falseValue = '') {
  return booleanStatus ? trueValue : falseValue;
}
template.defaults.imports.renderTemplateLiteral = function(booleanStatus = true, defaultValue = '\'') {
  return booleanStatus ? '`' : defaultValue;
}

export default template;
