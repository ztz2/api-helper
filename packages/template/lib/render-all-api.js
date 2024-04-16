"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAllApi = exports.checkDocument = void 0;
var helpers_1 = require("@api-helper/core/lib/helpers");
var render_interface_1 = require("../lib/render-interface");
var render_request_function_1 = require("../lib/render-request-function");
var render_request_function_declare_1 = require("../lib/render-request-function-declare");
function checkDocument(document) {
    return 'version' in document && 'documentVersion' in document && 'categoryList' in document;
}
exports.checkDocument = checkDocument;
function renderAllApi(apiDocument, options) {
    var e_1, _a, e_2, _b;
    var _c;
    if (!apiDocument) {
        return '';
    }
    var codeType = (options === null || options === void 0 ? void 0 : options.codeType) || 'typescript';
    var dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
    var onlyTyping = (options === null || options === void 0 ? void 0 : options.onlyTyping) && options.codeType === 'typescript';
    var isTS = codeType === 'typescript';
    var isDeclare = (_c = options === null || options === void 0 ? void 0 : options.isDeclare) !== null && _c !== void 0 ? _c : false;
    var categoryList = checkDocument(apiDocument) ? apiDocument.categoryList : apiDocument;
    var allApi = [];
    try {
        for (var categoryList_1 = __values(categoryList), categoryList_1_1 = categoryList_1.next(); !categoryList_1_1.done; categoryList_1_1 = categoryList_1.next()) {
            var category = categoryList_1_1.value;
            allApi = __spreadArray(__spreadArray([], __read(allApi), false), __read(category.apiList), false);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (categoryList_1_1 && !categoryList_1_1.done && (_a = categoryList_1.return)) _a.call(categoryList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var code = [];
    try {
        for (var allApi_1 = __values(allApi), allApi_1_1 = allApi_1.next(); !allApi_1_1.done; allApi_1_1 = allApi_1.next()) {
            var api = allApi_1_1.value;
            var p = [];
            if (isTS) {
                var responseDataSchema = api.responseDataSchema;
                if (dataKey) {
                    responseDataSchema = (0, helpers_1.getSchema)(api.responseDataSchema, dataKey);
                }
                // 1. 生成interface-请求数据
                p.push((0, render_interface_1.renderInterface)(api.requestDataSchema, api, {
                    paramType: 'request',
                    onRenderInterfaceName: options === null || options === void 0 ? void 0 : options.onRenderInterfaceName,
                    emptyBodyCode: 'Record<string, any>;',
                    prefix: isDeclare ? 'declare ' : 'export ',
                }));
                // 2. 生成interface-请求数据（特殊不兼容数据类型）
                p.push((0, render_interface_1.renderInterface)(api.requestExtraDataSchema, api, {
                    paramType: 'request',
                    isExtraData: true,
                    onRenderInterfaceName: options === null || options === void 0 ? void 0 : options.onRenderInterfaceName,
                    prefix: isDeclare ? 'declare ' : 'export ',
                }));
                // 2. 生成interface-响应数据
                p.push((0, render_interface_1.renderInterface)(responseDataSchema, api, {
                    paramType: 'response',
                    onRenderInterfaceName: options === null || options === void 0 ? void 0 : options.onRenderInterfaceName,
                    prefix: isDeclare ? 'declare ' : 'export ',
                }));
            }
            // 3. 生成请求函数
            if (onlyTyping !== true) {
                if (isDeclare) {
                    p.push((0, render_request_function_declare_1.renderRequestFunctionDeclare)(api, {
                        dataKey: dataKey,
                        onRenderInterfaceName: options === null || options === void 0 ? void 0 : options.onRenderInterfaceName,
                        onRenderRequestFunctionName: options === null || options === void 0 ? void 0 : options.onRenderRequestFunctionName,
                    }));
                }
            }
            if (!(onlyTyping && codeType === 'typescript')) {
                p.push((0, render_request_function_1.renderRequestFunction)(api, {
                    dataKey: dataKey,
                    codeType: codeType,
                    onRenderInterfaceName: options === null || options === void 0 ? void 0 : options.onRenderInterfaceName,
                    onRenderRequestFunctionName: options === null || options === void 0 ? void 0 : options.onRenderRequestFunctionName,
                }));
            }
            code.push(p.join(''));
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (allApi_1_1 && !allApi_1_1.done && (_b = allApi_1.return)) _b.call(allApi_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return code.join('\n');
}
exports.renderAllApi = renderAllApi;
