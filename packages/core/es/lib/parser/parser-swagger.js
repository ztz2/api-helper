var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
// @ts-ignore
import SwaggerParser from 'bundle-shims/lib/apidevtools.swagger-parser';
import { isHttp, mergeUrl, randomId, checkType, filterDesc, parserSchema, filterKeyName, processRequestSchema, processRequestSchemaPipeline, processResponseSchemaPipeline, } from '../utils/util';
import { UNKNOWN_GROUP_DESC, UNKNOWN_GROUP_NAME, } from '../constant';
import { validateSchema, validateOpenAPIDocument, } from '../utils/validator';
import { createApi, createCategory, createDocument, createSchema, transformType } from '../helpers';
import ParserKeyName2Schema from '../../lib/parser/parser-key-name-2-schema';
var ParserSwagger = /** @class */ (function () {
    function ParserSwagger(options) {
        this.autoGenerateId = true;
        this.autoGenerateId = typeof options === 'boolean' ? options : typeof (options === null || options === void 0 ? void 0 : options.autoGenerateId) === 'boolean' ? options === null || options === void 0 ? void 0 : options.autoGenerateId : true;
        var currentOptions = Object.assign({
            requiredResponseField: true,
            requiredRequestField: false,
        }, checkType(options, 'Object') ? options : {});
        this.requiredRequestField = currentOptions.requiredRequestField;
        this.requiredResponseField = currentOptions.requiredResponseField;
    }
    ParserSwagger.prototype.parser = function (documentList) {
        return __awaiter(this, void 0, void 0, function () {
            var openAPIDocumentList, documentList_1, documentList_1_1, document_1, openAPIDocument, e_1, e_2_1, parsedDocumentMap;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        openAPIDocumentList = [];
                        if (!documentList || documentList.length === 0) {
                            return [2 /*return*/, []];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        documentList_1 = __values(documentList), documentList_1_1 = documentList_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!documentList_1_1.done) return [3 /*break*/, 7];
                        document_1 = documentList_1_1.value;
                        if (!validateOpenAPIDocument(document_1)) return [3 /*break*/, 6];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, new SwaggerParser().dereference(document_1)];
                    case 4:
                        openAPIDocument = _b.sent();
                        if (validateOpenAPIDocument(openAPIDocument)) {
                            openAPIDocumentList.push(openAPIDocument);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        throw e_1;
                    case 6:
                        documentList_1_1 = documentList_1.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (documentList_1_1 && !documentList_1_1.done && (_a = documentList_1.return)) _a.call(documentList_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        parsedDocumentMap = this.parserDocument(openAPIDocumentList);
                        return [2 /*return*/, this.parserPath2API(parsedDocumentMap)];
                }
            });
        });
    };
    ParserSwagger.prototype.parserDocument = function (openAPIDocumentList) {
        var _a, _b, _c, _d, _e, _f;
        var result = new Map();
        for (var i = 0; i < openAPIDocumentList.length; i++) {
            var openAPIDocument = openAPIDocumentList[i];
            var basePath = '';
            var documentVersion = '';
            // 2.0 版本OpenAPI
            if ('swagger' in openAPIDocument && openAPIDocument.swagger.startsWith('2')) {
                basePath = (_a = openAPIDocument === null || openAPIDocument === void 0 ? void 0 : openAPIDocument.basePath) !== null && _a !== void 0 ? _a : '';
                documentVersion = (_b = openAPIDocument.swagger) !== null && _b !== void 0 ? _b : '';
            } // 3.0 版本OpenAPI
            else if ('openapi' in openAPIDocument && openAPIDocument.openapi.startsWith('3')) {
                basePath = (_e = (_d = (_c = openAPIDocument.servers) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.url) !== null && _e !== void 0 ? _e : '';
                documentVersion = (_f = openAPIDocument.openapi) !== null && _f !== void 0 ? _f : '';
            }
            var document_2 = createDocument({
                id: this.generateId(),
                title: filterDesc(openAPIDocument.info.title),
                description: filterDesc(openAPIDocument.info.description),
                version: openAPIDocument.info.version,
                documentVersion: documentVersion,
                basePath: basePath,
                categoryList: []
            });
            result.set(document_2, openAPIDocument);
        }
        return result;
    };
    ParserSwagger.prototype.parserPath2API = function (parsedDocumentMap) {
        var e_3, _a, e_4, _b;
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        var result = [];
        try {
            for (var parsedDocumentMap_1 = __values(parsedDocumentMap), parsedDocumentMap_1_1 = parsedDocumentMap_1.next(); !parsedDocumentMap_1_1.done; parsedDocumentMap_1_1 = parsedDocumentMap_1.next()) {
                var _10 = __read(parsedDocumentMap_1_1.value, 2), apiDocument = _10[0], openAPIDocument = _10[1];
                var paths = openAPIDocument.paths;
                if (!paths) {
                    continue;
                }
                var pathsEntries = Object.entries(paths);
                var categoryMap = this.parserCategory(openAPIDocument);
                for (var i = 0; i < pathsEntries.length; i++) {
                    var _11 = __read(pathsEntries[i], 2), path = _11[0], methodMap = _11[1];
                    var methodMapEntries = Object.entries(methodMap);
                    var _loop_1 = function (w) {
                        var e_5, _13;
                        var method = methodMapEntries[w][0].toLowerCase();
                        var apiMap = methodMapEntries[w][1];
                        // fix: basePath为/，导致//
                        var mPath = mergeUrl(isHttp(apiDocument.basePath) ? '' : apiDocument.basePath, path);
                        // 接口
                        var api = createApi({
                            id: this_1.generateId(),
                            title: filterDesc(apiMap.summary),
                            description: filterDesc(apiMap.description),
                            path: mPath,
                            method: method,
                        });
                        api.label = api.title ? api.title : api.description ? api.description : '';
                        /****************** 处理请求参数--开始 ******************/
                        var requestExtraDataSchema = null;
                        var requestDataSchema = createSchema('object', {
                            id: this_1.generateId(),
                        });
                        var requestKeyNameMemo = [];
                        // fix: 重复项问题
                        var requestSchemaRecord = [];
                        var parserKeyName2SchemaWrap = [];
                        // FormData数据
                        var formDataSource = (_e = (_d = (_c = apiMap.requestBody) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d['multipart/form-data']) === null || _e === void 0 ? void 0 : _e.schema;
                        var formDataSchema = processRequestSchema(requestDataSchema, requestSchemaRecord, formDataSource, undefined, {
                            autoGenerateId: this_1.autoGenerateId,
                        });
                        // 记录表单数据key
                        if (formDataSchema) {
                            (_f = formDataSchema === null || formDataSchema === void 0 ? void 0 : formDataSchema.params) === null || _f === void 0 ? void 0 : _f.forEach(function (_a) {
                                var keyName = _a.keyName;
                                api.formDataKeyNameList.push(keyName);
                                requestKeyNameMemo.push(keyName);
                            });
                        }
                        if ('parameters' in apiMap) {
                            var parameters = apiMap.parameters;
                            for (var j = 0; j < parameters.length; j++) {
                                var parameter = parameters[j];
                                var keyName = filterKeyName(parameter.name);
                                // 路径参数 | url 参数
                                if (parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'formData') {
                                    if (requestKeyNameMemo.includes(keyName)) {
                                        continue;
                                    }
                                    requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);
                                    var type = transformType(parameter.type, undefined, 'string');
                                    var scm = createSchema(type, {
                                        id: this_1.generateId(),
                                        keyName: keyName,
                                    });
                                    var parserKeyName2SchemaRes = new ParserKeyName2Schema(parameter.name, type).parse();
                                    if (parserKeyName2SchemaRes) {
                                        parserKeyName2SchemaWrap.push(parserKeyName2SchemaRes.wrapSchema);
                                        scm = parserKeyName2SchemaRes.targetSchema;
                                        if (scm.keyName === 'deptIds') {
                                            console.log(12);
                                        }
                                        keyName = filterKeyName(parserKeyName2SchemaRes.wrapSchema.keyName);
                                    }
                                    else {
                                        // fix: url参数也是一个对象问题.
                                        if (parameter.schema) {
                                            var parsedSchema = parserSchema(parameter.schema, undefined, keyName, undefined, {
                                                autoGenerateId: this_1.autoGenerateId,
                                            });
                                            if (parsedSchema) {
                                                scm = parsedSchema;
                                            }
                                        }
                                    }
                                    scm.id = this_1.generateId();
                                    scm.rules.required = parameter.in === 'path' ? true : checkType(parameter.required, 'Boolean') ? parameter.required : false;
                                    scm.description = filterDesc(parameter.description);
                                    scm.label = scm.title ? scm.title : scm.description ? scm.description : '';
                                    // 路径参数
                                    if (parameter.in === 'path') {
                                        !api.pathParamKeyNameList.includes(keyName) && api.pathParamKeyNameList.push(keyName);
                                    } // URL参数
                                    else if (parameter.in === 'query') {
                                        !api.queryStringKeyNameList.includes(keyName) && api.queryStringKeyNameList.push(keyName);
                                    } // 表单参数（这个可能不是标准规范）
                                    else if (parameter.in === 'formData') {
                                        !api.formDataKeyNameList.includes(keyName) && api.formDataKeyNameList.push(keyName);
                                    }
                                    if (!parserKeyName2SchemaRes) {
                                        requestDataSchema.params.push(scm);
                                    }
                                }
                                else if (parameter.in === 'body') { // body 参数
                                    requestExtraDataSchema = processRequestSchema(requestDataSchema, requestSchemaRecord, parameter.schema, requestKeyNameMemo, {
                                        autoGenerateId: this_1.autoGenerateId,
                                    });
                                }
                                else if (parameter.in === 'header' || parameter.in === 'cookie') {
                                    // header 和 cookie信息，暂无特殊处理
                                }
                            }
                            if (parserKeyName2SchemaWrap.length > 0) {
                                console.log();
                            }
                            // 合并 name[0].a.rule 属性。
                            ParserKeyName2Schema.appendSchemeList(parserKeyName2SchemaWrap, requestDataSchema, requestKeyNameMemo);
                        }
                        // URL query 参数，query参数必须包含key，不存在不兼容问题
                        processRequestSchema(requestDataSchema, requestSchemaRecord, (_j = (_h = (_g = apiMap.requestBody) === null || _g === void 0 ? void 0 : _g.content) === null || _h === void 0 ? void 0 : _h['application/x-www-form-urlencoded']) === null || _j === void 0 ? void 0 : _j.schema, requestKeyNameMemo, {
                            autoGenerateId: this_1.autoGenerateId,
                            callback: function (parsedSchema) {
                                // 收集URL query 参数字段
                                if (parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.params) {
                                    parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.params.forEach(function (itm) { return (itm === null || itm === void 0 ? void 0 : itm.keyName) && api.queryStringKeyNameList.push(itm.keyName); });
                                }
                            }
                        });
                        // 请求 Body 为 json参数
                        var requestSchemaSource = (_o = (_m = (_l = (_k = apiMap.requestBody) === null || _k === void 0 ? void 0 : _k.content) === null || _l === void 0 ? void 0 : _l['application/json']) === null || _m === void 0 ? void 0 : _m.schema) !== null && _o !== void 0 ? _o : (_r = (_q = (_p = apiMap.requestBody) === null || _p === void 0 ? void 0 : _p.content) === null || _q === void 0 ? void 0 : _q['text/json']) === null || _r === void 0 ? void 0 : _r.schema;
                        requestExtraDataSchema = processRequestSchema(requestDataSchema, requestSchemaRecord, requestSchemaSource, undefined, {
                            autoGenerateId: this_1.autoGenerateId,
                        });
                        processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchema, this_1);
                        /****************** 处理请求参数--结束 ******************/
                        /****************** 处理响应参数--开始 ******************/
                        var responsesSchemaSource = (_4 = (_z = (_u = (_t = (_s = apiMap.responses) === null || _s === void 0 ? void 0 : _s['200']) === null || _t === void 0 ? void 0 : _t.schema) !== null && _u !== void 0 ? _u : (_y = (_x = (_w = (_v = apiMap.responses) === null || _v === void 0 ? void 0 : _v['200']) === null || _w === void 0 ? void 0 : _w.content) === null || _x === void 0 ? void 0 : _x['application/json']) === null || _y === void 0 ? void 0 : _y.schema) !== null && _z !== void 0 ? _z : (_3 = (_2 = (_1 = (_0 = apiMap.responses) === null || _0 === void 0 ? void 0 : _0['200']) === null || _1 === void 0 ? void 0 : _1.content) === null || _2 === void 0 ? void 0 : _2['text/json']) === null || _3 === void 0 ? void 0 : _3.schema) !== null && _4 !== void 0 ? _4 : (_8 = (_7 = (_6 = (_5 = apiMap.responses) === null || _5 === void 0 ? void 0 : _5['200']) === null || _6 === void 0 ? void 0 : _6.content) === null || _7 === void 0 ? void 0 : _7['*/*']) === null || _8 === void 0 ? void 0 : _8.schema;
                        if (validateSchema(responsesSchemaSource)) {
                            api.responseDataSchema = parserSchema(responsesSchemaSource, undefined, undefined, undefined, {
                                autoGenerateId: this_1.autoGenerateId
                            });
                            if (((_9 = api.responseDataSchema) === null || _9 === void 0 ? void 0 : _9.type) === 'object') {
                                api.responseDataSchema.keyName = '';
                            }
                        }
                        processResponseSchemaPipeline(api, this_1);
                        try {
                            /****************** 处理响应参数--结束 ******************/
                            // 将该API添加到所依赖的模块中
                            for (var _14 = (e_5 = void 0, __values(apiMap.tags)), _15 = _14.next(); !_15.done; _15 = _14.next()) {
                                var tagName = _15.value;
                                var recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(UNKNOWN_GROUP_NAME);
                                recordCategory && recordCategory.apiList.push(api);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (_15 && !_15.done && (_13 = _14.return)) _13.call(_14);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                    };
                    var this_1 = this;
                    for (var w = 0; w < methodMapEntries.length; w++) {
                        _loop_1(w);
                    }
                }
                try {
                    // 将转换完成的分组添加到文档中
                    for (var categoryMap_1 = (e_4 = void 0, __values(categoryMap)), categoryMap_1_1 = categoryMap_1.next(); !categoryMap_1_1.done; categoryMap_1_1 = categoryMap_1.next()) {
                        var _12 = __read(categoryMap_1_1.value, 2), category = _12[1];
                        apiDocument.categoryList.push(category);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (categoryMap_1_1 && !categoryMap_1_1.done && (_b = categoryMap_1.return)) _b.call(categoryMap_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                result.push(apiDocument);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (parsedDocumentMap_1_1 && !parsedDocumentMap_1_1.done && (_a = parsedDocumentMap_1.return)) _a.call(parsedDocumentMap_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    ParserSwagger.prototype.parserCategory = function (openAPIDocument) {
        var e_6, _a;
        var result = new Map();
        if (openAPIDocument.tags) {
            try {
                for (var _b = __values(openAPIDocument.tags), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var tag = _c.value;
                    result.set(tag.name, createCategory({
                        id: this.generateId(),
                        name: tag.name,
                        description: filterDesc(tag === null || tag === void 0 ? void 0 : tag.description),
                    }));
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        result.set(UNKNOWN_GROUP_NAME, createCategory({
            id: this.generateId(),
            name: UNKNOWN_GROUP_NAME,
            description: UNKNOWN_GROUP_DESC,
        }));
        return result;
    };
    ParserSwagger.prototype.generateId = function () {
        return this.autoGenerateId ? randomId() : '';
    };
    return ParserSwagger;
}());
export default ParserSwagger;
