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
import prettier from './standalone.js';
import parserBabel from './parser-babel.js';
import parserHtml from './parser-html.js';
import parserTypescript from './parser-typescript.js';
export default function formatCode(code, options) {
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
        return prettier.format(code, __assign({ parser: parser, plugins: [
                parserBabel,
                parserHtml,
                parserTypescript
            ], semi: true, singleQuote: true, printWidth: 80, trailingComma: 'none', arrowParens: 'avoid' }, options));
    }
    catch (e) {
        console.warn('prettier 执行失败!', e);
    }
    return code;
}
