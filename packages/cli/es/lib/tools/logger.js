var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
import npmlog from 'npmlog';
var Logger_Levels = ['silly', 'verbose', 'info', 'timing', 'http', 'notice', 'warn', 'error', 'silent'];
var Logger = /** @class */ (function () {
    function Logger(options) {
        if (options === void 0) { options = {}; }
        var level = options.level || 'verbose';
        if (Logger_Levels.includes(level)) {
            npmlog.level = level;
        }
    }
    Logger.prototype.logLineFeed = function (options) {
        if (options === null || options === void 0 ? void 0 : options.lineFeed) {
            console.log(' ');
        }
    };
    Logger.prototype.silly = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.silly((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.verbose = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.verbose((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.info = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.info((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.timing = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.timing((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.http = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.http((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.notice = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.notice((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.warn = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.warn((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.error = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.error((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    Logger.prototype.silent = function (message, options) {
        var _a;
        if (message === void 0) { message = ''; }
        this.logLineFeed(options);
        npmlog.silent((_a = options === null || options === void 0 ? void 0 : options.prefix) !== null && _a !== void 0 ? _a : '', message);
    };
    return Logger;
}());
// 判断是否启用了debug模式，debug模式下，显示更多的日志信息，通过debug指令
var loggerOptions = {
    level: 'verbose'
};
try {
    for (var _b = __values(process.argv), _c = _b.next(); !_c.done; _c = _b.next()) {
        var v = _c.value;
        if (v.includes('-D') || v.includes('--debug')) {
            loggerOptions.level = 'verbose';
            break;
        }
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
// 判断是否启用debug模式，通过环境变量
if (!loggerOptions.level && process.env.LOG_LEVEL) {
    loggerOptions.level = process.env.LOG_LEVEL;
}
var logger = new Logger(loggerOptions);
export default logger;
