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
var art_template_web_js_1 = __importDefault(require("./utils/template/art-template-web.js"));
// @ts-ignore
art_template_web_js_1.default.defaults.escape = false;
art_template_web_js_1.default.defaults.minimize = false;
// 新增模板《》语法的界定符规则
art_template_web_js_1.default.defaults.rules.push(__assign(__assign({}, art_template_web_js_1.default.defaults.rules[1]), { test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/ }));
// 为了避免和Vue数据绑定语法{{}}冲突，移除自带的{{}}语法规则
art_template_web_js_1.default.defaults.rules = art_template_web_js_1.default.defaults.rules.filter(function (rule) { var _a, _b; return !((_b = (_a = rule === null || rule === void 0 ? void 0 : rule.test) === null || _a === void 0 ? void 0 : _a.test) === null || _b === void 0 ? void 0 : _b.call(_a, '{{}}')); });
exports.default = art_template_web_js_1.default;
