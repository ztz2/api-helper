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
exports.renderInterfaceName = exports.renderInterface = void 0;
var merge_1 = __importDefault(require("lodash/merge"));
var cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
var _changeCase = __importStar(require("change-case"));
var util_1 = require("@api-helper/core/lib/utils/util");
var helpers_1 = require("@api-helper/core/lib/helpers");
var util_2 = require("../lib/utils/util");
function renderInterface(schema, api, options) {
    options = (0, merge_1.default)({
        onlyBody: false,
        prefix: 'export ',
        paramType: 'request',
        emptyBodyCode: 'any;',
    }, options);
    schema = (0, cloneDeep_1.default)(schema);
    var sourceSchema = schema;
    var prefix = options.prefix, onlyBody = options.onlyBody, dropComment = options.dropComment, isExtraData = options.isExtraData, emptyBodyCode = options.emptyBodyCode, _a = options.paramType, paramType = _a === void 0 ? 'request' : _a;
    if (Array.isArray(schema)) {
        schema = (0, helpers_1.createSchema)('object', {
            id: (0, util_1.uuid)(),
            params: schema,
        });
    }
    var isInterface = (0, util_2.checkIsInterface)(schema);
    var keyword = isInterface ? "".concat(prefix, " interface") : "".concat(prefix, "type");
    var onRenderInterfaceName = (options === null || options === void 0 ? void 0 : options.onRenderInterfaceName) ? options.onRenderInterfaceName : renderInterfaceName;
    var commentCode = onlyBody ? '' : dropComment !== true ? renderInterfaceComment(schema, api, paramType, isExtraData) : '';
    var interfaceName = (options === null || options === void 0 ? void 0 : options.name) ? options.name : onRenderInterfaceName(schema, api, {
        isExtraData: isExtraData,
        paramType: paramType,
        changeCase: _changeCase,
    });
    /**
     * output ->  export interface interfaceName
     *            export type Type =
     */
    var ki = ["".concat(keyword, " ").concat(interfaceName, " ").concat(!isInterface ? '=' : '')].filter(Boolean).join('\n');
    // 前置处理，渲染数据为空，直接返回 export type xxx = any;
    if ((Array.isArray(sourceSchema) && sourceSchema.length === 0) ||
        !sourceSchema ||
        (0, util_2.isEmptyObject)(sourceSchema)) {
        // 不兼容的数据，不显示类型
        if (isExtraData) {
            return '';
        }
        return (0, util_2.postCode)({
            ki: ki,
            commentCode: commentCode,
            code: emptyBodyCode
        }, { onlyBody: onlyBody });
    }
    if (paramType === 'response') {
        schema.keyName = '';
    }
    return (0, util_2.postCode)({
        ki: ki,
        commentCode: commentCode,
        code: renderInterfaceDeepObject(schema)
    }, { onlyBody: onlyBody });
}
exports.renderInterface = renderInterface;
function renderInterfaceName(schema, api, options) {
    var _a;
    var changeCase = (_a = options.changeCase) !== null && _a !== void 0 ? _a : _changeCase;
    var isInterface = (0, util_2.checkIsInterface)(schema);
    var name = "".concat(isInterface ? 'I' : '').concat(api.path);
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
    var commentText = "/**\n * @description ".concat([api.title, api.description].filter(Boolean).join('、'), "\u3010").concat(isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : '', "\u7C7B\u578B\u5B9A\u4E49\u3011").concat(api.docURL ? "\n * @doc ".concat(api.docURL) : '', "\n * @url [ ").concat(api.method.toUpperCase(), " ] ").concat(api.path, "\n */");
    return commentText;
}
function requiredChar(schema) {
    var _a;
    return !((_a = schema === null || schema === void 0 ? void 0 : schema.rules) === null || _a === void 0 ? void 0 : _a.required) ? '?' : '';
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
    if ((0, util_2.isEmptyObject)(schema)) {
        return [
            bannerCommentText,
            schema.keyName ? "".concat(schema.keyName).concat(requiredChar(schema), ": ") : '',
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
                schema.keyName ? "".concat(schema.keyName).concat(requiredChar(schema), ": ") : '',
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
                schema.keyName ? "".concat(schema.keyName).concat(requiredChar(schema), ": ") : '',
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
                code = [bannerCommentText, "".concat(schema.keyName).concat(requiredChar(schema), ": ").concat(typeCode)].filter(Boolean).join('\n');
            }
            else {
                code = typeCode;
            }
    }
    return code;
}
