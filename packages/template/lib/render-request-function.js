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
exports.renderRequestFunctionName = exports.renderRequestFunction = void 0;
var changeCase = __importStar(require("change-case"));
var helpers_1 = require("@api-helper/core/lib/helpers");
var art_template_1 = __importDefault(require("../lib/art-template"));
var prettier_1 = __importDefault(require("../lib/utils/prettier"));
var render_interface_1 = require("../lib/render-interface");
function renderRequestFunction(api, options) {
    if (!api) {
        return '';
    }
    var codeType = (options === null || options === void 0 ? void 0 : options.codeType) || 'typescript';
    var dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
    var onRenderRequestFunctionName = (options && options.onRenderRequestFunctionName) ? options.onRenderRequestFunctionName : renderRequestFunctionName;
    var onRenderInterfaceName = (options && options.onRenderInterfaceName) ? options.onRenderInterfaceName : render_interface_1.renderInterfaceName;
    var responseDataSchema = dataKey ? (0, helpers_1.getSchema)(api.responseDataSchema, dataKey) : api.responseDataSchema;
    var templateTenderParams = {
        api: api,
        isTypescript: codeType === 'typescript',
        commentCode: renderRequestFunctionComment(api),
        formDataKeyNameListStr: JSON.stringify(api.formDataKeyNameList),
        pathParamKeyNameListStr: JSON.stringify(api.pathParamKeyNameList),
        queryStringKeyNameListStr: JSON.stringify(api.queryStringKeyNameList),
        requestFunctionName: onRenderRequestFunctionName(api, { changeCase: changeCase }),
        requestDataInterfaceName: onRenderInterfaceName(api.requestDataSchema, api, { paramType: 'request', changeCase: changeCase }),
        requestExtraDataInterfaceName: onRenderInterfaceName(api.requestExtraDataSchema, api, { paramType: 'request', isExtraData: true, changeCase: changeCase }),
        responseDataInterfaceName: onRenderInterfaceName(responseDataSchema, api, { paramType: 'response', changeCase: changeCase }),
    };
    var code = art_template_1.default.render("\u300Aif commentCode\u300B\u300AcommentCode\u300B\n\u300A/if\u300Bexport function \u300ArequestFunctionName\u300B(data\u300Aif isTypescript\u300B: \u300ArequestDataInterfaceName\u300B\u300A/if\u300B, extraData\u300Aif isTypescript\u300B?: \u300Aif api.requestExtraDataSchema\u300B\u300ArequestExtraDataInterfaceName\u300B\u300Aelse\u300Bunknown\u300A/if\u300B\u300A/if\u300B, ...args\u300Aif isTypescript\u300B: CurrentRequestFunctionRestArgsType\u300A/if\u300B) {\n  return request\u300Aif isTypescript\u300B<\u300AresponseDataInterfaceName\u300B>\u300A/if\u300B(\n    processRequestFunctionConfig(data, extraData, \u300ArequestFunctionName\u300B.requestConfig),\n    ...args\n  );\n}\n\u300ArequestFunctionName\u300B.requestConfig = {\n  path: '\u300Aapi.path\u300B',\n  method: '\u300Aapi.method.toLowerCase()\u300B',\n  formDataKeyNameList: \u300AformDataKeyNameListStr\u300B,\n  pathParamKeyNameList: \u300ApathParamKeyNameListStr\u300B,\n  queryStringKeyNameList: \u300AqueryStringKeyNameListStr\u300B\n}", templateTenderParams);
    return (0, prettier_1.default)(code, {
        parser: codeType !== 'typescript' ? 'babel' : 'typescript'
    });
}
exports.renderRequestFunction = renderRequestFunction;
function renderRequestFunctionName(api, options) {
    return options.changeCase.camelCase("".concat(api.path, " By ").concat(api.method));
}
exports.renderRequestFunctionName = renderRequestFunctionName;
function renderRequestFunctionComment(api) {
    var templateTenderParams = {
        api: api,
        apiDescription: [api.title, api.description].filter(Boolean).join('、')
    };
    return art_template_1.default.render("/**\n   * @description\u300Aif apiDescription\u300B \u300AapiDescription\u300B\u300Aelse\u300B \u65E0\u300A/if\u300B\n\u300Aif api.docURL\u300B   * @doc \u300Aapi.docURL\u300B\n\u300A/if\u300B   * @url [ \u300Aapi.method.toUpperCase()\u300B ] \u300Aapi.path\u300B\n   */", templateTenderParams);
}
