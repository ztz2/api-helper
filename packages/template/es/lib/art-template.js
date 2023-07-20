var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-ignore
import artTemplate from '../lib/utils/template/art-template-web.js';
// @ts-ignore
artTemplate.defaults.escape = false;
artTemplate.defaults.minimize = false;
// 新增模板《》语法的界定符规则
artTemplate.defaults.rules[2] = __assign(__assign({}, artTemplate.defaults.rules[1]), { test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/ });
artTemplate.defaults.imports.renderCharacterByBoolean = function (booleanStatus, trueValue, falseValue) {
    if (booleanStatus === void 0) { booleanStatus = true; }
    if (trueValue === void 0) { trueValue = ''; }
    if (falseValue === void 0) { falseValue = ''; }
    return booleanStatus ? trueValue : falseValue;
};
artTemplate.defaults.imports.renderTemplateLiteral = function (booleanStatus, defaultValue) {
    if (booleanStatus === void 0) { booleanStatus = true; }
    if (defaultValue === void 0) { defaultValue = '\''; }
    return booleanStatus ? '`' : defaultValue;
};
export default artTemplate;
