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
export function createSchema(type, options) {
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
        instance = merge(instance, options);
    }
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
    };
    if (Object.prototype.toString.call(options) === '[object Object]') {
        instance = merge(instance, options);
    }
    return instance;
}
export function transformType(type, format, emptyType) {
    var _a;
    if (Array.isArray(type)) {
        type = (_a = type === null || type === void 0 ? void 0 : type[0]) !== null && _a !== void 0 ? _a : 'string';
    }
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
