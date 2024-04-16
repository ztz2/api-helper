#!/usr/bin/env node
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
import path from 'path';
import { Command } from 'commander';
import { loadModule, createFolder, removeFolder, } from '../lib/tools/util';
import { run } from '../lib';
var program = new Command();
var basePath = createFolder(path.join(__dirname, './.cache.load.module'));
var version = loadModule(path.join(require.resolve('@api-helper/cli'), '../../package.json'), {
    isAsync: false,
    folder: basePath,
    callback: function () {
        removeFolder(basePath);
    }
}).version;
// root指令
program
    .version(version)
    .description('API生成工具')
    .option('-D, --debug', '调试模式')
    .option('-c, --config <string>', '配置文件')
    .option('-u, --url <string>', "\u63A5\u53E3\u6587\u6863\u5730\u5740\u3010\u5F53type\u4E3A'swagger'\u7C7B\u578B\u65F6\uFF0C\u53EF\u4EE5\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8FD9\u91CC\u5C31\u53EF\u4EE5\u4E00\u4E2A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\u3011")
    .option('-o, --output-path <path>', '代码生成后的输出路径')
    .option('--target <string>', '生成的目标代码类型，默认: typescript')
    .option('--type <string>', "\u6587\u6863\u7C7B\u578B\uFF0C\u6839\u636E\u6587\u6863\u7C7B\u578B\uFF0C\u8C03\u7528\u5185\u7F6E\u7684\u89E3\u6790\u5668\uFF0C\u9ED8\u8BA4\u503C: 'swagger'")
    .option('--auth-token <string>', '访问文档可能需要认证信息，通过使用token访问，yapi的验证token')
    .action(function () {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = program.opts();
                    return [4 /*yield*/, run(null, options)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
// 帮助信息
program.addHelpText('after', "\n\u8BE6\u7EC6\u547D\u4EE4\u8BF4\u660E:\n\u521D\u59CB\u5316\u914D\u7F6E\u6587\u4EF6: apih init\n\u521D\u59CB\u5316\u914D\u7F6E\u6587\u4EF6(\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84): apih init -c \u8DEF\u5F84/\u914D\u7F6E\u6587\u4EF6.ts\n\u751F\u6210\u4EE3\u7801: apih\n\u751F\u6210\u4EE3\u7801(\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6): apih -c \u8DEF\u5F84/\u914D\u7F6E\u6587\u4EF6.ts\n\u67E5\u770B\u5E2E\u52A9: apih -h\n\n# GitHub\nhttps://github.com/ztz2/api-helper\n");
// 初始化配置
program
    .command('init')
    .description('初始化配置')
    .option('-D, --debug', '调试模式')
    .option('-c, --config <string>', '自定义配置文件路径')
    .action(function () {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = program.opts();
                    return [4 /*yield*/, run('init', options)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
program.parse();
