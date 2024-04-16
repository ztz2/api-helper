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
    processMessage(prefix = '', message = '') {
        let currentPrefix = prefix;
        let currentMessage = message;
        if (!message) {
            currentPrefix = '';
            currentMessage = prefix;
        }
        if (currentPrefix instanceof Error) {
            currentPrefix = currentPrefix.message;
        }
        if (currentMessage instanceof Error) {
            currentMessage = currentMessage.message;
        }
        return [currentPrefix, currentMessage];
    }
    silly(prefix = '', message = '') {
        npmlog_1.default.silly(...this.processMessage(prefix, message));
    }
    verbose(prefix = '', message = '') {
        npmlog_1.default.verbose(...this.processMessage(prefix, message));
    }
    info(prefix = '', message = '') {
        npmlog_1.default.info(...this.processMessage(prefix, message));
    }
    timing(prefix = '', message = '') {
        npmlog_1.default.timing(...this.processMessage(prefix, message));
    }
    http(prefix = '', message = '') {
        npmlog_1.default.http(...this.processMessage(prefix, message));
    }
    notice(prefix = '', message = '') {
        npmlog_1.default.notice(...this.processMessage(prefix, message));
    }
    warn(prefix = '', message = '') {
        npmlog_1.default.warn(...this.processMessage(prefix, message));
    }
    error(prefix = '', message = '') {
        npmlog_1.default.error(...this.processMessage(prefix, message));
    }
    silent(prefix = '', message = '') {
        npmlog_1.default.silent(...this.processMessage(prefix, message));
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
