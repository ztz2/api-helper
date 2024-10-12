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
import { dereference } from '@apidevtools/json-schema-ref-parser';
import { isHttp, mergeUrl, randomId, checkType, filterDesc, parserSchema, filterKeyName, deepMergeSchema, processRequestSchema, processRequestSchemaPipeline, processResponseSchemaPipeline, } from '../utils/util';
import { UNKNOWN_GROUP_DESC, UNKNOWN_GROUP_NAME, } from '../constant';
import { validateSchema, validateOpenAPIDocument, } from '../utils/validator';
import { createApi, createCategory, createDocument, createSchema, transformType } from '../helpers';
import ParserKeyName2Schema from './parser-key-name-2-schema';
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
                        return [4 /*yield*/, dereference(document_1)];
                    case 4:
                        openAPIDocument = (_b.sent());
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
        var _a, _b, _c, _d, _e, _f, _g;
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
            var title = filterDesc(openAPIDocument.info.title);
            var document_2 = createDocument({
                id: this.generateId(),
                title: title ? title : '接口文档',
                description: filterDesc(openAPIDocument.info.description),
                version: openAPIDocument.info.version,
                documentVersion: documentVersion,
                documentServerUrl: (_g = openAPIDocument.documentServerUrl) !== null && _g !== void 0 ? _g : '',
                basePath: basePath,
                categoryList: []
            });
            result.set(document_2, openAPIDocument);
        }
        return result;
    };
    ParserSwagger.prototype.parserPath2API = function (parsedDocumentMap) {
        var e_3, _a, e_4, _b, e_5, _c;
        var _d, _e, _f, _g, _h, _j, _k;
        var result = [];
        try {
            for (var parsedDocumentMap_1 = __values(parsedDocumentMap), parsedDocumentMap_1_1 = parsedDocumentMap_1.next(); !parsedDocumentMap_1_1.done; parsedDocumentMap_1_1 = parsedDocumentMap_1.next()) {
                var _l = __read(parsedDocumentMap_1_1.value, 2), apiDocument = _l[0], openAPIDocument = _l[1];
                var paths = openAPIDocument.paths;
                if (!paths) {
                    continue;
                }
                var isV2 = (_f = (_e = (_d = apiDocument.documentVersion) === null || _d === void 0 ? void 0 : _d.startsWith) === null || _e === void 0 ? void 0 : _e.call(_d, '2')) !== null && _f !== void 0 ? _f : false;
                var pathsEntries = Object.entries(paths);
                var categoryMap = this.parserCategory(openAPIDocument);
                for (var i = 0; i < pathsEntries.length; i++) {
                    var _m = __read(pathsEntries[i], 2), path = _m[0], methodMap = _m[1];
                    var methodMapEntries = Object.entries(methodMap);
                    for (var w = 0; w < methodMapEntries.length; w++) {
                        var method = methodMapEntries[w][0].toLowerCase();
                        var apiMap = methodMapEntries[w][1];
                        try {
                            var requestKeyNameMemo = [];
                            // fix: 重复项问题
                            var requestSchemaRecord = [];
                            var parserKeyName2SchemaWrap = [];
                            // fix: basePath为/，导致//
                            var mPath = mergeUrl(isHttp(apiDocument.basePath) ? '' : apiDocument.basePath, path);
                            // 请求 body 数据都在这个wrap对象中
                            var requestExtraDataSchemaWrap = { value: null };
                            var requestDataSchema = createSchema('object', {
                                id: this.generateId(),
                            });
                            // 接口
                            var api = createApi({
                                id: this.generateId(),
                                title: filterDesc(apiMap.summary),
                                description: filterDesc(apiMap.description),
                                path: mPath,
                                method: method,
                            });
                            api.label = api.title ? api.title : api.description ? api.description : '';
                            this.parseCommonParam({ apiDocument: apiDocument, api: api, apiMap: apiMap, requestDataSchema: requestDataSchema, requestKeyNameMemo: requestKeyNameMemo, parserKeyName2SchemaWrap: parserKeyName2SchemaWrap });
                            if (isV2) {
                                this.parseV2Param({ api: api, apiMap: apiMap, requestExtraDataSchemaWrap: requestExtraDataSchemaWrap, requestDataSchema: requestDataSchema, requestKeyNameMemo: requestKeyNameMemo, requestSchemaRecord: requestSchemaRecord, parserKeyName2SchemaWrap: parserKeyName2SchemaWrap });
                            }
                            else {
                                this.parseV3Param({ api: api, apiMap: apiMap, requestExtraDataSchemaWrap: requestExtraDataSchemaWrap, requestDataSchema: requestDataSchema, requestKeyNameMemo: requestKeyNameMemo, requestSchemaRecord: requestSchemaRecord });
                            }
                            processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchemaWrap.value, this);
                            processResponseSchemaPipeline(api, this);
                            // 没有获取到请求ContentType，根据参数类型进行推断
                            if (!((_g = api === null || api === void 0 ? void 0 : api.requestContentType) === null || _g === void 0 ? void 0 : _g.length)) {
                                if ((_h = api.formDataKeyNameList) === null || _h === void 0 ? void 0 : _h.length) {
                                    api.requestContentType = ['multipart/form-data'];
                                }
                                else if ((_j = api.queryStringKeyNameList) === null || _j === void 0 ? void 0 : _j.length) {
                                    api.requestContentType = ['application/x-www-form-urlencoded'];
                                }
                            }
                            // 将该API添加到所依赖的模块中
                            var apiTags = ((_k = apiMap === null || apiMap === void 0 ? void 0 : apiMap.tags) === null || _k === void 0 ? void 0 : _k.length) > 0 ? apiMap.tags : [UNKNOWN_GROUP_NAME];
                            try {
                                for (var apiTags_1 = (e_4 = void 0, __values(apiTags)), apiTags_1_1 = apiTags_1.next(); !apiTags_1_1.done; apiTags_1_1 = apiTags_1.next()) {
                                    var tagName = apiTags_1_1.value;
                                    var recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(UNKNOWN_GROUP_NAME);
                                    recordCategory && recordCategory.apiList.push(api);
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (apiTags_1_1 && !apiTags_1_1.done && (_b = apiTags_1.return)) _b.call(apiTags_1);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                        }
                        catch (e) {
                            console.log("".concat(method.toUpperCase(), " ").concat(path, " \u63A5\u53E3\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB @api-helper \u4F5C\u8005\u4FEE\u590D\u8BE5\u95EE\u9898\uFF0C\u6216\u63D0\u4EA4issue\uFF0Chttps://github.com/ztz2/api-helper/issues\n").concat(e));
                        }
                    }
                }
                try {
                    // 将转换完成的分组添加到文档中
                    for (var categoryMap_1 = (e_5 = void 0, __values(categoryMap)), categoryMap_1_1 = categoryMap_1.next(); !categoryMap_1_1.done; categoryMap_1_1 = categoryMap_1.next()) {
                        var _o = __read(categoryMap_1_1.value, 2), category = _o[1];
                        apiDocument.categoryList.push(category);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (categoryMap_1_1 && !categoryMap_1_1.done && (_c = categoryMap_1.return)) _c.call(categoryMap_1);
                    }
                    finally { if (e_5) throw e_5.error; }
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
    // 解析：路径参数、查询字符串参数(v2[x-www-form-urlencoded])、响应数据。预留header、cookie
    ParserSwagger.prototype.parseCommonParam = function (_a) {
        var _b, _c, _d, _e, _f, _g;
        var apiDocument = _a.apiDocument, api = _a.api, apiMap = _a.apiMap, requestDataSchema = _a.requestDataSchema, requestKeyNameMemo = _a.requestKeyNameMemo, parserKeyName2SchemaWrap = _a.parserKeyName2SchemaWrap;
        var parameters = apiMap.parameters;
        var cookieSchema = createSchema('object');
        var headerSchema = createSchema('object');
        var isV2 = apiDocument.documentVersion.startsWith('2');
        // parameters 包含了：路径参数、query-params、headers、cookies
        if ((parameters === null || parameters === void 0 ? void 0 : parameters.length) > 0) {
            var _loop_1 = function (j) {
                var parameter = parameters[j];
                // fix: 当为Object类型，属性为空，导致成为一个异常的对象
                // name是一个字段名称，没有字段名称，属于无效的属性
                if (((_c = (_b = parameter.name) === null || _b === void 0 ? void 0 : _b.trim) === null || _c === void 0 ? void 0 : _c.call(_b)) === '') {
                    return "continue";
                }
                var parameterIn = (_d = parameter === null || parameter === void 0 ? void 0 : parameter.in) !== null && _d !== void 0 ? _d : '';
                var keyName = filterKeyName(parameter.name);
                // parameter?.type 为 'array' 类型对象，例子数据源：v2.0/petstore.json  [ GET ] /v2/pet/findByStatus status字段
                // 通过直接 parameter.schema 获取类型对象，V3
                // v2 通过 parameter?.type 判断
                var parameterSchema = isV2 ? parameter : parameter.schema;
                switch (parameterIn) {
                    case 'path':
                    case 'query': {
                        if (requestKeyNameMemo.includes(keyName)) {
                            return "continue";
                        }
                        var type = transformType(parameter.type, parameter === null || parameter === void 0 ? void 0 : parameter.format, 'string');
                        var scm_1 = parserSchema(parameterSchema, undefined, keyName, undefined, {
                            autoGenerateId: this_1.autoGenerateId,
                        });
                        var parserKeyName2SchemaWrapNode = null;
                        // dot 参数
                        if (keyName.includes('.') || keyName.includes('[')) {
                            var parserKeyName2SchemaRes = new ParserKeyName2Schema(keyName, type).parse();
                            // dot 对象
                            if (parserKeyName2SchemaRes) {
                                parserKeyName2SchemaWrap.push(parserKeyName2SchemaRes.wrapSchema);
                                // fix: 当为路径参数时候，必填项
                                if (parameter.in === 'path') {
                                    parserKeyName2SchemaRes.wrapSchema.rules.required = true;
                                }
                                parserKeyName2SchemaWrapNode = parserKeyName2SchemaRes.wrapSchema;
                                scm_1 = parserKeyName2SchemaRes.targetSchema;
                                keyName = filterKeyName(parserKeyName2SchemaWrapNode.keyName);
                            }
                        }
                        if (scm_1 == null) {
                            break;
                        }
                        if (!scm_1.id && this_1.autoGenerateId) {
                            scm_1.id = this_1.generateId();
                        }
                        if (parserKeyName2SchemaWrapNode == null) {
                            scm_1.rules.required = parameterIn === 'path' ? true : checkType(parameter.required, 'Boolean') ? parameter.required : false;
                        }
                        else {
                            scm_1.rules.required = checkType(parameter.required, 'Boolean') ? parameter.required : false;
                        }
                        scm_1.description = filterDesc(parameter.description);
                        scm_1.label = scm_1.title ? scm_1.title : scm_1.description ? scm_1.description : '';
                        // 路径参数
                        if (parameterIn === 'path') {
                            !api.pathParamKeyNameList.includes(keyName) && api.pathParamKeyNameList.push(keyName);
                        } // URL参数
                        else if (parameterIn === 'query') {
                            !api.queryStringKeyNameList.includes(keyName) && api.queryStringKeyNameList.push(keyName);
                        }
                        // 最后处理完scm，如果该dot参数包装根节点存在，将scm指向它
                        if (parserKeyName2SchemaWrapNode) {
                            scm_1 = parserKeyName2SchemaWrapNode;
                        }
                        // fix: 重复提取到根节点问题
                        var previousSchema = requestDataSchema.params.find(function (item) { return item.keyName === keyName && item.type === (scm_1 === null || scm_1 === void 0 ? void 0 : scm_1.type); });
                        // 存在相同节点，进行合并
                        if (previousSchema) {
                            deepMergeSchema(previousSchema, scm_1);
                        }
                        else {
                            requestDataSchema.params.push(scm_1);
                        }
                        !requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);
                        break;
                    }
                    case 'header':
                    case 'cookie': {
                        var temp = parserSchema(parameterSchema, undefined, keyName, undefined, {
                            autoGenerateId: this_1.autoGenerateId,
                        });
                        if (temp) {
                            if (parameterIn === 'cookie') {
                                cookieSchema.params.push(temp);
                            }
                            else {
                                headerSchema.params.push(temp);
                            }
                        }
                        break;
                    }
                }
            };
            var this_1 = this;
            for (var j = 0; j < parameters.length; j++) {
                _loop_1(j);
            }
            if (cookieSchema.params.length > 0) {
                api.cookies = cookieSchema;
            }
            if (headerSchema.params.length > 0) {
                api.headers = headerSchema;
            }
            // 合并 name[0].a.rule 属性。
            ParserKeyName2Schema.appendSchemeList(parserKeyName2SchemaWrap, requestDataSchema, requestKeyNameMemo);
        }
        // V2-响应Content-Type获取
        if (isV2 && apiMap.produces) {
            api.responseContentType = apiMap.produces;
        }
        // 响应数据：V2
        var responsesSchemaSource = (_f = (_e = apiMap.responses) === null || _e === void 0 ? void 0 : _e['200']) === null || _f === void 0 ? void 0 : _f.schema;
        // 响应数据：V3，同时获取对于的Content-Type
        if (!responsesSchemaSource) {
            var responsesSchemaTypes = [
                'application/json',
                'text/json',
                'application/xml',
                'text/plain',
                '*/*',
            ];
            responsesSchemaTypes.find(function (item) {
                var _a, _b, _c, _d;
                var temp = (_d = (_c = (_b = (_a = apiMap.responses) === null || _a === void 0 ? void 0 : _a['200']) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c[item]) === null || _d === void 0 ? void 0 : _d.schema;
                if (temp) {
                    api.requestContentType = [item];
                    responsesSchemaSource = temp;
                    return temp;
                }
            });
        }
        if (responsesSchemaSource && validateSchema(responsesSchemaSource)) {
            api.responseDataSchema = parserSchema(responsesSchemaSource, undefined, undefined, undefined, { autoGenerateId: this.autoGenerateId });
            if (((_g = api.responseDataSchema) === null || _g === void 0 ? void 0 : _g.type) === 'object') {
                api.responseDataSchema.keyName = '';
            }
        }
    };
    // 解析v2：请求json数据、formData
    ParserSwagger.prototype.parseV2Param = function (_a) {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var api = _a.api, apiMap = _a.apiMap, requestExtraDataSchemaWrap = _a.requestExtraDataSchemaWrap, requestDataSchema = _a.requestDataSchema, requestKeyNameMemo = _a.requestKeyNameMemo, requestSchemaRecord = _a.requestSchemaRecord, parserKeyName2SchemaWrap = _a.parserKeyName2SchemaWrap;
        if (apiMap === null || apiMap === void 0 ? void 0 : apiMap.consumes) {
            api.requestContentType = apiMap === null || apiMap === void 0 ? void 0 : apiMap.consumes;
        }
        if (((_b = apiMap === null || apiMap === void 0 ? void 0 : apiMap.parameters) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            var parameters = apiMap.parameters;
            for (var j = 0; j < parameters.length; j++) {
                var parameter = parameters[j];
                // fix: 当为Object类型，属性为空，导致成为一个异常的对象
                if (((_d = (_c = parameter.name) === null || _c === void 0 ? void 0 : _c.trim) === null || _d === void 0 ? void 0 : _d.call(_c)) === '') {
                    continue;
                }
                var parameterIn = (_e = parameter === null || parameter === void 0 ? void 0 : parameter.in) !== null && _e !== void 0 ? _e : '';
                var keyName = filterKeyName(parameter.name);
                // 路径参数 | url 参数
                switch (parameterIn) {
                    // 兼容这个非标准的写法
                    case 'formData': {
                        if (requestKeyNameMemo.includes(keyName)) {
                            continue;
                        }
                        var scm = parserSchema(parameter, undefined, keyName, undefined, {
                            autoGenerateId: this.autoGenerateId,
                        });
                        if (scm == null) {
                            break;
                        }
                        scm.label = filterDesc(scm.title ? scm.title : scm.description ? scm.description : '');
                        // application/x-www-form-urlencoded 类型不属于真正的formData，这是v2独有的特征
                        if (!((_g = (_f = apiMap.consumes) === null || _f === void 0 ? void 0 : _f.includes) === null || _g === void 0 ? void 0 : _g.call(_f, 'application/x-www-form-urlencoded'))) {
                            !api.formDataKeyNameList.includes(keyName) && api.formDataKeyNameList.push(keyName);
                        }
                        !requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);
                        requestDataSchema.params.push(scm);
                        break;
                    }
                    case 'body': {
                        if (((_h = parameter.schema) === null || _h === void 0 ? void 0 : _h.type) === 'object' || ((_j = parameter.schema) === null || _j === void 0 ? void 0 : _j.type) === 'array') {
                            requestExtraDataSchemaWrap.value = processRequestSchema(requestDataSchema, requestSchemaRecord, parameter.schema, requestKeyNameMemo, {
                                autoGenerateId: this.autoGenerateId,
                            });
                            // application/json 数据
                            // 如果是普通属性，合并平台属性，整理成一个对象
                            // 还有可能是 'text/plain' 数据
                            // { in: 'body', name: 'body' }
                        }
                        else if (((_k = parameter.schema) === null || _k === void 0 ? void 0 : _k.type) && (parameter === null || parameter === void 0 ? void 0 : parameter.name)) {
                            var isTextPlain = (_l = apiMap.consumes) === null || _l === void 0 ? void 0 : _l.includes('text/plain');
                            var isOctetStream = (_m = apiMap.consumes) === null || _m === void 0 ? void 0 : _m.includes('application/octet-stream');
                            var isRootBody = isTextPlain || isOctetStream;
                            var t = transformType(parameter.schema.type, (_o = parameter === null || parameter === void 0 ? void 0 : parameter.schema) === null || _o === void 0 ? void 0 : _o.format, 'string');
                            var temp = parserSchema(parameter.schema, undefined, undefined, undefined, {
                                autoGenerateId: this.autoGenerateId
                            });
                            if (isRootBody) {
                                requestExtraDataSchemaWrap.value = temp;
                            }
                            else {
                                requestDataSchema.params.push(createSchema('object', {
                                    params: temp ? [temp] : [],
                                    id: this.generateId(),
                                    keyName: parameter === null || parameter === void 0 ? void 0 : parameter.name,
                                    title: filterDesc(parameter === null || parameter === void 0 ? void 0 : parameter.title),
                                    description: filterDesc(parameter === null || parameter === void 0 ? void 0 : parameter.description),
                                    type: t,
                                    examples: (_p = parameter.examples) !== null && _p !== void 0 ? _p : [],
                                    rules: {
                                        required: !!(parameter === null || parameter === void 0 ? void 0 : parameter.required) || !!((_q = parameter.schema) === null || _q === void 0 ? void 0 : _q.required),
                                    },
                                    rawType: 'object',
                                    format: (_r = parameter === null || parameter === void 0 ? void 0 : parameter.format) !== null && _r !== void 0 ? _r : '',
                                }));
                            }
                        }
                        break;
                    }
                }
            }
            // 合并 name[0].a.rule 属性。
            ParserKeyName2Schema.appendSchemeList(parserKeyName2SchemaWrap, requestDataSchema, requestKeyNameMemo);
        }
    };
    // 请求参数
    ParserSwagger.prototype.parseV3Param = function (_a) {
        var _b, _c, _d, _e, _f, _g, _h;
        var api = _a.api, apiMap = _a.apiMap, requestExtraDataSchemaWrap = _a.requestExtraDataSchemaWrap, requestDataSchema = _a.requestDataSchema, requestKeyNameMemo = _a.requestKeyNameMemo, requestSchemaRecord = _a.requestSchemaRecord;
        // FormData数据
        var formDataSource = (_d = (_c = (_b = apiMap.requestBody) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c['multipart/form-data']) === null || _d === void 0 ? void 0 : _d.schema;
        if (formDataSource) {
            api.requestContentType = ['multipart/form-data'];
            var formDataSchema = processRequestSchema(requestDataSchema, requestSchemaRecord, formDataSource, undefined, {
                autoGenerateId: this.autoGenerateId,
            });
            // 记录表单数据key
            if (formDataSchema) {
                (_e = formDataSchema === null || formDataSchema === void 0 ? void 0 : formDataSchema.params) === null || _e === void 0 ? void 0 : _e.forEach(function (_a) {
                    var keyName = _a.keyName;
                    api.formDataKeyNameList.push(keyName);
                    requestKeyNameMemo.push(keyName);
                });
            }
        }
        // x-www-form-urlencoded 类型参数
        var wwwFormUrlencodedSchema = (_h = (_g = (_f = apiMap.requestBody) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g['application/x-www-form-urlencoded']) === null || _h === void 0 ? void 0 : _h.schema;
        if (wwwFormUrlencodedSchema) {
            api.requestContentType = ['application/x-www-form-urlencoded'];
            processRequestSchema(requestDataSchema, requestSchemaRecord, wwwFormUrlencodedSchema, requestKeyNameMemo, {
                autoGenerateId: this.autoGenerateId,
                callback: function (parsedSchema) {
                    // 收集URL query 参数字段
                    if (parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.params) {
                        parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.params.forEach(function (itm) { return (itm === null || itm === void 0 ? void 0 : itm.keyName) && api.queryStringKeyNameList.push(itm.keyName); });
                    }
                }
            });
        }
        var requestSchemaTypes = [
            'application/json',
            'text/json',
            'text/plain',
            'application/xml',
            'application/octet-stream',
        ];
        var requestSchemaSource = null;
        requestSchemaTypes.find(function (item) {
            var _a, _b, _c;
            var temp = (_c = (_b = (_a = apiMap.requestBody) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b[item]) === null || _c === void 0 ? void 0 : _c.schema;
            if (temp) {
                api.requestContentType = [item];
                requestSchemaSource = temp;
                return temp;
            }
        });
        // fix: requestExtraDataSchema 参数丢失问题
        if (requestSchemaSource) {
            requestExtraDataSchemaWrap.value = processRequestSchema(requestDataSchema, requestSchemaRecord, requestSchemaSource, undefined, {
                autoGenerateId: this.autoGenerateId,
            });
        }
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
