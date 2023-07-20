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
    var code = art_template_1.default.render("{{if commentCode}}{{commentCode}}\n{{/if}}export function {{requestFunctionName}}(data{{if isTypescript}}: {{requestDataInterfaceName}}{{/if}}, extraData{{if isTypescript}}?: {{if api.requestExtraDataSchema}}{{requestExtraDataInterfaceName}}{{else}}unknown{{/if}}{{/if}}, ...args{{if isTypescript}}: CurrentRequestFunctionRestArgsType{{/if}}) {\n  return request{{if isTypescript}}<{{responseDataInterfaceName}}>{{/if}}(\n    processRequestFunctionConfig(data, extraData, {{requestFunctionName}}.requestConfig),\n    ...args\n  );\n}\n{{requestFunctionName}}.requestConfig = {\n  path: '{{api.path}}',\n  method: '{{api.method}}',\n  formDataKeyNameList: {{formDataKeyNameListStr}},\n  pathParamKeyNameList: {{pathParamKeyNameListStr}},\n  queryStringKeyNameList: {{queryStringKeyNameListStr}}\n}", templateTenderParams);
    return (0, prettier_1.default)(code, {
        parser: codeType !== 'typescript' ? 'babel' : 'typescript'
    });
}
exports.renderRequestFunction = renderRequestFunction;
function renderRequestFunctionName(api, options) {
    return changeCase.camelCase("".concat(api.path, " By ").concat(api.method));
}
exports.renderRequestFunctionName = renderRequestFunctionName;
function renderRequestFunctionComment(api) {
    var templateTenderParams = {
        api: api,
        apiDescription: [api.summary, api.description].filter(Boolean).join('、')
    };
    return art_template_1.default.render("/**\n   * @description{{if apiDescription}} {{apiDescription}}{{else}} \u65E0{{/if}}\n{{if api.docURL}}   * @doc {{api.docURL}}\n{{/if}}   * @url [ {{api.method.toUpperCase()}} ] {{api.path}}\n   */", templateTenderParams);
}
