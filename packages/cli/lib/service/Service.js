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
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const template_1 = require("@api-helper/template");
const util_1 = require("@api-helper/core/lib/utils/util");
const log_1 = __importDefault(require("../../lib/tools/log"));
const util_2 = require("../tools/util");
const lib_1 = require("../../lib");
const const_1 = require("../../lib/service/const");
const parser_yapi_plugin_1 = __importDefault(require("./parser-plugins/parser-yapi-plugin"));
const parser_swagger_plugin_1 = __importDefault(require("./parser-plugins/parser-swagger-plugin"));
const prompts = require('prompts');
let outputDiscardWarn = false;
class Service {
    constructor(configFilePath, isTestEnv = false) {
        this.parserPlugins = [
            new parser_yapi_plugin_1.default(),
            new parser_swagger_plugin_1.default(),
        ];
        this.isTestEnv = isTestEnv;
        this.configFilePath = configFilePath;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const configList = yield this.getConfigFile();
            const len = configList.length;
            // 添加解析插件
            this.injectParserPlugins(configList);
            for (let i = 0; i < configList.length; i++) {
                try {
                    const config = configList[i];
                    if (len > 1) {
                        console.log(`\n———————————————————— \x1B[34m正 在 处 理 ${i + 1} 项\x1B[0m ————————————————————`);
                    }
                    const parserPluginRunResult = yield this.parserDocument(config.documentServers, config);
                    const chooseDocumentList = yield this.chooseDocument(parserPluginRunResult);
                    const code = yield this.genCode(config, chooseDocumentList);
                    yield this.output(config, code);
                }
                catch (_a) { }
            }
        });
    }
    injectParserPlugins(configList) {
        var _a;
        for (const config of configList) {
            const parserPlugins = (_a = config === null || config === void 0 ? void 0 : config.parserPlugins) !== null && _a !== void 0 ? _a : [];
            for (const parserPlugin of parserPlugins) {
                const parserPluginMap = this.getParserPluginMap();
                if (parserPluginMap.has(parserPlugin.name)) {
                    log_1.default.warn('提示', `${parserPlugin.name}插件已经存在.`);
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
        return __awaiter(this, void 0, void 0, function* () {
            const { configFilePath } = this;
            const oraText = '读取 apih.config.(js|ts) 配置文件';
            const spinner = (0, ora_1.default)(oraText).start();
            // 有配置文件
            if (configFilePath) {
                const c = yield (0, util_2.loadModule)(configFilePath);
                if (c) {
                    spinner.succeed();
                    return Array.isArray(c) ? c : [c];
                }
            }
            // 没有从根目录寻找
            const files = yield (0, fast_glob_1.default)(['apih.config.(js|ts|cjs|mjs)'], { cwd: process.cwd(), absolute: true });
            if (files.length) {
                const c = yield (0, util_2.loadModule)(files[0]);
                if (c) {
                    spinner.succeed();
                    return Array.isArray(c) ? c : [c];
                }
            }
            const failText = oraText + '【失败：配置文件不存在，程序即将退出】';
            spinner.fail(failText);
            process.exit(1);
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
                    const failText = '没有选择任何项目文档';
                    log_1.default.error('提示', failText);
                    return Promise.reject(failText);
                }
                parserPluginRunResult = parserPluginRunResult.filter((d) => {
                    d.parsedDocumentList = d.parsedDocumentList.filter((item) => answers.documentList.includes(item.id));
                    return d.parsedDocumentList.length > 0;
                });
            }
            if (parserPluginRunResult.length === 0) {
                const failText = '没有选择任何项目文档';
                log_1.default.error('提示', failText);
                return Promise.reject(failText);
            }
            return parserPluginRunResult;
        });
    }
    // 4. 生成代码
    genCode(config, parserPluginRunResult) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const oraText = `代码生成`;
            const outputFilename = getOutputFilePath(config);
            const isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');
            let requestFilePath = (0, util_2.getNormalizedRelativePath)(outputFilename, yield getRequestFunctionFilePath(config));
            // 移除request文件后缀名
            for (const extension of const_1.EXTENSIONS) {
                if (requestFilePath.endsWith(extension)) {
                    requestFilePath = requestFilePath.slice(0, requestFilePath.length - extension.length);
                    break;
                }
            }
            const codeHead = template_1.artTemplate.render(`
《if config.onlyTyping !== true》
  《if isTS》
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* 提示：该文件由 API Helper CLI 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,
  processRequestFunctionConfig,
} from '@api-helper/core/es/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from '《requestFilePath》';
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;
  《else》
/* eslint-disable */
/* prettier-ignore-start */

/* 提示：该文件由 API Helper CLI 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper/blob/main/packages/cli/README.md */

// prettier-ignore
import { processRequestFunctionConfig } from '@api-helper/core/es/lib/helpers';
// prettier-ignore
import request from '《requestFilePath》';
  《/if》
《/if》

`, {
                isTS,
                requestFilePath,
                config,
            });
            // 生成代码
            const code = [codeHead];
            const spinner = (0, ora_1.default)(oraText).start();
            for (const item of parserPluginRunResult) {
                const { documentServer, parsedDocumentList } = item;
                const { dataKey } = documentServer;
                for (const d of parsedDocumentList) {
                    try {
                        let str = (0, template_1.renderAllApi)(d, Object.assign(Object.assign(Object.assign({}, config), documentServer), { codeType: isTS ? 'typescript' : 'javascript', dataKey: dataKey, showUpdateTime: !this.isTestEnv, onRenderInterfaceName: (_a = documentServer === null || documentServer === void 0 ? void 0 : documentServer.events) === null || _a === void 0 ? void 0 : _a.onRenderInterfaceName, onRenderRequestFunctionName: (_b = documentServer === null || documentServer === void 0 ? void 0 : documentServer.events) === null || _b === void 0 ? void 0 : _b.onRenderRequestFunctionName }));
                        if (!str.endsWith('\n')) {
                            str += '\n';
                        }
                        code.push(str);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
            spinner.succeed();
            return yield (0, lib_1.formatCode)({
                sourceCode: code.filter(Boolean).join('\n'),
                formatCodeExtension: isTS ? '.ts' : '.js',
            });
        });
    }
    // 5. 输出
    output(config, code) {
        return __awaiter(this, void 0, void 0, function* () {
            const oraText = `文件输出`;
            const outputFilename = getOutputFilePath(config, true);
            const spinner = (0, ora_1.default)(oraText).start();
            // 输出
            try {
                yield (0, fs_extra_1.outputFile)(outputFilename, code);
                spinner.succeed();
                log_1.default.info('提示', `Done. 代码生成成功`);
            }
            catch (error) {
                const failText = oraText + `【失败：${(0, util_1.getErrorMessage)(error)}】`;
                spinner.fail(failText);
                return Promise.reject(failText);
            }
        });
    }
}
Service.init = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield prompts([{
                type: 'select',
                name: 'codeType',
                message: '请选择配置文件类型？',
                choices: [
                    { title: 'JavaScript', description: 'apih.config.js', value: 'apih.config.js' },
                    { title: 'TypeScript', description: 'apih.config.ts', value: 'apih.config.ts' },
                ],
            }]);
        if (!answers.codeType) {
            return;
        }
        yield getRequestFunctionFilePath({ outputFilePath: 'src/api/index.ts' });
        // 检测文件是否已经存在
        try {
            yield (0, fs_extra_1.stat)((0, path_1.join)(process.cwd(), answers.codeType));
            const overrideAnswer = yield prompts([{
                    type: 'confirm',
                    name: 'override',
                    message: '检测到已经存在配置文件，是否覆盖已有配置文件？'
                }]);
            if (!overrideAnswer.override) {
                return;
            }
        }
        catch (_a) { }
        const code = `import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  // 输出文件路径，会根据后缀名(.js|.ts)判断是生成TS还是JS文件
  outputFilePath: 'src/api/index.ts',
  // 接口请求函数文件路径
  requestFunctionFilePath: 'src/api/request.ts',
  // 接口文档服务配置
  documentServers: [
    {
      // 文档地址【当下面的type为swagger类型时，可以读取本地文件，这里就是一个本地文件路径】
      url: 'http://需要填写的项目文档地址',
      // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
      type: 'swagger',
      // 获取数据的key，body[dataKey]
      dataKey: '',
    },
  ],
});
`;
        try {
            yield (0, fs_extra_1.outputFile)((0, path_1.join)(process.cwd(), answers.codeType), code);
            log_1.default.info('提示', '已生成配置文件');
        }
        catch (e) {
            return log_1.default.error('提示', '配置文件生成失败');
        }
    });
};
function getOutputFilePath(config, showDiscardWarn = false) {
    // 兼容旧版的配置路径
    if (config.output) {
        // 使用旧版配置，警告提示该配置已经废弃
        if (showDiscardWarn) {
            if (!outputDiscardWarn) {
                outputDiscardWarn = true;
                log_1.default.warn('提示', 'documentServers.output配置已经废弃，请使用documentServers.outputFilePath');
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
    if ((0, path_1.isAbsolute)(config.outputFilePath)) {
        return config.outputFilePath;
    }
    return (0, util_2.resolve)(config.outputFilePath);
}
function getRequestFunctionFilePath(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputFilename = getOutputFilePath(config);
        const extensionName = (0, util_2.getExtensionName)(outputFilename);
        const isTS = outputFilename.endsWith('.ts') || outputFilename.endsWith('.tsx');
        config.requestFunctionFilePath = config.requestFunctionFilePath ? config.requestFunctionFilePath : `src/api/request.${isTS ? 'ts' : 'js'}`;
        let requestFunctionFilePath = config.requestFunctionFilePath;
        // 兼容旧版配置
        if (['src/utils/request', 'src/tools/request'].includes(requestFunctionFilePath)) {
            requestFunctionFilePath += extensionName;
        }
        requestFunctionFilePath = (0, util_2.resolve)(requestFunctionFilePath);
        if (config.onlyTyping) {
            return requestFunctionFilePath;
        }
        try { // 路径可以访问，文件已经创建，直接返回
            yield (0, fs_extra_1.stat)((0, util_2.resolve)(requestFunctionFilePath));
            return requestFunctionFilePath;
        }
        catch (_a) { }
        try { // 不可访问，重新创建文件
            yield (0, fs_extra_1.outputFile)(requestFunctionFilePath, isTS ? `import { RequestFunctionConfig } from '@api-helper/core/es/lib/helpers';

export default async function request<T>(config: RequestFunctionConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const { method, data, path } = config;
    console.log(path, method, data);
    // TODO待实现具体request请求逻辑...
    // 先用异步模拟request请求逻辑，具体实现再删除
    setTimeout(() => {
      resolve({} as unknown as T);
    }, 1500);
  });
}
` : `export default async function request(config) {
  return new Promise((resolve, reject) => {
    const { method, data, path } = config;
    console.log(path, method, data);
    // TODO待实现具体request请求逻辑...
    // 先用异步模拟request请求逻辑，具体实现再删除
    setTimeout(() => {
      resolve({});
    }, 1500);
  });
}
`);
        }
        catch (_b) {
            log_1.default.error('提示', `统一请求文件创建失败：${requestFunctionFilePath}`);
            process.exit(1);
        }
        return requestFunctionFilePath;
    });
}
exports.default = Service;
