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
import merge from 'lodash/merge';
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
        // 原始类型，没有经过 transformType 函数处理
        this.rawType = '';
        // 特定数字类型的提示:
        // number类型：float、double、int32、int64
        // File类型：binary、byte
        this.format = '';
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
        _this.rawType = 'object';
        return _this;
    }
    return ObjectSchema;
}(AbstractSchema));
var ArraySchema = /** @class */ (function (_super) {
    __extends(ArraySchema, _super);
    function ArraySchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'array';
        _this.rawType = 'array';
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
        _this.rawType = 'boolean';
        return _this;
    }
    return BooleanSchema;
}(AbstractSchema));
var NullSchema = /** @class */ (function (_super) {
    __extends(NullSchema, _super);
    function NullSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'null';
        _this.rawType = 'null';
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
        _this.rawType = 'any';
        return _this;
    }
    return AnySchema;
}(AbstractSchema));
var UnknownSchema = /** @class */ (function (_super) {
    __extends(UnknownSchema, _super);
    function UnknownSchema() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'unknown';
        _this.rawType = 'unknown';
        return _this;
    }
    return UnknownSchema;
}(AbstractSchema));
export function createSchema(type, options) {
    var instance;
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
        default: {
            instance = new StringSchema();
        }
    }
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = merge(instance, options);
    }
    instance.label = instance.title || instance.description || '';
    return instance;
}
export function createDocument(options) {
    var instance = {
        id: '',
        title: '',
        description: '',
        version: '',
        documentVersion: '',
        documentServerUrl: '',
        basePath: '',
        categoryList: [],
    };
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = merge(instance, options);
    }
    return instance;
}
export function createCategory(options) {
    var instance = {
        id: '',
        name: '',
        description: '',
        apiList: [],
    };
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = merge(instance, options);
    }
    return instance;
}
export function createApi(options) {
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
        requestContentType: [],
        responseContentType: [],
        cookies: null,
        headers: null,
    };
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = merge(instance, options);
    }
    return instance;
}
export function transformType(type, options) {
    var _a, _b, _c, _d;
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (Array.isArray(type)) {
        type = (_a = type === null || type === void 0 ? void 0 : type[0]) !== null && _a !== void 0 ? _a : 'string';
    }
    var format = (_b = options === null || options === void 0 ? void 0 : options.format) !== null && _b !== void 0 ? _b : (typeof options === 'string' ? options : null);
    var emptyType = (_c = options === null || options === void 0 ? void 0 : options.emptyType) !== null && _c !== void 0 ? _c : args[0];
    var transformTypeMap = (_d = options === null || options === void 0 ? void 0 : options.transformTypeMap) !== null && _d !== void 0 ? _d : {};
    if (typeof format === 'string') {
        if (typeof transformTypeMap[format] === 'string') {
            return transformTypeMap[format];
        }
        if (typeof transformTypeMap[format] === 'function') {
            return transformTypeMap[format](type, { format: format, emptyType: emptyType });
        }
    }
    if (typeof transformTypeMap[type] === 'string') {
        return transformTypeMap[type];
    }
    if (typeof transformTypeMap[type] === 'function') {
        return transformTypeMap[type](type, { format: format, emptyType: emptyType });
    }
    var typeMap = {
        number: 'number',
        byte: 'number',
        short: 'number',
        int: 'number',
        integer: 'number',
        float: 'number',
        double: 'number',
        // 原则上下面三个类型都属于number类型，但是在他们最大精度位数上时，会超出js精度，导致精度丢失，故以字符串处理
        bigdecimal: 'string',
        long: 'string',
        'long long': 'string',
        string: 'string',
        char: 'string',
        date: 'string',
        dateTime: 'string',
        password: 'string',
        text: 'string',
        boolean: 'boolean',
        void: 'null',
        null: 'null',
        array: 'array',
        object: 'object',
        file: 'File',
        File: 'File',
        binary: 'File',
    };
    if (format === 'binary') {
        return 'File';
    }
    if (format === 'int64') {
        return 'string';
    }
    var typeValue = typeMap[type];
    return typeValue ? typeValue : (options === null || options === void 0 ? void 0 : options.emptyType) ? options.emptyType : 'unknown';
}
export function getSchema(schema, path, clearKeyName) {
    if (path === void 0) { path = ''; }
    if (clearKeyName === void 0) { clearKeyName = true; }
    if (!schema || !path) {
        return schema;
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
