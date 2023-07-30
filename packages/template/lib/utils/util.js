"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = exports.checkIsInterface = exports.postCode = void 0;
var prettier_1 = __importDefault(require("../../lib/utils/prettier"));
function postCode(_a, _b) {
    var _c = _a.code, code = _c === void 0 ? '' : _c, _d = _a.ki, ki = _d === void 0 ? '' : _d, _e = _a.commentCode, commentCode = _e === void 0 ? '' : _e;
    var _f = _b.onlyBody, onlyBody = _f === void 0 ? false : _f;
    // 移除多个空格
    ki = ki.replace(/\s(\s+)/gim, ' ');
    // 移除双换行符。
    code = code.replace(/\n\n/gim, '\n');
    // 格式化代码
    code = (0, prettier_1.default)(ki + code, {
        parser: 'typescript'
    });
    // 如果只输出body部分，移除 export xxx 部分
    if (onlyBody) {
        code = code.replace(ki, '');
    }
    // 合并注释代码输出
    return [commentCode, code].filter(Boolean).join('\n');
}
exports.postCode = postCode;
function checkIsInterface(schema) {
    var _a;
    var isType = !schema || (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' || isEmptyObject(schema);
    var hasKey = (_a = schema === null || schema === void 0 ? void 0 : schema.params) === null || _a === void 0 ? void 0 : _a.some(function (s) { return s.keyName; });
    return !isType && hasKey;
}
exports.checkIsInterface = checkIsInterface;
function isEmptyObject(schema) {
    var _a;
    return (schema === null || schema === void 0 ? void 0 : schema.type) === 'object' && ((_a = schema === null || schema === void 0 ? void 0 : schema.params) === null || _a === void 0 ? void 0 : _a.length) === 0;
}
exports.isEmptyObject = isEmptyObject;
