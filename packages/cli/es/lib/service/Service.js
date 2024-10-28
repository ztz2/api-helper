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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import ora from 'ora';
import fg from 'fast-glob';
// import os from 'node:os';
import { pinyin } from 'pinyin-pro';
// import { Worker } from 'node:worker_threads';
import { join, isAbsolute, } from 'path';
import fsExtra, { stat, outputFile, pathExistsSync, } from 'fs-extra';
import { artTemplate, renderAllApi, } from '@api-helper/template';
import micromatch from 'micromatch';
import { merge, pick, castArray, isEqual } from 'lodash';
import { uuid, formatDate } from '@api-helper/core/lib/utils/util';
import { checkDocument } from '@api-helper/template/lib/render-all-api';
import { resolve, toUnixPath, removeFolder, getAbsolutePath, getExtensionName, getNormalizedRelativePath, documentServersRunParserPlugins, md5, } from '../tools/util';
// import './worker-thread';
import Locales from '../../lib/locales';
import logger from '../../lib/tools/logger';
import { formatCode } from '../../lib';
import { EXTENSIONS } from '../../lib/service/const';
import ParserYapiPlugin from './parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from './parser-plugins/parser-swagger-plugin';
var prompts = require('prompts');
// const cpus = os.cpus().length;
// const CHUNK_NUM = 30;
var outputDiscardWarn = false;
var Service = /** @class */ (function () {
    function Service(options, isTestEnv) {
        if (options === void 0) { options = {}; }
        if (isTestEnv === void 0) { isTestEnv = false; }
        this.startDate = 0;
        this.parserPlugins = [
            new ParserYapiPlugin(),
            new ParserSwaggerPlugin(),
        ];
        this.apiHelperCLIRunningData = {
            selectedDocumentEtag: []
        };
        this.selectedDocumentEtagTemp = [];
        this.hasApiHelperCLIRunningData = false;
        this.tempFolder = join(__dirname, './.cache.server');
        this.isTestEnv = isTestEnv;
        this.configFilePath = options.config;
        this.constructorOptions = options;
        this.locales = new Locales();
    }
    Service.prototype.run = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var configList, len, hasGen, i, config, parserPluginRunResult, chooseDocumentList, codes, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.locales.init()];
                    case 1:
                        _c.sent();
                        this.startDate = Date.now();
                        return [4 /*yield*/, this.getConfigFile()];
                    case 2:
                        configList = _c.sent();
                        len = configList.length;
                        // 添加解析插件
                        this.injectParserPlugins(configList);
                        hasGen = false;
                        i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(i < configList.length)) return [3 /*break*/, 11];
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 9, , 10]);
                        config = configList[i];
                        if (len > 1) {
                            logger.info("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 \u001B[34m".concat(this.locales.$t('正在处理').replace('%0', String(i)), "\u001B[0m \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"));
                        }
                        // 缺少输出路径跳过该项
                        if (!config.outputPath && !config.outputFilePath) {
                            logger.error(this.locales.$t('Config[%0]: 缺少 outputPath 配置').replace('%0', String(i)));
                            return [3 /*break*/, 10];
                        }
                        // 缺少文档配置，跳过该项
                        if (!((_a = config.documentServers) === null || _a === void 0 ? void 0 : _a.length)) {
                            logger.error(this.locales.$t('Config[%0]: 缺少 documentServers 配置').replace('%0', String(i)));
                            return [3 /*break*/, 10];
                        }
                        return [4 /*yield*/, this.parserDocument(config.documentServers, config)];
                    case 5:
                        parserPluginRunResult = _c.sent();
                        return [4 /*yield*/, this.chooseDocument(parserPluginRunResult, config, i)];
                    case 6:
                        chooseDocumentList = _c.sent();
                        return [4 /*yield*/, this.genCode(config, chooseDocumentList)];
                    case 7:
                        codes = _c.sent();
                        return [4 /*yield*/, this.output(config, codes)];
                    case 8:
                        _c.sent();
                        hasGen = true;
                        return [3 /*break*/, 10];
                    case 9:
                        _b = _c.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        i++;
                        return [3 /*break*/, 3];
                    case 11:
                        hasGen && this.setApiHelperCLIRunningData();
                        return [4 /*yield*/, this.clear()];
                    case 12:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                removeFolder(this.tempFolder);
                return [2 /*return*/];
            });
        });
    };
    Service.prototype.injectParserPlugins = function (configList) {
        var e_1, _a, e_2, _b;
        var _c;
        try {
            for (var configList_1 = __values(configList), configList_1_1 = configList_1.next(); !configList_1_1.done; configList_1_1 = configList_1.next()) {
                var config = configList_1_1.value;
                var parserPlugins = (_c = config === null || config === void 0 ? void 0 : config.parserPlugins) !== null && _c !== void 0 ? _c : [];
                try {
                    for (var parserPlugins_1 = (e_2 = void 0, __values(parserPlugins)), parserPlugins_1_1 = parserPlugins_1.next(); !parserPlugins_1_1.done; parserPlugins_1_1 = parserPlugins_1.next()) {
                        var parserPlugin = parserPlugins_1_1.value;
                        var parserPluginMap = this.getParserPluginMap();
                        if (parserPluginMap.has(parserPlugin.name)) {
                            logger.warn(this.locales.$t('插件已经注册').replace('%0', parserPlugin.name));
                            continue;
                        }
                        this.parserPlugins.push(parserPlugin);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (parserPlugins_1_1 && !parserPlugins_1_1.done && (_b = parserPlugins_1.return)) _b.call(parserPlugins_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (configList_1_1 && !configList_1_1.done && (_a = configList_1.return)) _a.call(configList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Service.prototype.getParserPluginMap = function () {
        var e_3, _a;
        var map = new Map();
        try {
            for (var _b = __values(this.parserPlugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                var parserPlugin = _c.value;
                map.set(parserPlugin.name, parserPlugin);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return map;
    };
    Service.prototype.getApiHelperCLIRunningData = function (configFilePath) {
        var _a, _b;
        try {
            var content = fsExtra.readFileSync(configFilePath).toString();
            var apiHelperCLIRunningData = (_b = (_a = content.match(/\/\/\s==ApiHelperCLIRunningData==([\s\S]*)\/\/\s==\/ApiHelperCLIRunningData==/im)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
            if (!apiHelperCLIRunningData) {
                return;
            }
            this.hasApiHelperCLIRunningData = true;
            var getAllValue = function (str, objectFields) {
                var _a;
                if (objectFields === void 0) { objectFields = []; }
                var result = {};
                /*// @字段名称 值 */
                var fields = (_a = str.match(/\/\/\s+@(.*)/g)) !== null && _a !== void 0 ? _a : [];
                fields.forEach(function (f) {
                    var _a, _b, _c;
                    var key = (_a = f.match(/\/\/\s+@(.*?)(\s+|$)/)) === null || _a === void 0 ? void 0 : _a[1];
                    var value = (_c = (_b = f.match(/\/\/\s+@.*?\s+(.*)/)) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : '';
                    if (objectFields.includes(key) && value) {
                        var temp = [];
                        try {
                            temp = JSON.parse(value);
                            temp = Array.isArray(temp) ? temp : [];
                        }
                        catch (_d) { }
                        result[key] = temp;
                    }
                    else {
                        result[key] = value;
                    }
                });
                return result;
            };
            this.apiHelperCLIRunningData = __assign(__assign({}, this.apiHelperCLIRunningData), getAllValue(apiHelperCLIRunningData, ['selectedDocumentEtag']));
        }
        catch (e) {
            logger.warn(e === null || e === void 0 ? void 0 : e.message);
        }
    };
    Service.prototype.setApiHelperCLIRunningData = function () {
        try {
            if (!this.configFileAbsolutePath) {
                return;
            }
            var toComment = function (obj) {
                var e_4, _a;
                var temp = [];
                try {
                    for (var _b = __values(Object.entries(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                        var val_1 = value;
                        if (typeof value === 'object' && value !== null) {
                            val_1 = JSON.stringify(value);
                        }
                        else if (value === undefined) {
                            val_1 = '';
                        }
                        temp.push("// @".concat(key, " ").concat(val_1));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return "// ==ApiHelperCLIRunningData==\n".concat(temp.join('\n'), "\n// ==/ApiHelperCLIRunningData==");
            };
            var notChange = isEqual(this.selectedDocumentEtagTemp, this.apiHelperCLIRunningData.selectedDocumentEtag);
            var removeBreakLine = function (str) {
                str = str !== null && str !== void 0 ? str : '';
                while (str.endsWith('\n') || str.endsWith('\r')) {
                    str = str.replace(/[\n\r]$/, '');
                }
                return str;
            };
            if (notChange) {
                if (this.apiHelperCLIRunningData.selectedDocumentEtag.length === 0) {
                    var content_1 = fsExtra.readFileSync(this.configFileAbsolutePath).toString();
                    var apiHelperCLIRunningData_1 = content_1.match(/\/\/\s==ApiHelperCLIRunningData==([\s\S]*)\/\/\s==\/ApiHelperCLIRunningData==/im);
                    if (apiHelperCLIRunningData_1) {
                        content_1 = content_1.replace(/\/\/\s==ApiHelperCLIRunningData==([\s\S]*)\/\/\s==\/ApiHelperCLIRunningData==/im, '');
                        content_1 = removeBreakLine(content_1);
                        content_1 += '\n';
                        fsExtra.writeFileSync(this.configFileAbsolutePath, content_1, { encoding: 'utf-8' });
                    }
                }
                return;
            }
            var content = fsExtra.readFileSync(this.configFileAbsolutePath).toString();
            var val = __assign(__assign({}, this.apiHelperCLIRunningData), { selectedDocumentEtag: this.selectedDocumentEtagTemp });
            var temp = toComment(__assign(__assign({}, this.apiHelperCLIRunningData), { selectedDocumentEtag: this.selectedDocumentEtagTemp }));
            // 取消生成内容
            if (!val.selectedDocumentEtag.length) {
                temp = '';
            }
            var apiHelperCLIRunningData = content.match(/\/\/\s==ApiHelperCLIRunningData==([\s\S]*)\/\/\s==\/ApiHelperCLIRunningData==/im);
            if (apiHelperCLIRunningData) {
                content = content.replace(/\/\/\s==ApiHelperCLIRunningData==([\s\S]*)\/\/\s==\/ApiHelperCLIRunningData==/im, temp);
                content = removeBreakLine(content);
                content += '\n';
            }
            else {
                content = removeBreakLine(content);
                content = content + (temp ? '\n\n' + "".concat(temp, "\n") : '\n');
            }
            fsExtra.writeFileSync(this.configFileAbsolutePath, content, { encoding: 'utf-8' });
        }
        catch (e) {
            logger.warn(e === null || e === void 0 ? void 0 : e.message);
        }
    };
    // 1. 获取配置文件
    Service.prototype.getConfigFile = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var constructorOptions, outputPath, isJS, target, suffixName, configFilePath, spinner, c, configList_2, files, configList, configPath, hasConfigFile, files_1, files_1_1, file, c, temp;
            var e_5, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        constructorOptions = this.constructorOptions;
                        // 如果基于CLI执行，不需要在进行查找文件
                        // npx apih -url https://xxxx.com/swagger-ui.html
                        if (constructorOptions.url) {
                            outputPath = (_a = constructorOptions === null || constructorOptions === void 0 ? void 0 : constructorOptions.outputPath) !== null && _a !== void 0 ? _a : '';
                            isJS = outputPath.endsWith('.js') || constructorOptions.target === 'javascript';
                            target = ((_b = constructorOptions.target) !== null && _b !== void 0 ? _b : isJS) ? 'javascript' : 'typescript';
                            suffixName = ".".concat(isJS ? 'js' : 'ts');
                            return [2 /*return*/, [{
                                        target: target,
                                        outputPath: outputPath || "src/api/index".concat(suffixName),
                                        requestFunctionFilePath: "src/api/request".concat(suffixName),
                                        documentServers: [
                                            {
                                                url: constructorOptions.url,
                                                type: (_c = constructorOptions.type) !== null && _c !== void 0 ? _c : 'swagger',
                                                authToken: constructorOptions.authToken,
                                            },
                                        ],
                                    }]];
                        }
                        configFilePath = this.configFilePath;
                        spinner = ora(this.locales.$t('读取配置文件')).start();
                        // 有配置文件
                        if (configFilePath) {
                            c = getAbsolutePath(configFilePath);
                            if (!pathExistsSync(c)) {
                                spinner.fail();
                                logger.error(this.locales.$t('配置文件不存在，程序退出'));
                                return [2 /*return*/, process.exit(1)];
                            }
                            configList_2 = castArray(require(c).default);
                            if (!configList_2.length) {
                                spinner.fail();
                                logger.error(this.locales.$t('配置为空，程序退出'));
                                return [2 /*return*/, process.exit(1)];
                            }
                            spinner.succeed();
                            logger.info(this.locales.$t('配置已加载：') + toUnixPath(configFilePath));
                            this.configFileAbsolutePath = c;
                            this.getApiHelperCLIRunningData(c);
                            return [2 /*return*/, configList_2];
                        }
                        return [4 /*yield*/, fg(['apih.config.(ts|js|cjs|mjs)'], { cwd: process.cwd(), absolute: true })];
                    case 1:
                        files = _e.sent();
                        configList = [];
                        configPath = '';
                        hasConfigFile = false;
                        try {
                            for (files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                                file = files_1_1.value;
                                c = getAbsolutePath(file);
                                if (pathExistsSync(c)) {
                                    hasConfigFile = true;
                                    temp = castArray(require(c).default);
                                    if (temp && temp.length) {
                                        configPath = file;
                                        configList = temp;
                                    }
                                }
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (files_1_1 && !files_1_1.done && (_d = files_1.return)) _d.call(files_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        if (!hasConfigFile) {
                            spinner.fail();
                            logger.error(this.locales.$t('配置文件不存在，程序退出'));
                            process.exit(1);
                        }
                        if (!configList.length) {
                            spinner.fail();
                            logger.error(this.locales.$t('配置为空，程序退出'));
                            return [2 /*return*/, process.exit(1)];
                        }
                        spinner.succeed();
                        logger.info(this.locales.$t('配置已加载：') + toUnixPath(configPath));
                        this.configFileAbsolutePath = configPath;
                        this.getApiHelperCLIRunningData(configPath);
                        return [2 /*return*/, configList];
                }
            });
        });
    };
    // 2. 文档获取与解析
    Service.prototype.parserDocument = function (documentServers, config) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, documentServersRunParserPlugins(documentServers, this.parserPlugins, config)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.parserPluginRunResult];
                }
            });
        });
    };
    // 3. 选择项目文档
    Service.prototype.chooseDocument = function (parserPluginRunResult, config, index) {
        return __awaiter(this, void 0, void 0, function () {
            var choicesDocumentListOptions, genEtg, answers_1, failText, failText;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        choicesDocumentListOptions = [];
                        genEtg = function (url) { return md5(index + url, { outputLength: 16 }); };
                        parserPluginRunResult.forEach(function (d, idx) {
                            d.parsedDocumentList.forEach(function (item) {
                                var choice = {
                                    title: item.title,
                                    description: item.documentServerUrl,
                                    value: item.id,
                                    selected: true,
                                };
                                if (_this.hasApiHelperCLIRunningData && _this.apiHelperCLIRunningData.selectedDocumentEtag.length > 0) {
                                    choice.selected = _this.apiHelperCLIRunningData.selectedDocumentEtag.includes(genEtg(item.documentServerUrl));
                                }
                                if (!choice.title) {
                                    choice.title = "[".concat(idx, "]").concat(d.documentServer.url);
                                    delete choice.description;
                                }
                                choicesDocumentListOptions.push(choice);
                            });
                        });
                        if (!(choicesDocumentListOptions.length > 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, prompts([{
                                    type: 'multiselect',
                                    name: 'documentList',
                                    message: '配置中存在多个项目，请选择项目文档(默认全部)',
                                    choices: choicesDocumentListOptions,
                                }])];
                    case 1:
                        answers_1 = _a.sent();
                        if (answers_1.documentList.length === 0) {
                            failText = this.locales.$t('未选择接口文档');
                            logger.error(failText);
                            return [2 /*return*/, Promise.reject(failText)];
                        }
                        parserPluginRunResult = parserPluginRunResult.filter(function (d) {
                            d.parsedDocumentList = d.parsedDocumentList.filter(function (item) { return answers_1.documentList.includes(item.id); });
                            d.parsedDocumentList.forEach(function (item) {
                                _this.selectedDocumentEtagTemp.push(genEtg(item.documentServerUrl));
                            });
                            return d.parsedDocumentList.length > 0;
                        });
                        _a.label = 2;
                    case 2:
                        if (parserPluginRunResult.length === 0) {
                            failText = this.locales.$t('未选择接口文档');
                            logger.error(failText);
                            return [2 /*return*/, Promise.reject(failText)];
                        }
                        return [2 /*return*/, parserPluginRunResult];
                }
            });
        });
    };
    // 4. 生成代码
    Service.prototype.genCode = function (config, parserPluginRunResult) {
        return __awaiter(this, void 0, void 0, function () {
            var result, outputFilePath, isTS, spinner, _genCode, formatResultCode, _loop_1, parserPluginRunResult_1, parserPluginRunResult_1_1, item, e_6_1;
            var e_6, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = [];
                        return [4 /*yield*/, getOutputPath(config)];
                    case 1:
                        outputFilePath = _b.sent();
                        return [4 /*yield*/, checkOutputTS(config)];
                    case 2:
                        isTS = _b.sent();
                        spinner = ora(this.locales.$t('代码生成，这可能需要等待一段时间...')).start();
                        _genCode = function (documentList, params) {
                            params = __assign({}, params);
                            documentList = filterCategory(documentList, params);
                            var code = renderAllApi(documentList, params) || '';
                            var codeDeclare = '';
                            if (!code.endsWith('\n')) {
                                code += '\n';
                            }
                            if (!isTS) {
                                params.isDeclare = true;
                                params.codeType = 'typescript';
                                codeDeclare = renderAllApi(documentList, params);
                                if (!codeDeclare.endsWith('\n')) {
                                    codeDeclare += '\n';
                                }
                            }
                            return [code, codeDeclare];
                        };
                        formatResultCode = function (codes, codeDeclares) {
                            if (codes === void 0) { codes = []; }
                            if (codeDeclares === void 0) { codeDeclares = []; }
                            return __awaiter(_this, void 0, void 0, function () {
                                var result, _a, _b, _c, _d;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            result = [];
                                            _b = (_a = result).push;
                                            return [4 /*yield*/, formatCode({
                                                    sourceCode: codes.filter(Boolean).join('\n'),
                                                    formatCodeExtension: isTS ? '.ts' : '.js',
                                                })];
                                        case 1:
                                            _b.apply(_a, [_e.sent()]);
                                            if (!!isTS) return [3 /*break*/, 3];
                                            _d = (_c = result).push;
                                            return [4 /*yield*/, formatCode({
                                                    sourceCode: codeDeclares.filter(Boolean).join('\n'),
                                                    formatCodeExtension: '.ts',
                                                })];
                                        case 2:
                                            _d.apply(_c, [_e.sent()]);
                                            _e.label = 3;
                                        case 3: return [2 /*return*/, result];
                                    }
                                });
                            });
                        };
                        _loop_1 = function (item) {
                            var documentServer, parsedDocumentList, dataKey, serverName;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        documentServer = item.documentServer, parsedDocumentList = item.parsedDocumentList;
                                        dataKey = documentServer.dataKey;
                                        serverName = documentServer.name ? pinyin(documentServer.name, { toneType: 'none', type: 'array' }).join('') : '';
                                        return [4 /*yield*/, Promise.all(parsedDocumentList.map(function (d) { return __awaiter(_this, void 0, void 0, function () {
                                                var mgConfig, eventTemp, param, fileNameRecord_1, codes_1, codeDeclares_1, fileNameMap_1, _a, _b, code2_1, _c, codeDeclare2_1, e_7, _d, code, codeDeclare, currentOutputFilePath, outputFilePathList_1, lastPath, lastPathSplit, outputFilePathList, requestFilePath, _e, _f, _g, renderHeaderParams, _h, codeHead, codeHeadDeclare, _j, code2, codeDeclare2, e_8;
                                                var _this = this;
                                                var _k, _l;
                                                return __generator(this, function (_m) {
                                                    switch (_m.label) {
                                                        case 0:
                                                            mgConfig = mergeConfig(config, documentServer);
                                                            eventTemp = mgConfig.events;
                                                            delete mgConfig.events;
                                                            Object.assign(mgConfig, eventTemp);
                                                            param = __assign(__assign({}, mgConfig), { codeType: isTS ? 'typescript' : 'javascript', dataKey: dataKey, isDeclare: false });
                                                            if (!(config.outputByCategory || ('group' in config && config.group))) return [3 /*break*/, 7];
                                                            fileNameRecord_1 = {};
                                                            codes_1 = [];
                                                            codeDeclares_1 = [];
                                                            fileNameMap_1 = {};
                                                            return [4 /*yield*/, Promise.all(d.categoryList.map(function (category) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var _a, code, codeDeclare, lastName, fileNameBase, fileName, currentOutputFilePath, tag;
                                                                    var _b;
                                                                    return __generator(this, function (_c) {
                                                                        try {
                                                                            _a = __read(_genCode([category], param), 2), code = _a[0], codeDeclare = _a[1];
                                                                            lastName = (_b = category.name.split('/').filter(Boolean).pop()) === null || _b === void 0 ? void 0 : _b.replace(/[.\s]/gim, '');
                                                                            fileNameBase = pinyin(lastName, { toneType: 'none', type: 'array' }).join('');
                                                                            fileNameRecord_1[fileNameBase] = fileNameRecord_1[fileNameBase] ? fileNameRecord_1[fileNameBase] + 1 : 1;
                                                                            fileName = (fileNameRecord_1[fileNameBase] > 1 ? "".concat(fileNameBase).concat(fileNameRecord_1[fileNameBase]) : fileNameBase) + "".concat(isTS ? '.ts' : '.js');
                                                                            currentOutputFilePath = join(outputFilePath, serverName ? (join(serverName, fileName)) : fileName);
                                                                            tag = uuid().replace(/-/gim, '');
                                                                            fileNameMap_1[tag] = currentOutputFilePath;
                                                                            codes_1.push("\n//\u6A21\u5757\u5206\u7EC4-\u5F00\u59CB:".concat(tag, "\n").concat(code, " \n//\u6A21\u5757\u5206\u7EC4-\u7ED3\u675F:").concat(tag, "\n"));
                                                                            codeDeclares_1.push("\n//\u6A21\u5757\u5206\u7EC4-\u5F00\u59CB:".concat(tag, "\n").concat(codeDeclare, " \n//\u6A21\u5757\u5206\u7EC4-\u7ED3\u675F:").concat(tag, "\n"));
                                                                        }
                                                                        catch (e) {
                                                                            logger.error(e);
                                                                        }
                                                                        return [2 /*return*/];
                                                                    });
                                                                }); }))];
                                                        case 1:
                                                            _m.sent();
                                                            _m.label = 2;
                                                        case 2:
                                                            _m.trys.push([2, 5, , 6]);
                                                            return [4 /*yield*/, formatResultCode(codes_1, codeDeclares_1)];
                                                        case 3:
                                                            _a = __read.apply(void 0, [_m.sent(), 2]), _b = _a[0], code2_1 = _b === void 0 ? '' : _b, _c = _a[1], codeDeclare2_1 = _c === void 0 ? '' : _c;
                                                            return [4 /*yield*/, Promise.all(Object.entries(fileNameMap_1).map(function (_a, index) {
                                                                    var _b = __read(_a, 2), item = _b[0], currentOutputFilePath = _b[1];
                                                                    return __awaiter(_this, void 0, void 0, function () {
                                                                        var rex, code, codeDeclare, requestFilePath, _c, _d, _e, renderHeaderParams, _f, codeHead, codeHeadDeclare;
                                                                        var _g, _h, _j, _k;
                                                                        return __generator(this, function (_l) {
                                                                            switch (_l.label) {
                                                                                case 0:
                                                                                    rex = new RegExp("//\u6A21\u5757\u5206\u7EC4-\u5F00\u59CB:".concat(item, "([\\s\\S]*)//\u6A21\u5757\u5206\u7EC4-\u7ED3\u675F:").concat(item), 'gim');
                                                                                    code = ((_h = (_g = rex === null || rex === void 0 ? void 0 : rex.exec(code2_1)) === null || _g === void 0 ? void 0 : _g[1]) !== null && _h !== void 0 ? _h : '').trim();
                                                                                    rex.lastIndex = 0;
                                                                                    codeDeclare = ((_k = (_j = rex === null || rex === void 0 ? void 0 : rex.exec(codeDeclare2_1)) === null || _j === void 0 ? void 0 : _j[1]) !== null && _k !== void 0 ? _k : '').trim();
                                                                                    _c = removeExtensionName;
                                                                                    _d = getNormalizedRelativePath;
                                                                                    _e = [currentOutputFilePath];
                                                                                    return [4 /*yield*/, getRequestFunctionFilePath(config)];
                                                                                case 1:
                                                                                    requestFilePath = _c.apply(void 0, [_d.apply(void 0, _e.concat([_l.sent()])), EXTENSIONS]);
                                                                                    renderHeaderParams = {
                                                                                        isTS: isTS,
                                                                                        config: config,
                                                                                        requestFilePath: requestFilePath,
                                                                                        onlyTyping: config.onlyTyping && isTS
                                                                                    };
                                                                                    _f = __read(renderHeader(this.isTestEnv, renderHeaderParams, __assign(__assign({}, renderHeaderParams), { isTS: true, onlyTyping: config.onlyTyping }), this.locales), 2), codeHead = _f[0], codeHeadDeclare = _f[1];
                                                                                    result.push({
                                                                                        outputFilePath: currentOutputFilePath,
                                                                                        code: code ? "".concat(codeHead).concat(code) : '',
                                                                                        codeDeclare: codeDeclare ? "".concat(codeHeadDeclare).concat(codeDeclare) : '',
                                                                                    });
                                                                                    return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    });
                                                                }))];
                                                        case 4:
                                                            _m.sent();
                                                            return [3 /*break*/, 6];
                                                        case 5:
                                                            e_7 = _m.sent();
                                                            logger.error(e_7);
                                                            return [3 /*break*/, 6];
                                                        case 6: return [2 /*return*/];
                                                        case 7:
                                                            _m.trys.push([7, 10, , 11]);
                                                            _d = __read(_genCode(d, param), 2), code = _d[0], codeDeclare = _d[1];
                                                            currentOutputFilePath = outputFilePath;
                                                            if (serverName) {
                                                                outputFilePathList_1 = toUnixPath(outputFilePath).split('/');
                                                                lastPath = outputFilePathList_1[outputFilePathList_1.length - 1];
                                                                if (lastPath === null || lastPath === void 0 ? void 0 : lastPath.includes('.')) {
                                                                    outputFilePathList_1.pop();
                                                                    lastPathSplit = lastPath.split('.');
                                                                    outputFilePathList_1.push(__spreadArray([], __read(lastPathSplit), false).slice(0, lastPathSplit.length - 1).join('.'));
                                                                    outputFilePathList_1.push(serverName + '.' + __spreadArray([], __read(lastPathSplit), false).pop());
                                                                }
                                                                else {
                                                                    outputFilePathList_1.push(serverName);
                                                                }
                                                                currentOutputFilePath = outputFilePathList_1.join('/');
                                                            }
                                                            outputFilePathList = toUnixPath(currentOutputFilePath).split('/');
                                                            if (((_l = (_k = outputFilePathList.pop()) === null || _k === void 0 ? void 0 : _k.includes) === null || _l === void 0 ? void 0 : _l.call(_k, '.')) === false) {
                                                                currentOutputFilePath += isTS ? '.ts' : '.js';
                                                            }
                                                            _e = removeExtensionName;
                                                            _f = getNormalizedRelativePath;
                                                            _g = [currentOutputFilePath];
                                                            return [4 /*yield*/, getRequestFunctionFilePath(config)];
                                                        case 8:
                                                            requestFilePath = _e.apply(void 0, [_f.apply(void 0, _g.concat([_m.sent()])), EXTENSIONS]);
                                                            renderHeaderParams = {
                                                                isTS: isTS,
                                                                config: config,
                                                                requestFilePath: requestFilePath,
                                                                onlyTyping: config.onlyTyping && isTS
                                                            };
                                                            _h = __read(renderHeader(this.isTestEnv, renderHeaderParams, __assign(__assign({}, renderHeaderParams), { isTS: true, onlyTyping: config.onlyTyping }), this.locales), 2), codeHead = _h[0], codeHeadDeclare = _h[1];
                                                            return [4 /*yield*/, formatResultCode([codeHead, code], [codeHeadDeclare, codeDeclare])];
                                                        case 9:
                                                            _j = __read.apply(void 0, [_m.sent(), 2]), code2 = _j[0], codeDeclare2 = _j[1];
                                                            result.push({
                                                                outputFilePath: currentOutputFilePath,
                                                                code: code2,
                                                                codeDeclare: codeDeclare2,
                                                            });
                                                            return [3 /*break*/, 11];
                                                        case 10:
                                                            e_8 = _m.sent();
                                                            logger.error(e_8);
                                                            return [3 /*break*/, 11];
                                                        case 11: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 1:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 10]);
                        parserPluginRunResult_1 = __values(parserPluginRunResult), parserPluginRunResult_1_1 = parserPluginRunResult_1.next();
                        _b.label = 4;
                    case 4:
                        if (!!parserPluginRunResult_1_1.done) return [3 /*break*/, 7];
                        item = parserPluginRunResult_1_1.value;
                        return [5 /*yield**/, _loop_1(item)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        parserPluginRunResult_1_1 = parserPluginRunResult_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_6_1 = _b.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (parserPluginRunResult_1_1 && !parserPluginRunResult_1_1.done && (_a = parserPluginRunResult_1.return)) _a.call(parserPluginRunResult_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        spinner.succeed();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // 5. 输出
    Service.prototype.output = function (config, genCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var isTS, spinner, genCodes_1, genCodes_1_1, genCode, outputFilePath, declareFilePath, e_9_1, error_1;
            var e_9, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, checkOutputTS(config)];
                    case 1:
                        isTS = _b.sent();
                        spinner = ora(this.locales.$t('文件输出')).start();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 12, , 13]);
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 9, 10, 11]);
                        genCodes_1 = __values(genCodes), genCodes_1_1 = genCodes_1.next();
                        _b.label = 4;
                    case 4:
                        if (!!genCodes_1_1.done) return [3 /*break*/, 8];
                        genCode = genCodes_1_1.value;
                        outputFilePath = genCode.outputFilePath;
                        return [4 /*yield*/, outputFile(outputFilePath, genCode.code)];
                    case 5:
                        _b.sent();
                        if (!!isTS) return [3 /*break*/, 7];
                        declareFilePath = filterDeclareFilename(outputFilePath);
                        return [4 /*yield*/, outputFile(declareFilePath, genCode.codeDeclare)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        genCodes_1_1 = genCodes_1.next();
                        return [3 /*break*/, 4];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_9_1 = _b.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (genCodes_1_1 && !genCodes_1_1.done && (_a = genCodes_1.return)) _a.call(genCodes_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 11:
                        spinner.succeed();
                        // 耗时：${((Date.now() - this.startDate) / 1000).toFixed(2)}秒
                        logger.info(this.locales.$t('Done. 代码生成成功.'));
                        return [3 /*break*/, 13];
                    case 12:
                        error_1 = _b.sent();
                        spinner.fail();
                        logger.error(error_1);
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return Service;
}());
Service.init = function (options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var locales, configFile, answers, overrideAnswer, _a, code, e_10;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, new Locales().init()];
                case 1:
                    locales = _b.sent();
                    if (!(options === null || options === void 0 ? void 0 : options.config)) return [3 /*break*/, 2];
                    if (isAbsolute(options.config)) {
                        configFile = options.config;
                    }
                    else {
                        configFile = join(process.cwd(), options.config);
                    }
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, prompts([{
                            type: 'select',
                            name: 'codeType',
                            message: locales.$t('请选择配置文件类型？'),
                            choices: [
                                { title: 'JavaScript', description: 'apih.config.js', value: 'apih.config.js' },
                                { title: 'TypeScript', description: 'apih.config.ts', value: 'apih.config.ts' },
                            ],
                        }])];
                case 3:
                    answers = _b.sent();
                    if (!answers.codeType) {
                        return [2 /*return*/];
                    }
                    configFile = join(process.cwd(), answers.codeType);
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 7, , 8]);
                    return [4 /*yield*/, stat(configFile)];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, prompts([{
                                type: 'confirm',
                                name: 'override',
                                message: locales.$t('检测到已经存在配置文件，是否覆盖已有配置文件？')
                            }])];
                case 6:
                    overrideAnswer = _b.sent();
                    if (!overrideAnswer.override) {
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 8];
                case 7:
                    _a = _b.sent();
                    return [3 /*break*/, 8];
                case 8:
                    code = "import { defineConfig } from '@api-helper/cli';\n\n// ".concat(locales.$t('更多完整配置，参考文档：'), "https://github.com/ztz2/api-helper\nexport default defineConfig({\n  // ").concat(locales.$t('target'), "\n  target: 'typescript',\n  // ").concat(locales.$t('outputPath'), "\n  outputPath: 'src/api/index.ts',\n  // ").concat(locales.$t('requestFunctionFilePath'), "\n  requestFunctionFilePath: 'src/api/request.ts',\n  // ").concat(locales.$t('documentServers'), "\n  documentServers: [{\n    // ").concat(locales.$t('url'), "\n    url: '").concat(locales.$t('urlValue'), "',\n    // ").concat(locales.$t('type'), "\n    type: 'swagger',\n    // ").concat(locales.$t('dataKey'), "\n    dataKey: '',\n  }],\n});\n");
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 12, , 13]);
                    return [4 /*yield*/, outputFile(configFile, code)];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, getRequestFunctionFilePath({ outputFilePath: 'src/api/index.ts' })];
                case 11:
                    _b.sent();
                    logger.info(locales.$t('已生成配置文件.'));
                    return [3 /*break*/, 13];
                case 12:
                    e_10 = _b.sent();
                    return [2 /*return*/, logger.error(locales.$t('配置文件生成失败.'))];
                case 13: return [2 /*return*/];
            }
        });
    });
};
function renderHeader(isTestEnv, options1, options2, locales) {
    var _a, _b, _c, _d, _e, _f;
    if (isTestEnv === void 0) { isTestEnv = false; }
    if (options1 === void 0) { options1 = {}; }
    if (options2 === void 0) { options2 = {}; }
    var genTimeStr = isTestEnv ? '' : formatDate(Date.now());
    var codeHeadTpl = "\u300Aif onlyTyping !== true\u300B\u300Aif isTS\u300B/* tslint:disable */\n/* eslint-disable */\n/* prettier-ignore-start */\n\n/* ".concat(locales.$t('代码生成时间：')).concat(genTimeStr, " */\n/* ").concat(locales.$t('提示：该文件由 API Helper CLI 自动生成，请勿直接修改。'), " */\n/* ").concat(locales.$t('文档参考：'), "https://github.com/ztz2/api-helper */\n\n// @ts-ignore\n// prettier-ignore\nimport {\n  RequestFunctionRestArgsType,\u300Aif isTS && !onlyTyping\u300B\n  processRequestFunctionConfig,\u300A/if\u300B\n} from '@api-helper/cli/lib/helpers';\n// @ts-ignore\n// prettier-ignore\nimport request from '\u300ArequestFilePath\u300B';\u300Aif isTS && !onlyTyping\u300B\n// @ts-ignore\n// prettier-ignore\ntype CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;\u300A/if\u300B\n  \u300Aelse\u300B\n/* eslint-disable */\n/* prettier-ignore-start */\n\n/* ").concat(locales.$t('代码生成时间：')).concat(genTimeStr, " */\n/* ").concat(locales.$t('提示：该文件由 API Helper CLI 自动生成，请勿直接修改。'), " */\n/* ").concat(locales.$t('文档参考：'), "https://github.com/ztz2/api-helper */\n\n// prettier-ignore\nimport { processRequestFunctionConfig } from '@api-helper/cli/lib/helpers';\n// prettier-ignore\nimport request from '\u300ArequestFilePath\u300B';\n  \u300A/if\u300B\n\u300A/if\u300B\n\n");
    var codeHead = (_c = (_b = (_a = artTemplate.render(codeHeadTpl, options1)) === null || _a === void 0 ? void 0 : _a.trim) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : '';
    var codeHeadDeclare = (_f = (_e = (_d = artTemplate.render(codeHeadTpl, options2)) === null || _d === void 0 ? void 0 : _d.trim) === null || _e === void 0 ? void 0 : _e.call(_d)) !== null && _f !== void 0 ? _f : '';
    codeHead = codeHead ? codeHead + '\n\n' : codeHead;
    codeHeadDeclare = codeHeadDeclare ? codeHeadDeclare + '\n\n' : codeHeadDeclare;
    return [codeHead, codeHeadDeclare];
}
function filterCategory(apiDocument, params) {
    var isDocument = checkDocument(apiDocument);
    var categoryList = isDocument ? apiDocument.categoryList : apiDocument;
    if (typeof params.excludeCategory === 'function' || (Array.isArray(params.excludeCategory) && params.excludeCategory.length > 0) ||
        typeof params.includeCategory === 'function' || (Array.isArray(params.includeCategory) && params.includeCategory.length > 0)) {
        categoryList = categoryList.filter(function (item, index) {
            var isRemove = false;
            if (typeof params.excludeCategory === 'function') {
                isRemove = params.excludeCategory(item);
            }
            else if (Array.isArray(params.excludeCategory) && params.excludeCategory.length > 0) {
                isRemove = micromatch.isMatch(item.name, params.excludeCategory);
            }
            else if (typeof params.includeCategory === 'function') {
                isRemove = !params.includeCategory(item);
            }
            else if (Array.isArray(params.includeCategory) && params.includeCategory.length > 0) {
                isRemove = !micromatch.isMatch(item.name, params.includeCategory);
            }
            return !isRemove;
        });
    }
    if (typeof params.includeAPI === 'function' || (Array.isArray(params.includeAPI) && params.includeAPI.length > 0) ||
        typeof params.excludeAPI === 'function' || (Array.isArray(params.excludeAPI) && params.excludeAPI.length > 0)) {
        categoryList.forEach(function (item) {
            item.apiList = item.apiList.filter(function (api) {
                if (typeof params.excludeAPI === 'function') {
                    return !params.excludeAPI(api);
                }
                if ((Array.isArray(params.excludeAPI) && params.excludeAPI.length > 0)) {
                    return !params.excludeAPI.some(function (_a) {
                        var _b = __read(_a, 2), u = _b[0], _c = _b[1], m = _c === void 0 ? '*' : _c;
                        return micromatch.isMatch(api.path, u) && micromatch.isMatch(api.method.toLowerCase(), m.toLocaleString());
                    });
                }
                if (typeof params.includeAPI === 'function') {
                    return params.includeAPI(api);
                }
                if ((Array.isArray(params.includeAPI) && params.includeAPI.length > 0)) {
                    return params.includeAPI.some(function (_a) {
                        var _b = __read(_a, 2), u = _b[0], _c = _b[1], m = _c === void 0 ? '*' : _c;
                        return micromatch.isMatch(api.path, u) && micromatch.isMatch(api.method.toLowerCase(), m.toLocaleString());
                    });
                }
            });
        });
    }
    if (isDocument && 'categoryList' in apiDocument) {
        apiDocument.categoryList = categoryList;
        return apiDocument;
    }
    return categoryList;
}
function filterDeclareFilename(filename) {
    var types = ['.ts', '.js', '.tsx', '.jsx', '.mjs', '.ejs'];
    var type = types.find(function (t) { return filename.endsWith(t); });
    if (type) {
        return "".concat(filename.slice(0, filename.length - type.length), ".d.ts");
    }
    return "".concat(filename, ".d.ts");
}
function checkOutputTS(config) {
    return __awaiter(this, void 0, void 0, function () {
        var outputFilePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getOutputPath(config)];
                case 1:
                    outputFilePath = _a.sent();
                    if (config.target != null) {
                        return [2 /*return*/, config.target !== 'javascript'];
                    }
                    return [2 /*return*/, !(outputFilePath.endsWith('.js') || outputFilePath.endsWith('.jsx'))];
            }
        });
    });
}
function getOutputPath(config, showDiscardWarn) {
    var _a;
    if (showDiscardWarn === void 0) { showDiscardWarn = false; }
    return __awaiter(this, void 0, void 0, function () {
        var locales, outputPath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, new Locales().init()];
                case 1:
                    locales = _b.sent();
                    outputPath = (_a = config.outputPath) !== null && _a !== void 0 ? _a : config.outputFilePath;
                    // 兼容旧版的配置路径
                    if (config.outputFilePath) {
                        if (showDiscardWarn) {
                            if (!outputDiscardWarn) {
                                outputDiscardWarn = true;
                                logger.warn(locales.$t('documentServers.outputFilePath 属性已经废弃，请使用 documentServers.outputPath'));
                            }
                        }
                    }
                    if (config.output) {
                        // 使用旧版配置，警告提示该配置已经废弃
                        if (showDiscardWarn) {
                            if (!outputDiscardWarn) {
                                outputDiscardWarn = true;
                                logger.warn(locales.$t('documentServers.output 属性已经废弃，请使用 documentServers.outputPath'));
                            }
                        }
                        if (isAbsolute(config.output.filename)) {
                            return [2 /*return*/, config.output.filename];
                        }
                        if (isAbsolute(config.output.path)) {
                            join(config.output.path, config.output.filename);
                        }
                        return [2 /*return*/, join(resolve(config.output.path), config.output.filename)];
                    }
                    if (outputPath && isAbsolute(outputPath)) {
                        return [2 /*return*/, outputPath];
                    }
                    return [2 /*return*/, resolve(outputPath)];
            }
        });
    });
}
function removeExtensionName(filepath, extensions) {
    var e_11, _a;
    if (filepath === void 0) { filepath = ''; }
    if (extensions === void 0) { extensions = []; }
    try {
        for (var EXTENSIONS_1 = __values(EXTENSIONS), EXTENSIONS_1_1 = EXTENSIONS_1.next(); !EXTENSIONS_1_1.done; EXTENSIONS_1_1 = EXTENSIONS_1.next()) {
            var extension = EXTENSIONS_1_1.value;
            if (filepath.endsWith(extension)) {
                filepath = filepath.slice(0, filepath.length - extension.length);
                break;
            }
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (EXTENSIONS_1_1 && !EXTENSIONS_1_1.done && (_a = EXTENSIONS_1.return)) _a.call(EXTENSIONS_1);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return filepath;
}
function getRequestFunctionFilePath(config) {
    return __awaiter(this, void 0, void 0, function () {
        var locales, outputFilename, extensionName, isTS, requestFunctionFilePath, requestDeclareFunctionFilePath, _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, new Locales().init()];
                case 1:
                    locales = _e.sent();
                    return [4 /*yield*/, getOutputPath(config)];
                case 2:
                    outputFilename = _e.sent();
                    extensionName = getExtensionName(outputFilename);
                    return [4 /*yield*/, checkOutputTS(config)];
                case 3:
                    isTS = _e.sent();
                    config.requestFunctionFilePath = config.requestFunctionFilePath ? config.requestFunctionFilePath : "src/api/request.".concat(isTS ? 'ts' : 'js');
                    requestFunctionFilePath = config.requestFunctionFilePath;
                    // 兼容旧版配置
                    if (['src/utils/request', 'src/tools/request'].includes(requestFunctionFilePath)) {
                        requestFunctionFilePath += extensionName;
                    }
                    requestFunctionFilePath = resolve(requestFunctionFilePath);
                    isTS = requestFunctionFilePath.endsWith('.ts') || requestFunctionFilePath.endsWith('.tsx');
                    if (config.target) {
                        isTS = config.target === 'typescript';
                    }
                    requestDeclareFunctionFilePath = filterDeclareFilename(requestFunctionFilePath);
                    if (!(!isTS &&
                        !requestFunctionFilePath.endsWith('.ts') &&
                        !requestFunctionFilePath.endsWith('.tsx'))) return [3 /*break*/, 11];
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 6, , 11]);
                    return [4 /*yield*/, stat(resolve(requestDeclareFunctionFilePath))];
                case 5:
                    _e.sent();
                    return [3 /*break*/, 11];
                case 6:
                    _a = _e.sent();
                    _e.label = 7;
                case 7:
                    _e.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, outputFile(requestDeclareFunctionFilePath, "import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';\n// ".concat(locales.$t('自定义配置'), "\nexport type RequestOptions = {\n  //\n};\nexport default function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData>;\n"))];
                case 8:
                    _e.sent();
                    return [3 /*break*/, 10];
                case 9:
                    _b = _e.sent();
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 11];
                case 11:
                    if (config.onlyTyping && isTS) {
                        return [2 /*return*/, requestFunctionFilePath];
                    }
                    _e.label = 12;
                case 12:
                    _e.trys.push([12, 14, , 15]);
                    return [4 /*yield*/, stat(resolve(requestFunctionFilePath))];
                case 13:
                    _e.sent();
                    return [2 /*return*/, requestFunctionFilePath];
                case 14:
                    _c = _e.sent();
                    return [3 /*break*/, 15];
                case 15:
                    _e.trys.push([15, 17, , 18]);
                    return [4 /*yield*/, outputFile(requestFunctionFilePath, isTS ? "import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';\n\n// ".concat(locales.$t('自定义配置'), "\nexport type RequestOptions = {\n  //\n};\n\nexport default async function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData> {\n  return new Promise((resolve, reject) => {\n    // ").concat(locales.$t('以axios为例的请求配置'), "\n    const requestConfig = {\n      url: config.path,\n      method: config.method,\n      data: config.data,\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n      },\n    };\n    // ").concat(locales.$t('处理表单数据请求头'), "\n    if (config.hasFormData) {\n      requestConfig.headers['Content-Type'] = 'multipart/form-data';\n    }\n    console.log('").concat(locales.$t('请求配置：'), "', requestConfig);\n    // ").concat(locales.$t('TODO 待实现具体request请求逻辑...'), "\n    /**\n      // axios example\n      axios(requestConfig).then((res) => {\n        resolve(res as unknown as ResponseData);\n      }).catch(reject);\n    */\n    // ").concat(locales.$t('先用异步模拟request请求逻辑'), "\n    setTimeout(() => {\n      resolve({} as unknown as ResponseData);\n    }, 1500);\n  });\n}\n") : "export default async function request(config, options) {\n  return new Promise((resolve, reject) => {\n    // ".concat(locales.$t('以axios为例的请求配置'), "\n    const requestConfig = {\n      url: config.path,\n      method: config.method,\n      data: config.data,\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n      },\n    };\n    // ").concat(locales.$t('处理表单数据请求头'), "\n    if (config.hasFormData) {\n      requestConfig.headers['Content-Type'] = 'multipart/form-data';\n    }\n\n    console.log('").concat(locales.$t('请求配置：'), "', requestConfig);\n    // ").concat(locales.$t('TODO 待实现具体request请求逻辑...'), "\n    /**\n      // axios example\n      axios(requestConfig).then((res) => {\n        resolve(res as unknown as ResponseData);\n      }).catch(reject);\n    */\n    // ").concat(locales.$t('先用异步模拟request请求逻辑'), "\n    setTimeout(() => {\n      resolve({});\n    }, 1500);\n  });\n}\n"))];
                case 16:
                    _e.sent();
                    return [3 /*break*/, 18];
                case 17:
                    _d = _e.sent();
                    logger.error("".concat(locales.$t('请求文件创建失败：')).concat(requestFunctionFilePath));
                    process.exit(1);
                    return [3 /*break*/, 18];
                case 18: return [2 /*return*/, requestFunctionFilePath];
            }
        });
    });
}
function mergeConfig(rootConfig, serverConfig) {
    return __assign({}, merge(serverConfig, pick(rootConfig, [
        'genHeaders',
        'genCookies',
        'genResponseContentType',
        'requestFunctionFilePath',
        'requiredRequestField',
        'requiredResponseField',
        'events',
        'includeCategory',
        'excludeCategory',
        'includeAPI',
        'excludeAPI',
    ])));
}
export default Service;
