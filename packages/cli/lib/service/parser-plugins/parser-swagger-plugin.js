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
const url_parse_1 = __importDefault(require("url-parse"));
const fs_extra_1 = require("fs-extra");
const core_1 = require("@api-helper/core");
const util_1 = require("@api-helper/core/lib/utils/util");
const validator_1 = require("@api-helper/core/lib/utils/validator");
const util_2 = require("../../../lib/tools/util");
const log_1 = __importDefault(require("../../../lib/tools/log"));
const request_1 = __importDefault(require("../../../lib/tools/request"));
class ParserSwaggerPlugin {
    constructor() {
        this.name = 'swagger';
    }
    run(documentServers, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            if (documentServers.length === 0) {
                return result;
            }
            const tasks = [];
            for (const documentServer of documentServers) {
                const serverUrlText = `【${documentServer.url}】`;
                tasks.push((() => __awaiter(this, void 0, void 0, function* () {
                    const openAPIDocumentList = yield getDocument(documentServer);
                    if (openAPIDocumentList.length === 0) {
                        log_1.default.error('提示', `没有获取到swagger配置文档${serverUrlText}`);
                        return;
                    }
                    const parsedDocumentList = yield new core_1.ParserSwagger(options).parser(openAPIDocumentList);
                    if (parsedDocumentList.length === 0) {
                        log_1.default.error('提示', `解析swagger配置失败${serverUrlText}`);
                        return;
                    }
                    result.push({
                        documentServer,
                        parsedDocumentList
                    });
                }))());
            }
            yield (0, await_to_js_1.default)(Promise.all(tasks));
            return result;
        });
    }
}
exports.default = ParserSwaggerPlugin;
function getDocument(documentServer) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        const requestConfig = (0, util_2.processRequestConfig)(documentServer);
        const openAPIDocumentList = [];
        const isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
        const serverUrlText = isHttp ? `【${documentServer.url}】` : '';
        // 本地文件，尝试读取本地文件
        if (!isHttp) {
            let json;
            try {
                json = (_a = (0, fs_extra_1.readJsonSync)(documentServer.url)) !== null && _a !== void 0 ? _a : [];
            }
            catch (e) {
                const errorText = `swagger文件读取失败${(0, util_1.getErrorMessage)(e, ': ')}${serverUrlText}`;
                log_1.default.error('提示', errorText);
                return Promise.reject(errorText);
            }
            if (Array.isArray(json)) {
                [].push.apply(openAPIDocumentList, json);
            }
            else if ((0, util_2.checkType)(json, 'Object')) {
                openAPIDocumentList.push(json);
            }
            return openAPIDocumentList;
        }
        // 直接根据资源地址获取配置
        try {
            const openAPIDocument = yield (0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { url: documentServer.url }));
            if ((0, validator_1.validateOpenAPIDocument)(openAPIDocument)) {
                openAPIDocumentList.push(openAPIDocument);
                return openAPIDocumentList;
            }
        }
        catch (_h) { }
        const { origin } = requestConfig;
        /* swagger-ui v2处理 */
        // 获取域名，拼接v2版本的默认文档路径获取配置
        try {
            const openAPIDocument = yield (0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { url: (0, util_1.mergeUrl)(origin, '/v2/api-docs', requestConfig.qs) }));
            if (openAPIDocument && (0, validator_1.validateOpenAPIDocument)(openAPIDocument)) {
                openAPIDocumentList.push(openAPIDocument);
                return openAPIDocumentList;
            }
        }
        catch (_j) { }
        // 根据 swagger-resources 获取全部。
        const [, swagger2Resources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { url: (0, util_1.mergeUrl)(origin, '/swagger-resources', requestConfig.qs) })));
        if (Array.isArray(swagger2Resources)) {
            const tasks2 = [];
            for (const sr of swagger2Resources) {
                tasks2.push((0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { url: (0, util_1.mergeUrl)(origin, sr.url, requestConfig.qs) })).then((openapiDocument) => {
                    if ((0, validator_1.validateOpenAPIDocument)(openapiDocument)) {
                        openAPIDocumentList.push(openapiDocument);
                    }
                })));
            }
            yield (0, await_to_js_1.default)(Promise.all(tasks2));
        }
        if (openAPIDocumentList.length > 0) {
            return openAPIDocumentList;
        }
        /* swagger-ui v3处理 */
        const urlInfo = (isHttp ? (0, url_parse_1.default)(documentServer.url) : {});
        const serverPath = ((_c = (_b = urlInfo === null || urlInfo === void 0 ? void 0 : urlInfo.pathname) === null || _b === void 0 ? void 0 : _b.split('/')) !== null && _c !== void 0 ? _c : []).filter(Boolean);
        const serverHash = ((_f = (_e = (_d = urlInfo.hash) === null || _d === void 0 ? void 0 : _d.slice(1)) === null || _e === void 0 ? void 0 : _e.split('/')) !== null && _f !== void 0 ? _f : []).filter(Boolean);
        const selectDoc = decodeURIComponent((_g = serverHash[0]) !== null && _g !== void 0 ? _g : '');
        if (serverPath[serverPath.length - 1] === 'doc.html' || serverPath[serverPath.length - 1] === 'swagger-ui.html') {
            serverPath.pop();
        }
        const resourcesPath = [...serverPath, 'data', 'openapi.json'];
        const serverUrl = (0, util_1.mergeUrl)(origin, '/', resourcesPath.join('/'), requestConfig.qs);
        const [, swagger3Resources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { url: serverUrl })));
        if (Array.isArray(swagger3Resources)) {
            const tasks3 = [];
            let swagger3ResourcesFilter = swagger3Resources.filter((itm) => selectDoc && (itm === null || itm === void 0 ? void 0 : itm.name) === selectDoc);
            if (swagger3ResourcesFilter.length === 0) {
                swagger3ResourcesFilter = swagger3Resources;
            }
            for (const sr of swagger3ResourcesFilter) {
                tasks3.push((0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { url: (0, util_1.mergeUrl)(origin, '/', serverPath.join('/'), sr.url, requestConfig.qs) })).then((openapiDocument) => {
                    if ((0, validator_1.validateOpenAPIDocument)(openapiDocument)) {
                        openAPIDocumentList.push(openapiDocument);
                    }
                })));
            }
            yield (0, await_to_js_1.default)(Promise.all(tasks3));
        }
        return openAPIDocumentList;
    });
}
