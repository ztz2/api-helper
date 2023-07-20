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
var standalone_js_1 = __importDefault(require("./standalone.js"));
var parser_babel_js_1 = __importDefault(require("./parser-babel.js"));
var parser_html_js_1 = __importDefault(require("./parser-html.js"));
var parser_typescript_js_1 = __importDefault(require("./parser-typescript.js"));
function formatCode(code, options) {
    if (code === void 0) { code = ''; }
    if (options === void 0) { options = {}; }
    try {
        var parser = options.parser;
        if ('codeType' in options) {
            parser = options.codeType;
        }
        if (!['javascript', 'typescript'].includes(parser)) {
            parser = 'typescript';
        }
        if (parser === 'javascript') {
            parser = 'babel';
        }
        return standalone_js_1.default.format(code, __assign({ parser: parser, plugins: [
                parser_babel_js_1.default,
                parser_html_js_1.default,
                parser_typescript_js_1.default
            ], semi: true, singleQuote: true, printWidth: 80, trailingComma: 'none', arrowParens: 'avoid' }, options));
    }
    catch (e) {
        console.warn('prettier 执行失败!', e);
    }
    return code;
}
exports.default = formatCode;
