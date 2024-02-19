var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import merge from 'lodash/merge';
import _changeCase from 'change-case';
import cloneDeep from 'lodash/cloneDeep';
import * as changeCase from 'change-case';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';
import { postCode } from '../lib/utils/util';
export function renderObject(schema, api, options) {
    var _a, _b;
    options = merge({
        prefix: 'export ',
        suffixName: 'entity',
        onlyBody: false,
        paramType: 'request',
        emptyBodyCode: '{}',
    }, options);
    schema = cloneDeep(schema);
    var primitiveValueSchema = filterSchemaPrimitiveValue(schema);
    var prefix = options.prefix, suffixName = options.suffixName, dropComment = options.dropComment, emptyBodyCode = options.emptyBodyCode, _c = options.paramType, paramType = _c === void 0 ? 'request' : _c;
    // @ts-ignore
    var onlyBody = (_a = options === null || options === void 0 ? void 0 : options.onlyMap) !== null && _a !== void 0 ? _a : options.onlyBody;
    var keyword = "".concat(prefix, " const");
    var onRenderObjectName = (options === null || options === void 0 ? void 0 : options.onRenderObjectName) ? options.onRenderObjectName : renderObjectName;
    var commentCode = onlyBody ? '' : dropComment !== true ? renderObjectComment(api, paramType) : '';
    var objectName = (options === null || options === void 0 ? void 0 : options.name) ? options.name : onRenderObjectName(api, {
        suffixName: suffixName,
        paramType: paramType,
        changeCase: changeCase
    });
    /**
     * output ->  export class
     */
    var ki = ["".concat(keyword, " ").concat(objectName, " = ")].filter(Boolean).join('\n');
    var bodyCode;
    if (!schema || ((_b = schema === null || schema === void 0 ? void 0 : schema.params) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        bodyCode = emptyBodyCode;
    }
    else {
        bodyCode = renderObjectDeepObject(primitiveValueSchema, undefined, true);
    }
    var code = postCode({
        ki: ki,
        commentCode: commentCode,
        code: bodyCode
    }, { onlyBody: onlyBody });
    // 移除最后的分号。
    if (onlyBody) {
        code = code.trim();
        if (code.endsWith(';')) {
            code = code.slice(0, code.length - 1);
        }
    }
    return code;
}
function renderObjectDeepObject(schema, memo, isRoot) {
    var e_1, _a;
    var _b;
    if (memo === void 0) { memo = new Map(); }
    if (isRoot === void 0) { isRoot = false; }
    if (memo.has(schema)) {
        return memo.get(schema);
    }
    memo.set(schema, 'null');
    if (isRoot) {
        debugger;
    }
    var codeWrap = [];
    var prefix = (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' ? '[\n' : '{\n';
    var postfix = (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' ? '\n]' : '\n}';
    try {
        for (var _c = __values(schema.params), _d = _c.next(); !_d.done; _d = _c.next()) {
            var child = _d.value;
            var keyName = (_b = child.keyName) !== null && _b !== void 0 ? _b : '';
            var type = child.type;
            var temporaryCode = [renderComment(child)];
            var v = "''";
            switch (type) {
                // 数组类型 | 对象类型
                case 'array':
                case 'object':
                    temporaryCode.pop();
                    temporaryCode.push(renderObjectDeepObject(child));
                    break;
                case 'string':
                    if ('enum' in child && child.enum.length > 0) {
                        v = "'".concat(child.enum[0], "'");
                    }
                    temporaryCode.push("".concat(keyName, ": ").concat(v));
                    break;
                case 'number':
                    temporaryCode.push("".concat(keyName, ": 0"));
                    break;
                case 'boolean':
                    temporaryCode.push("".concat(keyName, ": false"));
                    break;
                // 其他类型
                default:
                    temporaryCode.push("".concat(keyName, ": null"));
            }
            codeWrap.push(temporaryCode.join('\n'));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (isRoot) {
        debugger;
    }
    var code = prefix + codeWrap.join(',\n') + postfix;
    if (schema === null || schema === void 0 ? void 0 : schema.keyName) {
        code = [
            renderComment(schema),
            "".concat(schema.keyName, ": ").concat(code)
        ].join('\n');
    }
    return code;
}
export function renderComment(schema) {
    var type = schema.type;
    if ('enum' in schema && schema.enum.length > 0) {
        type = schema.enum.map(function (item) { return "'".concat(item, "'"); }).join(' | ');
    }
    return "// { ".concat(type, " }").concat(schema.label ? " ".concat(schema.label) : '');
}
export function renderObjectName(api, options) {
    var _a, _b;
    var suffixName = (_a = options === null || options === void 0 ? void 0 : options.suffixName) !== null && _a !== void 0 ? _a : 'Entity ';
    var changeCase = (_b = options.changeCase) !== null && _b !== void 0 ? _b : _changeCase;
    var name = api.path;
    if (options.paramType) {
        name += " ".concat(options.paramType);
    }
    name += "".concat(suffixName, "By ").concat(api.method);
    return changeCase.camelCase(name);
}
function renderObjectComment(api, paramType, isExtraData) {
    if (isExtraData === void 0) { isExtraData = false; }
    var commentText = "/**\n * @description ".concat([api.title, api.description].filter(Boolean).join('、'), "\u3010").concat(isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : '', "\u5B9E\u4F53\u5BF9\u8C61\u3011").concat(api.docURL ? "\n * @doc ".concat(api.docURL) : '', "\n * @url [ ").concat(api.method.toUpperCase(), " ] ").concat(api.path, "\n */");
    return commentText;
}
