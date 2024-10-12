"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRequestFunctionConfig = exports.checkMiniProgramEnv = exports.FormDataItem = void 0;
// @ts-ignore
const stringify_1 = __importDefault(require("qs/lib/stringify"));
function checkType(value, type) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
}
class FormDataItem {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    set(value) {
        this.value = value;
    }
}
exports.FormDataItem = FormDataItem;
function checkMiniProgramEnv() {
    var _a, _b;
    try {
        const ua = (_b = (_a = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
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
exports.checkMiniProgramEnv = checkMiniProgramEnv;
const hasNativeFormData = typeof FormData !== 'undefined';
const hasNodeFormData = !hasNativeFormData && ((_b = (_a = global === null || global === void 0 ? void 0 : global['process']) === null || _a === void 0 ? void 0 : _a['versions']) === null || _b === void 0 ? void 0 : _b['node']) != null;
const FormDataPolyfill = hasNativeFormData ? FormData : hasNodeFormData ? eval(`require('form-data')`) : undefined;
const isMiniProgramEnv = checkMiniProgramEnv();
function processRequestFunctionConfig(data, extraData, requestConfig) {
    var _a, _b, _c;
    const requestFunctionConfig = {
        path: requestConfig.path,
        rawPath: requestConfig.path,
        method: requestConfig.method,
        data: undefined,
        rawData: data,
        rawExtraData: extraData,
        hasFormData: false,
    };
    if (data == null || typeof data !== 'object') {
        requestFunctionConfig.data = data;
        return requestFunctionConfig;
    }
    const queryParams = {};
    const cloneData = (checkType(data, 'Object') ? Object.assign({}, data) : {});
    let formData;
    let appendFormData = (key, val) => { };
    if (!isMiniProgramEnv) {
        if (FormDataPolyfill != null) {
            formData = new FormDataPolyfill();
        }
        else {
            console.warn('提示：当前环境不支持 FormData，自动忽略FormData字段处理！');
        }
        appendFormData = (key, v) => {
            if (FormDataPolyfill != null) {
                const val = v instanceof FormDataItem ? v.get() : v;
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
    // 数据处理
    for (const [k, v] of Object.entries(cloneData)) {
        // 路径参数处理
        if ((_a = requestConfig.pathParamKeyNameList) === null || _a === void 0 ? void 0 : _a.includes(k)) {
            // 合并路径参数
            requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp(`\{${k}\}`, 'g'), v);
            delete cloneData[k];
        }
        // FormData处理
        if (!isMiniProgramEnv && (v instanceof FormDataItem || ((_b = requestConfig.formDataKeyNameList) === null || _b === void 0 ? void 0 : _b.includes(k)))) {
            requestFunctionConfig.hasFormData = true;
            const val = v instanceof FormDataItem ? v.get() : v;
            if (Array.isArray(val)) {
                val.forEach((p, index) => {
                    appendFormData(`${k}[${index}]`, p);
                });
            }
            else {
                appendFormData(k, v);
            }
            delete cloneData[k];
            continue;
        }
        // URL 参数处理
        if ((_c = requestConfig.queryStringKeyNameList) === null || _c === void 0 ? void 0 : _c.includes(k)) {
            queryParams[k] = v;
            delete cloneData[k];
        }
    }
    // 合并URL参数
    const queryString = (0, stringify_1.default)(queryParams, { allowDots: true });
    if (queryString.length) {
        requestFunctionConfig.path += `?${queryString}`;
    }
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
    return requestFunctionConfig;
}
exports.processRequestFunctionConfig = processRequestFunctionConfig;
