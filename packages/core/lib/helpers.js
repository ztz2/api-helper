"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRequestFunctionConfig = exports.getSchema = exports.FormDataItem = exports.transformType = exports.createApi = exports.createCategory = exports.createDocument = exports.createSchema = void 0;
var qs_1 = require("qs");
var merge_1 = __importDefault(require("lodash/merge"));
var util_1 = require("./utils/util");
var AbstractSchema = /** @class */ (function () {
    function AbstractSchema() {
        this.id = '';
        this.type = '';
        this.keyName = '';
        this.title = '';
        this.description = '';
        this.label = '';
        this.rules = { required: false };
        this.examples = [];
        this.params = [];
        this.enum = [];
    }
    return AbstractSchema;
}());
var StringSchema = /** @class */ (function (_super) {
    __extends(StringSchema, _super);
    function StringSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'string';
        _this.rules = {
            required: false,
            minLength: undefined,
            maxLength: undefined,
            pattern: undefined,
        };
        return _this;
    }
    return StringSchema;
}(AbstractSchema));
var NumberSchema = /** @class */ (function (_super) {
    __extends(NumberSchema, _super);
    function NumberSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'number';
        _this.rules = {
            required: false,
            multipleOf: undefined,
            minimum: undefined,
            maximum: undefined,
            exclusiveMinimum: undefined,
            exclusiveMaximum: undefined,
        };
        return _this;
    }
    return NumberSchema;
}(AbstractSchema));
var ObjectSchema = /** @class */ (function (_super) {
    __extends(ObjectSchema, _super);
    function ObjectSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'object';
        return _this;
    }
    return ObjectSchema;
}(AbstractSchema));
var ArraySchema = /** @class */ (function (_super) {
    __extends(ArraySchema, _super);
    function ArraySchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'array';
        _this.rules = {
            required: false,
            minLength: undefined,
            maxLength: undefined,
            uniqueItems: undefined,
        };
        return _this;
    }
    return ArraySchema;
}(AbstractSchema));
var BooleanSchema = /** @class */ (function (_super) {
    __extends(BooleanSchema, _super);
    function BooleanSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'boolean';
        return _this;
    }
    return BooleanSchema;
}(AbstractSchema));
var NullSchema = /** @class */ (function (_super) {
    __extends(NullSchema, _super);
    function NullSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'null';
        return _this;
    }
    return NullSchema;
}(AbstractSchema));
var FileSchema = /** @class */ (function (_super) {
    __extends(FileSchema, _super);
    function FileSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'File';
        return _this;
    }
    return FileSchema;
}(AbstractSchema));
var AnySchema = /** @class */ (function (_super) {
    __extends(AnySchema, _super);
    function AnySchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'any';
        return _this;
    }
    return AnySchema;
}(AbstractSchema));
var UnknownSchema = /** @class */ (function (_super) {
    __extends(UnknownSchema, _super);
    function UnknownSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'unknown';
        return _this;
    }
    return UnknownSchema;
}(AbstractSchema));
function createSchema(type, options) {
    var instance = new AbstractSchema();
    switch (type) {
        case 'string':
        case 'enum': {
            instance = new StringSchema();
            break;
        }
        case 'number': {
            instance = new NumberSchema();
            break;
        }
        case 'object': {
            instance = new ObjectSchema();
            break;
        }
        case 'array': {
            instance = new ArraySchema();
            break;
        }
        case 'boolean': {
            instance = new BooleanSchema();
            break;
        }
        case 'File':
        case 'file': {
            instance = new FileSchema();
            break;
        }
        case 'null': {
            instance = new NullSchema();
            break;
        }
        case 'any': {
            instance = new AnySchema();
            break;
        }
        case 'unknown': {
            instance = new UnknownSchema();
            break;
        }
    }
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = (0, merge_1.default)(instance, options);
    }
    return instance;
}
exports.createSchema = createSchema;
function createDocument(options) {
    var instance = {
        id: '',
        title: '',
        description: '',
        version: '',
        documentVersion: '',
        basePath: '',
        categoryList: [],
    };
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = (0, merge_1.default)(instance, options);
    }
    return instance;
}
exports.createDocument = createDocument;
function createCategory(options) {
    var instance = {
        id: '',
        name: '',
        description: '',
        apiList: [],
    };
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = (0, merge_1.default)(instance, options);
    }
    return instance;
}
exports.createCategory = createCategory;
function createApi(options) {
    var instance = {
        id: '',
        title: '',
        description: '',
        label: '',
        docURL: '',
        path: '',
        method: '',
        formDataKeyNameList: [],
        pathParamKeyNameList: [],
        queryStringKeyNameList: [],
        requestDataSchema: null,
        requestExtraDataSchema: null,
        responseDataSchema: null,
    };
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = (0, merge_1.default)(instance, options);
    }
    return instance;
}
exports.createApi = createApi;
function transformType(type, format, emptyType) {
    var typeMap = {
        int: 'number',
        integer: 'number',
        double: 'number',
        short: 'number',
        float: 'number',
        bigdecimal: 'number',
        long: 'string',
        char: 'string',
        string: 'string',
        byte: 'string',
        date: 'string',
        dateTime: 'string',
        password: 'string',
        text: 'string',
        boolean: 'boolean',
        void: 'null',
        array: 'array',
        object: 'object',
        file: 'File',
        File: 'File',
        binary: 'File',
    };
    if (format === 'binary') {
        return 'File';
    }
    var typeValue = typeMap[type];
    return typeValue ? typeValue : emptyType ? emptyType : 'unknown';
}
exports.transformType = transformType;
var FormDataItem = /** @class */ (function () {
    function FormDataItem(value) {
        this.value = value;
    }
    FormDataItem.prototype.get = function () {
        return this.value;
    };
    FormDataItem.prototype.set = function (value) {
        this.value = value;
    };
    return FormDataItem;
}());
exports.FormDataItem = FormDataItem;
function getSchema(schema, path, clearKeyName) {
    if (path === void 0) { path = ''; }
    if (clearKeyName === void 0) { clearKeyName = true; }
    if (!schema || !path) {
        return null;
    }
    var pathList = path.replace(/\[/gim, '.').replace(/\]/gim, '').split('.');
    if (pathList.length === 0) {
        return null;
    }
    var t = schema;
    var runCount = 0;
    var len = pathList.length;
    try {
        while (pathList.length) {
            var p = pathList.shift();
            for (var i = 0; i < t.params.length; i++) {
                var s = t.params[i];
                if (s.keyName === p) {
                    t = s;
                    runCount++;
                    break;
                }
                if (i === t.params.length - 1) {
                    return null;
                }
            }
        }
    }
    catch (_a) {
        return null;
    }
    if (clearKeyName) {
        t = __assign({}, t);
        t.keyName = '';
    }
    if (runCount === len) {
        return t;
    }
    return null;
}
exports.getSchema = getSchema;
function processRequestFunctionConfig(data, extraData, requestConfig) {
    var e_1, _a;
    var _b, _c, _d, _e;
    var requestFunctionConfig = {
        data: null,
        rowData: data,
        rowExtraData: extraData,
        path: requestConfig.path,
        method: requestConfig.method
    };
    var queryParams = {};
    var cloneData = ((0, util_1.checkType)(data, 'Object') ? __assign({}, data) : {});
    var hasNativeFormData = typeof FormData !== 'undefined';
    var hasNodeFormData = !hasNativeFormData && ((_c = (_b = global === null || global === void 0 ? void 0 : global['process']) === null || _b === void 0 ? void 0 : _b['versions']) === null || _c === void 0 ? void 0 : _c['node']) != null;
    var FormDataPolyfill = hasNativeFormData ? FormData : hasNodeFormData ? eval("require('form-data')") : undefined;
    if (FormDataPolyfill == null) {
        throw new Error('当前环境不支持 FormData');
    }
    var formData = new FormDataPolyfill();
    var appendFormData = function (key, val) {
        formData.append(key, val, val instanceof File ? val.name : val instanceof Blob ? 'blob' : undefined);
    };
    var _loop_1 = function (k, v) {
        // FormData处理
        if (v instanceof FormDataItem || requestConfig.formDataKeyNameList.includes(k)) {
            var val = v.get();
            requestFunctionConfig.hasFormData = true;
            if (Array.isArray(val)) {
                val.forEach(function (p, index) {
                    appendFormData("".concat(k, "[").concat(index, "]"), p);
                });
            }
            else {
                appendFormData(k, v);
            }
            delete cloneData[k];
            return "continue";
        }
        // 路径参数处理
        if ((_d = requestConfig.pathParamKeyNameList) === null || _d === void 0 ? void 0 : _d.includes(k)) {
            // 合并路径参数
            requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp("{".concat(k, "}"), 'g'), v);
            delete cloneData[k];
        }
        // URL 参数处理
        if ((_e = requestConfig.queryStringKeyNameList) === null || _e === void 0 ? void 0 : _e.includes(k)) {
            queryParams[k] = v;
            delete cloneData[k];
        }
    };
    try {
        // 数据处理
        for (var _f = __values(Object.entries(cloneData)), _g = _f.next(); !_g.done; _g = _f.next()) {
            var _h = __read(_g.value, 2), k = _h[0], v = _h[1];
            _loop_1(k, v);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // 合并URL参数
    var queryString = (0, qs_1.stringify)(queryParams);
    if (queryString.length) {
        requestFunctionConfig.path += "?".concat(queryString);
    }
    // 合并Data
    if (requestFunctionConfig.hasFormData) {
        requestFunctionConfig.data = formData;
    }
    else if (extraData) {
        requestFunctionConfig.data = extraData;
    }
    else {
        requestFunctionConfig.data = cloneData;
    }
    return requestFunctionConfig;
}
exports.processRequestFunctionConfig = processRequestFunctionConfig;
