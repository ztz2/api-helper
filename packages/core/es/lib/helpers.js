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
import { stringify } from 'qs';
import { checkType } from './utils/util';
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
export function getSchema(schema, path, clearKeyName) {
    if (path === void 0) { path = ''; }
    if (clearKeyName === void 0) { clearKeyName = true; }
    if (!schema || !path) {
        return null;
    }
    var pathList = path.replace(/\[/gim, '.').replace(/\]/gim, '').split('.');
    if (pathList.length === 0) {
        return null;
    }
    var t = schema;
    var runCount = 0;
    var len = pathList.length;
    try {
        while (pathList.length) {
            var p = pathList.shift();
            for (var i = 0; i < t.params.length; i++) {
                var s = t.params[i];
                if (s.keyName === p) {
                    t = s;
                    runCount++;
                    break;
                }
                if (i === t.params.length - 1) {
                    return null;
                }
            }
        }
    }
    catch (_a) {
        return null;
    }
    if (clearKeyName) {
        t = __assign({}, t);
        t.keyName = '';
    }
    if (runCount === len) {
        return t;
    }
    return null;
}
export function processRequestFunctionConfig(data, extraData, requestConfig) {
    var e_1, _a;
    var _b, _c, _d, _e;
    var requestFunctionConfig = {
        data: null,
        rowData: data,
        rowExtraData: extraData,
        path: requestConfig.path,
        method: requestConfig.method
    };
    var queryParams = {};
    var cloneData = (checkType(data, 'Object') ? __assign({}, data) : {});
    var hasNativeFormData = typeof FormData !== 'undefined';
    var hasNodeFormData = !hasNativeFormData && ((_c = (_b = global === null || global === void 0 ? void 0 : global['process']) === null || _b === void 0 ? void 0 : _b['versions']) === null || _c === void 0 ? void 0 : _c['node']) != null;
    var FormDataPolyfill = hasNativeFormData ? FormData : hasNodeFormData ? eval("require('form-data')") : undefined;
    if (FormDataPolyfill == null) {
        throw new Error('当前环境不支持 FormData');
    }
    var formData = new FormDataPolyfill();
    var appendFormData = function (key, val) {
        formData.append(key, val, val instanceof File ? val.name : val instanceof Blob ? 'blob' : undefined);
    };
    var _loop_1 = function (k, v) {
        // FormData处理
        if (v instanceof FormDataItem || requestConfig.formDataKeyNameList.includes(k)) {
            var val = v.get();
            requestFunctionConfig.hasFormData = true;
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
        // 路径参数处理
        if ((_d = requestConfig.pathParamKeyNameList) === null || _d === void 0 ? void 0 : _d.includes(k)) {
            // 合并路径参数
            requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp("{".concat(k, "}"), 'g'), v);
            delete cloneData[k];
        }
        // URL 参数处理
        if ((_e = requestConfig.queryStringKeyNameList) === null || _e === void 0 ? void 0 : _e.includes(k)) {
            queryParams[k] = v;
            delete cloneData[k];
        }
    };
    try {
        // 数据处理
        for (var _f = __values(Object.entries(cloneData)), _g = _f.next(); !_g.done; _g = _f.next()) {
            var _h = __read(_g.value, 2), k = _h[0], v = _h[1];
            _loop_1(k, v);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // 合并URL参数
    var queryString = stringify(queryParams);
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
