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
import { camelCase } from 'change-case';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';
import formatCode from '../lib/utils/prettier';
export function renderObject(schema, api, options) {
    var _a;
    schema = filterSchemaPrimitiveValue(schema);
    if (!schema) {
        return '';
    }
    if (!Array.isArray(schema)) {
        schema = schema.params;
    }
    var code = renderObjectDeepObject(schema);
    var prefixCode = "export const ".concat(renderObjectName(api, options), " = ");
    var formatted = formatCode(prefixCode + code);
    if ((options === null || options === void 0 ? void 0 : options.onlyMap) === true) {
        formatted = formatted.replace(new RegExp('^' + prefixCode), '').trim();
        if (formatted.endsWith(';')) {
            formatted = formatted.slice(0, formatted.length - 1);
        }
    }
    // 开始空格键处理
    if ((_a = options.startSpace) === null || _a === void 0 ? void 0 : _a.length) {
        formatted = formatted.split('\n').map(function (line, index) { return index === 0 ? line : "".concat(options.startSpace).concat(line); }).join('\n');
    }
    return formatted;
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
            var temporaryCode = [renderObjectComment(schema)];
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
            renderObjectComment(parentSchema),
            "".concat(parentSchema.keyName, ": ").concat(code)
        ].join('\n');
    }
    return code;
}
export function renderObjectComment(schema) {
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
