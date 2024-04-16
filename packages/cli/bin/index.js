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
const util_1 = require("../lib/tools/util");
const lib_1 = require("../lib");
const program = new commander_1.Command();
const basePath = (0, util_1.createFolder)(path_1.default.join(__dirname, './.cache.load.module'));
const { version } = (0, util_1.loadModule)(path_1.default.join(require.resolve('@api-helper/cli'), '../../package.json'), {
    isAsync: false,
    folder: basePath,
    callback: () => {
        (0, util_1.removeFolder)(basePath);
    }
});
// root指令
program
    .version(version)
    .description('API生成工具')
    .option('-D, --debug', '调试模式')
    .option('-c, --config <string>', '配置文件')
    .option('-u, --url <string>', `接口文档地址【当type为'swagger'类型时，可以读取本地文件，这里就可以一个本地文件路径】`)
    .option('-o, --output-path <path>', '代码生成后的输出路径')
    .option('--target <string>', '生成的目标代码类型，默认: typescript')
    .option('--type <string>', `文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'`)
    .option('--auth-token <string>', '访问文档可能需要认证信息，通过使用token访问，yapi的验证token')
    .action(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const options = program.opts();
        yield (0, lib_1.run)(null, options);
    });
});
// 帮助信息
program.addHelpText('after', `
详细命令说明:
初始化配置文件: apih init
初始化配置文件(指定配置文件路径): apih init -c 路径/配置文件.ts
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
    .option('-c, --config <string>', '自定义配置文件路径')
    .action(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const options = program.opts();
        yield (0, lib_1.run)('init', options);
    });
});
program.parse();
