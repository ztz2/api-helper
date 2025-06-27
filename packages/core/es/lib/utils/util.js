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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import qs from 'qs';
import cloneDeep from 'lodash/cloneDeep';
import isPlainObject from 'lodash/isPlainObject';
import { LINE_FEED_CODE, COMMENT_END_CODE, COMMENT_START_CODE, LINE_FEED_CODE_MAC } from '../constant';
import { validateKeyName, validateSchema } from './validator';
import { createSchema, transformType } from "../helpers";
export function pushArray(target, value) {
    [].push.apply(target, value);
    return target;
}
export function checkType(value, type) {
    var _a, _b, _c, _d;
    return Object.prototype.toString.call(value) === "[object ".concat(type ? (((_c = (_b = (_a = type === null || type === void 0 ? void 0 : type.charAt) === null || _a === void 0 ? void 0 : _a.call(type, 0)) === null || _b === void 0 ? void 0 : _b.toUpperCase) === null || _c === void 0 ? void 0 : _c.call(_b)) + ((_d = type === null || type === void 0 ? void 0 : type.slice) === null || _d === void 0 ? void 0 : _d.call(type, 1))) : type, "]");
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
export function randomChar(size) {
    if (size === void 0) { size = 16; }
    var str = uuid().replace(/-/gim, '').toLocaleLowerCase();
    size = Number.parseInt((size > str.length ? str.length : size < 1 ? 1 : size), 10);
    return str.slice(str.length - size);
}
export function randomId(size) {
    return randomChar(size);
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
    // 换行符移除-windows
    value = value.replace(/\n/gim, LINE_FEED_CODE);
    // 换行符移除-mac
    value = value.replace(/\r/gim, LINE_FEED_CODE_MAC);
    // 注释开始符号移除
    value = value.replace(/\/\*/gim, COMMENT_START_CODE);
    // 注释结束符号移除
    value = value.replace(/\*\//gim, COMMENT_END_CODE);
    return value;
}
export function filterSchemaRoot(schemaList) {
    var e_1, _a;
    if (!schemaList) {
        return [];
    }
    var result = [];
    try {
        for (var schemaList_1 = __values(schemaList), schemaList_1_1 = schemaList_1.next(); !schemaList_1_1.done; schemaList_1_1 = schemaList_1.next()) {
            var schema = schemaList_1_1.value;
            result.push(cloneDeep(__assign(__assign({}, schema), { params: [] })));
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
// 预留，用于统一处理keyName，目前不需要进行任何处理。
export function filterKeyName(v) {
    // if (
    //   ((typeof v === 'string' && (v as unknown as string).trim() !== '') || (typeof v !== 'string' && v != null))
    //   && !v.includes('.')
    //   && !v.includes('[')
    //   && !/^([^\x00-\xff]|[a-zA-Z_$])([^\x00-\xff]|[a-zA-Z0-9_$])*$/.test(v)) { // @ts-ignore
    //   v = `\"${v}\"`;
    // }
    return v;
}
// 过滤所有dot参数
export function filterDotKeyName(v) {
    return v.replace(/\[.*/, '').replace(/\..*/, '');
}
export function filterSchemaRequired(schemaList) {
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
    return dfs(cloneDeep(schemaList));
}
export function parserSchema(schema, parentSchema, keyName, memo, options) {
    var e_3, _a;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (parentSchema === void 0) { parentSchema = {}; }
    if (keyName === void 0) { keyName = ''; }
    if (memo === void 0) { memo = new Map(); }
    if (options === void 0) { options = {}; }
    var optionsTemp = checkType(options, 'object') ? options : {};
    var currentOptions = Object.assign({
        autoGenerateId: true,
        transformTypeMap: {},
    }, optionsTemp);
    keyName = filterKeyName(keyName);
    if (!schema) {
        return null;
    }
    if (memo.has(schema) && !((_b = currentOptions === null || currentOptions === void 0 ? void 0 : currentOptions.subNodeMemo) === null || _b === void 0 ? void 0 : _b.includes(schema))) {
        return memo.get(schema);
    }
    delete currentOptions.subNodeMemo;
    memo.set(schema, null);
    var requiredFieldList = (Array.isArray(parentSchema.required) ? parentSchema.required : checkType(parentSchema.required, 'String') ? [parentSchema.required] : []);
    // 定义数据，收集类型，对象类型在下面在进行单独处理
    var resultSchema = createSchema(transformType(schema.type, {
        format: schema.format,
        emptyType: 'string',
        transformTypeMap: currentOptions.transformTypeMap
    }), {
        id: currentOptions.autoGenerateId ? randomId() : '',
        title: filterDesc(schema.title),
        description: filterDesc(schema.description),
        keyName: keyName,
        type: transformType(schema.type, {
            format: schema.format,
            emptyType: 'string',
            transformTypeMap: currentOptions.transformTypeMap,
        }),
        examples: (_c = schema.examples) !== null && _c !== void 0 ? _c : [],
        rules: {
            required: requiredFieldList.includes(keyName),
        },
        rawType: schema.type,
        format: (_d = schema === null || schema === void 0 ? void 0 : schema.format) !== null && _d !== void 0 ? _d : '',
    });
    resultSchema.label = resultSchema.title ? resultSchema.title : resultSchema.description ? resultSchema.description : '';
    try {
        // 枚举类型单独处理，过滤非对象类型
        if (schema.enum) {
            resultSchema.enum = schema.enum.filter(function (t) { return !isPlainObject(t); });
        }
        var type = Array.isArray(schema.type) ? ((_f = (_e = schema.type) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : 'string') : schema.type;
        // 其他类型处理
        // eslint-disable-next-line default-case
        switch (type) {
            case 'string':
                var stringRules = createSchema('string').rules;
                stringRules.required = requiredFieldList.includes(keyName);
                if (schema.minLength != null)
                    stringRules.minLength = schema.minLength;
                if (schema.maxLength != null)
                    stringRules.maxLength = schema.maxLength;
                if (schema.pattern != null)
                    stringRules.pattern = schema.pattern;
                resultSchema.rules = stringRules;
                break;
            case 'number':
                var numberRules = createSchema('number').rules;
                numberRules.required = requiredFieldList.includes(keyName);
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
            case 'null':
                var nullRules = createSchema('null').rules;
                nullRules.required = requiredFieldList.includes(keyName);
                resultSchema.rules = nullRules;
                break;
            case 'boolean':
                var booleanRules = createSchema('boolean').rules;
                booleanRules.required = requiredFieldList.includes(keyName);
                resultSchema.rules = booleanRules;
                break;
            // 对象类型
            case 'object':
                if (schema.properties) {
                    var schemaProperties = Object.entries(schema.properties);
                    var subNodeMemo = [];
                    for (var i = 0; i < schemaProperties.length; i++) {
                        var _l = __read(schemaProperties[i], 2), childKeyName = _l[0], childSchema = _l[1];
                        // fix: 当为Object类型，属性为空，导致成为一个异常的对象
                        if (((_g = childKeyName === null || childKeyName === void 0 ? void 0 : childKeyName.trim) === null || _g === void 0 ? void 0 : _g.call(childKeyName)) === '') {
                            continue;
                        }
                        if (validateSchema(childSchema)) {
                            subNodeMemo.push(childSchema);
                            var tmp = parserSchema(childSchema, schema, childKeyName, memo, __assign(__assign({}, currentOptions), { subNodeMemo: subNodeMemo }));
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
                        for (var _m = __values(schema.items), _o = _m.next(); !_o.done; _o = _m.next()) {
                            var item = _o.value;
                            if (validateSchema(item)) {
                                var tmp = parserSchema(item, schema, '', memo, currentOptions);
                                if (tmp) {
                                    resultSchema.params.push(tmp);
                                }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_o && !_o.done && (_a = _m.return)) _a.call(_m);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    // 数组单一类型 schema.properties
                }
                else if (checkType(schema.items, 'Object')) {
                    if (checkType((_h = schema === null || schema === void 0 ? void 0 : schema.items) === null || _h === void 0 ? void 0 : _h.oneOf, 'Array')) {
                        (_k = (_j = schema === null || schema === void 0 ? void 0 : schema.items) === null || _j === void 0 ? void 0 : _j.oneOf) === null || _k === void 0 ? void 0 : _k.forEach(function (itm) {
                            if (itm && validateSchema(itm)) {
                                var tmp = parserSchema(itm, schema, '', memo, currentOptions);
                                if (tmp) {
                                    resultSchema.params.push(tmp);
                                }
                            }
                        });
                    }
                    else {
                        if (schema.items && validateSchema(schema.items)) {
                            var tmp = parserSchema(schema.items, schema, '', memo, currentOptions);
                            if (tmp) {
                                resultSchema.params.push(tmp);
                            }
                        }
                    }
                }
                var arrayRules = createSchema('array').rules;
                arrayRules.required = requiredFieldList.includes(keyName);
                if (schema.minItems != null)
                    arrayRules.minLength = schema.minItems;
                if (schema.maxItems != null)
                    arrayRules.maxLength = schema.maxItems;
                if (schema.uniqueItems != null)
                    arrayRules.uniqueItems = schema.uniqueItems;
                resultSchema.rules = arrayRules;
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
        transformTypeMap: {},
    }; }
    if (!requestJSONSchemaSource || !validateSchema(requestJSONSchemaSource)) {
        return null;
    }
    var parsedSchema = parserSchema(requestJSONSchemaSource, undefined, undefined, undefined, options);
    // 类型相同可以整合，非重复
    var types = Array.isArray(parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.type) ? parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.type : [parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.type];
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
// 判断是否为对象类型的Schema, Array | Object
export function isSchemaObject(schema) {
    if (!schema) {
        return false;
    }
    return !schema.keyName && (schema.type === 'array' || schema.type === 'object');
}
// 判断是否是原始值的Schema。
export function isSchemaPrimitiveValue(schema) {
    if (!schema) {
        return false;
    }
    return !schema.keyName && schema.type !== 'array' && schema.type !== 'object';
}
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
export function filterSchemaPrimitiveValue(schema) {
    if (!schema) {
        return schema;
    }
    var schemaList = cloneDeep(Array.isArray(schema) ? schema : [schema]);
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
export function getErrorMessage(error, prefix, postfix) {
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
export function formatDate(date, format) {
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
// 处理keyName，如果不是合法的变量，添加""
export function processKeyName(keyName) {
    if (!validateKeyName(keyName)) {
        return "\"".concat(keyName, "\"");
    }
    return keyName;
}
// 深度合并两个节点，
// 合并到source节点中
export function deepMergeSchema(source, other) {
    var _a;
    function dfs(s, o) {
        var _a;
        if (s === void 0) { s = null; }
        if (o === void 0) { o = null; }
        if (s == null) {
            return o;
        }
        if (o == null) {
            return s;
        }
        if (!(s.keyName === o.keyName && s.type === o.type)) {
            return s;
        }
        var memoOtherMap = {};
        o.params.forEach(function (item) {
            memoOtherMap["".concat(item.keyName).concat(item.type)] = item;
        });
        s.params.forEach(function (item, index) {
            var key = "".concat(item.keyName).concat(item.type);
            var memoOther = memoOtherMap[key];
            // 存在相同节点，需要进行合并
            if (memoOther) {
                var otherIndex = o.params.indexOf(memoOther);
                s.params.splice(index, 1, dfs(item, memoOther));
                o.params.splice(otherIndex, 1);
            }
        });
        // 还存在其他节点，直接复制
        if (o.params.length) {
            (_a = s.params).push.apply(_a, __spreadArray([], __read(o.params), false));
        }
        return s;
    }
    return (_a = dfs(source, other)) !== null && _a !== void 0 ? _a : null;
}
