"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const await_to_js_1 = __importDefault(require("await-to-js"));
const fs_extra_1 = require("fs-extra");
const core_1 = require("@api-helper/core");
const util_1 = require("@api-helper/core/lib/utils/util");
const validator_1 = require("@api-helper/core/lib/utils/validator");
const util_2 = require("../../../lib/tools/util");
const logger_1 = __importDefault(require("../../../lib/tools/logger"));
const request_1 = __importDefault(require("../../../lib/tools/request"));
const process = __importStar(require("process"));
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
                        logger_1.default.error(`没有获取到swagger配置文档${serverUrlText}`);
                        return;
                    }
                    const parsedDocumentList = yield new core_1.ParserSwagger(options).parser(openAPIDocumentList);
                    if (parsedDocumentList.length === 0) {
                        logger_1.default.error(`解析swagger配置失败${serverUrlText}`);
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
            const filepath = path_1.default.isAbsolute(documentServer.url) ? documentServer.url : path_1.default.join(process.cwd(), documentServer.url);
            let [e, json] = yield (0, await_to_js_1.default)((0, fs_extra_1.readJson)(filepath));
            if (e) {
                const errorText = `swagger文件读取失败${(0, util_1.getErrorMessage)(e, ': ')}${serverUrlText}`;
                logger_1.default.error(errorText);
                return Promise.reject(errorText);
            }
            json = (Array.isArray(json) ? json : [json]);
            json.forEach((itm) => {
                itm.documentServerUrl = documentServer.url;
            });
            [].push.apply(openAPIDocumentList, json);
            return openAPIDocumentList;
        }
        // 直接根据资源地址获取配置
        const [, openAPIDocument] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: documentServer.url })));
        if ((0, validator_1.validateOpenAPIDocument)(openAPIDocument)) {
            openAPIDocument.documentServerUrl = documentServer.url;
            openAPIDocumentList.push(openAPIDocument);
            return openAPIDocumentList;
        }
        const { origin } = requestConfig;
        // 获取所有分组-OpenAPI 2.0
        let [, swaggerResources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: (0, util_1.mergeUrl)(origin, '/swagger-resources', requestConfig.qs) })));
        // 获取所有分组-OpenAPI 3.0
        if (!((_a = swaggerResources) === null || _a === void 0 ? void 0 : _a.length)) {
            [, swaggerResources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: (0, util_1.mergeUrl)(origin, '/data/openapi.json', requestConfig.qs) })));
        }
        // 获取所有分组-OpenAPI 3.0
        if (!((_b = swaggerResources) === null || _b === void 0 ? void 0 : _b.length)) {
            [, swaggerResources] = yield (0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: (0, util_1.mergeUrl)(origin, '/openapi.json', requestConfig.qs) })));
        }
        if (Array.isArray(swaggerResources)) {
            const tasks2 = [];
            for (const sr of swaggerResources) {
                const documentServerUrl = (0, util_1.mergeUrl)(origin, sr.url, requestConfig.qs);
                tasks2.push((0, await_to_js_1.default)((0, request_1.default)(Object.assign(Object.assign({}, requestConfig), { method: 'get', url: documentServerUrl })).then((openapiDocument) => {
                    if ((0, validator_1.validateOpenAPIDocument)(openapiDocument)) {
                        openapiDocument.documentServerUrl = documentServerUrl;
                        openAPIDocumentList.push(openapiDocument);
                    }
                })));
            }
            yield (0, await_to_js_1.default)(Promise.all(tasks2));
        }
        return openAPIDocumentList;
    });
}
