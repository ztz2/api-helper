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
import { isHttp, randomId, mergeUrl, filterDesc, parserSchema, filterKeyName, processRequestSchema, processRequestSchemaPipeline, processResponseSchemaPipeline, } from '../utils/util';
import { UNKNOWN_GROUP_DESC, UNKNOWN_GROUP_NAME, } from '../constant';
import { validateSchema } from '../utils/validator';
import { createApi, createCategory, createDocument, createSchema, transformType, } from '../helpers';
import ParserKeyName2Schema from './parser-key-name-2-schema';
var ParserYapi = /** @class */ (function () {
    function ParserYapi(params) {
        var _a, _b;
        this.autoGenerateId = true;
        this.requiredRequestField = params.requiredRequestField;
        this.requiredResponseField = (_a = params.requiredResponseField) !== null && _a !== void 0 ? _a : true;
        this.projectInfo = params.projectInfo;
        this.categoryList = params.categoryList;
        this.apiList = params.apiList;
        this.autoGenerateId = (_b = params.autoGenerateId) !== null && _b !== void 0 ? _b : true;
    }
    ParserYapi.prototype.parser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                project = this.parserProject();
                project.categoryList = this.parserApiList(project, this.parserCategoryList());
                return [2 /*return*/, [project]];
            });
        });
    };
    ParserYapi.prototype.parserProject = function () {
        var _a;
        var title = filterDesc(this.projectInfo.name);
        return createDocument({
            id: this.generateId(),
            title: title ? title : '接口文档',
            description: filterDesc(this.projectInfo.desc),
            version: 'last',
            documentVersion: '2.0',
            documentServerUrl: (_a = this.projectInfo.documentServerUrl) !== null && _a !== void 0 ? _a : '',
            basePath: this.projectInfo.basepath || '/',
        });
    };
    ParserYapi.prototype.parserCategoryList = function () {
        var _this = this;
        var result = [];
        this.categoryList.forEach(function (category) {
            result.push(createCategory({
                id: _this.generateId(),
                name: category.name,
                description: filterDesc(category === null || category === void 0 ? void 0 : category.desc),
            }));
        });
        result.push(createCategory({
            id: this.generateId(),
            name: UNKNOWN_GROUP_NAME,
            description: UNKNOWN_GROUP_DESC,
        }));
        return result;
    };
    ParserYapi.prototype.parserApiList = function (project, categoryList) {
        var _this = this;
        var categoryMap = new Map;
        categoryList.forEach(function (category) {
            categoryMap.set(category.name, category);
        });
        this.apiList.forEach(function (apiMap) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
            var _e, _f, _g, _h;
            var apiContent = apiMap.content;
            // 没有详情内容，不做任何处理
            if (!apiContent) {
                return;
            }
            var tag = apiMap.tag;
            var method = apiMap.method.toLowerCase();
            var api = createApi({
                method: method,
                id: _this.generateId(),
                title: filterDesc(apiMap.title),
                description: filterDesc(apiMap.markdown),
                path: mergeUrl(isHttp(project.basePath) ? '' : project.basePath, apiMap.path),
                docURL: (_e = apiMap.docURL) !== null && _e !== void 0 ? _e : '',
            });
            var headerSchema = createSchema('object');
            (_f = apiContent === null || apiContent === void 0 ? void 0 : apiContent.req_headers) === null || _f === void 0 ? void 0 : _f.forEach(function (item) {
                var _a;
                if (!(item === null || item === void 0 ? void 0 : item.value)) {
                    return;
                }
                switch (item.value) {
                    // 请求数据类型
                    case 'Content-Type': {
                        api.requestContentType = [item.value];
                        break;
                    }
                    // 其他请求头信息
                    default: {
                        headerSchema.params.push(createSchema('string', {
                            keyName: item.value,
                            title: (_a = filterDesc(item.desc)) !== null && _a !== void 0 ? _a : '',
                            rules: {
                                required: ['1', 1].includes(item.required),
                            }
                        }));
                    }
                }
            });
            if (headerSchema.params.length) {
                api.headers = headerSchema;
            }
            // 响应数据类型
            if (apiContent === null || apiContent === void 0 ? void 0 : apiContent.res_body_type) {
                api.responseContentType = [apiContent === null || apiContent === void 0 ? void 0 : apiContent.res_body_type];
            }
            try {
                api.label = api.title || api.description || '';
                // API content-type，暂无特殊处理
                // switch (apiMap.req_body_type) {
                //   case 'form':
                //   case 'file':
                //     // ['multipart/form-data']; //form data required
                //     break;
                //   case 'json':
                //     // ['application/json'];
                //     break;
                //   case 'raw':
                //     //  ['text/plain'];
                //     break;
                //   default:
                //     break;
                // }
                // header 和 cookie信息，暂无特殊处理
                // const req_headers = apiContent.req_headers;
                // Headers parameters
                // for (const p of req_headers) {
                //   // swagger has consumes proprety, so skip proprety 'Content-Type'
                //   if (p.name === 'Content-Type') {
                //     continue;
                //   }
                //   paramArray.push({
                //     name: p.name,
                //     in: 'header',
                //     description: `${p.name} (Only:${p.value})`,
                //     required: Number(p.required) === 1,
                //     type: 'string', //always be type string
                //     default: p.value
                //   });
                // }
                /****************** 请求参数处理-开始 ******************/
                var requestDataSchema = createSchema('object', {
                    id: _this.generateId(),
                });
                var requestExtraDataSchema = null;
                // fix: 重复项问题
                var requestSchemaRecord = [];
                var parserKeyName2SchemaWrap = [];
                var requestKeyNameMemo = [];
                // 路径参数
                var reqParams = apiContent.req_params;
                try {
                    for (var reqParams_1 = __values(reqParams), reqParams_1_1 = reqParams_1.next(); !reqParams_1_1.done; reqParams_1_1 = reqParams_1.next()) {
                        var p = reqParams_1_1.value;
                        var keyName = filterKeyName(p.name);
                        // 参数字段没有，跳过该字段
                        if (!keyName || requestKeyNameMemo.includes(keyName)) {
                            continue;
                        }
                        // 字段
                        var scm = createSchema('string', {
                            id: _this.generateId(),
                            description: filterDesc(p.desc),
                            keyName: keyName,
                            rules: {
                                required: true
                            }
                        });
                        scm.label = scm.title ? scm.title : scm.description ? scm.description : '';
                        api.pathParamKeyNameList.push(keyName);
                        requestKeyNameMemo.push(keyName);
                        requestDataSchema.params.push(scm);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (reqParams_1_1 && !reqParams_1_1.done && (_a = reqParams_1.return)) _a.call(reqParams_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // URL Query 参数
                var reqQuery = apiContent.req_query;
                try {
                    for (var reqQuery_1 = __values(reqQuery), reqQuery_1_1 = reqQuery_1.next(); !reqQuery_1_1.done; reqQuery_1_1 = reqQuery_1.next()) {
                        var p = reqQuery_1_1.value;
                        var keyName = filterKeyName(p.name);
                        // 参数字段没有，跳过该字段
                        if (!keyName || requestKeyNameMemo.includes(keyName)) {
                            continue;
                        }
                        requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);
                        // 字段
                        var scm = null;
                        var parserKeyName2SchemaRes = new ParserKeyName2Schema(p.name, 'string').parse();
                        if (parserKeyName2SchemaRes) {
                            parserKeyName2SchemaWrap.push(parserKeyName2SchemaRes.wrapSchema);
                            scm = parserKeyName2SchemaRes.targetSchema;
                            keyName = filterKeyName(parserKeyName2SchemaRes.wrapSchema.keyName);
                        }
                        else {
                            scm = createSchema('string', {
                                id: _this.generateId(),
                                description: filterDesc(p.desc),
                                keyName: keyName,
                                rules: {
                                    required: Number(p.required) === 1
                                }
                            });
                        }
                        scm.label = scm.title ? scm.title : scm.description ? scm.description : '';
                        !api.queryStringKeyNameList.includes(keyName) && api.queryStringKeyNameList.push(keyName);
                        if (!parserKeyName2SchemaRes) {
                            requestDataSchema.params.push(scm);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (reqQuery_1_1 && !reqQuery_1_1.done && (_b = reqQuery_1.return)) _b.call(reqQuery_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                // 合并 name[0].a.rule 属性。
                ParserKeyName2Schema.appendSchemeList(parserKeyName2SchemaWrap, requestDataSchema, requestKeyNameMemo);
                // Body 参数
                var reqBodyType = apiContent.req_body_type;
                switch (reqBodyType) {
                    case 'form': {
                        try {
                            // Form Data数据
                            for (var _j = __values(apiContent.req_body_form), _k = _j.next(); !_k.done; _k = _j.next()) {
                                var p = _k.value;
                                var keyName = filterKeyName(p.name);
                                // 参数字段没有，跳过该字段
                                if (!keyName || requestKeyNameMemo.includes(keyName)) {
                                    continue;
                                }
                                // 字段
                                var scm = createSchema('string', {
                                    id: _this.generateId(),
                                    description: filterDesc(p.desc),
                                    keyName: keyName,
                                    type: 'string',
                                    rules: {
                                        required: Number(p.required) === 1
                                    },
                                    rawType: p.type,
                                    format: (_g = p === null || p === void 0 ? void 0 : p.format) !== null && _g !== void 0 ? _g : '',
                                });
                                scm.type = transformType(p.type, p === null || p === void 0 ? void 0 : p.format, 'string');
                                scm.label = scm.title ? scm.title : scm.description ? scm.description : '';
                                api.formDataKeyNameList.push(keyName);
                                requestKeyNameMemo.push(keyName);
                                requestDataSchema.params.push(scm);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        break;
                    }
                    case 'json': {
                        if (apiContent.req_body_other) {
                            try {
                                var jsonParam = JSON.parse(apiContent.req_body_other);
                                if (jsonParam) {
                                    requestExtraDataSchema = processRequestSchema(requestDataSchema, requestSchemaRecord, jsonParam, requestKeyNameMemo, {
                                        autoGenerateId: _this.autoGenerateId
                                    });
                                }
                            }
                            finally { }
                        }
                        break;
                    }
                    // formData
                    case 'file': {
                        var keyName = filterKeyName('file');
                        // 参数字段没有，跳过该字段
                        if (requestKeyNameMemo.includes(keyName)) {
                            break;
                        }
                        // 字段
                        var scm = createSchema('File', {
                            id: _this.generateId(),
                            description: filterDesc(apiContent.req_body_other),
                            keyName: keyName,
                        });
                        scm.label = scm.title ? scm.title : scm.description ? scm.description : '';
                        api.formDataKeyNameList.push(keyName);
                        requestKeyNameMemo.push(keyName);
                        requestDataSchema.params.push(scm);
                        break;
                    }
                }
                processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchema, _this);
                /****************** 请求参数处理-结束 ******************/
                /****************** 响应参数处理-结束 ******************/
                try {
                    if (apiContent.res_body_type === 'json' && apiContent.res_body) {
                        var responsesSchemaSource = JSON.parse(apiContent.res_body);
                        if (validateSchema(responsesSchemaSource)) {
                            api.responseDataSchema = parserSchema(responsesSchemaSource, undefined, undefined, undefined, {
                                autoGenerateId: _this.autoGenerateId
                            });
                            if (((_h = api.responseDataSchema) === null || _h === void 0 ? void 0 : _h.type) === 'object') {
                                api.responseDataSchema.keyName = '';
                            }
                        }
                    }
                }
                finally { }
                processResponseSchemaPipeline(api, _this);
                try {
                    /****************** 响应参数处理-结束 ******************/
                    // 将该API添加到所依赖的模块中
                    for (var tag_1 = __values(tag), tag_1_1 = tag_1.next(); !tag_1_1.done; tag_1_1 = tag_1.next()) {
                        var tagName = tag_1_1.value;
                        var recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(UNKNOWN_GROUP_NAME);
                        recordCategory && recordCategory.apiList.push(api);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (tag_1_1 && !tag_1_1.done && (_d = tag_1.return)) _d.call(tag_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            catch (e) {
                console.log("".concat(method.toUpperCase(), " ").concat(api.path, " \u63A5\u53E3\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB @api-helper \u4F5C\u8005\u4FEE\u590D\u8BE5\u95EE\u9898\uFF0C\u6216\u63D0\u4EA4issue\uFF0Chttps://github.com/ztz2/api-helper/issues\n\n").concat(e));
            }
        });
        return categoryList;
    };
    ParserYapi.prototype.generateId = function () {
        return this.autoGenerateId ? randomId() : '';
    };
    return ParserYapi;
}());
export default ParserYapi;
