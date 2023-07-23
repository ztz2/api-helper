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
import cloneDeep from 'lodash/cloneDeep';
import * as changeCase from 'change-case';
import { camelCase } from 'change-case';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';
import { postCode } from '../lib/utils/util';
export function renderObject(schema, api, options) {
    var _a, _b, _c;
    options = merge({
        prefix: 'export ',
        onlyBody: false,
        paramType: 'request',
        emptyBodyCode: '{}',
    }, options);
    schema = cloneDeep(schema);
    var schemaList = filterSchemaPrimitiveValue(Array.isArray(schema) ? schema : (_b = (_a = schema) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : []);
    var prefix = options.prefix, dropComment = options.dropComment, emptyBodyCode = options.emptyBodyCode, _d = options.paramType, paramType = _d === void 0 ? 'request' : _d;
    // @ts-ignore
    var onlyBody = (_c = options === null || options === void 0 ? void 0 : options.onlyMap) !== null && _c !== void 0 ? _c : options.onlyBody;
    var keyword = "".concat(prefix, " const");
    var onRenderObjectName = (options === null || options === void 0 ? void 0 : options.onRenderObjectName) ? options.onRenderObjectName : renderObjectName;
    var commentCode = onlyBody ? '' : dropComment !== true ? renderObjectComment(api, paramType) : '';
    var objectName = (options === null || options === void 0 ? void 0 : options.name) ? options.name : onRenderObjectName(api, {
        paramType: paramType,
        changeCase: changeCase
    });
    /**
     * output ->  export class
     */
    var ki = ["".concat(keyword, " ").concat(objectName, " = ")].filter(Boolean).join('\n');
    var bodyCode;
    if (!schema || (Array.isArray(schema) && schema.length === 0)) {
        bodyCode = emptyBodyCode;
    }
    else {
        bodyCode = renderObjectDeepObject(schemaList);
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
function renderObjectDeepObject(schemaList, parentSchema, memo) {
    var e_1, _a;
    var _b;
    if (parentSchema === void 0) { parentSchema = null; }
    if (memo === void 0) { memo = new Map(); }
    if (memo.has(schemaList)) {
        return memo.get(schemaList);
    }
    memo.set(schemaList, 'null');
    var codeWrap = [];
    var prefix = (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.type) === 'array' ? '[\n' : '{\n';
    var postfix = (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.type) === 'array' ? '\n]' : '\n}';
    try {
        for (var schemaList_1 = __values(schemaList), schemaList_1_1 = schemaList_1.next(); !schemaList_1_1.done; schemaList_1_1 = schemaList_1.next()) {
            var schema = schemaList_1_1.value;
            var keyName = (_b = schema.keyName) !== null && _b !== void 0 ? _b : '';
            var type = schema.type;
            var temporaryCode = [renderComment(schema)];
            var v = "''";
            switch (type) {
                // 数组类型 | 对象类型
                case 'array':
                case 'object':
                    temporaryCode.pop();
                    temporaryCode.push(renderObjectDeepObject(schema.params, schema));
                    break;
                case 'string':
                    if ('enum' in schema && schema.enum.length > 0) {
                        v = "'".concat(schema.enum[0], "'");
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
            if (schemaList_1_1 && !schemaList_1_1.done && (_a = schemaList_1.return)) _a.call(schemaList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var code = prefix + codeWrap.join(',\n') + postfix;
    if (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.keyName) {
        code = [
            renderComment(parentSchema),
            "".concat(parentSchema.keyName, ": ").concat(code)
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
    var name = api.path;
    if (options.paramType) {
        name += " ".concat(options.paramType);
    }
    name += "By ".concat(api.method);
    return camelCase(name);
}
function renderObjectComment(api, paramType, isExtraData) {
    if (isExtraData === void 0) { isExtraData = false; }
    var commentText = "/**\n * @description ".concat([api.title, api.description].filter(Boolean).join('、'), "\u3010").concat(isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : '', "\u5B9E\u4F53\u5BF9\u8C61\u3011").concat(api.docURL ? "\n * @doc ".concat(api.docURL) : '', "\n * @url [ ").concat(api.method.toUpperCase(), " ] ").concat(api.path, "\n */");
    return commentText;
}
