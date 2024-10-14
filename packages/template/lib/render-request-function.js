"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderRequestFunctionComment = exports.renderRequestFunctionName = exports.renderRequestFunction = void 0;
var _changeCase = __importStar(require("change-case"));
var helpers_1 = require("@api-helper/core/lib/helpers");
var art_template_1 = __importDefault(require("../lib/art-template"));
var render_interface_1 = require("../lib/render-interface");
var util_1 = require("../lib/utils/util");
function renderRequestFunction(api, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    if (options === void 0) { options = {}; }
    if (!api) {
        return '';
    }
    var dataKey = options.dataKey;
    var codeType = options.codeType || 'typescript';
    var isEmptyRequestData = (0, util_1.isEmptySchema)(api.requestDataSchema);
    var emptyRequestDataValue = isEmptyRequestData ? ((_a = api.requestDataSchema) === null || _a === void 0 ? void 0 : _a.type) === 'array' ? '[]' : '{}' : '';
    var onRenderRequestFunctionName = (_b = options.onRenderRequestFunctionName) !== null && _b !== void 0 ? _b : renderRequestFunctionName;
    var onRenderInterfaceName = (_c = options.onRenderInterfaceName) !== null && _c !== void 0 ? _c : render_interface_1.renderInterfaceName;
    var responseDataSchema = dataKey ? (0, helpers_1.getSchema)(api.responseDataSchema, dataKey) : api.responseDataSchema;
    var requestFunctionName = onRenderRequestFunctionName(api, {
        changeCase: _changeCase,
    });
    var requestDataInterfaceName = onRenderInterfaceName(api, {
        paramType: 'request',
        changeCase: _changeCase,
        schema: api.requestDataSchema,
    });
    var requestExtraDataInterfaceName = onRenderInterfaceName(api, {
        isExtraData: true,
        paramType: 'request',
        changeCase: _changeCase,
        schema: api.requestExtraDataSchema,
    });
    var responseDataInterfaceName = onRenderInterfaceName(api, {
        paramType: 'response',
        changeCase: _changeCase,
        schema: responseDataSchema,
    });
    var headers = (_j = (_h = (_g = (_f = (_e = (_d = api.headers) === null || _d === void 0 ? void 0 : _d.params) === null || _e === void 0 ? void 0 : _e.map) === null || _f === void 0 ? void 0 : _f.call(_e, function (item) { return item.keyName; })) === null || _g === void 0 ? void 0 : _g.filter) === null || _h === void 0 ? void 0 : _h.call(_g, Boolean)) !== null && _j !== void 0 ? _j : [];
    var cookies = (_q = (_p = (_o = (_m = (_l = (_k = api.cookies) === null || _k === void 0 ? void 0 : _k.params) === null || _l === void 0 ? void 0 : _l.map) === null || _m === void 0 ? void 0 : _m.call(_l, function (item) { return item.keyName; })) === null || _o === void 0 ? void 0 : _o.filter) === null || _p === void 0 ? void 0 : _p.call(_o, Boolean)) !== null && _q !== void 0 ? _q : [];
    var templateTenderParams = {
        api: api,
        options: options,
        emptyRequestDataValue: emptyRequestDataValue,
        requestFunctionName: requestFunctionName,
        requestDataInterfaceName: requestDataInterfaceName,
        requestExtraDataInterfaceName: requestExtraDataInterfaceName,
        responseDataInterfaceName: responseDataInterfaceName,
        isTypescript: codeType === 'typescript',
        commentCode: renderRequestFunctionComment(api),
        formDataKeyNameListStr: JSON.stringify(api.formDataKeyNameList),
        pathParamKeyNameListStr: JSON.stringify(api.pathParamKeyNameList),
        queryStringKeyNameListStr: JSON.stringify(api.queryStringKeyNameList),
        headersStr: JSON.stringify(headers),
        cookiesStr: JSON.stringify(cookies),
        requestContentTypeStr: JSON.stringify((_r = api.requestContentType) !== null && _r !== void 0 ? _r : []),
        responseContentTypeStr: JSON.stringify((_s = api.responseContentType) !== null && _s !== void 0 ? _s : []),
    };
    var code = art_template_1.default.render("\u300Aif commentCode\u300B\u300AcommentCode\u300B\n\u300A/if\u300Bexport function \u300ArequestFunctionName\u300B(data\u300Aif isTypescript\u300B: \u300ArequestDataInterfaceName\u300B\u300A/if\u300B\u300Aif emptyRequestDataValue\u300B = \u300AemptyRequestDataValue\u300B\u300A/if\u300B, extraData\u300Aif isTypescript\u300B?: \u300Aif api.requestExtraDataSchema\u300B\u300ArequestExtraDataInterfaceName\u300B\u300Aelse\u300Bunknown\u300A/if\u300B\u300A/if\u300B, ...args\u300Aif isTypescript\u300B: CurrentRequestFunctionRestArgsType\u300A/if\u300B) {\n  return request\u300Aif isTypescript\u300B<\u300AresponseDataInterfaceName\u300B>\u300A/if\u300B(\n    processRequestFunctionConfig(data, extraData, \u300ArequestFunctionName\u300B.requestConfig),\n    ...args\n  );\n}\n\u300ArequestFunctionName\u300B.requestConfig = {\n  path: '\u300Aapi.path\u300B',\n  method: '\u300Aapi.method.toUpperCase()\u300B',\u300Aif options.genHeaders\u300B\n  headers: \u300AheadersStr\u300B,\u300A/if\u300B\u300Aif options.genCookies\u300B\n  cookies: \u300AcookiesStr\u300B,\u300A/if\u300B\n  requestContentType: \u300ArequestContentTypeStr\u300B,\u300Aif options.genResponseContentType\u300B\n  responseContentType: \u300AresponseContentTypeStr\u300B,\u300A/if\u300B\n  formDataKeyNameList: \u300AformDataKeyNameListStr\u300B,\n  pathParamKeyNameList: \u300ApathParamKeyNameListStr\u300B,\n  queryStringKeyNameList: \u300AqueryStringKeyNameListStr\u300B,\n}", templateTenderParams);
    return code;
}
exports.renderRequestFunction = renderRequestFunction;
function renderRequestFunctionName(api, options) {
    var _a;
    var changeCase = (_a = options === null || options === void 0 ? void 0 : options.changeCase) !== null && _a !== void 0 ? _a : _changeCase;
    return changeCase.camelCase("".concat(api.path, " By ").concat(api.method));
}
exports.renderRequestFunctionName = renderRequestFunctionName;
function renderRequestFunctionComment(api, updateTime) {
    if (updateTime === void 0) { updateTime = ''; }
    return art_template_1.default.render("/**\n   * @description\u300Aif description\u300B \u300Adescription\u300B\u300Aelse\u300B \u65E0\u300A/if\u300B\u300Aif docURL\u300B\n   * @doc \u300AdocURL\u300B\u300A/if\u300B\n   * @url \u300Aurl\u300B\u300Aif updateTime\u300B\n   * @update \u300AupdateTime\u300B\u300A/if\u300B\n   */", {
        description: [api.title, api.description].filter(Boolean).join('、'),
        docURL: api.docURL,
        url: "[ ".concat(api.method.toUpperCase(), " ] ").concat(api.path),
        updateTime: updateTime
    });
}
exports.renderRequestFunctionComment = renderRequestFunctionComment;
