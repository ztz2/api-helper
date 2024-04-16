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
import path from 'path';
import to from 'await-to-js';
import { readJson } from 'fs-extra';
import { ParserSwagger } from '@api-helper/core';
import { mergeUrl, getErrorMessage } from '@api-helper/core/lib/utils/util';
import { validateOpenAPIDocument } from '@api-helper/core/lib/utils/validator';
import { processRequestConfig, } from '../../../lib/tools/util';
import logger from '../../../lib/tools/logger';
import request from '../../../lib/tools/request';
import * as process from 'process';
var ParserSwaggerPlugin = /** @class */ (function () {
    function ParserSwaggerPlugin() {
        this.name = 'swagger';
    }
    ParserSwaggerPlugin.prototype.run = function (documentServers, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var result, tasks, _loop_1, documentServers_1, documentServers_1_1, documentServer;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = [];
                        if (documentServers.length === 0) {
                            return [2 /*return*/, result];
                        }
                        tasks = [];
                        _loop_1 = function (documentServer) {
                            var serverUrlText = "\u3010".concat(documentServer.url, "\u3011");
                            tasks.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var openAPIDocumentList, parsedDocumentList;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, getDocument(documentServer)];
                                        case 1:
                                            openAPIDocumentList = _a.sent();
                                            if (openAPIDocumentList.length === 0) {
                                                logger.error("\u6CA1\u6709\u83B7\u53D6\u5230swagger\u914D\u7F6E\u6587\u6863".concat(serverUrlText));
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, new ParserSwagger(options).parser(openAPIDocumentList)];
                                        case 2:
                                            parsedDocumentList = _a.sent();
                                            if (parsedDocumentList.length === 0) {
                                                logger.error("\u89E3\u6790swagger\u914D\u7F6E\u5931\u8D25".concat(serverUrlText));
                                                return [2 /*return*/];
                                            }
                                            result.push({
                                                documentServer: documentServer,
                                                parsedDocumentList: parsedDocumentList
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); })());
                        };
                        try {
                            for (documentServers_1 = __values(documentServers), documentServers_1_1 = documentServers_1.next(); !documentServers_1_1.done; documentServers_1_1 = documentServers_1.next()) {
                                documentServer = documentServers_1_1.value;
                                _loop_1(documentServer);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (documentServers_1_1 && !documentServers_1_1.done && (_a = documentServers_1.return)) _a.call(documentServers_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, to(Promise.all(tasks))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ParserSwaggerPlugin;
}());
export default ParserSwaggerPlugin;
function getDocument(documentServer) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var requestConfig, openAPIDocumentList, isHttp, serverUrlText, filepath, _c, e, json, errorText, _d, openAPIDocument, origin, _e, swaggerResources, tasks2, _loop_2, swaggerResources_1, swaggerResources_1_1, sr;
        var _f, _g, e_2, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    requestConfig = processRequestConfig(documentServer);
                    openAPIDocumentList = [];
                    isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
                    serverUrlText = isHttp ? "\u3010".concat(documentServer.url, "\u3011") : '';
                    if (!!isHttp) return [3 /*break*/, 2];
                    filepath = path.isAbsolute(documentServer.url) ? documentServer.url : path.join(process.cwd(), documentServer.url);
                    return [4 /*yield*/, to(readJson(filepath))];
                case 1:
                    _c = __read.apply(void 0, [_j.sent(), 2]), e = _c[0], json = _c[1];
                    if (e) {
                        errorText = "swagger\u6587\u4EF6\u8BFB\u53D6\u5931\u8D25".concat(getErrorMessage(e, ': ')).concat(serverUrlText);
                        logger.error(errorText);
                        return [2 /*return*/, Promise.reject(errorText)];
                    }
                    json = (Array.isArray(json) ? json : [json]);
                    json.forEach(function (itm) {
                        itm.documentServerUrl = documentServer.url;
                    });
                    [].push.apply(openAPIDocumentList, json);
                    return [2 /*return*/, openAPIDocumentList];
                case 2: return [4 /*yield*/, to(request(__assign(__assign({}, requestConfig), { method: 'get', url: documentServer.url })))];
                case 3:
                    _d = __read.apply(void 0, [_j.sent(), 2]), openAPIDocument = _d[1];
                    if (validateOpenAPIDocument(openAPIDocument)) {
                        openAPIDocument.documentServerUrl = documentServer.url;
                        openAPIDocumentList.push(openAPIDocument);
                        return [2 /*return*/, openAPIDocumentList];
                    }
                    origin = requestConfig.origin;
                    return [4 /*yield*/, to(request(__assign(__assign({}, requestConfig), { method: 'get', url: mergeUrl(origin, '/swagger-resources', requestConfig.qs) })))];
                case 4:
                    _e = __read.apply(void 0, [_j.sent(), 2]), swaggerResources = _e[1];
                    if (!!((_a = swaggerResources) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, to(request(__assign(__assign({}, requestConfig), { method: 'get', url: mergeUrl(origin, '/data/openapi.json', requestConfig.qs) })))];
                case 5:
                    _f = __read.apply(void 0, [_j.sent(), 2]), swaggerResources = _f[1];
                    _j.label = 6;
                case 6:
                    if (!!((_b = swaggerResources) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 8];
                    return [4 /*yield*/, to(request(__assign(__assign({}, requestConfig), { method: 'get', url: mergeUrl(origin, '/openapi.json', requestConfig.qs) })))];
                case 7:
                    _g = __read.apply(void 0, [_j.sent(), 2]), swaggerResources = _g[1];
                    _j.label = 8;
                case 8:
                    if (!Array.isArray(swaggerResources)) return [3 /*break*/, 10];
                    tasks2 = [];
                    _loop_2 = function (sr) {
                        var documentServerUrl = mergeUrl(origin, sr.url, requestConfig.qs);
                        tasks2.push(to(request(__assign(__assign({}, requestConfig), { method: 'get', url: documentServerUrl })).then(function (openapiDocument) {
                            if (validateOpenAPIDocument(openapiDocument)) {
                                openapiDocument.documentServerUrl = documentServerUrl;
                                openAPIDocumentList.push(openapiDocument);
                            }
                        })));
                    };
                    try {
                        for (swaggerResources_1 = __values(swaggerResources), swaggerResources_1_1 = swaggerResources_1.next(); !swaggerResources_1_1.done; swaggerResources_1_1 = swaggerResources_1.next()) {
                            sr = swaggerResources_1_1.value;
                            _loop_2(sr);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (swaggerResources_1_1 && !swaggerResources_1_1.done && (_h = swaggerResources_1.return)) _h.call(swaggerResources_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [4 /*yield*/, to(Promise.all(tasks2))];
                case 9:
                    _j.sent();
                    _j.label = 10;
                case 10: return [2 /*return*/, openAPIDocumentList];
            }
        });
    });
}
