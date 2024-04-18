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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderClassName = exports.renderClass = void 0;
var merge_1 = __importDefault(require("lodash/merge"));
var cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
var _changeCase = __importStar(require("change-case"));
var util_1 = require("@api-helper/core/lib/utils/util");
var util_2 = require("../lib/utils/util");
var render_object_1 = require("../lib/render-object");
function renderClass(schema, api, options) {
    var _a;
    options = (0, merge_1.default)({
        onlyBody: false,
        prefix: 'export ',
        paramType: 'request',
        emptyBodyCode: '{}',
        suffixName: 'class',
    }, options);
    schema = (0, cloneDeep_1.default)(schema);
    schema = (0, render_object_1.precessArraySchema)(schema);
    // const schemaList = filterSchemaPrimitiveValue(Array.isArray(schema) ? schema : (schema as APIHelper.Schema)?.params ?? []) as APIHelper.SchemaList;
    var primitiveValueSchema = (0, util_1.filterSchemaPrimitiveValue)(schema);
    var prefix = options.prefix, suffixName = options.suffixName, onlyBody = options.onlyBody, dropComment = options.dropComment, emptyBodyCode = options.emptyBodyCode, _b = options.paramType, paramType = _b === void 0 ? 'request' : _b;
    var keyword = "".concat(prefix, " class");
    var onRenderClassName = (options === null || options === void 0 ? void 0 : options.onRenderClassName) ? options.onRenderClassName : renderClassName;
    var commentCode = onlyBody ? '' : dropComment !== true ? renderClassComment(api, paramType) : '';
    var className = (options === null || options === void 0 ? void 0 : options.name) ? options.name : onRenderClassName(api, {
        paramType: paramType,
        suffixName: suffixName,
        changeCase: _changeCase,
    });
    /**
     * output ->  export class
     */
    var ki = ["".concat(keyword, " ").concat(className, " ")].filter(Boolean).join('\n');
    var bodyCode = '';
    if (!schema || (((_a = schema === null || schema === void 0 ? void 0 : schema.params) === null || _a === void 0 ? void 0 : _a.length) === 0 && !(schema === null || schema === void 0 ? void 0 : schema.keyName)) || ((schema === null || schema === void 0 ? void 0 : schema.type) !== 'object' && (schema === null || schema === void 0 ? void 0 : schema.type) !== 'array')) {
        if ((schema === null || schema === void 0 ? void 0 : schema.type) !== 'object' && (schema === null || schema === void 0 ? void 0 : schema.type) !== 'array') {
            bodyCode += '/* 非对象数据，不能生成Class代码**/\n';
        }
        bodyCode += emptyBodyCode;
    }
    else {
        bodyCode = renderClassDeepObject(primitiveValueSchema, true);
    }
    return (0, util_2.postCode)({
        ki: ki,
        commentCode: commentCode,
        code: bodyCode,
    }, { onlyBody: onlyBody });
}
exports.renderClass = renderClass;
function renderClassDeepObject(schema, isRoot, memo) {
    var e_1, _a;
    var _b;
    if (isRoot === void 0) { isRoot = false; }
    if (memo === void 0) { memo = new Map(); }
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
            var temporaryCode = [(0, render_object_1.renderComment)(child)];
            var evaluationCode = isRoot ? ' = ' : ': ';
            var v = "''";
            switch (type) {
                // 数组类型 | 对象类型
                case 'array':
                case 'object':
                    temporaryCode.pop();
                    temporaryCode.push(renderClassDeepObject(child, false, memo));
                    break;
                case 'string':
                    if ('enum' in child && child.enum.length > 0) {
                        v = "'".concat(child.enum[0], "'");
                    }
                    temporaryCode.push("".concat((0, util_1.processKeyName)(keyName)).concat(evaluationCode).concat(v));
                    break;
                case 'number':
                    temporaryCode.push("".concat((0, util_1.processKeyName)(keyName)).concat(evaluationCode, "0"));
                    break;
                case 'boolean':
                    temporaryCode.push("".concat((0, util_1.processKeyName)(keyName)).concat(evaluationCode, "false"));
                    break;
                // 其他类型
                default:
                    temporaryCode.push("".concat((0, util_1.processKeyName)(keyName)).concat(evaluationCode, "null"));
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
    var code = prefix + codeWrap.join(isRoot ? ';\n' : ',\n') + postfix;
    if (schema === null || schema === void 0 ? void 0 : schema.keyName) {
        var evaluationCode = isRoot ? ' = ' : ': ';
        code = [
            (0, render_object_1.renderComment)(schema),
            "".concat((0, util_1.processKeyName)(schema.keyName)).concat(evaluationCode, " ").concat(code)
        ].join('\n');
        if (isRoot && schema.type !== 'object') {
            code = "{ \n ".concat(code, " \n } \n");
        }
    }
    return code;
}
function renderClassName(api, options) {
    var _a, _b;
    var suffixName = (_a = options === null || options === void 0 ? void 0 : options.suffixName) !== null && _a !== void 0 ? _a : 'Class ';
    var changeCase = (_b = options.changeCase) !== null && _b !== void 0 ? _b : _changeCase;
    var name = api.path;
    if (options.paramType) {
        name += " ".concat(options.paramType);
    }
    name += "".concat(suffixName, "By ").concat(api.method);
    return changeCase.pascalCase(name);
}
exports.renderClassName = renderClassName;
function renderClassComment(api, paramType, isExtraData) {
    if (isExtraData === void 0) { isExtraData = false; }
    var summary = isExtraData ? 'Incompatible request data' : paramType === 'request' ? 'Request data' : paramType === 'response' ? 'Response data' : '';
    if (summary) {
        summary += ' entity class';
    }
    var commentText = "/**\n * @description ".concat([api.title, api.description].filter(Boolean).join('、')).concat(summary ? "\n * @summary ".concat(summary) : '').concat(api.docURL ? "\n * @doc ".concat(api.docURL) : '', "\n * @url [ ").concat(api.method.toUpperCase(), " ] ").concat(api.path, "\n */");
    return commentText;
}
