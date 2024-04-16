var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    Logger.prototype.processMessage = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        var currentPrefix = prefix;
        var currentMessage = message;
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
    };
    Logger.prototype.silly = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.silly.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.verbose = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.verbose.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.info = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.info.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.timing = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.timing.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.http = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.http.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.notice = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.notice.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.warn = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.warn.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.error = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.error.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
    };
    Logger.prototype.silent = function (prefix, message) {
        if (prefix === void 0) { prefix = ''; }
        if (message === void 0) { message = ''; }
        npmlog.silent.apply(npmlog, __spreadArray([], __read(this.processMessage(prefix, message)), false));
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
