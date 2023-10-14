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
import to from 'await-to-js';
import merge from 'lodash/merge';
import cp from 'node:child_process';
import { remove, readFile } from 'fs-extra';
import { getErrorMessage } from '@api-helper/core/lib/utils/util';
import { FORMAT_CODE_EXTENSION } from '@api-helper/core/lib/constant';
import { PrettierOptions } from '@api-helper/core/lib/interface';
import { checkType, createTempFile, } from '../../lib/tools/util';
import log from '../../lib/tools/log';
export default function formatCode(config) {
    return __awaiter(this, void 0, void 0, function () {
        var codeList_1, tasks, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Array.isArray(config)) return [3 /*break*/, 2];
                    codeList_1 = [];
                    tasks = [];
                    _loop_1 = function (i) {
                        tasks.push(format(config[i]).then(function (c) { return codeList_1[i] = c; }));
                    };
                    for (i = 0; i < config.length; i++) {
                        _loop_1(i);
                    }
                    return [4 /*yield*/, to(Promise.all(tasks))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, codeList_1];
                case 2: return [4 /*yield*/, format(config)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function format(config) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var sourceCode, formatCodeExtension, errorText, prettierOptions, prettierOptionsStr, filepath, prettierFilePath, clearTempFile;
        var _this = this;
        return __generator(this, function (_a) {
            sourceCode = config.sourceCode, formatCodeExtension = config.formatCodeExtension;
            if (!sourceCode) {
                return [2 /*return*/, resolve(sourceCode)];
            }
            if (!FORMAT_CODE_EXTENSION.includes(formatCodeExtension)) {
                errorText = "@api-helper/cli/lib/tools/format.ts \u672A\u77E5\u7684\u6587\u4EF6\u7C7B\u578B".concat(formatCodeExtension, "\u3002\u5141\u8BB8\u7684\u7C7B\u578B\uFF1A").concat(FORMAT_CODE_EXTENSION.toString());
                log.warn('提示', errorText);
                return [2 /*return*/, resolve(errorText)];
            }
            prettierOptions = {};
            try {
                prettierOptions = checkType(config.prettierOptions, 'Object') ?
                    config.prettierOptions :
                    checkType(config.prettierOptions, 'String') ? JSON.parse(config.prettierOptions) : {};
            }
            catch (_b) { }
            prettierOptionsStr = JSON.stringify(merge(new PrettierOptions(), prettierOptions));
            filepath = createTempFile(sourceCode, { postfix: formatCodeExtension });
            prettierFilePath = createTempFile(prettierOptionsStr, { postfix: '.json' });
            clearTempFile = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([to(remove(filepath)), to(remove(prettierFilePath))])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); };
            cp.exec("npx prettier --write ".concat(filepath, " --config ").concat(prettierFilePath), function (err) { return __awaiter(_this, void 0, void 0, function () {
                var errorText, formattedCode, e_1, errorText;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!err) return [3 /*break*/, 2];
                            errorText = "@api-helper/cli/lib/tools/format.ts \u683C\u5F0F\u5316\u4EE3\u7801\u5931\u8D25\uFF1A".concat(getErrorMessage(err));
                            log.warn('提示', errorText);
                            return [4 /*yield*/, clearTempFile()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, resolve(errorText)];
                        case 2:
                            _a.trys.push([2, 4, 5, 7]);
                            return [4 /*yield*/, readFile(filepath)];
                        case 3:
                            formattedCode = (_a.sent()).toString();
                            resolve(formattedCode);
                            return [3 /*break*/, 7];
                        case 4:
                            e_1 = _a.sent();
                            errorText = "@api-helper/lib/tools/format.ts \u8BFB\u53D6\u4E34\u65F6\u6587\u4EF6\u5931\u8D25\uFF1A".concat(getErrorMessage(e_1));
                            log.warn('提示', errorText);
                            return [2 /*return*/, resolve(errorText)];
                        case 5: return [4 /*yield*/, clearTempFile()];
                        case 6:
                            _a.sent();
                            return [7 /*endfinally*/];
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
}
