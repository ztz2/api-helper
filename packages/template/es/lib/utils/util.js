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
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';
import formatCode from '../../lib/utils/prettier';
export function postCode(_a, _b) {
    var _c = _a.code, code = _c === void 0 ? '' : _c, _d = _a.ki, ki = _d === void 0 ? '' : _d, _e = _a.commentCode, commentCode = _e === void 0 ? '' : _e;
    var _f = _b.onlyBody, onlyBody = _f === void 0 ? false : _f;
    // 移除多个空格
    ki = ki.replace(/\s(\s+)/gim, ' ');
    // 移除双换行符。
    code = code.replace(/\n\n/gim, '\n');
    // 格式化代码
    code = formatCode(ki + code, {
        parser: 'typescript'
    });
    // 如果只输出body部分，移除 export xxx 部分
    if (onlyBody) {
        code = code.replace(ki, '');
    }
    // 合并注释代码输出
    return [commentCode, code].filter(Boolean).join('\n');
}
export function checkIsInterface(schema) {
    var _a;
    var isType = !schema || (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' || isEmptyObject(schema);
    var hasKey = (_a = schema === null || schema === void 0 ? void 0 : schema.params) === null || _a === void 0 ? void 0 : _a.some(function (s) { return s.keyName; });
    return !isType && hasKey;
}
export function isEmptyObject(schema) {
    var _a;
    return (schema === null || schema === void 0 ? void 0 : schema.type) === 'object' && ((_a = schema === null || schema === void 0 ? void 0 : schema.params) === null || _a === void 0 ? void 0 : _a.length) === 0;
}
export function isEmptySchema(schema) {
    var exec = function (scm) {
        var e_1, _a;
        if (!scm) {
            return true;
        }
        if (scm.type === 'object' && isEmptyObject(filterSchemaPrimitiveValue(scm))) {
            return true;
        }
        if (scm.type === 'array') {
            try {
                for (var _b = __values(scm.params), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var itm = _c.value;
                    if (exec(itm)) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }
        return false;
    };
    return exec(schema);
}
