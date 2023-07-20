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
import qs from 'qs';
import cloneDeep from 'lodash/cloneDeep';
import isPlainObject from 'lodash/isPlainObject';
import { TS_TYPE, LINE_FEED_CODE, COMMENT_END_CODE, COMMENT_START_CODE, } from '../constant';
import { validateSchema } from './validator';
export function checkType(value, type) {
    return Object.prototype.toString.call(value) === "[object ".concat(type, "]");
}
export function isHttp(value) {
    return /^(http(s?):\/\/.*?)($|\/)/.test(String(value));
}
export function filterEmpty(value) {
    return (value !== '' && value != null) ? value : '';
}
export function Try(fn, err) {
    try {
        return fn();
    }
    catch (e) {
        return err(e);
    }
}
export function arrayUniquePush(array, item) {
    if (!array.includes(item)) {
        array.push(item);
    }
    return array.length;
}
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export function randomId() {
    return uuid();
}
// 过滤 keyName 为空的数据，并且合并 array<object>
export function filterSchema(schemaList, deepClone) {
    if (deepClone === void 0) { deepClone = false; }
    if (deepClone) {
        schemaList = cloneDeep(schemaList);
    }
    return schemaList;
}
export function mergeUrl() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var queryParams = {};
    var url = args.reduce(function (value, itm) {
        if (value.includes('?')) {
            var sp = value.split('?');
            value = sp[0];
            queryParams = Object.assign({}, queryParams, qs.parse(sp[1]));
        }
        if (itm.includes('?')) {
            var sp = itm.split('?');
            itm = sp[0];
            queryParams = Object.assign({}, queryParams, qs.parse(sp[1]));
        }
        if (value.endsWith('/') && itm.startsWith('/')) {
            itm = itm.slice(1);
        }
        return value + itm;
    }, '');
    // URL参数
    var queryParamsStr = qs.stringify(queryParams);
    if (queryParamsStr) {
        queryParamsStr = "?".concat(queryParamsStr);
    }
    return "".concat(url).concat(queryParamsStr);
}
export function filterDesc(value) {
    if (value === void 0) { value = ''; }
    value = value == null ? '' : value;
    // 换行符移除
    value = value.replace(/\n/gim, LINE_FEED_CODE);
    // 注释开始符号移除
    value = value.replace(/\/\*/gim, COMMENT_START_CODE);
    // 注释结束符号移除
    value = value.replace(/\*\//gim, COMMENT_END_CODE);
    return value;
}
export function filterKeyName(value) {
    if (value === void 0) { value = ''; }
    value = value == null ? '' : value;
    // keyName[0] => keyName
    value = value.replace(/\[.*?\]/gim, '');
    return value;
}
export function transformType(type) {
    var _a;
    var typeMap = {
        int: 'number',
        integer: 'number',
        double: 'number',
        short: 'number',
        float: 'number',
        bigdecimal: 'number',
        long: 'string',
        string: 'string',
        byte: 'string',
        binary: 'string',
        boolean: 'boolean',
        date: 'string',
        dateTime: 'string',
        password: 'string',
        void: 'null',
        array: 'array',
        object: 'object',
    };
    var typeValue = ((_a = typeMap[type]) !== null && _a !== void 0 ? _a : type);
    return TS_TYPE.includes(typeValue) ? typeValue : 'unknown';
}
export function parserSchema(schema, parentSchema, keyName, memo, options) {
    var e_1, _a;
    var _b;
    if (parentSchema === void 0) { parentSchema = {}; }
    if (keyName === void 0) { keyName = ''; }
    if (memo === void 0) { memo = new Map(); }
    if (options === void 0) { options = {
        autoGenerateId: true
    }; }
    if (!schema) {
        return null;
    }
    if (memo.has(schema)) {
        return memo.get(schema);
    }
    memo.set(schema, null);
    keyName = filterKeyName(keyName);
    var requiredFieldList = (Array.isArray(parentSchema.required) ? parentSchema.required : checkType(parentSchema.required, 'String') ? [parentSchema.required] : []);
    // 定义数据，收集类型，对象类型在下面在进行单独处理
    var resultSchema = {
        id: options.autoGenerateId ? randomId() : '',
        title: filterDesc(schema.title),
        description: filterDesc(schema.description),
        keyName: keyName,
        type: transformType(schema.type),
        params: [],
        enum: [],
        examples: (_b = schema.examples) !== null && _b !== void 0 ? _b : [],
        rules: {
            required: requiredFieldList.includes(keyName),
        }
    };
    try {
        // 枚举类型单独处理
        // 注意：过滤非对象类型
        if (schema.enum) {
            // @ts-ignore
            resultSchema.enum = schema.enum.filter(function (t) { return !isPlainObject(t); });
        }
        else {
            // @ts-ignore
            delete resultSchema.enum;
        }
        // 其他类型处理
        // eslint-disable-next-line default-case
        switch (schema.type) {
            case 'string':
                var stringRules = {
                    required: requiredFieldList.includes(keyName),
                };
                if (schema.minLength != null)
                    stringRules.minLength = schema.minLength;
                if (schema.maxLength != null)
                    stringRules.maxLength = schema.maxLength;
                if (schema.pattern != null)
                    stringRules.pattern = schema.pattern;
                resultSchema.rules = stringRules;
                break;
            case 'number':
                var numberRules = {
                    required: requiredFieldList.includes(keyName),
                };
                if (schema.multipleOf != null)
                    numberRules.multipleOf = schema.multipleOf;
                if (schema.minimum != null)
                    numberRules.minimum = schema.minimum;
                if (schema.maximum != null)
                    numberRules.maximum = schema.maximum;
                if (schema.exclusiveMinimum != null)
                    numberRules.exclusiveMinimum = schema.exclusiveMinimum;
                if (schema.exclusiveMaximum != null)
                    numberRules.exclusiveMaximum = schema.exclusiveMaximum;
                resultSchema.rules = numberRules;
                break;
            // 对象类型
            case 'object':
                if (schema.properties) {
                    var schemaProperties = Object.entries(schema.properties);
                    for (var i = 0; i < schemaProperties.length; i++) {
                        var _c = __read(schemaProperties[i], 2), childKeyName = _c[0], childSchema = _c[1];
                        if (validateSchema(childSchema)) {
                            var tmp = parserSchema(childSchema, schema, childKeyName, memo, options);
                            tmp && resultSchema.params.push(tmp);
                        }
                    }
                }
                break;
            // 数组类型
            case 'array':
                // 数组内存在多种类型
                if (Array.isArray(schema.items)) {
                    try {
                        for (var _d = __values(schema.items), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var item = _e.value;
                            if (validateSchema(item)) {
                                var tmp = parserSchema(item, schema, '', memo, options);
                                if (tmp) {
                                    resultSchema.params.push(tmp);
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    // 数组单一类型 schema.properties
                }
                else if (checkType(schema.items, 'Object')) {
                    if (schema.items && validateSchema(schema.items)) {
                        var tmp = parserSchema(schema.items, schema, '', memo, options);
                        if (tmp) {
                            resultSchema.params.push(tmp);
                        }
                    }
                }
                var arrayRules = {
                    required: requiredFieldList.includes(keyName),
                };
                if (schema.minItems != null)
                    arrayRules.minLength = schema.minItems;
                if (schema.maxItems != null)
                    arrayRules.maxLength = schema.maxItems;
                if (schema.uniqueItems != null)
                    arrayRules.uniqueItems = schema.uniqueItems;
                break;
        }
    }
    catch (e) { }
    return resultSchema;
}
// 处理参数兼容，如果不兼容，返回schema，作为参数body
export function processRequestSchema(requestDataSchema, requestSchemaRecord, requestJSONSchemaSource, keyNameMemo, options) {
    var _a, _b, _c;
    if (keyNameMemo === void 0) { keyNameMemo = []; }
    if (options === void 0) { options = {
        autoGenerateId: true,
    }; }
    if (!requestJSONSchemaSource || !validateSchema(requestJSONSchemaSource)) {
        return null;
    }
    var parsedSchema = parserSchema(requestJSONSchemaSource, undefined, undefined, undefined, options);
    // 类型相同可以整合，非重复
    if ((parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.type) === 'object' && requestJSONSchemaSource && !requestSchemaRecord.includes(requestJSONSchemaSource)) {
        var requestSchemaList = (_a = parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.params) !== null && _a !== void 0 ? _a : [];
        requestSchemaList.forEach(function (item) {
            if (!keyNameMemo.includes(item.keyName)) {
                keyNameMemo.push(item.keyName);
                requestDataSchema.params.push(item);
            }
        });
        requestSchemaRecord.push(requestJSONSchemaSource);
        (_b = options === null || options === void 0 ? void 0 : options.callback) === null || _b === void 0 ? void 0 : _b.call(options, parsedSchema);
        return parsedSchema;
    }
    // 类型不同
    if (parsedSchema && parsedSchema.type !== 'object') {
        (_c = options === null || options === void 0 ? void 0 : options.callback) === null || _c === void 0 ? void 0 : _c.call(options, parsedSchema);
        return parsedSchema;
    }
    return null;
}
export function uniqueRequestDataRootSchema(api) {
    var _a;
    if ((_a = api.requestDataSchema) === null || _a === void 0 ? void 0 : _a.params) {
        var requestDataSchemaMemo_1 = [];
        api.requestDataSchema.params = api.requestDataSchema.params.filter(function (s) {
            if (!s.keyName) {
                return true;
            }
            var hasKeyName = requestDataSchemaMemo_1.includes(s.keyName);
            requestDataSchemaMemo_1.push(s.keyName);
            return !hasKeyName;
        });
    }
    return api;
}
export function deepAddSchemaRules(schema, rules) {
    if (rules === void 0) { rules = {}; }
    schema = schema == null ? [] : Array.isArray(schema) ? schema : [schema];
    if (Object.keys(rules).length === 0) {
        return undefined;
    }
    var memo = [];
    var deepLoop = function (s) {
        var e_2, _a;
        try {
            for (var s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
                var itm = s_1_1.value;
                if (!itm || memo.includes(itm)) {
                    continue;
                }
                memo.push(itm);
                itm.rules = Object.assign({}, itm.rules, rules);
                deepLoop(itm.params);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (s_1_1 && !s_1_1.done && (_a = s_1.return)) _a.call(s_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    deepLoop(schema);
}
// 请求数据通用处理
export function processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchema, options) {
    if (requestDataSchema.params.length === 0) {
        api.requestDataSchema = requestExtraDataSchema;
    }
    else if (requestDataSchema.params.length > 0) {
        api.requestDataSchema = requestDataSchema;
    }
    else {
        api.requestExtraDataSchema = requestExtraDataSchema;
    }
    // 请求数据根对象属性去重
    uniqueRequestDataRootSchema(api);
    // 请求数据规则处理
    if (options.requiredRequestField) {
        deepAddSchemaRules(api.requestDataSchema, {
            required: true
        });
        deepAddSchemaRules(api.requestExtraDataSchema, {
            required: true
        });
    }
    return api;
}
// 响应数据通用处理
export function processResponseSchemaPipeline(api, options) {
    if (options.requiredResponseField) {
        deepAddSchemaRules(api.responseDataSchema, {
            required: true
        });
    }
}
