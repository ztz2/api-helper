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
var changeCase = __importStar(require("change-case"));
var prettier_1 = __importDefault(require("../lib/utils/prettier"));
var render_object_1 = require("../lib/render-object");
function renderClass(schema, api, options) {
    if (!schema) {
        return '';
    }
    if (!Array.isArray(schema)) {
        schema = schema.params;
    }
    var code = renderClassDeepObject(schema, null, true);
    var prefixCode = "export class ".concat(renderClassName(api, options), " ");
    return (0, prettier_1.default)(prefixCode + code);
}
exports.renderClass = renderClass;
function renderClassDeepObject(schemaList, parentSchema, isRoot, memo) {
    var e_1, _a;
    var _b;
    if (parentSchema === void 0) { parentSchema = null; }
    if (isRoot === void 0) { isRoot = false; }
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
            if (!keyName && schema.type !== 'array' && schema.type !== 'object') {
                continue;
            }
            var type = schema.type;
            var temporaryCode = [(0, render_object_1.renderObjectComment)(schema)];
            var evaluationCode = isRoot ? ' = ' : ': ';
            var v = "''";
            switch (type) {
                // 数组类型 | 对象类型
                case 'array':
                case 'object':
                    temporaryCode.pop();
                    temporaryCode.push(renderClassDeepObject(schema.params, schema));
                    break;
                case 'string':
                    if ('enum' in schema && schema.enum.length > 0) {
                        v = "'".concat(schema.enum[0], "'");
                    }
                    temporaryCode.push("".concat(keyName).concat(evaluationCode).concat(v));
                    break;
                case 'number':
                    temporaryCode.push("".concat(keyName).concat(evaluationCode, "0"));
                    break;
                case 'boolean':
                    temporaryCode.push("".concat(keyName).concat(evaluationCode, "false"));
                    break;
                // 其他类型
                default:
                    temporaryCode.push("".concat(keyName).concat(evaluationCode, "null"));
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
    var code = prefix + codeWrap.join(isRoot ? ';\n' : ',\n') + postfix;
    if (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.keyName) {
        code = [
            (0, render_object_1.renderObjectComment)(parentSchema),
            "".concat(parentSchema.keyName, ": ").concat(code)
        ].join('\n');
    }
    return code;
}
function renderClassName(api, options) {
    var name = api.path;
    if (options.paramType) {
        name += " ".concat(options.paramType);
    }
    name += "By ".concat(api.method);
    return changeCase.pascalCase(name);
}
exports.renderClassName = renderClassName;