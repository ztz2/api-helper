"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var art_template_web_js_1 = __importDefault(require("../lib/utils/template/art-template-web.js"));
// @ts-ignore
art_template_web_js_1.default.defaults.escape = false;
art_template_web_js_1.default.defaults.minimize = false;
// 新增模板《》语法的界定符规则
art_template_web_js_1.default.defaults.rules[2] = __assign(__assign({}, art_template_web_js_1.default.defaults.rules[1]), { test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/ });
art_template_web_js_1.default.defaults.imports.renderCharacterByBoolean = function (booleanStatus, trueValue, falseValue) {
    if (booleanStatus === void 0) { booleanStatus = true; }
    if (trueValue === void 0) { trueValue = ''; }
    if (falseValue === void 0) { falseValue = ''; }
    return booleanStatus ? trueValue : falseValue;
};
art_template_web_js_1.default.defaults.imports.renderTemplateLiteral = function (booleanStatus, defaultValue) {
    if (booleanStatus === void 0) { booleanStatus = true; }
    if (defaultValue === void 0) { defaultValue = '\''; }
    return booleanStatus ? '`' : defaultValue;
};
exports.default = art_template_web_js_1.default;
