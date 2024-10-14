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
const ora_1 = __importDefault(require("ora"));
const fast_glob_1 = __importDefault(require("fast-glob"));
// import os from 'node:os';
const pinyin_pro_1 = require("pinyin-pro");
// import { Worker } from 'node:worker_threads';
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const template_1 = require("@api-helper/template");
const lodash_1 = require("lodash");
const util_1 = require("@api-helper/core/lib/utils/util");
const util_2 = require("../tools/util");
// import './worker-thread';
const locales_1 = __importDefault(require("../../lib/locales"));
const logger_1 = __importDefault(require("../../lib/tools/logger"));
const lib_1 = require("../../lib");
const const_1 = require("../../lib/service/const");
const parser_yapi_plugin_1 = __importDefault(require("./parser-plugins/parser-yapi-plugin"));
const parser_swagger_plugin_1 = __importDefault(require("./parser-plugins/parser-swagger-plugin"));
const prompts = require('prompts');
// const cpus = os.cpus().length;
// const CHUNK_NUM = 30;
let outputDiscardWarn = false;
class Service {
    constructor(options = {}, isTestEnv = false) {
        this.startDate = 0;
        this.parserPlugins = [
            new parser_yapi_plugin_1.default(),
            new parser_swagger_plugin_1.default(),
        ];
        this.tempFolder = (0, path_1.join)(__dirname, './.cache.server');
        this.isTestEnv = isTestEnv;
        this.configFilePath = options.config;
        this.constructorOptions = options;
        this.locales = new locales_1.default();
    }
    run() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.locales.init();
            this.startDate = Date.now();
            const configList = yield this.getConfigFile();
            const len = configList.length;
            // 添加解析插件
            this.injectParserPlugins(configList);
            for (let i = 0; i < configList.length; i++) {
                try {
                    const config = configList[i];
                    if (len > 1) {
                        logger_1.default.info(`———————————————————— \x1B[34m${this.locales.$t('正在处理').replace('%0', String(i + 1))}\x1B[0m ————————————————————`);
                    }
                    // 缺少文档配置，跳过该项
                    if (!((_a = config.documentServers) === null || _a === void 0 ? void 0 : _a.length)) {
                        logger_1.default.error(this.locales.$t('缺少 documentServers 配置'));
                        continue;
                    }
                    const parserPluginRunResult = yield this.parserDocument(config.documentServers, config);
                    const chooseDocumentList = yield this.chooseDocument(parserPluginRunResult);
                    const codes = yield this.genCode(config, chooseDocumentList);
                    yield this.output(config, codes);
                }
                catch (_b) { }
            }
            yield this.clear();
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, util_2.removeFolder)(this.tempFolder);
        });
    }
    injectParserPlugins(configList) {
        var _a;
        for (const config of configList) {
            const parserPlugins = (_a = config === null || config === void 0 ? void 0 : config.parserPlugins) !== null && _a !== void 0 ? _a : [];
            for (const parserPlugin of parserPlugins) {
                const parserPluginMap = this.getParserPluginMap();
                if (parserPluginMap.has(parserPlugin.name)) {
                    logger_1.default.warn(this.locales.$t('插件已经注册').replace('%0', parserPlugin.name));
                    continue;
                }
                this.parserPlugins.push(parserPlugin);
            }
        }
    }
    getParserPluginMap() {
        const map = new Map();
        for (const parserPlugin of this.parserPlugins) {
            map.set(parserPlugin.name, parserPlugin);
        }
        return map;
    }
    // 1. 获取配置文件
    getConfigFile() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const constructorOptions = this.constructorOptions;
            // 如果基于CLI执行，不需要在进行查找文件
            // npx apih -url https://xxxx.com/swagger-ui.html
            if (constructorOptions.url) {
                const outputPath = (_a = constructorOptions === null || constructorOptions === void 0 ? void 0 : constructorOptions.outputPath) !== null && _a !== void 0 ? _a : '';
                const isJS = outputPath.endsWith('.js') || constructorOptions.target === 'javascript';
                const target = ((_b = constructorOptions.target) !== null && _b !== void 0 ? _b : isJS) ? 'javascript' : 'typescript';
                const suffixName = `.${isJS ? 'js' : 'ts'}`;
                return [{
                        target,
                        outputPath: outputPath || `src/api/index${suffixName}`,
                        requestFunctionFilePath: `src/api/request${suffixName}`,
                        documentServers: [
                            {
                                url: constructorOptions.url,
                                type: (_c = constructorOptions.type) !== null && _c !== void 0 ? _c : 'swagger',
                                authToken: constructorOptions.authToken,
                            },
                        ],
                    }];
            }
            const { configFilePath } = this;
            const spinner = (0, ora_1.default)(this.locales.$t('读取配置文件')).start();
            // 有配置文件
            if (configFilePath) {
                const c = (0, util_2.getAbsolutePath)(configFilePath);
                if (!(0, fs_extra_1.pathExistsSync)(c)) {
                    spinner.fail();
                    logger_1.default.error(this.locales.$t('配置文件不存在，程序退出'));
                    return process.exit(1);
                }
                const configList = (0, lodash_1.castArray)(require(c).default);
                if (!configList.length) {
                    spinner.fail();
                    logger_1.default.error(this.locales.$t('配置为空，程序退出'));
                    return process.exit(1);
                }
                spinner.succeed();
                logger_1.default.info(this.locales.$t('配置已加载：') + (0, util_2.toUnixPath)(configFilePath));
                return configList;
            }
            // 没有从根目录寻找
            const files = yield (0, fast_glob_1.default)(['apih.config.(ts|js|cjs|mjs)'], { cwd: process.cwd(), absolute: true });
            let configList = [];
            let configPath = '';
            let hasConfigFile = false;
            for (const file of files) {
                const c = (0, util_2.getAbsolutePath)(file);
                if ((0, fs_extra_1.pathExistsSync)(c)) {
                    hasConfigFile = true;
                    const temp = (0, lodash_1.castArray)(require(c).default);
                    if (temp && temp.length) {
                        configPath = file;
                        configList = temp;
                    }
                }
            }
            if (!hasConfigFile) {
                spinner.fail();
                logger_1.default.error(this.locales.$t('配置文件不存在，程序退出'));
                process.exit(1);
            }
            if (!configList.length) {
                spinner.fail();
                logger_1.default.error(this.locales.$t('配置为空，程序退出'));
                return process.exit(1);
            }
            spinner.succeed();
            logger_1.default.info(this.locales.$t('配置已加载：') + (0, util_2.toUnixPath)(configPath));
            return configList;
        });
    }
    // 2. 文档获取与解析
    parserDocument(documentServers, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, util_2.documentServersRunParserPlugins)(documentServers, this.parserPlugins, config);
            return result.parserPluginRunResult;
        });
    }
    // 3. 选择项目文档
    chooseDocument(parserPluginRunResult) {
        return __awaiter(this, void 0, void 0, function* () {
            const choicesDocumentListOptions = [];
            parserPluginRunResult.forEach((d, idx) => {
                d.parsedDocumentList.forEach((item) => {
                    const choice = {
                        title: item.title,
                        description: d.documentServer.url,
                        value: item.id,
                        selected: true,
                    };
                    if (!choice.title) {
                        choice.title = `[${idx}]${d.documentServer.url}`;
                        delete choice.description;
                    }
                    choicesDocumentListOptions.push(choice);
                });
            });
            if (choicesDocumentListOptions.length > 1) {
                const answers = yield prompts([{
                        type: 'multiselect',
                        name: 'documentList',
                        message: '配置中存在多个项目，请选择项目文档(默认全部)',
                        choices: choicesDocumentListOptions,
                    }]);
                if (answers.documentList.length === 0) {
                    const failText = this.locales.$t('未选择接口文档');
                    logger_1.default.error(failText);
                    return Promise.reject(failText);
                }
                parserPluginRunResult = parserPluginRunResult.filter((d) => {
                    d.parsedDocumentList = d.parsedDocumentList.filter((item) => answers.documentList.includes(item.id));
                    return d.parsedDocumentList.length > 0;
                });
            }
            if (parserPluginRunResult.length === 0) {
                const failText = this.locales.$t('未选择接口文档');
                logger_1.default.error(failText);
                return Promise.reject(failText);
            }
            return parserPluginRunResult;
        });
    }
    // 4. 生成代码
    genCode(config, parserPluginRunResult) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            const outputFilePath = yield getOutputPath(config);
            const isTS = yield checkOutputTS(config);
            // 生成代码
            const spinner = (0, ora_1.default)(this.locales.$t('代码生成，这可能需要等待一段时间...')).start();
            const _genCode = (documentList, params) => {
                params = Object.assign({}, params);
                let code = (0, template_1.renderAllApi)(documentList, params) || '';
                let codeDeclare = '';
                if (!code.endsWith('\n')) {
                    code += '\n';
                }
                if (!isTS) {
                    params.isDeclare = true;
                    params.codeType = 'typescript';
                    codeDeclare = (0, template_1.renderAllApi)(documentList, params);
                    if (!codeDeclare.endsWith('\n')) {
                        codeDeclare += '\n';
                    }
                }
                return [code, codeDeclare];
            };
            const formatResultCode = (codes = [], codeDeclares = []) => __awaiter(this, void 0, void 0, function* () {
                const result = [];
                result.push(yield (0, lib_1.formatCode)({
                    sourceCode: codes.filter(Boolean).join('\n'),
                    formatCodeExtension: isTS ? '.ts' : '.js',
                }));
                if (!isTS) {
                    result.push(yield (0, lib_1.formatCode)({
                        sourceCode: codeDeclares.filter(Boolean).join('\n'),
                        formatCodeExtension: '.ts',
                    }));
                }
                return result;
            });
            for (const item of parserPluginRunResult) {
                const { documentServer, parsedDocumentList } = item;
                const { dataKey } = documentServer;
                const serverName = documentServer.name ? (0, pinyin_pro_1.pinyin)(documentServer.name, { toneType: 'none', type: 'array' }).join('') : '';
                yield Promise.all(parsedDocumentList.map((d) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b;
                    const mgConfig = mergeConfig(config, documentServer);
                    const eventTemp = mgConfig.events;
                    delete mgConfig.events;
                    Object.assign(mgConfig, eventTemp);
                    const param = Object.assign(Object.assign({}, mgConfig), { codeType: isTS ? 'typescript' : 'javascript', dataKey: dataKey, isDeclare: false });
                    // let workerStartError = false;
                    // const categoryListLength = d.categoryList.length;
                    // const enableParallel = config.parallel !== false && cpus > 1 && categoryListLength > CHUNK_NUM;
                    // const enableParallel = config.parallel !== false && cpus > 1 && categoryListLength > CHUNK_NUM;
                    // // 使用多线程生成
                    // if (enableParallel) {
                    //   const categoryWrap: Array<APIHelper.CategoryList> = [];
                    //   const chunkSize = Math.abs(categoryListLength / cpus);
                    //   let temp: APIHelper.CategoryList = [];
                    //   for (let i = 0; i < d.categoryList.length; i++) {
                    //     temp.push(d.categoryList[i]);
                    //     if (temp.length >= chunkSize || (i === categoryListLength - 1 && temp.length > 0)) {
                    //       categoryWrap.push([...temp]);
                    //       temp = [];
                    //     }
                    //   }
                    //   const parallelResult: Array<{code: string; codeDeclare: string;}> = [];
                    //   await Promise.all(categoryWrap.map((categoryList, index) => new Promise((resolve) => {
                    //     try{
                    //       const worker = new Worker(processTSFile(join(__filename, '../worker-thread.ts')), {
                    //         workerData: {
                    //           isTS,
                    //           param,
                    //           categoryList,
                    //         }
                    //       });
                    //       worker.on('message', (res) => {
                    //         parallelResult[index] = res;
                    //         resolve(1);
                    //       });
                    //       worker.on('error', (e) => {
                    //         console.error(e);
                    //         resolve(1);
                    //       });
                    //       worker.on('exit', (code) => {
                    //         resolve(1);
                    //       });
                    //     } catch (e) {
                    //       resolve(1);
                    //       workerStartError = true;
                    //     }
                    //   })));
                    //   for (const item of parallelResult) {
                    //     if (item && 'code' in item) {
                    //       codes.push(item.code);
                    //       if (!isTS) {
                    //         codeDeclares.push(item.codeDeclare);
                    //       }
                    //     }
                    //   }
                    //   if (!workerStartError) {
                    //     return;
                    //   }
                    // }
                    // 普通模式
                    if (config.group) {
                        const fileNameRecord = {};
                        const codes = [];
                        const codeDeclares = [];
                        const fileNameMap = {};
                        yield Promise.all(d.categoryList.map((category) => __awaiter(this, void 0, void 0, function* () {
                            var _c;
                            try {
                                const [code, codeDeclare] = _genCode([category], param);
                                const lastName = (_c = category.name.split('/').filter(Boolean).pop()) === null || _c === void 0 ? void 0 : _c.replace(/[.\s]/gim, '');
                                const fileNameBase = (0, pinyin_pro_1.pinyin)(lastName, { toneType: 'none', type: 'array' }).join('');
                                fileNameRecord[fileNameBase] = fileNameRecord[fileNameBase] ? fileNameRecord[fileNameBase] + 1 : 1;
                                const fileName = (fileNameRecord[fileNameBase] > 1 ? `${fileNameBase}${fileNameRecord[fileNameBase]}` : fileNameBase) + `${isTS ? '.ts' : '.js'}`;
                                const currentOutputFilePath = (0, path_1.join)(outputFilePath, serverName ? ((0, path_1.join)(serverName, fileName)) : fileName);
                                const tag = (0, util_1.uuid)().replace(/-/gim, '');
                                fileNameMap[tag] = currentOutputFilePath;
                                codes.push(`\n//模块分组-开始:${tag}\n${code} \n//模块分组-结束:${tag}\n`);
                                codeDeclares.push(`\n//模块分组-开始:${tag}\n${codeDeclare} \n//模块分组-结束:${tag}\n`);
                            }
                            catch (e) {
                                logger_1.default.error(e);
                            }
                        })));
                        try {
                            const [code2 = '', codeDeclare2 = ''] = yield formatResultCode(codes, codeDeclares);
                            yield Promise.all(Object.entries(fileNameMap).map(([item, currentOutputFilePath], index) => __awaiter(this, void 0, void 0, function* () {
                                var _d, _e, _f, _g;
                                const rex = new RegExp(`\/\/模块分组-开始:${item}([\\s\\S]*)\/\/模块分组-结束:${item}`, 'gim');
                                const code = ((_e = (_d = rex === null || rex === void 0 ? void 0 : rex.exec(code2)) === null || _d === void 0 ? void 0 : _d[1]) !== null && _e !== void 0 ? _e : '').trim();
                                rex.lastIndex = 0;
                                const codeDeclare = ((_g = (_f = rex === null || rex === void 0 ? void 0 : rex.exec(codeDeclare2)) === null || _f === void 0 ? void 0 : _f[1]) !== null && _g !== void 0 ? _g : '').trim();
                                const requestFilePath = removeExtensionName((0, util_2.getNormalizedRelativePath)(currentOutputFilePath, yield getRequestFunctionFilePath(config)), const_1.EXTENSIONS);
                                const renderHeaderParams = {
                                    isTS,
                                    config,
                                    requestFilePath,
                                    onlyTyping: config.onlyTyping && isTS
                                };
                                const [codeHead, codeHeadDeclare] = renderHeader(this.isTestEnv, renderHeaderParams, Object.assign(Object.assign({}, renderHeaderParams), { isTS: true, onlyTyping: config.onlyTyping }), this.locales);
                                result.push({
                                    outputFilePath: currentOutputFilePath,
                                    code: code ? `${codeHead}${code}` : '',
                                    codeDeclare: codeDeclare ? `${codeHeadDeclare}${codeDeclare}` : '',
                                });
                            })));
                        }
                        catch (e) {
                            logger_1.default.error(e);
                        }
                        return;
                    }
                    try {
                        const [code, codeDeclare] = _genCode(d, param);
                        let currentOutputFilePath = outputFilePath;
                        if (serverName) {
                            const outputFilePathList = (0, util_2.toUnixPath)(outputFilePath).split('/');
                            const lastPath = outputFilePathList[outputFilePathList.length - 1];
                            if (lastPath === null || lastPath === void 0 ? void 0 : lastPath.includes('.')) {
                                outputFilePathList.pop();
                                const lastPathSplit = lastPath.split('.');
                                outputFilePathList.push([...lastPathSplit].slice(0, lastPathSplit.length - 1).join('.'));
                                outputFilePathList.push(serverName + '.' + [...lastPathSplit].pop());
                            }
                            else {
                                outputFilePathList.push(serverName);
                            }
                            currentOutputFilePath = outputFilePathList.join('/');
                        }
                        const outputFilePathList = (0, util_2.toUnixPath)(currentOutputFilePath).split('/');
                        if (((_b = (_a = outputFilePathList.pop()) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, '.')) === false) {
                            currentOutputFilePath += isTS ? '.ts' : '.js';
                        }
                        const requestFilePath = removeExtensionName((0, util_2.getNormalizedRelativePath)(currentOutputFilePath, yield getRequestFunctionFilePath(config)), const_1.EXTENSIONS);
                        const renderHeaderParams = {
                            isTS,
                            config,
                            requestFilePath,
                            onlyTyping: config.onlyTyping && isTS
                        };
                        const [codeHead, codeHeadDeclare] = renderHeader(this.isTestEnv, renderHeaderParams, Object.assign(Object.assign({}, renderHeaderParams), { isTS: true, onlyTyping: config.onlyTyping }), this.locales);
                        const [code2, codeDeclare2] = yield formatResultCode([codeHead, code], [codeHeadDeclare, codeDeclare]);
                        result.push({
                            outputFilePath: currentOutputFilePath,
                            code: code2,
                            codeDeclare: codeDeclare2,
                        });
                    }
                    catch (e) {
                        logger_1.default.error(e);
                    }
                })));
            }
            spinner.succeed();
            return result;
        });
    }
    // 5. 输出
    output(config, genCodes) {
        return __awaiter(this, void 0, void 0, function* () {
            const isTS = yield checkOutputTS(config);
            const spinner = (0, ora_1.default)(this.locales.$t('文件输出')).start();
            try {
                for (const genCode of genCodes) {
                    const outputFilePath = genCode.outputFilePath;
                    yield (0, fs_extra_1.outputFile)(outputFilePath, genCode.code);
                    if (!isTS) {
                        const declareFilePath = filterDeclareFilename(outputFilePath);
                        yield (0, fs_extra_1.outputFile)(declareFilePath, genCode.codeDeclare);
                    }
                }
                spinner.succeed();
                // 耗时：${((Date.now() - this.startDate) / 1000).toFixed(2)}秒
                logger_1.default.info(this.locales.$t('Done. 代码生成成功.'));
            }
            catch (error) {
                spinner.fail();
                logger_1.default.error(error);
                return Promise.reject(error);
            }
        });
    }
}
Service.init = function (options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const locales = yield new locales_1.default().init();
        let configFile;
        if (options === null || options === void 0 ? void 0 : options.config) {
            if ((0, path_1.isAbsolute)(options.config)) {
                configFile = options.config;
            }
            else {
                configFile = (0, path_1.join)(process.cwd(), options.config);
            }
        }
        else {
            const answers = yield prompts([{
                    type: 'select',
                    name: 'codeType',
                    message: locales.$t('请选择配置文件类型？'),
                    choices: [
                        { title: 'JavaScript', description: 'apih.config.js', value: 'apih.config.js' },
                        { title: 'TypeScript', description: 'apih.config.ts', value: 'apih.config.ts' },
                    ],
                }]);
            if (!answers.codeType) {
                return;
            }
            configFile = (0, path_1.join)(process.cwd(), answers.codeType);
        }
        // 检测文件是否已经存在
        try {
            yield (0, fs_extra_1.stat)(configFile);
            const overrideAnswer = yield prompts([{
                    type: 'confirm',
                    name: 'override',
                    message: locales.$t('检测到已经存在配置文件，是否覆盖已有配置文件？')
                }]);
            if (!overrideAnswer.override) {
                return;
            }
        }
        catch (_a) { }
        const code = `import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  // ${locales.$t('group')}
  group: false,
  // ${locales.$t('onlyTyping')}
  onlyTyping: false,
  // ${locales.$t('outputPath')}
  outputPath: 'src/api/index.ts',
  // ${locales.$t('target')}
  target: 'typescript',
  // ${locales.$t('requestFunctionFilePath')}
  requestFunctionFilePath: 'src/api/request.ts',
  // ${locales.$t('requiredRequestField')}
  requiredRequestField: false,
  // ${locales.$t('requiredResponseField')}
  requiredResponseField: true,
  // ${locales.$t('documentServers')}
  documentServers: [{
    // ${locales.$t('url')}
    url: '${locales.$t('urlValue')}',
    // ${locales.$t('type')}
    type: 'swagger',
    // ${locales.$t('name')}
    name: '',
    // ${locales.$t('dataKey')}
    dataKey: '',
    // ${locales.$t('auth')}
    auth: {
      username: '',
      password: '',
    },
    // ${locales.$t('authToken')}
    authToken: '',
  }],
});
`;
        try {
            yield (0, fs_extra_1.outputFile)(configFile, code);
            yield getRequestFunctionFilePath({ outputFilePath: 'src/api/index.ts' });
            logger_1.default.info(locales.$t('已生成配置文件.'));
        }
        catch (e) {
            return logger_1.default.error(locales.$t('配置文件生成失败.'));
        }
    });
};
function renderHeader(isTestEnv = false, options1 = {}, options2 = {}, locales) {
    var _a, _b, _c, _d, _e, _f;
    const genTimeStr = isTestEnv ? '' : (0, util_1.formatDate)(Date.now());
    const codeHeadTpl = `《if onlyTyping !== true》《if isTS》/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* ${locales.$t('代码生成时间：')}${genTimeStr} */
/* ${locales.$t('提示：该文件由 API Helper CLI 自动生成，请勿直接修改。')} */
/* ${locales.$t('文档参考：')}https://github.com/ztz2/api-helper */

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,《if isTS && !onlyTyping》
  processRequestFunctionConfig,《/if》
} from '@api-helper/cli/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from '《requestFilePath》';《if isTS && !onlyTyping》
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;《/if》
  《else》
/* eslint-disable */
/* prettier-ignore-start */

/* ${locales.$t('代码生成时间：')}${genTimeStr} */
/* ${locales.$t('提示：该文件由 API Helper CLI 自动生成，请勿直接修改。')} */
/* ${locales.$t('文档参考：')}https://github.com/ztz2/api-helper */

// prettier-ignore
import { processRequestFunctionConfig } from '@api-helper/cli/lib/helpers';
// prettier-ignore
import request from '《requestFilePath》';
  《/if》
《/if》

`;
    let codeHead = (_c = (_b = (_a = template_1.artTemplate.render(codeHeadTpl, options1)) === null || _a === void 0 ? void 0 : _a.trim) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : '';
    let codeHeadDeclare = (_f = (_e = (_d = template_1.artTemplate.render(codeHeadTpl, options2)) === null || _d === void 0 ? void 0 : _d.trim) === null || _e === void 0 ? void 0 : _e.call(_d)) !== null && _f !== void 0 ? _f : '';
    codeHead = codeHead ? codeHead + '\n\n' : codeHead;
    codeHeadDeclare = codeHeadDeclare ? codeHeadDeclare + '\n\n' : codeHeadDeclare;
    return [codeHead, codeHeadDeclare];
}
function filterDeclareFilename(filename) {
    const types = ['.ts', '.js', '.tsx', '.jsx', '.mjs', '.ejs'];
    const type = types.find((t) => filename.endsWith(t));
    if (type) {
        return `${filename.slice(0, filename.length - type.length)}.d.ts`;
    }
    return `${filename}.d.ts`;
}
function checkOutputTS(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputFilePath = yield getOutputPath(config);
        if (config.target != null) {
            return config.target !== 'javascript';
        }
        return !(outputFilePath.endsWith('.js') || outputFilePath.endsWith('.jsx'));
    });
}
function getOutputPath(config, showDiscardWarn = false) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const locales = yield new locales_1.default().init();
        const outputPath = (_a = config.outputPath) !== null && _a !== void 0 ? _a : config.outputFilePath;
        // 兼容旧版的配置路径
        if (config.outputFilePath) {
            if (showDiscardWarn) {
                if (!outputDiscardWarn) {
                    outputDiscardWarn = true;
                    logger_1.default.warn(locales.$t('documentServers.outputFilePath 属性已经废弃，请使用 documentServers.outputPath'));
                }
            }
        }
        if (config.output) {
            // 使用旧版配置，警告提示该配置已经废弃
            if (showDiscardWarn) {
                if (!outputDiscardWarn) {
                    outputDiscardWarn = true;
                    logger_1.default.warn(locales.$t('documentServers.output 属性已经废弃，请使用 documentServers.outputPath'));
                }
            }
            if ((0, path_1.isAbsolute)(config.output.filename)) {
                return config.output.filename;
            }
            if ((0, path_1.isAbsolute)(config.output.path)) {
                (0, path_1.join)(config.output.path, config.output.filename);
            }
            return (0, path_1.join)((0, util_2.resolve)(config.output.path), config.output.filename);
        }
        if (outputPath && (0, path_1.isAbsolute)(outputPath)) {
            return outputPath;
        }
        return (0, util_2.resolve)(outputPath);
    });
}
function removeExtensionName(filepath = '', extensions = []) {
    for (const extension of const_1.EXTENSIONS) {
        if (filepath.endsWith(extension)) {
            filepath = filepath.slice(0, filepath.length - extension.length);
            break;
        }
    }
    return filepath;
}
function getRequestFunctionFilePath(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const locales = yield new locales_1.default().init();
        const outputFilename = yield getOutputPath(config);
        const extensionName = (0, util_2.getExtensionName)(outputFilename);
        let isTS = yield checkOutputTS(config);
        config.requestFunctionFilePath = config.requestFunctionFilePath ? config.requestFunctionFilePath : `src/api/request.${isTS ? 'ts' : 'js'}`;
        let requestFunctionFilePath = config.requestFunctionFilePath;
        // 兼容旧版配置
        if (['src/utils/request', 'src/tools/request'].includes(requestFunctionFilePath)) {
            requestFunctionFilePath += extensionName;
        }
        requestFunctionFilePath = (0, util_2.resolve)(requestFunctionFilePath);
        isTS = requestFunctionFilePath.endsWith('.ts') || requestFunctionFilePath.endsWith('.tsx');
        if (config.target) {
            isTS = config.target === 'typescript';
        }
        const requestDeclareFunctionFilePath = filterDeclareFilename(requestFunctionFilePath);
        // 创建request文件类型申明文件
        if (!isTS &&
            !requestFunctionFilePath.endsWith('.ts') &&
            !requestFunctionFilePath.endsWith('.tsx')) {
            try {
                yield (0, fs_extra_1.stat)((0, util_2.resolve)(requestDeclareFunctionFilePath));
            }
            catch (_a) {
                try {
                    yield (0, fs_extra_1.outputFile)(requestDeclareFunctionFilePath, `import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';
// ${locales.$t('自定义配置')}
export type RequestOptions = {
  //
};
export default function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData>;
`);
                }
                catch (_b) { }
            }
        }
        if (config.onlyTyping && isTS) {
            return requestFunctionFilePath;
        }
        try { // 路径可以访问，文件已经创建，直接返回
            yield (0, fs_extra_1.stat)((0, util_2.resolve)(requestFunctionFilePath));
            return requestFunctionFilePath;
        }
        catch (_c) { }
        try { // 不可访问，重新创建文件
            yield (0, fs_extra_1.outputFile)(requestFunctionFilePath, isTS ? `import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';

// ${locales.$t('自定义配置')}
export type RequestOptions = {
  //
};

export default async function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData> {
  return new Promise((resolve, reject) => {
    // ${locales.$t('以axios为例的请求配置')}
    const requestConfig = {
      url: config.path,
      method: config.method,
      data: config.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // ${locales.$t('处理表单数据请求头')}
    if (config.hasFormData) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }
    console.log('${locales.$t('请求配置：')}', requestConfig);
    // ${locales.$t('TODO 待实现具体request请求逻辑...')}
    /**
      // axios example
      axios(requestConfig).then((res) => {
        resolve(res as unknown as ResponseData);
      }).catch(reject);
    */
    // ${locales.$t('先用异步模拟request请求逻辑')}
    setTimeout(() => {
      resolve({} as unknown as ResponseData);
    }, 1500);
  });
}
` : `export default async function request(config, options) {
  return new Promise((resolve, reject) => {
    // ${locales.$t('以axios为例的请求配置')}
    const requestConfig = {
      url: config.path,
      method: config.method,
      data: config.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // ${locales.$t('处理表单数据请求头')}
    if (config.hasFormData) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }

    console.log('${locales.$t('请求配置：')}', requestConfig);
    // ${locales.$t('TODO 待实现具体request请求逻辑...')}
    /**
      // axios example
      axios(requestConfig).then((res) => {
        resolve(res as unknown as ResponseData);
      }).catch(reject);
    */
    // ${locales.$t('先用异步模拟request请求逻辑')}
    setTimeout(() => {
      resolve({});
    }, 1500);
  });
}
`);
        }
        catch (_d) {
            logger_1.default.error(`${locales.$t('请求文件创建失败：')}${requestFunctionFilePath}`);
            process.exit(1);
        }
        return requestFunctionFilePath;
    });
}
function mergeConfig(rootConfig, serverConfig) {
    return Object.assign({}, (0, lodash_1.merge)(serverConfig, (0, lodash_1.pick)(rootConfig, [
        'genHeaders',
        'genCookies',
        'genResponseContentType',
        'requestFunctionFilePath',
        'requiredRequestField',
        'requiredResponseField',
        'events',
    ])));
}
exports.default = Service;
