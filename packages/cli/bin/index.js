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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ts_node_1 = require("ts-node");
const commander_1 = require("commander");
const findup_sync_1 = __importDefault(require("findup-sync"));
const util_1 = require("../lib/tools/util");
const lib_1 = require("../lib");
const locales_1 = __importDefault(require("../lib/locales"));
(0, ts_node_1.register)({
    skipProject: true,
    transpileOnly: true,
    compilerOptions: {
        strict: false,
        lib: ['es2015'],
        target: 'es2015',
        module: 'commonjs',
        moduleResolution: 'node',
        allowJs: true,
        declaration: false,
        importHelpers: false,
        removeComments: false,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
    },
});
const program = new commander_1.Command();
const version = (_a = (0, util_1.loadJSON)((0, findup_sync_1.default)('package.json', { cwd: __dirname }))) === null || _a === void 0 ? void 0 : _a.version;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const locales = yield new locales_1.default().init();
        // root指令
        program
            .version(version)
            .description(locales.$t('API生成工具'))
            .option('-c, --config <string>', locales.$t('自定义配置文件路径'))
            .option('-u, --url <string>', locales.$t(`接口文档地址【当type为'swagger'类型时，可以读取本地文件，这里就可以一个本地文件路径】`))
            .option('-o, --output-path <path>', locales.$t('代码生成后的输出路径'))
            .option('--target <string>', locales.$t('生成的目标代码类型，默认: typescript'))
            .option('--type <string>', locales.$t('文档类型，根据文档类型，调用内置的解析器，默认值: \'swagger\''))
            .option('--auth-token <string>', locales.$t('访问文档可能需要认证信息，通过使用token访问，yapi的验证token'))
            .action(function () {
            return __awaiter(this, void 0, void 0, function* () {
                const options = program.opts();
                yield (0, lib_1.run)(null, options);
            });
        });
        // 帮助信息
        program.addHelpText('after', locales.$t('帮助信息'));
        // 初始化配置
        program
            .command('init')
            .description(locales.$t('初始化配置'))
            .option('-c, --config <string>', locales.$t('自定义配置文件路径'))
            .action(function () {
            return __awaiter(this, void 0, void 0, function* () {
                const options = program.opts();
                yield (0, lib_1.run)('init', options);
            });
        });
        // 初始化配置
        program
            .command('init')
            .description(locales.$t('初始化配置'))
            .option('-c, --config <string>', locales.$t('自定义配置文件路径'))
            .action(function () {
            return __awaiter(this, void 0, void 0, function* () {
                const options = program.opts();
                yield (0, lib_1.run)('init', options);
            });
        });
        program.parse();
    });
}
main();
