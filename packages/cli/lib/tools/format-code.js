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
const merge_1 = __importDefault(require("lodash/merge"));
const node_child_process_1 = __importDefault(require("node:child_process"));
const fs_extra_1 = require("fs-extra");
const util_1 = require("@api-helper/core/lib/utils/util");
const constant_1 = require("@api-helper/core/lib/constant");
const interface_1 = require("@api-helper/core/lib/interface");
const util_2 = require("../../lib/tools/util");
const logger_1 = __importDefault(require("../../lib/tools/logger"));
const path_1 = __importDefault(require("path"));
function formatCode(config) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Array.isArray(config)) {
            const codeList = [];
            const tasks = [];
            for (let i = 0; i < config.length; i++) {
                tasks.push(format(config[i]).then((c) => codeList[i] = c));
            }
            yield (0, await_to_js_1.default)(Promise.all(tasks));
            return codeList;
        }
        return yield format(config);
    });
}
exports.default = formatCode;
function format(config) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const { sourceCode, formatCodeExtension } = config;
            const baseFolder = config.tempFilePath ? config.tempFilePath : (0, util_2.createFolder)(path_1.default.join(__dirname, './.cache.format.code'));
            let prettierOptions = {};
            try {
                prettierOptions = (0, util_2.checkType)(config.prettierOptions, 'Object') ?
                    config.prettierOptions :
                    (0, util_2.checkType)(config.prettierOptions, 'String') ? JSON.parse(config.prettierOptions) : {};
            }
            catch (_a) { }
            if (!config.tempFilePath && (config === null || config === void 0 ? void 0 : config.onlyClearTempFolder)) {
                (0, util_2.removeFolder)(baseFolder);
                return '';
            }
            if (!sourceCode) {
                return resolve(sourceCode);
            }
            if (!constant_1.FORMAT_CODE_EXTENSION.includes(formatCodeExtension)) {
                const errorText = `@api-helper/cli/lib/tools/format.ts 未知的文件类型${formatCodeExtension}。允许的类型：${constant_1.FORMAT_CODE_EXTENSION.toString()}`;
                logger_1.default.warn(errorText);
                return resolve(errorText);
            }
            const prettierOptionsStr = JSON.stringify((0, merge_1.default)(new interface_1.PrettierOptions(), prettierOptions));
            const filepath = config.tempFilePath ? config.tempFilePath : (0, util_2.createTempFileByTMP)(sourceCode, { postfix: formatCodeExtension });
            const prettierFilePath = config.tempPrettierFilePath ? config.tempPrettierFilePath : (0, util_2.createTempFileByTMP)(prettierOptionsStr, { postfix: '.json' });
            const clear = () => {
                !config.tempFilePath && (0, util_2.removeFolder)(filepath);
                !config.tempPrettierFilePath && (0, util_2.removeFolder)(prettierFilePath);
            };
            node_child_process_1.default.exec(`npx prettier --write ${filepath} --config ${prettierFilePath}`, (err) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    resolve(config.sourceCode);
                    const errorText = `\n@api-helper/cli/lib/tools/format.ts 格式化代码失败：\n${(0, util_1.getErrorMessage)(err)}`;
                    console.log('\n');
                    logger_1.default.warn(errorText);
                    return clear();
                }
                try {
                    const formattedCode = (yield (0, fs_extra_1.readFile)(filepath)).toString();
                    resolve(formattedCode);
                }
                catch (e) {
                    resolve(config.sourceCode);
                    const errorText = `\n@api-helper/lib/tools/format.ts 读取临时文件失败：\n${(0, util_1.getErrorMessage)(e)}`;
                    console.log('\n');
                    logger_1.default.warn(errorText);
                }
                finally {
                    clear();
                }
            }));
        }));
    });
}
