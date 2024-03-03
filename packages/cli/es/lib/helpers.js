var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var _a, _b;
// @ts-ignore
import stringify from 'qs/lib/stringify';
function checkType(value, type) {
    return Object.prototype.toString.call(value) === "[object ".concat(type, "]");
}
var FormDataItem = /** @class */ (function () {
    function FormDataItem(value) {
        this.value = value;
    }
    FormDataItem.prototype.get = function () {
        return this.value;
    };
    FormDataItem.prototype.set = function (value) {
        this.value = value;
    };
    return FormDataItem;
}());
export { FormDataItem };
export function checkMiniProgramEnv() {
    var _a, _b;
    try {
        var ua = (_b = (_a = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
        // 微信小程序环境
        if ((ua.match(/micromessenger/i) && ua.match(/miniprogram/i)) || // @ts-ignore
            (window === null || window === void 0 ? void 0 : window.__wxjs_environment) === 'miniprogram') {
            return true;
        }
        // 百度小程序
        if (/swan\//.test(ua) || /^webswan-/.test(window === null || window === void 0 ? void 0 : window.name)) {
            return true;
        }
        // 支付宝小程序
        if (/alipayclient/i.test(ua)) {
            return true;
        }
        // 抖音小程序
        if (/toutiaomicroapp/i.test(ua)) {
            return true;
        }
    }
    catch (e) {
        return false;
    }
    return false;
}
var hasNativeFormData = typeof FormData !== 'undefined';
var hasNodeFormData = !hasNativeFormData && ((_b = (_a = global === null || global === void 0 ? void 0 : global['process']) === null || _a === void 0 ? void 0 : _a['versions']) === null || _b === void 0 ? void 0 : _b['node']) != null;
var FormDataPolyfill = hasNativeFormData ? FormData : hasNodeFormData ? eval("require('form-data')") : undefined;
var isMiniProgramEnv = checkMiniProgramEnv();
export function processRequestFunctionConfig(data, extraData, requestConfig) {
    var e_1, _a;
    var _b, _c;
    var requestFunctionConfig = {
        path: requestConfig.path,
        sourcePath: requestConfig.path,
        method: requestConfig.method,
        data: undefined,
        rowData: data,
        rowExtraData: extraData,
        hasFormData: false,
    };
    var queryParams = {};
    var cloneData = (checkType(data, 'Object') ? __assign({}, data) : {});
    var formData;
    var appendFormData = function (key, val) { };
    if (!isMiniProgramEnv) {
        if (FormDataPolyfill != null) {
            formData = new FormDataPolyfill();
        }
        else {
            console.warn(new Error('当前环境不支持 FormData'));
        }
        appendFormData = function (key, v) {
            if (FormDataPolyfill != null) {
                var val = v instanceof FormDataItem ? v.get() : v;
                if (val instanceof File) {
                    formData.append(key, val, val.name);
                }
                else if (val instanceof Blob) {
                    formData.append(key, val, 'blob');
                }
                else {
                    formData.append(key, val);
                }
            }
        };
    }
    var _loop_1 = function (k, v) {
        // 路径参数处理
        if ((_b = requestConfig.pathParamKeyNameList) === null || _b === void 0 ? void 0 : _b.includes(k)) {
            // 合并路径参数
            requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp("{".concat(k, "}"), 'g'), v);
            delete cloneData[k];
        }
        // FormData处理
        if (!isMiniProgramEnv && (v instanceof FormDataItem || requestConfig.formDataKeyNameList.includes(k))) {
            requestFunctionConfig.hasFormData = true;
            var val = v instanceof FormDataItem ? v.get() : v;
            if (Array.isArray(val)) {
                val.forEach(function (p, index) {
                    appendFormData("".concat(k, "[").concat(index, "]"), p);
                });
            }
            else {
                appendFormData(k, v);
            }
            delete cloneData[k];
            return "continue";
        }
        // URL 参数处理
        if ((_c = requestConfig.queryStringKeyNameList) === null || _c === void 0 ? void 0 : _c.includes(k)) {
            queryParams[k] = v;
            delete cloneData[k];
        }
    };
    try {
        // 数据处理
        for (var _d = __values(Object.entries(cloneData)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = __read(_e.value, 2), k = _f[0], v = _f[1];
            _loop_1(k, v);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // 合并URL参数
    var queryString = stringify(queryParams, { allowDots: true });
    if (queryString.length) {
        requestFunctionConfig.path += "?".concat(queryString);
    }
    // 合并Data
    if (requestFunctionConfig.hasFormData) {
        requestFunctionConfig.data = formData;
    }
    else if (extraData) {
        requestFunctionConfig.data = extraData;
    }
    else {
        requestFunctionConfig.data = cloneData;
    }
    return requestFunctionConfig;
}
