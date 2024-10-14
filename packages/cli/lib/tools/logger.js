"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const npmlog_1 = __importDefault(require("npmlog"));
const Logger_Levels = ['silly', 'verbose', 'info', 'timing', 'http', 'notice', 'warn', 'error', 'silent'];
class Logger {
    constructor(options = {}) {
        const level = options.level || 'verbose';
        if (Logger_Levels.includes(level)) {
            npmlog_1.default.level = level;
        }
    }
    logLineFeed(options) {
        if (options === null || options === void 0 ? void 0 : options.lineFeed) {
            console.log(' ');
        }
    }
    silly(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.silly((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    verbose(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.verbose((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    info(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.info((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    timing(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.timing((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    http(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.http((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    notice(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.notice((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    warn(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.warn((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    error(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.error((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
    silent(message = '', options) {
        var _a;
        this.logLineFeed(options);
        npmlog_1.default.silent((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    }
}
// 判断是否启用了debug模式，debug模式下，显示更多的日志信息，通过debug指令
const loggerOptions = {
    level: 'verbose'
};
for (const v of process.argv) {
    if (v.includes('-D') || v.includes('--debug')) {
        loggerOptions.level = 'verbose';
        break;
    }
}
// 判断是否启用debug模式，通过环境变量
if (!loggerOptions.level && process.env.LOG_LEVEL) {
    loggerOptions.level = process.env.LOG_LEVEL;
}
const logger = new Logger(loggerOptions);
exports.default = logger;
