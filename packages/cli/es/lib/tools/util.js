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
import qs from 'qs';
import ora from 'ora';
import path, { join, dirname, relative, isAbsolute, resolve as pathResolve, } from 'path';
import fs from 'node:fs';
import fsExtra from 'fs-extra';
import parse from 'url-parse';
import { merge } from 'lodash';
import tmp from 'tmp';
import * as process from 'node:process';
import { mergeUrl, uuid } from '@api-helper/core/lib/utils/util';
import Locales from '../../lib/locales';
import logger from '../../lib/tools/logger';
export function resolve(p) {
    if (p === void 0) { p = ''; }
    var args = Array.from(arguments);
    if (isAbsolute(p)) {
        return join.apply(null, args);
    }
    args.unshift(process.cwd());
    return pathResolve.apply(null, args);
}
export function getExtensionName(name) {
    if (!name.includes('.')) {
        return '';
    }
    return name.substring(name.lastIndexOf('.'));
}
/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options { object }
 * @return {string} 临时文件绝对路径
 */
export function createTempFile(content, options) {
    if (content === void 0) { content = ''; }
    var currentOptions = merge({
        folder: '',
        prefix: 'temp.api.helper.cli',
        postfix: '.js',
        onlyClearTempFolder: false,
    }, options);
    var tmpFolder = createFolder(currentOptions.folder ? currentOptions.folder : path.join(__dirname, "./.temp"));
    var fileName = path.join(tmpFolder, "./".concat(currentOptions.prefix).concat(uuid()).concat(currentOptions.postfix));
    if (currentOptions.onlyClearTempFolder) {
        try {
            fsExtra.removeSync(tmpFolder);
        }
        catch (_a) { }
        return '';
    }
    fsExtra.ensureFileSync(fileName);
    if (content) {
        fs.writeFileSync(fileName, content);
    }
    return fileName;
}
/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
export function createTempFileByTMP(content, options) {
    var currentOptions = merge({
        prefix: 'temp.api.helper.cli',
        postfix: '.js'
    }, options);
    var name = tmp.fileSync(currentOptions).name;
    if (content) {
        fs.writeFileSync(name, content);
    }
    return name;
}
export function checkType(value, target) {
    return Object.prototype.toString.call(value) === "[object ".concat(target, "]");
}
export function createFolder(path, isFile) {
    if (isFile === void 0) { isFile = false; }
    if (isFile) {
        fsExtra.ensureFileSync(path);
        return path;
    }
    fsExtra.ensureDirSync(path);
    return path;
}
export function removeFolder(path) {
    if (path === void 0) { path = ''; }
    try {
        fsExtra.removeSync(path);
        return true;
    }
    catch (_a) {
        return false;
    }
}
/**
 * @description 加载JSON对象
 * @param jsonFile {string} 模块路径。
 * @return { T } 模块默认返回的内容
 */
export function loadJSON(jsonFile) {
    try {
        return fsExtra.readJSONSync(jsonFile);
    }
    catch (error) { }
    return null;
}
/**
 * @description 将路径统一为 unix 风格的路径。
 * @param {string} path 路径
 * @return {string} unix 风格的路径
 */
export function toUnixPath(path) {
    return path.replace(/[/\\]+/g, '/');
}
/**
 * @description 获得规范化的相对路径。
 * @param {string} from 来源路径
 * @param {string} to 去向路径
 * @return { string } 相对路径
 */
export function getNormalizedRelativePath(from, to) {
    return toUnixPath(relative(dirname(from), to))
        .replace(/^(?=[^.])/, './')
        .replace(/\.(ts|js)x?$/i, '');
}
export function processRequestConfig(documentServer, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var auth = documentServer.auth, authToken = documentServer.authToken;
    var isHttp = /^(http(s?):\/\/.*?)($|\/)/.test(String(documentServer.url));
    var path = (_a = options === null || options === void 0 ? void 0 : options.path) !== null && _a !== void 0 ? _a : '';
    var method = (_b = options === null || options === void 0 ? void 0 : options.method) !== null && _b !== void 0 ? _b : 'get';
    var urlInfo = (isHttp ? parse(documentServer.url) : {});
    var origin = (_c = urlInfo === null || urlInfo === void 0 ? void 0 : urlInfo.origin) !== null && _c !== void 0 ? _c : '';
    var queryParams = isHttp ? Object.assign(qs.parse(((_d = urlInfo === null || urlInfo === void 0 ? void 0 : urlInfo.query) === null || _d === void 0 ? void 0 : _d.slice(1)) || ''), (_e = options === null || options === void 0 ? void 0 : options.queryParams) !== null && _e !== void 0 ? _e : {}) : {};
    // 公共路径
    if (documentServer.url.includes('doc.html') || documentServer.url.includes('swagger-ui.html')) {
        var str = documentServer.url.replace(origin, '');
        var p = (_g = (_f = /(\/.*?)\/(doc|swagger-ui)\.html/.exec(str)) === null || _f === void 0 ? void 0 : _f[1]) !== null && _g !== void 0 ? _g : '';
        origin += p;
    }
    var requestConfig = __assign(__assign({}, options), { method: method, headers: (_h = documentServer === null || documentServer === void 0 ? void 0 : documentServer.headers) !== null && _h !== void 0 ? _h : {}, url: mergeUrl(origin, path), qs: '', documentServerUrl: documentServer.url, origin: origin });
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
    var queryParamsStr = qs.stringify(queryParams);
    if (queryParamsStr) {
        var qs_1 = "?".concat(queryParamsStr);
        requestConfig.url += qs_1;
        requestConfig.qs = qs_1;
    }
    return requestConfig;
}
export function documentServersRunParserPlugins(documentServers, parserPlugins, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var locales, parserPluginMap, parserPlugins_1, parserPlugins_1_1, parserPlugin, result, execParserPluginMap, spinner, i, documentServer, parserPlugin, tasks, execParserPluginMap_1, execParserPluginMap_1_1, _a, parserPlugin, _documentServers, _b, errorText;
        var e_1, _c, e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, new Locales().init()];
                case 1:
                    locales = _e.sent();
                    parserPluginMap = new Map();
                    try {
                        for (parserPlugins_1 = __values(parserPlugins), parserPlugins_1_1 = parserPlugins_1.next(); !parserPlugins_1_1.done; parserPlugins_1_1 = parserPlugins_1.next()) {
                            parserPlugin = parserPlugins_1_1.value;
                            parserPluginMap.set(parserPlugin.name, parserPlugin);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (parserPlugins_1_1 && !parserPlugins_1_1.done && (_c = parserPlugins_1.return)) _c.call(parserPlugins_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    result = {
                        noParserPluginNames: [],
                        parserPluginRunResult: [],
                    };
                    execParserPluginMap = new Map();
                    spinner = ora(locales.$t('文档获取与解析，这可能需要等待一段时间...')).start();
                    for (i = 0; i < documentServers.length; i++) {
                        documentServer = documentServers[i];
                        if (!documentServer.url) {
                            logger.error(locales.$t("documentServers.url \u4E0D\u53EF\u4E3A\u7A7A!").replace('%0', String(i)));
                            continue;
                        }
                        if (documentServer.type && !parserPluginMap.has(documentServer.type)) {
                            result.noParserPluginNames.push(documentServer.type);
                            continue;
                        }
                        parserPlugin = !documentServer.type ? parserPluginMap.get('swagger') : parserPluginMap.get(documentServer.type);
                        if (execParserPluginMap.has(parserPlugin)) {
                            execParserPluginMap.get(parserPlugin).push(documentServer);
                        }
                        else {
                            execParserPluginMap.set(parserPlugin, [documentServer]);
                        }
                    }
                    tasks = [];
                    try {
                        for (execParserPluginMap_1 = __values(execParserPluginMap), execParserPluginMap_1_1 = execParserPluginMap_1.next(); !execParserPluginMap_1_1.done; execParserPluginMap_1_1 = execParserPluginMap_1.next()) {
                            _a = __read(execParserPluginMap_1_1.value, 2), parserPlugin = _a[0], _documentServers = _a[1];
                            tasks.push(parserPlugin.run(_documentServers, options).then(function (res) {
                                [].push.apply(result.parserPluginRunResult, res);
                            }));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (execParserPluginMap_1_1 && !execParserPluginMap_1_1.done && (_d = execParserPluginMap_1.return)) _d.call(execParserPluginMap_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Promise.all(tasks)];
                case 3:
                    _e.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _b = _e.sent();
                    return [3 /*break*/, 5];
                case 5:
                    if (result.noParserPluginNames.length > 0) {
                        logger.error("".concat(locales.$t('接口文档缺少对应类型的解析插件：')).concat(result.noParserPluginNames.join('、')));
                    }
                    if (result.parserPluginRunResult.length === 0) {
                        spinner.fail();
                        errorText = locales.$t('没有获取或者解析到文档');
                        logger.error(errorText);
                        return [2 /*return*/, Promise.reject(errorText)];
                    }
                    spinner.succeed();
                    return [2 /*return*/, result];
            }
        });
    });
}
export function processTSFile(filename) {
    // @ts-ignore // check if code is not running under ts-node
    if (!process[Symbol.for('ts-node.register.instance')]) {
        return filename.replace('.ts', '.js');
    }
    return filename;
}
export function getAbsolutePath(pathStr) {
    return isAbsolute(pathStr) ? pathStr : join(process.cwd(), pathStr);
}
export function removeCwdPath(pathStr) {
    pathStr = toUnixPath(pathStr);
    var cwdPath = toUnixPath(process.cwd());
    var temp = pathStr.replace(cwdPath, '');
    return temp.startsWith('/') ? temp.slice(1) : temp;
}
