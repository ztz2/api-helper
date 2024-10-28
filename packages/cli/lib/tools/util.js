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
exports.md5 = exports.removeCwdPath = exports.getAbsolutePath = exports.processTSFile = exports.documentServersRunParserPlugins = exports.processRequestConfig = exports.getNormalizedRelativePath = exports.toUnixPath = exports.loadJSON = exports.removeFolder = exports.createFolder = exports.checkType = exports.createTempFileByTMP = exports.createTempFile = exports.getExtensionName = exports.resolve = void 0;
const qs_1 = __importDefault(require("qs"));
const ora_1 = __importDefault(require("ora"));
const path_1 = __importStar(require("path"));
const node_fs_1 = __importDefault(require("node:fs"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const url_parse_1 = __importDefault(require("url-parse"));
const lodash_1 = require("lodash");
const md5_1 = __importDefault(require("crypto-js/md5"));
const tmp_1 = __importDefault(require("tmp"));
const process = __importStar(require("node:process"));
const util_1 = require("@api-helper/core/lib/utils/util");
const locales_1 = __importDefault(require("../../lib/locales"));
const logger_1 = __importDefault(require("../../lib/tools/logger"));
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
 * @param options { object }
 * @return {string} 临时文件绝对路径
 */
function createTempFile(content = '', options) {
    const currentOptions = (0, lodash_1.merge)({
        folder: '',
        prefix: 'temp.api.helper.cli',
        postfix: '.js',
        onlyClearTempFolder: false,
    }, options);
    const tmpFolder = createFolder(currentOptions.folder ? currentOptions.folder : path_1.default.join(__dirname, `./.temp`));
    const fileName = path_1.default.join(tmpFolder, `./${currentOptions.prefix}${(0, util_1.uuid)()}${currentOptions.postfix}`);
    if (currentOptions.onlyClearTempFolder) {
        try {
            fs_extra_1.default.removeSync(tmpFolder);
        }
        catch (_a) { }
        return '';
    }
    fs_extra_1.default.ensureFileSync(fileName);
    if (content) {
        node_fs_1.default.writeFileSync(fileName, content);
    }
    return fileName;
}
exports.createTempFile = createTempFile;
/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
function createTempFileByTMP(content, options) {
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
exports.createTempFileByTMP = createTempFileByTMP;
function checkType(value, target) {
    return Object.prototype.toString.call(value) === `[object ${target}]`;
}
exports.checkType = checkType;
function createFolder(path, isFile = false) {
    if (isFile) {
        fs_extra_1.default.ensureFileSync(path);
        return path;
    }
    fs_extra_1.default.ensureDirSync(path);
    return path;
}
exports.createFolder = createFolder;
function removeFolder(path = '') {
    try {
        fs_extra_1.default.removeSync(path);
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.removeFolder = removeFolder;
/**
 * @description 加载JSON对象
 * @param jsonFile {string} 模块路径。
 * @return { T } 模块默认返回的内容
 */
function loadJSON(jsonFile) {
    try {
        return fs_extra_1.default.readJSONSync(jsonFile);
    }
    catch (error) { }
    return null;
}
exports.loadJSON = loadJSON;
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
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { auth, authToken } = documentServer;
    const isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
    const path = (_a = options === null || options === void 0 ? void 0 : options.path) !== null && _a !== void 0 ? _a : '';
    const method = (_b = options === null || options === void 0 ? void 0 : options.method) !== null && _b !== void 0 ? _b : 'get';
    const urlInfo = (isHttp ? (0, url_parse_1.default)(documentServer.url) : {});
    let origin = (_c = urlInfo === null || urlInfo === void 0 ? void 0 : urlInfo.origin) !== null && _c !== void 0 ? _c : '';
    const queryParams = isHttp ? Object.assign(qs_1.default.parse(((_d = urlInfo === null || urlInfo === void 0 ? void 0 : urlInfo.query) === null || _d === void 0 ? void 0 : _d.slice(1)) || ''), (_e = options === null || options === void 0 ? void 0 : options.queryParams) !== null && _e !== void 0 ? _e : {}) : {};
    // 公共路径
    if (documentServer.url.includes('doc.html') || documentServer.url.includes('swagger-ui.html')) {
        const str = documentServer.url.replace(origin, '');
        const p = (_g = (_f = /(\/.*?)\/(doc|swagger-ui)\.html/.exec(str)) === null || _f === void 0 ? void 0 : _f[1]) !== null && _g !== void 0 ? _g : '';
        origin += p;
    }
    const requestConfig = Object.assign(Object.assign({}, options), { method, headers: (_h = documentServer === null || documentServer === void 0 ? void 0 : documentServer.headers) !== null && _h !== void 0 ? _h : {}, url: (0, util_1.mergeUrl)(origin, path), qs: '', documentServerUrl: documentServer.url, origin });
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
        const locales = yield new locales_1.default().init();
        const parserPluginMap = new Map();
        for (const parserPlugin of parserPlugins) {
            parserPluginMap.set(parserPlugin.name, parserPlugin);
        }
        const result = {
            noParserPluginNames: [],
            parserPluginRunResult: [],
        };
        const execParserPluginMap = new Map();
        const spinner = (0, ora_1.default)(locales.$t('文档获取与解析，这可能需要等待一段时间...')).start();
        for (let i = 0; i < documentServers.length; i++) {
            const documentServer = documentServers[i];
            if (!documentServer.url) {
                logger_1.default.error(locales.$t(`documentServers.url 不可为空!`).replace('%0', String(i)));
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
            logger_1.default.error(`${locales.$t('接口文档缺少对应类型的解析插件：')}${result.noParserPluginNames.join('、')}`);
        }
        if (result.parserPluginRunResult.length === 0) {
            spinner.fail();
            const errorText = locales.$t('没有获取或者解析到文档');
            logger_1.default.error(errorText);
            return Promise.reject(errorText);
        }
        spinner.succeed();
        return result;
    });
}
exports.documentServersRunParserPlugins = documentServersRunParserPlugins;
function processTSFile(filename) {
    // @ts-ignore // check if code is not running under ts-node
    if (!process[Symbol.for('ts-node.register.instance')]) {
        return filename.replace('.ts', '.js');
    }
    return filename;
}
exports.processTSFile = processTSFile;
function getAbsolutePath(pathStr) {
    return (0, path_1.isAbsolute)(pathStr) ? pathStr : (0, path_1.join)(process.cwd(), pathStr);
}
exports.getAbsolutePath = getAbsolutePath;
function removeCwdPath(pathStr) {
    pathStr = toUnixPath(pathStr);
    const cwdPath = toUnixPath(process.cwd());
    const temp = pathStr.replace(cwdPath, '');
    return temp.startsWith('/') ? temp.slice(1) : temp;
}
exports.removeCwdPath = removeCwdPath;
function md5(content, options) {
    const outputLength = [16, 32].includes(options === null || options === void 0 ? void 0 : options.outputLength) ? options === null || options === void 0 ? void 0 : options.outputLength : 32;
    const text = (0, md5_1.default)(content).toString();
    return outputLength === 16 ? text.substring(8, 16) : text;
}
exports.md5 = md5;
