"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkInterface = exports.renderInterfaceName = exports.renderInterface = void 0;
var changeCase = __importStar(require("change-case"));
var prettier_1 = __importDefault(require("../lib/utils/prettier"));
function renderInterface(schema, api, options) {
    var isExtraData = options.isExtraData, paramType = options.paramType, hasComment = options.hasComment;
    var keyword = checkInterface(schema) ? 'export interface ' : 'export type ';
    var onRenderInterfaceName = (options === null || options === void 0 ? void 0 : options.onRenderInterfaceName) ? options.onRenderInterfaceName : renderInterfaceName;
    var commentCode = hasComment !== false ? renderInterfaceComment(schema, api, paramType, isExtraData) : '';
    var interfaceName = onRenderInterfaceName(schema, api, {
        isExtraData: isExtraData,
        paramType: paramType,
        changeCase: changeCase
    });
    // 前置处理
    if (!schema || isEmptyObject(schema)) {
        // 不兼容的数据，不显示类型
        if (isExtraData) {
            return '';
        }
        return [
            commentCode,
            "".concat(keyword, " ").concat(interfaceName, " = any;")
        ].filter(Boolean).join('\n');
    }
    if (paramType === 'response') {
        schema.keyName = '';
    }
    var code = renderInterfaceDeepObject(schema);
    // 移除多余换行符
    code = code.replace(/\n\n/gim, '\n');
    // 开始组合
    interfaceName = keyword + interfaceName;
    if (schema.type !== 'object') {
        interfaceName += ' = ';
    }
    var formatted = (0, prettier_1.default)(interfaceName + code, {
        parser: 'typescript'
    });
    return [
        commentCode,
        formatted
    ].filter(Boolean).join('\n');
}
exports.renderInterface = renderInterface;
function renderInterfaceName(schema, api, options) {
    var isInterface = checkInterface(schema);
    var name = isInterface ? 'I' : '';
    name += api.path;
    if (options.paramType) {
        name += " ".concat(options.paramType);
    }
    if (!isInterface) {
        name += 'Type';
    }
    if (options.isExtraData) {
        name += 'ExtraData';
    }
    name += "By ".concat(api.method);
    return changeCase.pascalCase(name);
}
exports.renderInterfaceName = renderInterfaceName;
function renderInterfaceComment(schema, api, paramType, isExtraData) {
    if (isExtraData === void 0) { isExtraData = false; }
    var commentText = "/**\n * @description ".concat([api.title, api.description].filter(Boolean).join('、'), "\u3010").concat(isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : '', "\u7C7B\u578B\u5B9A\u4E49\u3011").concat(api.docURL ? "\n * @doc ".concat(api.docURL, "\n") : '', "\n * @url [ ").concat(api.method.toUpperCase(), " ] ").concat(api.path, "\n */");
    return commentText;
}
function renderInterfaceDeepObject(schema, memo) {
    if (memo === void 0) { memo = new Map(); }
    if (!schema) {
        return '';
    }
    if (memo.has(schema)) {
        return memo.get(schema);
    }
    memo.set(schema, 'null');
    var type = schema.type;
    var bannerComment = [];
    if (schema.label) {
        bannerComment.push(schema.label);
    }
    var bannerCommentText = bannerComment.length > 0 ? "\n// ".concat(bannerComment.join('')) : '';
    if (isEmptyObject(schema)) {
        return [
            bannerCommentText,
            schema.keyName ? "".concat(schema.keyName, ": ") : '',
            '{',
            '[propName: string]: any',
            '}',
        ].filter(Boolean).join('\n');
    }
    var code = '';
    switch (type) {
        // 对象类型
        case 'object':
            code = [
                bannerCommentText,
                schema.keyName ? "".concat(schema.keyName, ": ") : '',
                '{',
                // 类型遍历
                schema.params.map(function (item) { return renderInterfaceDeepObject(item, memo); }).join('\n'),
                '}',
            ].filter(Boolean).join('\n');
            break;
        // 数据类型
        case 'array':
            var child = schema.params.map(function (item) { return renderInterfaceDeepObject(item, memo); }).join(' | ');
            child = child || 'any';
            code = [
                bannerCommentText,
                schema.keyName ? "".concat(schema.keyName, ": ") : '',
                // 类型遍历
                "Array<".concat(child, ">"),
            ].filter(Boolean).join('\n');
            break;
        // 其他非引用类型
        default:
            // eslint-disable-next-line no-case-declarations
            var typeCode = type;
            if (type === 'string' && 'enum' in schema && schema.enum.length) {
                typeCode = schema.enum.map(function (item) { return "'".concat(item, "'"); }).join(' | ');
            }
            if (schema.keyName) {
                code = [bannerCommentText, "".concat(schema.keyName).concat(!schema.rules.required ? '?' : '', ": ").concat(typeCode)].filter(Boolean).join('\n');
            }
            else {
                code = typeCode;
            }
    }
    return code;
}
function checkInterface(schema) {
    var _a;
    var isType = !schema || (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' || isEmptyObject(schema);
    var hasKey = (_a = schema === null || schema === void 0 ? void 0 : schema.params) === null || _a === void 0 ? void 0 : _a.some(function (s) { return s.keyName; });
    return !isType && hasKey;
}
exports.checkInterface = checkInterface;
function isEmptyObject(schema) {
    var _a;
    return (schema === null || schema === void 0 ? void 0 : schema.type) === 'object' && ((_a = schema === null || schema === void 0 ? void 0 : schema.params) === null || _a === void 0 ? void 0 : _a.length) === 0;
}
