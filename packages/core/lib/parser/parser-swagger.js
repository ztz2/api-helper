"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var apidevtools_swagger_parser_1 = __importDefault(require("bundle-shims/lib/apidevtools.swagger-parser"));
var util_1 = require("../utils/util");
var constant_1 = require("../constant");
var validator_1 = require("../utils/validator");
var helpers_1 = require("../helpers");
var parser_key_name_2_schema_1 = __importDefault(require("./parser-key-name-2-schema"));
var ParserSwagger = /** @class */ (function () {
    function ParserSwagger(options) {
        this.autoGenerateId = true;
        this.autoGenerateId = typeof options === 'boolean' ? options : typeof (options === null || options === void 0 ? void 0 : options.autoGenerateId) === 'boolean' ? options === null || options === void 0 ? void 0 : options.autoGenerateId : true;
        var currentOptions = Object.assign({
            requiredResponseField: true,
            requiredRequestField: false,
        }, (0, util_1.checkType)(options, 'Object') ? options : {});
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
                        if (!(0, validator_1.validateOpenAPIDocument)(document_1)) return [3 /*break*/, 6];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, new apidevtools_swagger_parser_1.default().dereference(document_1)];
                    case 4:
                        openAPIDocument = _b.sent();
                        if ((0, validator_1.validateOpenAPIDocument)(openAPIDocument)) {
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
            var title = (0, util_1.filterDesc)(openAPIDocument.info.title);
            var document_2 = (0, helpers_1.createDocument)({
                id: this.generateId(),
                title: title ? title : '接口文档',
                description: (0, util_1.filterDesc)(openAPIDocument.info.description),
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
        var e_3, _a, e_4, _b;
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
        var result = [];
        try {
            for (var parsedDocumentMap_1 = __values(parsedDocumentMap), parsedDocumentMap_1_1 = parsedDocumentMap_1.next(); !parsedDocumentMap_1_1.done; parsedDocumentMap_1_1 = parsedDocumentMap_1.next()) {
                var _18 = __read(parsedDocumentMap_1_1.value, 2), apiDocument = _18[0], openAPIDocument = _18[1];
                var paths = openAPIDocument.paths;
                if (!paths) {
                    continue;
                }
                var pathsEntries = Object.entries(paths);
                var categoryMap = this.parserCategory(openAPIDocument);
                for (var i = 0; i < pathsEntries.length; i++) {
                    var _19 = __read(pathsEntries[i], 2), path = _19[0], methodMap = _19[1];
                    var methodMapEntries = Object.entries(methodMap);
                    var _loop_1 = function (w) {
                        var e_5, _21;
                        var method = methodMapEntries[w][0].toLowerCase();
                        var apiMap = methodMapEntries[w][1];
                        try {
                            // fix: basePath为/，导致//
                            var mPath = (0, util_1.mergeUrl)((0, util_1.isHttp)(apiDocument.basePath) ? '' : apiDocument.basePath, path);
                            // 接口
                            var api_1 = (0, helpers_1.createApi)({
                                id: this_1.generateId(),
                                title: (0, util_1.filterDesc)(apiMap.summary),
                                description: (0, util_1.filterDesc)(apiMap.description),
                                path: mPath,
                                method: method,
                            });
                            api_1.label = api_1.title ? api_1.title : api_1.description ? api_1.description : '';
                            /****************** 处理请求参数--开始 ******************/
                            var requestExtraDataSchema = null;
                            var requestDataSchema = (0, helpers_1.createSchema)('object', {
                                id: this_1.generateId(),
                            });
                            var requestKeyNameMemo_1 = [];
                            // fix: 重复项问题
                            var requestSchemaRecord = [];
                            var parserKeyName2SchemaWrap = [];
                            // FormData数据
                            var formDataSource = (_e = (_d = (_c = apiMap.requestBody) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d['multipart/form-data']) === null || _e === void 0 ? void 0 : _e.schema;
                            var formDataSchema = (0, util_1.processRequestSchema)(requestDataSchema, requestSchemaRecord, formDataSource, undefined, {
                                autoGenerateId: this_1.autoGenerateId,
                            });
                            // 记录表单数据key
                            if (formDataSchema) {
                                (_f = formDataSchema === null || formDataSchema === void 0 ? void 0 : formDataSchema.params) === null || _f === void 0 ? void 0 : _f.forEach(function (_a) {
                                    var keyName = _a.keyName;
                                    api_1.formDataKeyNameList.push(keyName);
                                    requestKeyNameMemo_1.push(keyName);
                                });
                            }
                            if ('parameters' in apiMap) {
                                var parameters = apiMap.parameters;
                                for (var j = 0; j < parameters.length; j++) {
                                    var parameter = parameters[j];
                                    // fix: 当为Object类型，属性为空，导致成为一个异常的对象
                                    if (((_h = (_g = parameter.name) === null || _g === void 0 ? void 0 : _g.trim) === null || _h === void 0 ? void 0 : _h.call(_g)) === '') {
                                        continue;
                                    }
                                    var keyName = (0, util_1.filterKeyName)(parameter.name);
                                    // 路径参数 | url 参数
                                    if (parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'formData') {
                                        if (requestKeyNameMemo_1.includes(keyName) &&
                                            api_1.pathParamKeyNameList.includes(keyName)) {
                                            continue;
                                        }
                                        requestKeyNameMemo_1.includes(keyName) && requestKeyNameMemo_1.push(keyName);
                                        var type = (0, helpers_1.transformType)(parameter.type, parameter === null || parameter === void 0 ? void 0 : parameter.format, 'string');
                                        var scm = (0, helpers_1.createSchema)(type, {
                                            id: this_1.generateId(),
                                            keyName: keyName,
                                        });
                                        var parserKeyName2SchemaRes = null;
                                        var parserKeyName2SchemaTarget = null;
                                        // 存在 Schema 的dot参数
                                        if (
                                        // fix: 2.0中array参数问题
                                        (parameter === null || parameter === void 0 ? void 0 : parameter.type) === 'array' ||
                                            ((0, util_1.checkType)(parameter.schema, 'Object') && (keyName.includes('.') || keyName.includes('[')))) {
                                            keyName = (0, util_1.filterDotKeyName)(keyName);
                                            var temp = (parameter === null || parameter === void 0 ? void 0 : parameter.type) === 'array' ? parameter : parameter.schema;
                                            scm = (0, util_1.parserSchema)(temp, undefined, keyName, undefined, {
                                                autoGenerateId: this_1.autoGenerateId
                                            });
                                        }
                                        else {
                                            // dot 参数
                                            parserKeyName2SchemaRes = new parser_key_name_2_schema_1.default(keyName, type).parse();
                                            if (parserKeyName2SchemaRes) {
                                                parserKeyName2SchemaWrap.push(parserKeyName2SchemaRes.wrapSchema);
                                                // fix: 当为路径参数时候，必填项
                                                if (parameter.in === 'path') {
                                                    parserKeyName2SchemaRes.wrapSchema.rules.required = true;
                                                }
                                                scm = parserKeyName2SchemaTarget = parserKeyName2SchemaRes.targetSchema;
                                                keyName = (0, util_1.filterKeyName)(parserKeyName2SchemaRes.wrapSchema.keyName);
                                            }
                                            else { // 普通schema对象
                                                // fix: url参数也是一个对象问题.
                                                if (parameter.schema) {
                                                    var parsedSchema = (0, util_1.parserSchema)(parameter.schema, undefined, keyName, undefined, {
                                                        autoGenerateId: this_1.autoGenerateId,
                                                    });
                                                    if (parsedSchema) {
                                                        scm = parsedSchema;
                                                    }
                                                }
                                            }
                                        }
                                        scm.id = this_1.generateId();
                                        if (parserKeyName2SchemaTarget == null) {
                                            scm.rules.required = parameter.in === 'path' ? true : (0, util_1.checkType)(parameter.required, 'Boolean') ? parameter.required : false;
                                        }
                                        else {
                                            scm.rules.required = (0, util_1.checkType)(parameter.required, 'Boolean') ? parameter.required : false;
                                        }
                                        scm.description = (0, util_1.filterDesc)(parameter.description);
                                        scm.label = scm.title ? scm.title : scm.description ? scm.description : '';
                                        // 路径参数
                                        if (parameter.in === 'path') {
                                            !api_1.pathParamKeyNameList.includes(keyName) && api_1.pathParamKeyNameList.push(keyName);
                                        } // URL参数
                                        else if (parameter.in === 'query') {
                                            !api_1.queryStringKeyNameList.includes(keyName) && api_1.queryStringKeyNameList.push(keyName);
                                        } // 表单参数（这个可能不是标准规范）
                                        else if (parameter.in === 'formData') {
                                            // fix: swagger2.0 文件类型识别失败问题
                                            scm.type = (parameter === null || parameter === void 0 ? void 0 : parameter.format) ? (0, helpers_1.transformType)(scm.type, parameter === null || parameter === void 0 ? void 0 : parameter.format, scm.type) : scm.type;
                                            !api_1.formDataKeyNameList.includes(keyName) && api_1.formDataKeyNameList.push(keyName);
                                        }
                                        // fix: dot参数属性不应该提取到根节点上的问题
                                        if (parserKeyName2SchemaTarget == null) {
                                            requestDataSchema.params.push(scm);
                                        }
                                    }
                                    else if (parameter.in === 'body') { // body 参数
                                        if (((_j = parameter.schema) === null || _j === void 0 ? void 0 : _j.type) === 'object' || ((_k = parameter.schema) === null || _k === void 0 ? void 0 : _k.type) === 'array') {
                                            requestExtraDataSchema = (0, util_1.processRequestSchema)(requestDataSchema, requestSchemaRecord, parameter.schema, requestKeyNameMemo_1, {
                                                autoGenerateId: this_1.autoGenerateId,
                                            });
                                            // 普通属性，合并平台属性，整理成一个对象
                                        }
                                        else if (((_l = parameter.schema) === null || _l === void 0 ? void 0 : _l.type) && (parameter === null || parameter === void 0 ? void 0 : parameter.name)) {
                                            var t = (0, helpers_1.transformType)(parameter.schema.type, (_m = parameter === null || parameter === void 0 ? void 0 : parameter.schema) === null || _m === void 0 ? void 0 : _m.format, 'string');
                                            var temp = (0, helpers_1.createSchema)(t, {
                                                id: this_1.generateId(),
                                                keyName: parameter === null || parameter === void 0 ? void 0 : parameter.name,
                                                title: (0, util_1.filterDesc)(parameter === null || parameter === void 0 ? void 0 : parameter.title),
                                                description: (0, util_1.filterDesc)(parameter === null || parameter === void 0 ? void 0 : parameter.description),
                                                type: t,
                                                examples: (_o = parameter.examples) !== null && _o !== void 0 ? _o : [],
                                                rules: {
                                                    required: !!(parameter === null || parameter === void 0 ? void 0 : parameter.required) || !!((_p = parameter.schema) === null || _p === void 0 ? void 0 : _p.required),
                                                }
                                            });
                                            temp.label = temp.title ? temp.title : temp.description ? temp.description : '';
                                            requestDataSchema.params.push(temp);
                                        }
                                    }
                                    else if (parameter.in === 'header' || parameter.in === 'cookie') {
                                        // header 和 cookie信息，暂无特殊处理
                                    }
                                }
                                // 合并 name[0].a.rule 属性。
                                parser_key_name_2_schema_1.default.appendSchemeList(parserKeyName2SchemaWrap, requestDataSchema, requestKeyNameMemo_1);
                            }
                            // URL query 参数，query参数必须包含key，不存在不兼容问题
                            (0, util_1.processRequestSchema)(requestDataSchema, requestSchemaRecord, (_s = (_r = (_q = apiMap.requestBody) === null || _q === void 0 ? void 0 : _q.content) === null || _r === void 0 ? void 0 : _r['application/x-www-form-urlencoded']) === null || _s === void 0 ? void 0 : _s.schema, requestKeyNameMemo_1, {
                                autoGenerateId: this_1.autoGenerateId,
                                callback: function (parsedSchema) {
                                    // 收集URL query 参数字段
                                    if (parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.params) {
                                        parsedSchema === null || parsedSchema === void 0 ? void 0 : parsedSchema.params.forEach(function (itm) { return (itm === null || itm === void 0 ? void 0 : itm.keyName) && api_1.queryStringKeyNameList.push(itm.keyName); });
                                    }
                                }
                            });
                            // 请求 Body 为 json参数
                            var requestSchemaSource = (_w = (_v = (_u = (_t = apiMap.requestBody) === null || _t === void 0 ? void 0 : _t.content) === null || _u === void 0 ? void 0 : _u['application/json']) === null || _v === void 0 ? void 0 : _v.schema) !== null && _w !== void 0 ? _w : (_z = (_y = (_x = apiMap.requestBody) === null || _x === void 0 ? void 0 : _x.content) === null || _y === void 0 ? void 0 : _y['text/json']) === null || _z === void 0 ? void 0 : _z.schema;
                            // fix: requestExtraDataSchema 参数丢失问题
                            if (requestSchemaSource) {
                                requestExtraDataSchema = (0, util_1.processRequestSchema)(requestDataSchema, requestSchemaRecord, requestSchemaSource, undefined, {
                                    autoGenerateId: this_1.autoGenerateId,
                                });
                            }
                            (0, util_1.processRequestSchemaPipeline)(api_1, requestDataSchema, requestExtraDataSchema, this_1);
                            /****************** 处理请求参数--结束 ******************/
                            /****************** 处理响应参数--开始 ******************/
                            var responsesSchemaSource = (_12 = (_7 = (_2 = (_1 = (_0 = apiMap.responses) === null || _0 === void 0 ? void 0 : _0['200']) === null || _1 === void 0 ? void 0 : _1.schema) !== null && _2 !== void 0 ? _2 : (_6 = (_5 = (_4 = (_3 = apiMap.responses) === null || _3 === void 0 ? void 0 : _3['200']) === null || _4 === void 0 ? void 0 : _4.content) === null || _5 === void 0 ? void 0 : _5['application/json']) === null || _6 === void 0 ? void 0 : _6.schema) !== null && _7 !== void 0 ? _7 : (_11 = (_10 = (_9 = (_8 = apiMap.responses) === null || _8 === void 0 ? void 0 : _8['200']) === null || _9 === void 0 ? void 0 : _9.content) === null || _10 === void 0 ? void 0 : _10['text/json']) === null || _11 === void 0 ? void 0 : _11.schema) !== null && _12 !== void 0 ? _12 : (_16 = (_15 = (_14 = (_13 = apiMap.responses) === null || _13 === void 0 ? void 0 : _13['200']) === null || _14 === void 0 ? void 0 : _14.content) === null || _15 === void 0 ? void 0 : _15['*/*']) === null || _16 === void 0 ? void 0 : _16.schema;
                            if ((0, validator_1.validateSchema)(responsesSchemaSource)) {
                                api_1.responseDataSchema = (0, util_1.parserSchema)(responsesSchemaSource, undefined, undefined, undefined, {
                                    autoGenerateId: this_1.autoGenerateId
                                });
                                if (((_17 = api_1.responseDataSchema) === null || _17 === void 0 ? void 0 : _17.type) === 'object') {
                                    api_1.responseDataSchema.keyName = '';
                                }
                            }
                            (0, util_1.processResponseSchemaPipeline)(api_1, this_1);
                            try {
                                /****************** 处理响应参数--结束 ******************/
                                // 将该API添加到所依赖的模块中
                                for (var _22 = (e_5 = void 0, __values(apiMap.tags)), _23 = _22.next(); !_23.done; _23 = _22.next()) {
                                    var tagName = _23.value;
                                    var recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(constant_1.UNKNOWN_GROUP_NAME);
                                    recordCategory && recordCategory.apiList.push(api_1);
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_23 && !_23.done && (_21 = _22.return)) _21.call(_22);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                        catch (e) {
                            console.log("".concat(method.toUpperCase(), " ").concat(path, " \u63A5\u53E3\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB @api-helper \u4F5C\u8005\u4FEE\u590D\u8BE5\u95EE\u9898\uFF0C\u6216\u63D0\u4EA4issue\uFF0Chttps://github.com/ztz2/api-helper/issues\n\n").concat(e));
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
                        var _20 = __read(categoryMap_1_1.value, 2), category = _20[1];
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
                    result.set(tag.name, (0, helpers_1.createCategory)({
                        id: this.generateId(),
                        name: tag.name,
                        description: (0, util_1.filterDesc)(tag === null || tag === void 0 ? void 0 : tag.description),
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
        result.set(constant_1.UNKNOWN_GROUP_NAME, (0, helpers_1.createCategory)({
            id: this.generateId(),
            name: constant_1.UNKNOWN_GROUP_NAME,
            description: constant_1.UNKNOWN_GROUP_DESC,
        }));
        return result;
    };
    ParserSwagger.prototype.generateId = function () {
        return this.autoGenerateId ? (0, util_1.randomId)() : '';
    };
    return ParserSwagger;
}());
exports.default = ParserSwagger;
