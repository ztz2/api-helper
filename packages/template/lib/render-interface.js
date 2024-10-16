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
var helpers_1 = require("@api-helper/core/lib/helpers");
var util_1 = require("@api-helper/core/lib/utils/util");
var util_2 = require("../lib/utils/util");
var art_template_1 = __importDefault(require("../lib/art-template"));
var render_object_1 = require("../lib/render-object");
function renderInterface(schema, api, options) {
    var _a;
    if (options === void 0) { options = {}; }
    options = (0, merge_1.default)({
        onlyBody: false,
        prefix: 'export ',
        paramType: 'request',
        emptyBodyCode: 'any;',
    }, options);
    schema = (0, cloneDeep_1.default)(schema);
    schema = (0, render_object_1.precessArraySchema)(schema);
    var sourceSchema = schema;
    var prefix = options.prefix, onlyBody = options.onlyBody, dropComment = options.dropComment, isExtraData = options.isExtraData, emptyBodyCode = options.emptyBodyCode, _b = options.paramType, paramType = _b === void 0 ? 'request' : _b;
    if (Array.isArray(schema)) {
        schema = (0, helpers_1.createSchema)('object', {
            id: (0, util_1.randomChar)(),
            params: schema,
        });
    }
    var isInterface = (0, util_2.checkIsInterface)(schema);
    var keyword = isInterface ? "".concat(prefix, " interface") : "".concat(prefix, "type");
    var onRenderInterfaceName = (_a = options.onRenderInterfaceName) !== null && _a !== void 0 ? _a : renderInterfaceName;
    var commentCode = onlyBody ? '' : dropComment !== true ? renderInterfaceComment(api, paramType, isExtraData) : '';
    var interfaceName = (options === null || options === void 0 ? void 0 : options.name) ? options.name : onRenderInterfaceName(api, {
        schema: schema,
        paramType: paramType,
        isExtraData: isExtraData,
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
        code: renderInterfaceDeepObject(schema, true)
    }, { onlyBody: onlyBody });
}
exports.renderInterface = renderInterface;
function renderInterfaceName(api, options) {
    var name = api.path;
    if (options.paramType) {
        name += " ".concat(options.paramType);
    }
    if (options.isExtraData) {
        name += 'ExtraData';
    }
    name += "By ".concat(api.method);
    return options.changeCase.pascalCase(name);
}
exports.renderInterfaceName = renderInterfaceName;
function renderInterfaceComment(api, paramType, isExtraData, updateTime) {
    if (isExtraData === void 0) { isExtraData = false; }
    if (updateTime === void 0) { updateTime = ''; }
    var summary = isExtraData ? 'Incompatible request data' : paramType === 'request' ? 'Request data' : paramType === 'response' ? 'Response data' : '';
    if (summary) {
        summary += ' types';
    }
    return art_template_1.default.render("/**\n * @description \u300Adescription\u300B\u300Aif summary\u300B\n * @summary \u300Asummary\u300B\u300A/if\u300B\u300Aif docURL\u300B\n * @doc \u300AdocURL\u300B\u300A/if\u300B\n * @url \u300Aurl\u300B\u300Aif updateTime\u300B\n * @update \u300AupdateTime\u300B\u300A/if\u300B\n */", {
        description: "".concat([api.title, api.description].filter(Boolean).join('、')),
        docURL: api.docURL,
        url: "[ ".concat(api.method.toUpperCase(), " ] ").concat(api.path),
        summary: summary,
        updateTime: updateTime,
    });
}
function requiredChar(schema) {
    var _a;
    return !((_a = schema === null || schema === void 0 ? void 0 : schema.rules) === null || _a === void 0 ? void 0 : _a.required) ? '?' : '';
}
function renderInterfaceDeepObject(schema, isRoot, memo) {
    if (isRoot === void 0) { isRoot = false; }
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
            schema.keyName ? "".concat((0, util_1.processKeyName)(schema.keyName)).concat(requiredChar(schema), ": ") : '',
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
                schema.keyName ? "".concat((0, util_1.processKeyName)(schema.keyName)).concat(requiredChar(schema), ": ") : '',
                '{',
                // 类型遍历
                schema.params.filter(function (item) { var _a; return !(((_a = item.keyName) === null || _a === void 0 ? void 0 : _a.trim()) === '' && item.type === 'object'); }).map(function (item) { return renderInterfaceDeepObject(item, false, memo); }).join('\n'),
                '}',
            ].filter(Boolean).join('\n');
            break;
        // 数据类型
        case 'array':
            var child = schema.params.map(function (item) { return renderInterfaceDeepObject(item, false, memo); }).join(' | ');
            child = child || 'any';
            code = [
                bannerCommentText,
                schema.keyName ? "".concat((0, util_1.processKeyName)(schema.keyName)).concat(requiredChar(schema), ": ") : '',
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
                code = [bannerCommentText, "".concat((0, util_1.processKeyName)(schema.keyName)).concat(requiredChar(schema), ": ").concat(typeCode)].filter(Boolean).join('\n');
            }
            else {
                code = typeCode;
            }
    }
    if (isRoot && schema.type !== 'object' && schema.keyName) {
        code = "{ \n ".concat(code, " \n } \n");
    }
    return code;
}
