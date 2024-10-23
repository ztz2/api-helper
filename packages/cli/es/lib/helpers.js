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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
function omit(obj, keys) {
    var result = {};
    for (var key in obj) {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
export function processRequestFunctionConfig(data, extraData, requestConfig) {
    var e_1, _a;
    var _b, _c, _d, _e, _f, _g, _h;
    var requestFunctionConfig = __assign(__assign({}, requestConfig), { path: requestConfig.path, rawPath: requestConfig.path, method: requestConfig.method, data: undefined, rawData: data, rawExtraData: extraData, hasFormData: false });
    var isBinary = false;
    try {
        isBinary = data instanceof File || data instanceof Blob;
    }
    catch (_j) { }
    if (data == null || typeof data !== 'object' || isBinary) {
        requestFunctionConfig.data = data;
        return requestFunctionConfig;
    }
    var queryParams = {};
    var cloneData = (checkType(data, 'Object') ? __assign({}, data) : {});
    var isFormUrlencodedType = (_c = (_b = requestConfig === null || requestConfig === void 0 ? void 0 : requestConfig.requestContentType) === null || _b === void 0 ? void 0 : _b.includes) === null || _c === void 0 ? void 0 : _c.call(_b, 'application/x-www-form-urlencoded');
    var isJSONCodeType = (_d = requestConfig === null || requestConfig === void 0 ? void 0 : requestConfig.requestContentType) === null || _d === void 0 ? void 0 : _d.some(function (item) { return ['application/json', 'text/json'].includes(item); });
    var formData;
    var appendFormData = function (key, val) { };
    if (!isMiniProgramEnv) {
        if (FormDataPolyfill != null) {
            formData = new FormDataPolyfill();
        }
        else {
            console.warn('提示：当前环境不支持 FormData，自动忽略FormData字段处理！');
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
        if ((_e = requestConfig.pathParamKeyNameList) === null || _e === void 0 ? void 0 : _e.includes(k)) {
            // 合并路径参数
            requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp("{".concat(k, "}"), 'g'), v);
            delete cloneData[k];
        }
        // FormData处理
        if (!isMiniProgramEnv && (v instanceof FormDataItem || ((_f = requestConfig.formDataKeyNameList) === null || _f === void 0 ? void 0 : _f.includes(k)))) {
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
        if ((_g = requestConfig.queryStringKeyNameList) === null || _g === void 0 ? void 0 : _g.includes(k)) {
            queryParams[k] = v;
            delete cloneData[k];
        }
    };
    try {
        // 数据处理
        for (var _k = __values(Object.entries(cloneData)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var _m = __read(_l.value, 2), k = _m[0], v = _m[1];
            _loop_1(k, v);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_l && !_l.done && (_a = _k.return)) _a.call(_k);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // 合并URL参数
    var queryString = stringify(queryParams, { allowDots: true });
    if (queryString.length) {
        requestFunctionConfig.path += "?".concat(queryString);
    }
    // application/x-www-form-urlencoded 单独处理
    if ((!isJSONCodeType && isFormUrlencodedType) || (isFormUrlencodedType && ((_h = requestConfig.method) === null || _h === void 0 ? void 0 : _h.toLowerCase()) === 'get')) {
        var formUrlencodedData = omit((checkType(data, 'Object') ? data : {}), __spreadArray(__spreadArray(__spreadArray([], __read(requestConfig.formDataKeyNameList), false), __read(requestConfig.queryStringKeyNameList), false), __read(requestConfig.pathParamKeyNameList), false));
        var formUrlencodedStr = stringify(formUrlencodedData);
        if (formUrlencodedStr) {
            var keyText = requestFunctionConfig.path.includes('?') ? '&' : '?';
            if (requestConfig.method.toLowerCase() === 'get') {
                requestFunctionConfig.path += "".concat(keyText).concat(formUrlencodedStr);
            }
            else {
                requestFunctionConfig.data = formUrlencodedStr;
            }
        }
    }
    else {
        // 合并Data
        if (requestFunctionConfig.hasFormData) {
            requestFunctionConfig.data = formData;
            // @ts-ignore
        }
        else if (data instanceof FormDataPolyfill) {
            requestFunctionConfig.data = data;
        }
        else {
            requestFunctionConfig.data = cloneData;
        }
    }
    return requestFunctionConfig;
}
