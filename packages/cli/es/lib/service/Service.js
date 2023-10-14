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
import ora from 'ora';
import fg from 'fast-glob';
import { join, isAbsolute, } from 'path';
import { stat, outputFile, } from 'fs-extra';
import { artTemplate, renderAllApi, } from '@api-helper/template';
import { formatDate } from '@api-helper/core/lib/utils/util';
import { getErrorMessage } from '@api-helper/core/lib/utils/util';
import log from '../../lib/tools/log';
import { resolve, loadModule, getExtensionName, getNormalizedRelativePath, documentServersRunParserPlugins, } from '../tools/util';
import { formatCode } from '../../lib';
import { EXTENSIONS } from '../../lib/service/const';
import ParserYapiPlugin from './parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from './parser-plugins/parser-swagger-plugin';
var prompts = require('prompts');
var outputDiscardWarn = false;
var Service = /** @class */ (function () {
    function Service(configFilePath, isTestEnv) {
        if (isTestEnv === void 0) { isTestEnv = false; }
        this.parserPlugins = [
            new ParserYapiPlugin(),
            new ParserSwaggerPlugin(),
        ];
        this.isTestEnv = isTestEnv;
        this.configFilePath = configFilePath;
    }
    Service.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configList, len, i, config, parserPluginRunResult, chooseDocumentList, codes, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getConfigFile()];
                    case 1:
                        configList = _b.sent();
                        len = configList.length;
                        // 添加解析插件
                        this.injectParserPlugins(configList);
                        i = 0;
                        _b.label = 2;
                    case 2:
                        if (!(i < configList.length)) return [3 /*break*/, 10];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, , 9]);
                        config = configList[i];
                        if (len > 1) {
                            console.log("\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 \u001B[34m\u6B63 \u5728 \u5904 \u7406 ".concat(i + 1, " \u9879\u001B[0m \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"));
                        }
                        return [4 /*yield*/, this.parserDocument(config.documentServers, config)];
                    case 4:
                        parserPluginRunResult = _b.sent();
                        return [4 /*yield*/, this.chooseDocument(parserPluginRunResult)];
                    case 5:
                        chooseDocumentList = _b.sent();
                        return [4 /*yield*/, this.genCode(config, chooseDocumentList)];
                    case 6:
                        codes = _b.sent();
                        return [4 /*yield*/, this.output(config, codes)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        _a = _b.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        i++;
                        return [3 /*break*/, 2];
                    case 10: return [2 /*return*/];
                }
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
                            log.warn('提示', "".concat(parserPlugin.name, "\u63D2\u4EF6\u5DF2\u7ECF\u5B58\u5728."));
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
    // 1. 获取配置文件
    Service.prototype.getConfigFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configFilePath, oraText, spinner, c, files, c, failText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configFilePath = this.configFilePath;
                        oraText = '读取 apih.config.(js|ts) 配置文件';
                        spinner = ora(oraText).start();
                        if (!configFilePath) return [3 /*break*/, 2];
                        return [4 /*yield*/, loadModule(configFilePath)];
                    case 1:
                        c = _a.sent();
                        if (c) {
                            spinner.succeed();
                            return [2 /*return*/, Array.isArray(c) ? c : [c]];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, fg(['apih.config.(js|ts|cjs|mjs)'], { cwd: process.cwd(), absolute: true })];
                    case 3:
                        files = _a.sent();
                        if (!files.length) return [3 /*break*/, 5];
                        return [4 /*yield*/, loadModule(files[0])];
                    case 4:
                        c = _a.sent();
                        if (c) {
                            spinner.succeed();
                            return [2 /*return*/, Array.isArray(c) ? c : [c]];
                        }
                        _a.label = 5;
                    case 5:
                        failText = oraText + '【失败：配置文件不存在，程序即将退出】';
                        spinner.fail(failText);
                        process.exit(1);
                        return [2 /*return*/];
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
    Service.prototype.chooseDocument = function (parserPluginRunResult) {
        return __awaiter(this, void 0, void 0, function () {
            var choicesDocumentListOptions, answers_1, failText, failText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        choicesDocumentListOptions = [];
                        parserPluginRunResult.forEach(function (d, idx) {
                            d.parsedDocumentList.forEach(function (item) {
                                var choice = {
                                    title: item.title,
                                    description: d.documentServer.url,
                                    value: item.id,
                                    selected: true,
                                };
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
                            failText = '没有选择任何项目文档';
                            log.error('提示', failText);
                            return [2 /*return*/, Promise.reject(failText)];
                        }
                        parserPluginRunResult = parserPluginRunResult.filter(function (d) {
                            d.parsedDocumentList = d.parsedDocumentList.filter(function (item) { return answers_1.documentList.includes(item.id); });
                            return d.parsedDocumentList.length > 0;
                        });
                        _a.label = 2;
                    case 2:
                        if (parserPluginRunResult.length === 0) {
                            failText = '没有选择任何项目文档';
                            log.error('提示', failText);
                            return [2 /*return*/, Promise.reject(failText)];
                        }
                        return [2 /*return*/, parserPluginRunResult];
                }
            });
        });
    };
    // 4. 生成代码
    Service.prototype.genCode = function (config, parserPluginRunResult) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var result, oraText, outputFilename, isTS, requestFilePath, _c, _d, EXTENSIONS_1, EXTENSIONS_1_1, extension, genTimeStr, codeHeadTpl, codeHead, codeHeadTS, code, codeDeclare, spinner, parserPluginRunResult_1, parserPluginRunResult_1_1, item, documentServer, parsedDocumentList, dataKey, parsedDocumentList_1, parsedDocumentList_1_1, d, param, str1, str2, _e, _f, _g, _h;
            var e_4, _j, e_5, _k, e_6, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        result = [];
                        oraText = "\u4EE3\u7801\u751F\u6210";
                        outputFilename = getOutputFilePath(config);
                        isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');
                        _c = getNormalizedRelativePath;
                        _d = [outputFilename];
                        return [4 /*yield*/, getRequestFunctionFilePath(config)];
                    case 1:
                        requestFilePath = _c.apply(void 0, _d.concat([_m.sent()]));
                        try {
                            // 移除request文件后缀名
                            for (EXTENSIONS_1 = __values(EXTENSIONS), EXTENSIONS_1_1 = EXTENSIONS_1.next(); !EXTENSIONS_1_1.done; EXTENSIONS_1_1 = EXTENSIONS_1.next()) {
                                extension = EXTENSIONS_1_1.value;
                                if (requestFilePath.endsWith(extension)) {
                                    requestFilePath = requestFilePath.slice(0, requestFilePath.length - extension.length);
                                    break;
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (EXTENSIONS_1_1 && !EXTENSIONS_1_1.done && (_j = EXTENSIONS_1.return)) _j.call(EXTENSIONS_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        genTimeStr = this.isTestEnv ? '' : formatDate(Date.now());
                        codeHeadTpl = "\n\u300Aif config.onlyTyping !== true\u300B\n  \u300Aif isTS\u300B\n/* tslint:disable */\n/* eslint-disable */\n/* prettier-ignore-start */\n\n/* \u4EE3\u7801\u751F\u6210\u65F6\u95F4: ".concat(genTimeStr, " */\n/* \u63D0\u793A\uFF1A\u8BE5\u6587\u4EF6\u7531 API Helper CLI \u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4FEE\u6539\u3002 */\n/* \u6587\u6863\u53C2\u8003\uFF1Ahttps://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */\n\n// @ts-ignore\n// prettier-ignore\nimport {\n  RequestFunctionRestArgsType,").concat(isTS ? "\n  processRequestFunctionConfig," : '', "\n} from '@api-helper/cli/lib/helpers';\n// @ts-ignore\n// prettier-ignore\nimport request from '\u300ArequestFilePath\u300B';\n// @ts-ignore\n// prettier-ignore\ntype CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;\n  \u300Aelse\u300B\n/* eslint-disable */\n/* prettier-ignore-start */\n\n/* \u4EE3\u7801\u751F\u6210\u65F6\u95F4: ").concat(genTimeStr, " */\n/* \u63D0\u793A\uFF1A\u8BE5\u6587\u4EF6\u7531 API Helper CLI \u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4FEE\u6539\u3002 */\n/* \u6587\u6863\u53C2\u8003\uFF1Ahttps://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */\n\n// prettier-ignore\nimport { processRequestFunctionConfig } from '@api-helper/cli/lib/helpers';\n// prettier-ignore\nimport request from '\u300ArequestFilePath\u300B';\n  \u300A/if\u300B\n\u300A/if\u300B\n\n");
                        codeHead = artTemplate.render(codeHeadTpl, {
                            isTS: isTS,
                            requestFilePath: requestFilePath,
                            config: config,
                        });
                        codeHeadTS = artTemplate.render(codeHeadTpl, {
                            isTS: true,
                            requestFilePath: requestFilePath,
                            config: config,
                        });
                        code = [codeHead];
                        codeDeclare = [codeHeadTS];
                        spinner = ora(oraText).start();
                        try {
                            for (parserPluginRunResult_1 = __values(parserPluginRunResult), parserPluginRunResult_1_1 = parserPluginRunResult_1.next(); !parserPluginRunResult_1_1.done; parserPluginRunResult_1_1 = parserPluginRunResult_1.next()) {
                                item = parserPluginRunResult_1_1.value;
                                documentServer = item.documentServer, parsedDocumentList = item.parsedDocumentList;
                                dataKey = documentServer.dataKey;
                                try {
                                    for (parsedDocumentList_1 = (e_6 = void 0, __values(parsedDocumentList)), parsedDocumentList_1_1 = parsedDocumentList_1.next(); !parsedDocumentList_1_1.done; parsedDocumentList_1_1 = parsedDocumentList_1.next()) {
                                        d = parsedDocumentList_1_1.value;
                                        try {
                                            param = __assign(__assign(__assign({}, config), documentServer), { codeType: isTS ? 'typescript' : 'javascript', dataKey: dataKey, isDeclare: false, onRenderInterfaceName: (_a = documentServer === null || documentServer === void 0 ? void 0 : documentServer.events) === null || _a === void 0 ? void 0 : _a.onRenderInterfaceName, onRenderRequestFunctionName: (_b = documentServer === null || documentServer === void 0 ? void 0 : documentServer.events) === null || _b === void 0 ? void 0 : _b.onRenderRequestFunctionName });
                                            str1 = renderAllApi(d, param);
                                            if (!str1.endsWith('\n')) {
                                                str1 += '\n';
                                            }
                                            code.push(str1);
                                            if (!isTS) {
                                                param.isDeclare = true;
                                                param.codeType = 'typescript';
                                                str2 = renderAllApi(d, param);
                                                if (!str2.endsWith('\n')) {
                                                    str2 += '\n';
                                                }
                                                codeDeclare.push(str2);
                                            }
                                        }
                                        catch (e) {
                                            console.log(e);
                                        }
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (parsedDocumentList_1_1 && !parsedDocumentList_1_1.done && (_l = parsedDocumentList_1.return)) _l.call(parsedDocumentList_1);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (parserPluginRunResult_1_1 && !parserPluginRunResult_1_1.done && (_k = parserPluginRunResult_1.return)) _k.call(parserPluginRunResult_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        spinner.succeed();
                        _f = (_e = result).push;
                        return [4 /*yield*/, formatCode({
                                sourceCode: code.filter(Boolean).join('\n'),
                                formatCodeExtension: isTS ? '.ts' : '.js',
                            })];
                    case 2:
                        _f.apply(_e, [_m.sent()]);
                        if (!!isTS) return [3 /*break*/, 4];
                        _h = (_g = result).push;
                        return [4 /*yield*/, formatCode({
                                sourceCode: codeDeclare.filter(Boolean).join('\n'),
                                formatCodeExtension: '.ts',
                            })];
                    case 3:
                        _h.apply(_g, [_m.sent()]);
                        _m.label = 4;
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    // 5. 输出
    Service.prototype.output = function (config, code) {
        return __awaiter(this, void 0, void 0, function () {
            var oraText, outputFilename, outputDeclareFilename, isTS, spinner, error_1, failText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oraText = "\u6587\u4EF6\u8F93\u51FA";
                        outputFilename = getOutputFilePath(config, true);
                        outputDeclareFilename = filterDeclareFilename(outputFilename);
                        isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');
                        spinner = ora(oraText).start();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, outputFile(outputFilename, code[0])];
                    case 2:
                        _a.sent();
                        if (!!isTS) return [3 /*break*/, 4];
                        return [4 /*yield*/, outputFile(outputDeclareFilename, code[1])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        spinner.succeed();
                        log.info('提示', "Done. \u4EE3\u7801\u751F\u6210\u6210\u529F");
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        failText = oraText + "\u3010\u5931\u8D25\uFF1A".concat(getErrorMessage(error_1), "\u3011");
                        spinner.fail(failText);
                        return [2 /*return*/, Promise.reject(failText)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Service;
}());
Service.init = function () {
    return __awaiter(this, void 0, void 0, function () {
        var answers, overrideAnswer, _a, code, e_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, prompts([{
                            type: 'select',
                            name: 'codeType',
                            message: '请选择配置文件类型？',
                            choices: [
                                { title: 'JavaScript', description: 'apih.config.js', value: 'apih.config.js' },
                                { title: 'TypeScript', description: 'apih.config.ts', value: 'apih.config.ts' },
                            ],
                        }])];
                case 1:
                    answers = _b.sent();
                    if (!answers.codeType) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, getRequestFunctionFilePath({ outputFilePath: 'src/api/index.ts' })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, stat(join(process.cwd(), answers.codeType))];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, prompts([{
                                type: 'confirm',
                                name: 'override',
                                message: '检测到已经存在配置文件，是否覆盖已有配置文件？'
                            }])];
                case 5:
                    overrideAnswer = _b.sent();
                    if (!overrideAnswer.override) {
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 7];
                case 6:
                    _a = _b.sent();
                    return [3 /*break*/, 7];
                case 7:
                    code = "import { defineConfig } from '@api-helper/cli';\n\nexport default defineConfig({\n  // \u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F1A\u6839\u636E\u540E\u7F00\u540D(.js|.ts)\u5224\u65AD\u662F\u751F\u6210TS\u8FD8\u662FJS\u6587\u4EF6\n  outputFilePath: 'src/api/index.ts',\n  // \u63A5\u53E3\u8BF7\u6C42\u51FD\u6570\u6587\u4EF6\u8DEF\u5F84\n  requestFunctionFilePath: 'src/api/request.ts',\n  // \u63A5\u53E3\u6587\u6863\u670D\u52A1\u914D\u7F6E\n  documentServers: [\n    {\n      // \u6587\u6863\u5730\u5740\u3010\u5F53\u4E0B\u9762\u7684type\u4E3Aswagger\u7C7B\u578B\u65F6\uFF0C\u53EF\u4EE5\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8FD9\u91CC\u5C31\u662F\u4E00\u4E2A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\u3011\n      url: 'http://\u9700\u8981\u586B\u5199\u7684\u9879\u76EE\u6587\u6863\u5730\u5740',\n      // \u6587\u6863\u7C7B\u578B\uFF0C\u6839\u636E\u6587\u6863\u7C7B\u578B\uFF0C\u8C03\u7528\u5185\u7F6E\u7684\u89E3\u6790\u5668\uFF0C\u9ED8\u8BA4\u503C: 'swagger'\u3010\u5185\u7F6Eyapi\u548Cswagger\u7684\u89E3\u6790\uFF0C\u5176\u4ED6\u6587\u6863\u7C7B\u578B\uFF0C\u6DFB\u52A0parserPlugins\u81EA\u884C\u5B9E\u73B0\u6587\u6863\u89E3\u6790\u3011\n      type: 'swagger',\n      // \u83B7\u53D6\u6570\u636E\u7684key\uFF0Cbody[dataKey]\n      dataKey: '',\n    },\n  ],\n});\n";
                    _b.label = 8;
                case 8:
                    _b.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, outputFile(join(process.cwd(), answers.codeType), code)];
                case 9:
                    _b.sent();
                    log.info('提示', '已生成配置文件');
                    return [3 /*break*/, 11];
                case 10:
                    e_7 = _b.sent();
                    return [2 /*return*/, log.error('提示', '配置文件生成失败')];
                case 11: return [2 /*return*/];
            }
        });
    });
};
function filterDeclareFilename(filename) {
    if (filename.endsWith('.ts') ||
        filename.endsWith('.js')) {
        return "".concat(filename.slice(0, filename.length - 3), ".d.ts");
    }
    if (filename.endsWith('.tsx') ||
        filename.endsWith('.jsx') ||
        filename.endsWith('.mjs') ||
        filename.endsWith('.ejs')) {
        return "".concat(filename.slice(0, filename.length - 4), ".d.ts");
    }
    return "".concat(filename, ".d.ts");
}
function getOutputFilePath(config, showDiscardWarn) {
    if (showDiscardWarn === void 0) { showDiscardWarn = false; }
    // 兼容旧版的配置路径
    if (config.output) {
        // 使用旧版配置，警告提示该配置已经废弃
        if (showDiscardWarn) {
            if (!outputDiscardWarn) {
                outputDiscardWarn = true;
                log.warn('提示', 'documentServers.output配置已经废弃，请使用documentServers.outputFilePath');
            }
        }
        if (isAbsolute(config.output.filename)) {
            return config.output.filename;
        }
        if (isAbsolute(config.output.path)) {
            join(config.output.path, config.output.filename);
        }
        return join(resolve(config.output.path), config.output.filename);
    }
    if (isAbsolute(config.outputFilePath)) {
        return config.outputFilePath;
    }
    return resolve(config.outputFilePath);
}
function getRequestFunctionFilePath(config) {
    return __awaiter(this, void 0, void 0, function () {
        var outputFilename, extensionName, isTS, requestFunctionFilePath, requestDeclareFunctionFilePath, _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    outputFilename = getOutputFilePath(config);
                    extensionName = getExtensionName(outputFilename);
                    isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');
                    config.requestFunctionFilePath = config.requestFunctionFilePath ? config.requestFunctionFilePath : "src/api/request.".concat(isTS ? 'ts' : 'js');
                    requestFunctionFilePath = config.requestFunctionFilePath;
                    // 兼容旧版配置
                    if (['src/utils/request', 'src/tools/request'].includes(requestFunctionFilePath)) {
                        requestFunctionFilePath += extensionName;
                    }
                    requestFunctionFilePath = resolve(requestFunctionFilePath);
                    isTS = requestFunctionFilePath.endsWith('.ts') || requestFunctionFilePath.endsWith('.tsx');
                    requestDeclareFunctionFilePath = filterDeclareFilename(requestFunctionFilePath);
                    if (!(!isTS &&
                        !requestFunctionFilePath.endsWith('.ts') &&
                        !requestFunctionFilePath.endsWith('.tsx'))) return [3 /*break*/, 8];
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 8]);
                    return [4 /*yield*/, stat(resolve(requestDeclareFunctionFilePath))];
                case 2:
                    _e.sent();
                    return [3 /*break*/, 8];
                case 3:
                    _a = _e.sent();
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, outputFile(requestDeclareFunctionFilePath, "import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';\n// \u81EA\u5B9A\u4E49\u914D\u7F6E\nexport type RequestOptions = {\n  // \u81EA\u5B9A\u4E49\u914D\u7F6E\u5C5E\u6027\n};\nexport default function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData>;\n")];
                case 5:
                    _e.sent();
                    return [3 /*break*/, 7];
                case 6:
                    _b = _e.sent();
                    return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 8];
                case 8:
                    if (config.onlyTyping) {
                        return [2 /*return*/, requestFunctionFilePath];
                    }
                    _e.label = 9;
                case 9:
                    _e.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, stat(resolve(requestFunctionFilePath))];
                case 10:
                    _e.sent();
                    return [2 /*return*/, requestFunctionFilePath];
                case 11:
                    _c = _e.sent();
                    return [3 /*break*/, 12];
                case 12:
                    _e.trys.push([12, 14, , 15]);
                    return [4 /*yield*/, outputFile(requestFunctionFilePath, isTS ? "import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';\n\n// \u81EA\u5B9A\u4E49\u914D\u7F6E\nexport type RequestOptions = {\n  // \u81EA\u5B9A\u4E49\u914D\u7F6E\u5C5E\u6027\n};\n\nexport default async function request<T>(config: RequestFunctionConfig, options?: RequestOptions): Promise<T> {\n  return new Promise((resolve, reject) => {\n    const { method, data, path } = config;\n    console.log(path, method, data);\n    // TODO\u5F85\u5B9E\u73B0\u5177\u4F53request\u8BF7\u6C42\u903B\u8F91...\n    // \u5148\u7528\u5F02\u6B65\u6A21\u62DFrequest\u8BF7\u6C42\u903B\u8F91\uFF0C\u5177\u4F53\u5B9E\u73B0\u518D\u5220\u9664\n    setTimeout(() => {\n      resolve({} as unknown as T);\n    }, 1500);\n  });\n}\n" : "export default async function request(config, options) {\n  return new Promise((resolve, reject) => {\n    const { method, data, path } = config;\n    console.log(path, method, data);\n    // TODO\u5F85\u5B9E\u73B0\u5177\u4F53request\u8BF7\u6C42\u903B\u8F91...\n    // \u5148\u7528\u5F02\u6B65\u6A21\u62DFrequest\u8BF7\u6C42\u903B\u8F91\uFF0C\u5177\u4F53\u5B9E\u73B0\u518D\u5220\u9664\n    setTimeout(() => {\n      resolve({});\n    }, 1500);\n  });\n}\n")];
                case 13:
                    _e.sent();
                    return [3 /*break*/, 15];
                case 14:
                    _d = _e.sent();
                    log.error('提示', "\u7EDF\u4E00\u8BF7\u6C42\u6587\u4EF6\u521B\u5EFA\u5931\u8D25\uFF1A".concat(requestFunctionFilePath));
                    process.exit(1);
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/, requestFunctionFilePath];
            }
        });
    });
}
export default Service;
