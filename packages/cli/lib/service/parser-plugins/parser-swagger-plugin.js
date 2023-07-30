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
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const requestConfig = (0, util_2.processRequestConfig)(documentServer);
        const openAPIDocumentList = [];
        const isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
        const serverUrlText = isHttp ? `【${documentServer.url}】` : '';
        // 本地文件，尝试读取本地文件
        if (!isHttp) {
            const [e, json] = yield (0, await_to_js_1.default)(yield (0, fs_extra_1.readJson)(documentServer.url));
            if (e) {
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
        const [, openAPIDocument] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: documentServer.url })));
        if ((0, validator_1.validateOpenAPIDocument)(openAPIDocument)) {
            openAPIDocumentList.push(openAPIDocument);
            return openAPIDocumentList;
        }
        const { origin } = requestConfig;
        // OpenAPI 2.0
        let [, swaggerResources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: (0, util_1.mergeUrl)(origin, '/swagger-resources', requestConfig.qs) })));
        // OpenAPI 3.0
        if (!((_a = swaggerResources) === null || _a === void 0 ? void 0 : _a.length)) {
            [, swaggerResources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: (0, util_1.mergeUrl)(origin, '/data/openapi.json', requestConfig.qs) })));
        }
        // OpenAPI 3.0
        if (!((_b = swaggerResources) === null || _b === void 0 ? void 0 : _b.length)) {
            [, swaggerResources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: (0, util_1.mergeUrl)(origin, '/openapi.json', requestConfig.qs) })));
        }
        if (Array.isArray(swaggerResources)) {
            const tasks2 = [];
            for (const sr of swaggerResources) {
                tasks2.push((0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: (0, util_1.mergeUrl)(origin, sr.url, requestConfig.qs) })).then((openapiDocument) => {
                    if ((0, validator_1.validateOpenAPIDocument)(openapiDocument)) {
                        openAPIDocumentList.push(openapiDocument);
                    }
                })));
            }
            yield (0, await_to_js_1.default)(Promise.all(tasks2));
        }
        return openAPIDocumentList;
    });
}
