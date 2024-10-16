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
import { createSchema } from '@api-helper/core/lib/helpers';
import { processKeyName, filterSchemaPrimitiveValue, } from '@api-helper/core/lib/utils/util';
import { postCode } from '../lib/utils/util';
export function renderObject(schema, api, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    options = merge({
        prefix: 'export ',
        suffixName: 'entity',
        onlyBody: false,
        paramType: 'request',
        emptyBodyCode: '{}',
    }, options);
    schema = cloneDeep(schema);
    schema = precessArraySchema(schema);
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
    if (!schema || (((_b = schema === null || schema === void 0 ? void 0 : schema.params) === null || _b === void 0 ? void 0 : _b.length) === 0 && !(schema === null || schema === void 0 ? void 0 : schema.keyName))) {
        bodyCode = emptyBodyCode;
    }
    else {
        bodyCode = renderObjectDeepObject(primitiveValueSchema, undefined, true, options);
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
function renderObjectDeepObject(schema, memo, isRoot, options) {
    var e_1, _a;
    var _b;
    if (memo === void 0) { memo = new Map(); }
    if (isRoot === void 0) { isRoot = false; }
    if (options === void 0) { options = {}; }
    if (memo.has(schema)) {
        return memo.get(schema);
    }
    memo.set(schema, 'null');
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
            var currentUseDefault = true;
            switch (type) {
                // 数组类型 | 对象类型
                case 'array':
                case 'object':
                    temporaryCode.pop();
                    temporaryCode.push(renderObjectDeepObject(child, memo, false, options));
                    break;
                case 'string':
                    currentUseDefault = true;
                    if (typeof options.formatter === 'function') {
                        var _e = options.formatter(child), value = _e.value, useDefault = _e.useDefault;
                        currentUseDefault = useDefault;
                        if (currentUseDefault !== true) {
                            v = value;
                        }
                    }
                    if (currentUseDefault !== false) {
                        v = "''";
                        if ('enum' in child && child.enum.length > 0) {
                            v = "'".concat(child.enum[0], "'");
                        }
                    }
                    temporaryCode.push("".concat(processKeyName(keyName), ": ").concat(v));
                    break;
                case 'number':
                    currentUseDefault = true;
                    if (typeof options.formatter === 'function') {
                        var _f = options.formatter(child), value = _f.value, useDefault = _f.useDefault;
                        currentUseDefault = useDefault;
                        if (currentUseDefault !== true) {
                            v = value;
                        }
                    }
                    if (currentUseDefault !== false) {
                        v = '0';
                    }
                    temporaryCode.push("".concat(processKeyName(keyName), ": ").concat(v));
                    break;
                case 'boolean':
                    currentUseDefault = true;
                    if (typeof options.formatter === 'function') {
                        var _g = options.formatter(child), value = _g.value, useDefault = _g.useDefault;
                        currentUseDefault = useDefault;
                        if (currentUseDefault !== true) {
                            v = value;
                        }
                    }
                    if (currentUseDefault !== false) {
                        v = 'false';
                    }
                    temporaryCode.push("".concat(processKeyName(keyName), ": ").concat(v));
                    break;
                // 其他类型
                default:
                    currentUseDefault = true;
                    if (typeof options.formatter === 'function') {
                        var _h = options.formatter(child), value = _h.value, useDefault = _h.useDefault;
                        currentUseDefault = useDefault;
                        if (currentUseDefault !== true) {
                            v = value;
                        }
                    }
                    if (currentUseDefault !== false) {
                        v = 'null';
                    }
                    temporaryCode.push("".concat(processKeyName(keyName), ": ").concat(v));
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
    var code = prefix + codeWrap.join(',\n') + postfix;
    if (schema === null || schema === void 0 ? void 0 : schema.keyName) {
        code = [
            renderComment(schema),
            "".concat(processKeyName(schema.keyName), ": ").concat(code)
        ].join('\n');
        if (isRoot && schema.type !== 'object') {
            code = "{ \n ".concat(code, " \n } \n");
        }
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
    var summary = isExtraData ? 'Incompatible request data' : paramType === 'request' ? 'Request data' : paramType === 'response' ? 'Response data' : '';
    if (summary) {
        summary += ' entity object';
    }
    var commentText = "/**\n * @description ".concat([api.title, api.description].filter(Boolean).join('、')).concat(summary ? "\n * @summary ".concat(summary) : '').concat(api.docURL ? "\n * @doc ".concat(api.docURL) : '', "\n * @url [ ").concat(api.method.toUpperCase(), " ] ").concat(api.path, "\n */");
    return commentText;
}
export function precessArraySchema(schema) {
    if (Array.isArray(schema)) {
        if (schema.length === 1 && (schema[0].type === 'array' || schema[0].type === 'object')) {
            schema = schema[0];
        }
        else {
            schema = createSchema('object', { params: schema });
        }
    }
    return schema;
}
