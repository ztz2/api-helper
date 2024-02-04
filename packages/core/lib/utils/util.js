"use strict";
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
exports.formatDate = exports.getErrorMessage = exports.filterSchemaPrimitiveValue = exports.isSchemaPrimitiveValue = exports.isSchemaObject = exports.processResponseSchemaPipeline = exports.processRequestSchemaPipeline = exports.deepAddSchemaRules = exports.uniqueRequestDataRootSchema = exports.processRequestSchema = exports.parserSchema = exports.filterSchemaRequired = exports.filterDotKeyName = exports.filterKeyName = exports.filterSchemaRoot = exports.filterDesc = exports.mergeUrl = exports.randomId = exports.randomChar = exports.uuid = exports.arrayUniquePush = exports.Try = exports.filterEmpty = exports.isHttp = exports.checkType = exports.pushArray = void 0;
var qs_1 = __importDefault(require("qs"));
var cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
var constant_1 = require("../constant");
var validator_1 = require("./validator");
var helpers_1 = require("../helpers");
function pushArray(target, value) {
    [].push.apply(target, value);
    return target;
}
exports.pushArray = pushArray;
function checkType(value, type) {
    return Object.prototype.toString.call(value) === "[object ".concat(type, "]");
}
exports.checkType = checkType;
function isHttp(value) {
    return /^(http(s?):\/\/.*?)($|\/)/.test(String(value));
}
exports.isHttp = isHttp;
function filterEmpty(value) {
    return (value !== '' && value != null) ? value : '';
}
exports.filterEmpty = filterEmpty;
function Try(fn, err) {
    try {
        return fn();
    }
    catch (e) {
        return err(e);
    }
}
exports.Try = Try;
function arrayUniquePush(array, item) {
    if (!array.includes(item)) {
        array.push(item);
    }
    return array.length;
}
exports.arrayUniquePush = arrayUniquePush;
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.uuid = uuid;
function randomChar(size) {
    if (size === void 0) { size = 16; }
    var str = uuid().replace(/-/gim, '').toLocaleLowerCase();
    size = Number.parseInt((size > str.length ? str.length : size < 1 ? 1 : size), 10);
    return str.slice(str.length - size);
}
exports.randomChar = randomChar;
function randomId(size) {
    return randomChar(size);
}
exports.randomId = randomId;
function mergeUrl() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var queryParams = {};
    var url = args.reduce(function (value, itm) {
        if (value.includes('?')) {
            var sp = value.split('?');
            value = sp[0];
            queryParams = Object.assign({}, queryParams, qs_1.default.parse(sp[1]));
        }
        if (itm.includes('?')) {
            var sp = itm.split('?');
            itm = sp[0];
            queryParams = Object.assign({}, queryParams, qs_1.default.parse(sp[1]));
        }
        if (value.endsWith('/') && itm.startsWith('/')) {
            itm = itm.slice(1);
        }
        return value + itm;
    }, '');
    // URL参数
    var queryParamsStr = qs_1.default.stringify(queryParams);
    if (queryParamsStr) {
        queryParamsStr = "?".concat(queryParamsStr);
    }
    return "".concat(url).concat(queryParamsStr);
}
exports.mergeUrl = mergeUrl;
function filterDesc(value) {
    if (value === void 0) { value = ''; }
    value = value == null ? '' : value;
    // 换行符移除-windows
    value = value.replace(/\n/gim, constant_1.LINE_FEED_CODE);
    // 换行符移除-mac
    value = value.replace(/\r/gim, constant_1.LINE_FEED_CODE_MAC);
    // 注释开始符号移除
    value = value.replace(/\/\*/gim, constant_1.COMMENT_START_CODE);
    // 注释结束符号移除
    value = value.replace(/\*\//gim, constant_1.COMMENT_END_CODE);
    return value;
}
exports.filterDesc = filterDesc;
function filterSchemaRoot(schemaList) {
    var e_1, _a;
    if (!schemaList) {
        return [];
    }
    var result = [];
    try {
        for (var schemaList_1 = __values(schemaList), schemaList_1_1 = schemaList_1.next(); !schemaList_1_1.done; schemaList_1_1 = schemaList_1.next()) {
            var schema = schemaList_1_1.value;
            result.push((0, cloneDeep_1.default)(__assign(__assign({}, schema), { params: [] })));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (schemaList_1_1 && !schemaList_1_1.done && (_a = schemaList_1.return)) _a.call(schemaList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.filterSchemaRoot = filterSchemaRoot;
// 预留，用于统一处理keyName，目前不需要进行任何处理。
function filterKeyName(v) {
    // fix: 当字段是一个不合法的变量，将其转成字符串
    if (((typeof v === 'string' && v.trim() !== '') || (typeof v !== 'string' && v != null))
        && !v.includes('.')
        && !v.includes('[')
        && !/^([^\x00-\xff]|[a-zA-Z_$])([^\x00-\xff]|[a-zA-Z0-9_$])*$/.test(v)) { // @ts-ignore
        v = "\"".concat(v, "\"");
    }
    return v;
}
exports.filterKeyName = filterKeyName;
// 过滤所有dot参数
function filterDotKeyName(v) {
    return v.replace(/\[.*/, '').replace(/\..*/, '');
}
exports.filterDotKeyName = filterDotKeyName;
function filterSchemaRequired(schemaList) {
    if (!schemaList) {
        return [];
    }
    function dfs(ls) {
        var e_2, _a;
        var result = [];
        try {
            for (var ls_1 = __values(ls), ls_1_1 = ls_1.next(); !ls_1_1.done; ls_1_1 = ls_1.next()) {
                var itm = ls_1_1.value;
                if (itm.rules.required) {
                    itm.params = dfs(itm.params);
                    result.push(itm);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (ls_1_1 && !ls_1_1.done && (_a = ls_1.return)) _a.call(ls_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    }
    return dfs((0, cloneDeep_1.default)(schemaList));
}
exports.filterSchemaRequired = filterSchemaRequired;
function parserSchema(schema, parentSchema, keyName, memo, options) {
    var e_3, _a;
    var _b, _c;
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
    var resultSchema = (0, helpers_1.createSchema)((0, helpers_1.transformType)(schema.type), {
        id: options.autoGenerateId ? randomId() : '',
        title: filterDesc(schema.title),
        description: filterDesc(schema.description),
        keyName: keyName,
        type: (0, helpers_1.transformType)(schema.type, schema.format),
        examples: (_b = schema.examples) !== null && _b !== void 0 ? _b : [],
        rules: {
            required: requiredFieldList.includes(keyName),
        }
    });
    resultSchema.label = resultSchema.title ? resultSchema.title : resultSchema.description ? resultSchema.description : '';
    try {
        // 枚举类型单独处理，过滤非对象类型
        if (schema.enum) {
            resultSchema.enum = schema.enum.filter(function (t) { return !(0, isPlainObject_1.default)(t); });
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
                        var _d = __read(schemaProperties[i], 2), childKeyName = _d[0], childSchema = _d[1];
                        // fix: 当为Object类型，属性为空，导致成为一个异常的对象
                        if (((_c = childKeyName === null || childKeyName === void 0 ? void 0 : childKeyName.trim) === null || _c === void 0 ? void 0 : _c.call(childKeyName)) === '') {
                            continue;
                        }
                        if ((0, validator_1.validateSchema)(childSchema)) {
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
                        for (var _e = __values(schema.items), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var item = _f.value;
                            if ((0, validator_1.validateSchema)(item)) {
                                var tmp = parserSchema(item, schema, '', memo, options);
                                if (tmp) {
                                    resultSchema.params.push(tmp);
                                }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    // 数组单一类型 schema.properties
                }
                else if (checkType(schema.items, 'Object')) {
                    if (schema.items && (0, validator_1.validateSchema)(schema.items)) {
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
exports.parserSchema = parserSchema;
// 处理参数兼容，如果不兼容，返回schema，作为参数body
function processRequestSchema(requestDataSchema, requestSchemaRecord, requestJSONSchemaSource, keyNameMemo, options) {
    var _a, _b, _c;
    if (keyNameMemo === void 0) { keyNameMemo = []; }
    if (options === void 0) { options = {
        autoGenerateId: true,
    }; }
    if (!requestJSONSchemaSource || !(0, validator_1.validateSchema)(requestJSONSchemaSource)) {
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
exports.processRequestSchema = processRequestSchema;
function uniqueRequestDataRootSchema(api) {
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
exports.uniqueRequestDataRootSchema = uniqueRequestDataRootSchema;
function deepAddSchemaRules(schema, rules) {
    if (rules === void 0) { rules = {}; }
    schema = schema == null ? [] : Array.isArray(schema) ? schema : [schema];
    if (Object.keys(rules).length === 0) {
        return undefined;
    }
    var memo = [];
    var deepLoop = function (s) {
        var e_4, _a;
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
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (s_1_1 && !s_1_1.done && (_a = s_1.return)) _a.call(s_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    deepLoop(schema);
}
exports.deepAddSchemaRules = deepAddSchemaRules;
// 请求数据通用处理
function processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchema, options) {
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
exports.processRequestSchemaPipeline = processRequestSchemaPipeline;
// 响应数据通用处理
function processResponseSchemaPipeline(api, options) {
    if (options.requiredResponseField) {
        deepAddSchemaRules(api.responseDataSchema, {
            required: true
        });
    }
}
exports.processResponseSchemaPipeline = processResponseSchemaPipeline;
// 判断是否为对象类型的Schema, Array | Object
function isSchemaObject(schema) {
    if (!schema) {
        return false;
    }
    return !schema.keyName && (schema.type === 'array' || schema.type === 'object');
}
exports.isSchemaObject = isSchemaObject;
// 判断是否是原始值的Schema。
function isSchemaPrimitiveValue(schema) {
    if (!schema) {
        return false;
    }
    return !schema.keyName && schema.type !== 'array' && schema.type !== 'object';
}
exports.isSchemaPrimitiveValue = isSchemaPrimitiveValue;
/**
 * @description 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
 * @example 例子说明：
    源数据：[
            { keyName: '', type: 'string' },
            { keyName: 'username', type: 'string' }
          ]
    过滤后：[
            { keyName: 'username', type: 'string' }
          ]
 * @param schema { schema: APIHelper.Schema | APIHelper.SchemaList | null } schema对象
 * @return APIHelper.Schema | APIHelper.SchemaList | null
 */
function filterSchemaPrimitiveValue(schema) {
    if (!schema) {
        return schema;
    }
    var schemaList = Array.isArray(schema) ? schema : [schema];
    var filter = function (scmList, memo) {
        var e_5, _a;
        var _b;
        if (memo === void 0) { memo = new Map(); }
        if (memo.has(scmList)) {
            return memo.get(scmList);
        }
        var result = [];
        memo.set(scmList, result);
        try {
            for (var scmList_1 = __values(scmList), scmList_1_1 = scmList_1.next(); !scmList_1_1.done; scmList_1_1 = scmList_1.next()) {
                var scm = scmList_1_1.value;
                if (isSchemaPrimitiveValue(scm)) {
                    continue;
                }
                if (((_b = scm.params) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    scm.params = filter(scm.params, memo);
                }
                result.push(scm);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (scmList_1_1 && !scmList_1_1.done && (_a = scmList_1.return)) _a.call(scmList_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
    };
    var res = filter(schemaList);
    if (Array.isArray(schema)) {
        return res;
    }
    return schemaList[0];
}
exports.filterSchemaPrimitiveValue = filterSchemaPrimitiveValue;
function getErrorMessage(error, prefix, postfix) {
    if (prefix === void 0) { prefix = ''; }
    if (postfix === void 0) { postfix = ''; }
    function mergeMessage(msg) {
        return msg ? "".concat(prefix).concat(msg).concat(postfix) : '';
    }
    if (!error) {
        return '';
    }
    if (typeof error === 'string') {
        return mergeMessage(error);
    }
    if (error === null || error === void 0 ? void 0 : error.message) {
        return mergeMessage(error.message);
    }
    if (error === null || error === void 0 ? void 0 : error.msg) {
        return mergeMessage(error.msg);
    }
    return '';
}
exports.getErrorMessage = getErrorMessage;
function formatDate(date, format) {
    if (format === void 0) { format = 'YYYY-MM-dd HH:mm:ss'; }
    date = !(date instanceof Date) ? new Date(date) : date;
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) { // @ts-ignore
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return format;
}
exports.formatDate = formatDate;
