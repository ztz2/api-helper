"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRequestFunctionConfig = exports.isMiniProgramEnv = exports.FormDataItem = void 0;
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
function isMiniProgramEnv() {
    var _a;
    const ua = (_a = navigator.userAgent.toLowerCase()) !== null && _a !== void 0 ? _a : '';
    // 微信小程序环境
    if ((ua.match(/micromessenger/i) && ua.match(/miniprogram/i)) || // @ts-ignore
        (window === null || window === void 0 ? void 0 : window.__wxjs_environment) === 'miniprogram') {
        return true;
    }
    // 百度小程序
    if (/swan\//.test(ua) || /^webswan-/.test(window.name)) {
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
    return false;
}
exports.isMiniProgramEnv = isMiniProgramEnv;
function processRequestFunctionConfig(data, extraData, requestConfig) {
    var _a, _b, _c, _d;
    const requestFunctionConfig = {
        data: null,
        rowData: data,
        rowExtraData: extraData,
        path: requestConfig.path,
        method: requestConfig.method
    };
    const queryParams = {};
    const cloneData = (checkType(data, 'Object') ? Object.assign({}, data) : {});
    const hasNativeFormData = typeof FormData !== 'undefined';
    const hasNodeFormData = !hasNativeFormData && ((_b = (_a = global === null || global === void 0 ? void 0 : global['process']) === null || _a === void 0 ? void 0 : _a['versions']) === null || _b === void 0 ? void 0 : _b['node']) != null;
    const FormDataPolyfill = hasNativeFormData ? FormData : hasNodeFormData ? eval(`require('form-data')`) : undefined;
    let formData;
    let appendFormData = (key, val) => { };
    if (!isMiniProgramEnv) {
        if (FormDataPolyfill == null) {
            throw new Error('当前环境不支持 FormData');
        }
        formData = new FormDataPolyfill();
        appendFormData = (key, val) => {
            formData.append(key, val, val instanceof File ? val.name : val instanceof Blob ? 'blob' : undefined);
        };
    }
    // 数据处理
    for (const [k, v] of Object.entries(cloneData)) {
        // FormData处理
        if (!isMiniProgramEnv && (v instanceof FormDataItem || requestConfig.formDataKeyNameList.includes(k))) {
            const val = v.get();
            requestFunctionConfig.hasFormData = true;
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
        // 路径参数处理
        if ((_c = requestConfig.pathParamKeyNameList) === null || _c === void 0 ? void 0 : _c.includes(k)) {
            // 合并路径参数
            requestFunctionConfig.path = requestFunctionConfig.path.replace(new RegExp(`\{${k}\}`, 'g'), v);
            delete cloneData[k];
        }
        // URL 参数处理
        if ((_d = requestConfig.queryStringKeyNameList) === null || _d === void 0 ? void 0 : _d.includes(k)) {
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
    }
    else if (extraData) {
        requestFunctionConfig.data = extraData;
    }
    else {
        requestFunctionConfig.data = cloneData;
    }
    return requestFunctionConfig;
}
exports.processRequestFunctionConfig = processRequestFunctionConfig;
