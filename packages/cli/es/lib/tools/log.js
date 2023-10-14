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
var _b;
import log from 'npmlog';
var logLevel = [
    'verbose',
    'info',
    'warn',
    'error',
];
try {
    // 判断是否启用了debug模式，debug模式下，显示更多的日志信息，通过debug指令
    for (var _c = __values(process.argv), _d = _c.next(); !_d.done; _d = _c.next()) {
        var v = _d.value;
        if (v.includes('-D') || v.includes('--debug')) {
            log.level = 'verbose';
            break;
        }
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
// 判断是否启用debug模式，通过环境变量
var logLevelEnvIndex = logLevel.indexOf((_b = process.env.LOG_LEVEL) !== null && _b !== void 0 ? _b : '');
if (logLevelEnvIndex !== -1) {
    log.level = logLevel[logLevelEnvIndex];
}
export default log;
