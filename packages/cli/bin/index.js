#!/usr/bin/env node
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
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
const lib_1 = require("../lib");
const log_1 = __importDefault(require("../lib/tools/log"));
const util_1 = require("../lib/tools/util");
const program = new commander_1.Command();
const { version } = (0, util_1.loadModule)(path_1.default.join(require.resolve('@api-helper/cli'), '../../package.json'), false);
// root指令
program
    .version(version)
    .description('API生成工具')
    .option('-D, --debug', '调试模式')
    .option('-c, --config <string>', '配置文件')
    .action(function (options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { config } = options;
        if (config) {
            log_1.default.verbose('-c --config ', String(config));
        }
        yield (0, lib_1.run)(null, config);
    });
});
// 帮助信息
program.addHelpText('after', `
详细命令说明:
初始化配置文件: apih init
生成代码: apih
生成代码(指定配置文件): apih -c 路径/配置文件.ts
查看帮助: apih -h

# GitHub
https://github.com/ztz2/api-helper
`);
// 初始化配置
program
    .command('init')
    .description('初始化配置')
    .option('-D, --debug', '调试模式')
    .action(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, lib_1.run)('init');
    });
});
program.parse();
