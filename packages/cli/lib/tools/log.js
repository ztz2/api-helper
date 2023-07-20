"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const npmlog_1 = __importDefault(require("npmlog"));
const logLevel = [
    'verbose',
    'info',
    'warn',
    'error',
];
// 判断是否启用了debug模式，debug模式下，显示更多的日志信息，通过debug指令
for (const v of process.argv) {
    if (v.includes('-D') || v.includes('--debug')) {
        npmlog_1.default.level = 'verbose';
        break;
    }
}
// 判断是否启用debug模式，通过环境变量
const logLevelEnvIndex = logLevel.indexOf((_a = process.env.LOG_LEVEL) !== null && _a !== void 0 ? _a : '');
if (logLevelEnvIndex !== -1) {
    npmlog_1.default.level = logLevel[logLevelEnvIndex];
}
exports.default = npmlog_1.default;
