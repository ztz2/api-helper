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
const log_1 = __importDefault(require("../../lib/tools/log"));
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
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        const { sourceCode, formatCodeExtension } = config;
        if (!sourceCode) {
            return resolve(sourceCode);
        }
        if (!constant_1.FORMAT_CODE_EXTENSION.includes(formatCodeExtension)) {
            const errorText = `@api-helper/cli/lib/tools/format.ts 未知的文件类型${formatCodeExtension}。允许的类型：${constant_1.FORMAT_CODE_EXTENSION.toString()}`;
            log_1.default.warn('提示', errorText);
            return resolve(errorText);
        }
        let prettierOptions = {};
        try {
            prettierOptions = (0, util_2.checkType)(config.prettierOptions, 'Object') ?
                config.prettierOptions :
                (0, util_2.checkType)(config.prettierOptions, 'String') ? JSON.parse(config.prettierOptions) : {};
        }
        catch (_a) { }
        const prettierOptionsStr = JSON.stringify((0, merge_1.default)(new interface_1.PrettierOptions(), prettierOptions));
        const filepath = (0, util_2.createTempFile)(sourceCode, { postfix: formatCodeExtension });
        const prettierFilePath = (0, util_2.createTempFile)(prettierOptionsStr, { postfix: '.json' });
        const clearTempFile = () => __awaiter(this, void 0, void 0, function* () { yield Promise.all([(0, await_to_js_1.default)((0, fs_extra_1.remove)(filepath)), (0, await_to_js_1.default)((0, fs_extra_1.remove)(prettierFilePath))]); });
        node_child_process_1.default.exec(`npx prettier --write ${filepath} --config ${prettierFilePath}`, (err) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                const errorText = `@api-helper/cli/lib/tools/format.ts 格式化代码失败：${(0, util_1.getErrorMessage)(err)}`;
                log_1.default.warn('提示', errorText);
                yield clearTempFile();
                return resolve(errorText);
            }
            try {
                const formattedCode = (yield (0, fs_extra_1.readFile)(filepath)).toString();
                resolve(formattedCode);
            }
            catch (e) {
                const errorText = `@api-helper/lib/tools/format.ts 读取临时文件失败：${(0, util_1.getErrorMessage)(e)}`;
                log_1.default.warn('提示', errorText);
                return resolve(errorText);
            }
            finally {
                yield clearTempFile();
            }
        }));
    }));
}
