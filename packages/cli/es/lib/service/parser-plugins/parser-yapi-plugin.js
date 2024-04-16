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
import to from 'await-to-js';
import { ParserYapi } from '@api-helper/core';
import { mergeUrl, getErrorMessage, } from '@api-helper/core/lib/utils/util';
import logger from '../../../lib/tools/logger';
import request from '../../../lib/tools/request';
import { processRequestConfig } from '../../../lib/tools/util';
var PROJECT_API = '/api/project/get';
var MENU_API = '/api/interface/getCatMenu';
var API_List = '/api/interface/list';
var API_DETAIL = '/api/interface/get';
var ParserYapiPlugin = /** @class */ (function () {
    function ParserYapiPlugin() {
        this.name = 'yapi';
    }
    ParserYapiPlugin.prototype.run = function (documentServers, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var result, dsTasks, _loop_1, documentServers_1, documentServers_1_1, documentServer;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = [];
                        if (documentServers.length === 0) {
                            return [2 /*return*/, result];
                        }
                        dsTasks = [];
                        _loop_1 = function (documentServer) {
                            var errorServerText = "\u3010".concat(documentServer.url, "\u3011");
                            var requestConfig = processRequestConfig(documentServer);
                            dsTasks.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var projectInfo, projectId, categoryList, apiList, tasks, errorApi, _loop_2, apiList_1, apiList_1_1, api, parsedDocumentList;
                                var e_2, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, fetchProjectInfo(documentServer).catch(function (e) {
                                                logger.error("\u83B7\u53D6\u9879\u76EE\u57FA\u672C\u4FE1\u606F\u5931\u8D25".concat(getErrorMessage(e, ': ')).concat(errorServerText));
                                                return Promise.reject(e);
                                            })];
                                        case 1:
                                            projectInfo = _b.sent();
                                            projectId = projectInfo._id;
                                            return [4 /*yield*/, fetchMenuList(documentServer, { projectId: projectId }).catch(function (e) {
                                                    logger.error("\u83B7\u53D6\u83DC\u5355\u5217\u8868\u5931\u8D25".concat(getErrorMessage(e, ': ')).concat(errorServerText));
                                                    return Promise.reject(e);
                                                })];
                                        case 2:
                                            categoryList = _b.sent();
                                            return [4 /*yield*/, fetchApiList(documentServer, { projectId: projectId }).catch(function (e) {
                                                    logger.error("\u83B7\u53D6\u63A5\u53E3\u5217\u8868\u6570\u636E\u5931\u8D25".concat(getErrorMessage(e, ': ')).concat(errorServerText));
                                                    return Promise.reject(e);
                                                })];
                                        case 3:
                                            apiList = _b.sent();
                                            if (apiList.length === 0) {
                                                return [2 /*return*/, Promise.reject("\u9879\u76EE\u63A5\u53E3\u4E3A\u7A7A".concat(errorServerText))];
                                            }
                                            tasks = [];
                                            errorApi = [];
                                            _loop_2 = function (api) {
                                                api.docURL = mergeUrl(requestConfig.origin, "/project/".concat(projectId, "/interface/api/").concat(api._id));
                                                tasks.push(fetchApiDetail(documentServer, { id: api._id }).then(function (res) {
                                                    api.content = res;
                                                }).catch(function (e) {
                                                    errorApi.push([api, e]);
                                                    return Promise.reject(e);
                                                }));
                                            };
                                            try {
                                                for (apiList_1 = __values(apiList), apiList_1_1 = apiList_1.next(); !apiList_1_1.done; apiList_1_1 = apiList_1.next()) {
                                                    api = apiList_1_1.value;
                                                    _loop_2(api);
                                                }
                                            }
                                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                            finally {
                                                try {
                                                    if (apiList_1_1 && !apiList_1_1.done && (_a = apiList_1.return)) _a.call(apiList_1);
                                                }
                                                finally { if (e_2) throw e_2.error; }
                                            }
                                            return [4 /*yield*/, to(Promise.all(tasks))];
                                        case 4:
                                            _b.sent();
                                            if (errorApi.length === apiList.length) {
                                                logger.warn("\u63A5\u53E3\u8BE6\u60C5\u83B7\u53D6\u5931\u8D25".concat(errorServerText));
                                                return [2 /*return*/, Promise.reject("\u63A5\u53E3\u8BE6\u60C5\u83B7\u53D6\u5931\u8D25".concat(errorServerText))];
                                            }
                                            return [4 /*yield*/, new ParserYapi(__assign(__assign({}, options), { apiList: apiList, projectInfo: projectInfo, categoryList: categoryList })).parser()];
                                        case 5:
                                            parsedDocumentList = _b.sent();
                                            if (parsedDocumentList.length === 0) {
                                                logger.error("".concat(documentServer.url, " \u89E3\u6790yapi\u914D\u7F6E\u5931\u8D25").concat(errorServerText));
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
                        return [4 /*yield*/, to(Promise.all(dsTasks))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ParserYapiPlugin;
}());
export default ParserYapiPlugin;
function fetchProjectInfo(documentServer) {
    var conf = processRequestConfig(documentServer, { path: PROJECT_API, dataKey: 'data' });
    return request(conf).then(function (res) {
        // @ts-ignore
        res.documentServerUrl = documentServer.url;
        return res;
    });
}
function fetchMenuList(documentServer, params) {
    return request(processRequestConfig(documentServer, {
        path: MENU_API,
        dataKey: 'data',
        queryParams: {
            project_id: params.projectId
        },
    }));
}
function fetchApiList(documentServer, params) {
    return request(processRequestConfig(documentServer, {
        path: API_List,
        dataKey: 'data',
        queryParams: {
            page: 1,
            limit: 10000,
            project_id: params.projectId,
        },
    })).then(function (res) {
        var _a, _b;
        return (_b = (_a = res) === null || _a === void 0 ? void 0 : _a.list) !== null && _b !== void 0 ? _b : [];
    });
}
function fetchApiDetail(documentServer, params) {
    return request(processRequestConfig(documentServer, {
        path: API_DETAIL,
        dataKey: 'data',
        queryParams: {
            id: params.id,
        },
    }));
}
