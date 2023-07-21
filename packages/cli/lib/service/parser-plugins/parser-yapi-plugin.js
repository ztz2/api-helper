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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const await_to_js_1 = __importDefault(require("await-to-js"));
const core_1 = require("@api-helper/core");
const log_1 = __importDefault(require("../../../lib/tools/log"));
const request_1 = __importDefault(require("../../../lib/tools/request"));
const util_1 = require("@api-helper/core/lib/utils/util");
const util_2 = require("../../../lib/tools/util");
const PROJECT_API = '/api/project/get';
const MENU_API = '/api/interface/getCatMenu';
const API_List = '/api/interface/list';
const API_DETAIL = '/api/interface/get';
class ParserYapiPlugin {
    constructor() {
        this.name = 'yapi';
    }
    run(documentServers, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            if (documentServers.length === 0) {
                return result;
            }
            const dsTasks = [];
            for (const documentServer of documentServers) {
                const errorServerText = `【${documentServer.url}】`;
                const requestConfig = (0, util_2.processRequestConfig)(documentServer);
                dsTasks.push((() => __awaiter(this, void 0, void 0, function* () {
                    // 获取项目基本信息
                    const projectInfo = yield fetchProjectInfo(documentServer).catch((e) => {
                        log_1.default.error('提示', `获取项目基本信息失败${(0, util_2.getErrorMessage)(e, ': ')}${errorServerText}`);
                        return Promise.reject(e);
                    });
                    const projectId = projectInfo._id;
                    // 获取所有分类
                    const categoryList = yield fetchMenuList(documentServer, { projectId }).catch((e) => {
                        log_1.default.error('提示', `获取菜单列表失败${(0, util_2.getErrorMessage)(e, ': ')}${errorServerText}`);
                        return Promise.reject(e);
                    });
                    // 获取所有接口
                    const apiList = yield fetchApiList(documentServer, { projectId }).catch((e) => {
                        log_1.default.error('提示', `获取接口列表数据失败${(0, util_2.getErrorMessage)(e, ': ')}${errorServerText}`);
                        return Promise.reject(e);
                    });
                    if (apiList.length === 0) {
                        return Promise.reject(`项目接口为空${errorServerText}`);
                    }
                    // 获取所有接口的详情
                    const tasks = [];
                    const errorApi = [];
                    for (const api of apiList) {
                        api.docURL = (0, util_1.mergeUrl)(requestConfig.origin, `/project/${projectId}/interface/api/${api._id}`);
                        tasks.push(fetchApiDetail(documentServer, { id: api._id }).then((res) => {
                            api.content = res;
                        }).catch((e) => {
                            errorApi.push([api, e]);
                            return Promise.reject(e);
                        }));
                    }
                    yield (0, await_to_js_1.default)(Promise.all(tasks));
                    if (errorApi.length === apiList.length) {
                        log_1.default.verbose('error', `接口详情获取失败${errorServerText}`);
                        return Promise.reject(`接口详情获取失败${errorServerText}`);
                    }
                    const parsedDocumentList = yield new core_1.ParserYapi(Object.assign(Object.assign({}, options), { apiList, projectInfo: projectInfo, categoryList: categoryList })).parser();
                    if (parsedDocumentList.length === 0) {
                        log_1.default.error('提示', `${documentServer.url} 解析yapi配置失败${errorServerText}`);
                    }
                    result.push({
                        documentServer,
                        parsedDocumentList
                    });
                }))());
            }
            yield (0, await_to_js_1.default)(Promise.all(dsTasks));
            return result;
        });
    }
}
exports.default = ParserYapiPlugin;
function fetchProjectInfo(documentServer) {
    return (0, request_1.default)((0, util_2.processRequestConfig)(documentServer, { path: PROJECT_API, dataKey: 'data' }));
}
function fetchMenuList(documentServer, params) {
    return (0, request_1.default)((0, util_2.processRequestConfig)(documentServer, {
        path: MENU_API,
        dataKey: 'data',
        queryParams: {
            project_id: params.projectId
        },
    }));
}
function fetchApiList(documentServer, params) {
    return (0, request_1.default)((0, util_2.processRequestConfig)(documentServer, {
        path: API_List,
        dataKey: 'data',
        queryParams: {
            page: 1,
            limit: 10000,
            project_id: params.projectId,
        },
    })).then((res) => {
        var _a, _b;
        return (_b = (_a = res) === null || _a === void 0 ? void 0 : _a.list) !== null && _b !== void 0 ? _b : [];
    });
}
function fetchApiDetail(documentServer, params) {
    return (0, request_1.default)((0, util_2.processRequestConfig)(documentServer, {
        path: API_DETAIL,
        dataKey: 'data',
        queryParams: {
            id: params.id,
        },
    }));
}
