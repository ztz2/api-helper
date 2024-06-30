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
exports.renderRequestFunctionDeclare = void 0;
var _changeCase = __importStar(require("change-case"));
var helpers_1 = require("@api-helper/core/lib/helpers");
var render_request_function_1 = require("../lib/render-request-function");
var art_template_1 = __importDefault(require("../lib/art-template"));
var render_interface_1 = require("../lib/render-interface");
var util_1 = require("../lib/utils/util");
function renderRequestFunctionDeclare(api, options) {
    if (!api) {
        return '';
    }
    var dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
    var isEmptyRequestData = (0, util_1.isEmptySchema)(api.requestDataSchema);
    var onRenderRequestFunctionName = (options && options.onRenderRequestFunctionName) ? options.onRenderRequestFunctionName : render_request_function_1.renderRequestFunctionName;
    var onRenderInterfaceName = (options && options.onRenderInterfaceName) ? options.onRenderInterfaceName : render_interface_1.renderInterfaceName;
    var responseDataSchema = dataKey ? (0, helpers_1.getSchema)(api.responseDataSchema, dataKey) : api.responseDataSchema;
    var templateTenderParams = {
        api: api,
        isEmptyRequestData: isEmptyRequestData,
        commentCode: (0, render_request_function_1.renderRequestFunctionComment)(api),
        formDataKeyNameListStr: JSON.stringify(api.formDataKeyNameList),
        pathParamKeyNameListStr: JSON.stringify(api.pathParamKeyNameList),
        queryStringKeyNameListStr: JSON.stringify(api.queryStringKeyNameList),
        requestFunctionName: onRenderRequestFunctionName(api, {
            changeCase: _changeCase,
        }),
        requestDataInterfaceName: onRenderInterfaceName(api, {
            paramType: 'request',
            changeCase: _changeCase,
            schema: api.requestDataSchema,
        }),
        requestExtraDataInterfaceName: onRenderInterfaceName(api, {
            isExtraData: true,
            paramType: 'request',
            changeCase: _changeCase,
            schema: api.requestExtraDataSchema,
        }),
        responseDataInterfaceName: onRenderInterfaceName(api, {
            paramType: 'response',
            changeCase: _changeCase,
            schema: responseDataSchema,
        }),
    };
    var code = art_template_1.default.render("\u300Aif commentCode\u300B\u300AcommentCode\u300B\n\u300A/if\u300Bdeclare const \u300ArequestFunctionName\u300B: {\n  (data\u300Aif isEmptyRequestData\u300B?\u300A/if\u300B: \u300ArequestDataInterfaceName\u300B, extraData?: \u300Aif api.requestExtraDataSchema\u300B\u300ArequestExtraDataInterfaceName\u300B\u300Aelse\u300Bunknown\u300A/if\u300B, ...args: CurrentRequestFunctionRestArgsType): Promise<\u300AresponseDataInterfaceName\u300B>;\n  requestConfig: {\n    path: '\u300Aapi.path\u300B',\n    method: '\u300Aapi.method.toLowerCase()\u300B',\n    formDataKeyNameList: \u300AformDataKeyNameListStr\u300B,\n    pathParamKeyNameList: \u300ApathParamKeyNameListStr\u300B,\n    queryStringKeyNameList: \u300AqueryStringKeyNameListStr\u300B\n  }\n};", templateTenderParams);
    return code;
}
exports.renderRequestFunctionDeclare = renderRequestFunctionDeclare;
