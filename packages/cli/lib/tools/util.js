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
exports.documentServersRunParserPlugins = exports.processRequestConfig = exports.getNormalizedRelativePath = exports.toUnixPath = exports.loadModule = exports.checkType = exports.createTempFile = exports.getExtensionName = exports.resolve = void 0;
const qs_1 = __importDefault(require("qs"));
const ora_1 = __importDefault(require("ora"));
const path_1 = require("path");
const node_fs_1 = __importDefault(require("node:fs"));
const url_parse_1 = __importDefault(require("url-parse"));
const lodash_1 = require("lodash");
const tmp_1 = __importDefault(require("tmp"));
const util_1 = require("@api-helper/core/lib/utils/util");
const esbuild_1 = __importDefault(require("esbuild"));
const log_1 = __importDefault(require("../../lib/tools/log"));
function resolve(p = '') {
    const args = Array.from(arguments);
    if ((0, path_1.isAbsolute)(p)) {
        return path_1.join.apply(null, args);
    }
    args.unshift(process.cwd());
    return path_1.resolve.apply(null, args);
}
exports.resolve = resolve;
function getExtensionName(name) {
    if (!name.includes('.')) {
        return '';
    }
    return name.substring(name.lastIndexOf('.'));
}
exports.getExtensionName = getExtensionName;
/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
function createTempFile(content, options) {
    const currentOptions = (0, lodash_1.merge)({
        prefix: 'temp.api.helper.cli',
        postfix: '.js'
    }, options);
    const { name } = tmp_1.default.fileSync(currentOptions);
    if (content) {
        node_fs_1.default.writeFileSync(name, content);
    }
    return name;
}
exports.createTempFile = createTempFile;
function checkType(value, target) {
    return Object.prototype.toString.call(value) === `[object ${target}]`;
}
exports.checkType = checkType;
/**
 * @description 模块加载
 * @param file {string} 模块路径，绝对路径。
 * @param isAsync {boolean} 是否异步执行，默认true。
 * @return {T} 模块默认返回的内容
 */
function loadModule(file, isAsync = true) {
    file = (0, path_1.isAbsolute)(file) ? file : resolve(file);
    try {
        node_fs_1.default.accessSync(file, node_fs_1.default.constants.F_OK);
    }
    catch (e) {
        throw Error(`can't resolve ${file}`);
    }
    // 编译文件
    const buildParams = {
        entryPoints: [file],
        bundle: false,
        splitting: false,
        format: 'cjs',
        platform: 'node',
        minify: false,
        color: true,
        write: false
    };
    const handleModule = (res) => {
        const { outputFiles } = res;
        const [outputFile] = outputFiles !== null && outputFiles !== void 0 ? outputFiles : [];
        const { text } = outputFile;
        const filePath = createTempFile(text, { postfix: '.js' });
        const moduleContent = require(filePath);
        if (moduleContent.__esModule) {
            return moduleContent.default;
        }
        return moduleContent;
    };
    if (isAsync) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const res = yield esbuild_1.default.build(buildParams);
            resolve(handleModule(res));
        }));
    }
    const res = esbuild_1.default.buildSync(buildParams);
    return handleModule(res);
}
exports.loadModule = loadModule;
/**
 * @description 将路径统一为 unix 风格的路径。
 * @param {string} path 路径
 * @return {string} unix 风格的路径
 */
function toUnixPath(path) {
    return path.replace(/[/\\]+/g, '/');
}
exports.toUnixPath = toUnixPath;
/**
 * @description 获得规范化的相对路径。
 * @param {string} from 来源路径
 * @param {string} to 去向路径
 * @return { string } 相对路径
 */
function getNormalizedRelativePath(from, to) {
    return toUnixPath((0, path_1.relative)((0, path_1.dirname)(from), to))
        .replace(/^(?=[^.])/, './')
        .replace(/\.(ts|js)x?$/i, '');
}
exports.getNormalizedRelativePath = getNormalizedRelativePath;
function processRequestConfig(documentServer, options) {
    var _a, _b, _c, _d, _e, _f;
    const { auth, authToken } = documentServer;
    const isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
    const path = (_a = options === null || options === void 0 ? void 0 : options.path) !== null && _a !== void 0 ? _a : '';
    const method = (_b = options === null || options === void 0 ? void 0 : options.method) !== null && _b !== void 0 ? _b : 'get';
    const urlInfo = (isHttp ? (0, url_parse_1.default)(documentServer.url) : {});
    const origin = (_c = urlInfo === null || urlInfo === void 0 ? void 0 : urlInfo.origin) !== null && _c !== void 0 ? _c : '';
    const queryParams = isHttp ? Object.assign(qs_1.default.parse(((_d = urlInfo === null || urlInfo === void 0 ? void 0 : urlInfo.query) === null || _d === void 0 ? void 0 : _d.slice(1)) || ''), (_e = options === null || options === void 0 ? void 0 : options.queryParams) !== null && _e !== void 0 ? _e : {}) : {};
    const requestConfig = Object.assign(Object.assign({}, options), { method, headers: (_f = documentServer === null || documentServer === void 0 ? void 0 : documentServer.headers) !== null && _f !== void 0 ? _f : {}, url: (0, util_1.mergeUrl)(origin, path), qs: '', documentServerUrl: documentServer.url, origin });
    // 有密码
    if ((auth === null || auth === void 0 ? void 0 : auth.username) && (auth === null || auth === void 0 ? void 0 : auth.password)) {
        requestConfig.auth = {
            username: auth === null || auth === void 0 ? void 0 : auth.username,
            password: auth === null || auth === void 0 ? void 0 : auth.password
        };
    }
    // 有token
    if (authToken) {
        queryParams.token = authToken;
    }
    // URL参数
    const queryParamsStr = qs_1.default.stringify(queryParams);
    if (queryParamsStr) {
        const qs = `?${queryParamsStr}`;
        requestConfig.url += qs;
        requestConfig.qs = qs;
    }
    return requestConfig;
}
exports.processRequestConfig = processRequestConfig;
function documentServersRunParserPlugins(documentServers, parserPlugins, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const parserPluginMap = new Map();
        for (const parserPlugin of parserPlugins) {
            parserPluginMap.set(parserPlugin.name, parserPlugin);
        }
        const result = {
            noParserPluginNames: [],
            parserPluginRunResult: [],
        };
        const execParserPluginMap = new Map();
        const oraText = '文档获取与解析';
        const spinner = (0, ora_1.default)(oraText).start();
        for (const documentServer of documentServers) {
            if (!documentServer.url) {
                log_1.default.error('提示', `documentServers.url 不可为空!`);
                continue;
            }
            if (documentServer.type && !parserPluginMap.has(documentServer.type)) {
                result.noParserPluginNames.push(documentServer.type);
                continue;
            }
            // 默认使用 swagger 解析
            const parserPlugin = !documentServer.type ? parserPluginMap.get('swagger') : parserPluginMap.get(documentServer.type);
            if (execParserPluginMap.has(parserPlugin)) {
                execParserPluginMap.get(parserPlugin).push(documentServer);
            }
            else {
                execParserPluginMap.set(parserPlugin, [documentServer]);
            }
        }
        const tasks = [];
        for (const [parserPlugin, _documentServers] of execParserPluginMap) {
            tasks.push(parserPlugin.run(_documentServers, options).then((res) => {
                [].push.apply(result.parserPluginRunResult, res);
            }));
        }
        try {
            yield Promise.all(tasks);
        }
        catch (_a) { }
        if (result.noParserPluginNames.length > 0) {
            log_1.default.error('提示', `文档：${result.noParserPluginNames.join('、')}，缺少对应类型的解析插件。`);
        }
        if (result.parserPluginRunResult.length === 0) {
            const failText = oraText + '【程序终止，没有获取或者解析出文档】';
            spinner.fail(failText);
            return Promise.reject(failText);
        }
        spinner.succeed();
        return result;
    });
}
exports.documentServersRunParserPlugins = documentServersRunParserPlugins;
