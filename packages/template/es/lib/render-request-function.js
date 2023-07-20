import * as changeCase from 'change-case';
import { getSchema } from '@api-helper/core/lib/helpers';
import artTemplate from '../lib/art-template';
import formatCode from '../lib/utils/prettier';
import { renderInterfaceName } from '../lib/render-interface';
export function renderRequestFunction(api, options) {
    if (!api) {
        return '';
    }
    var codeType = (options === null || options === void 0 ? void 0 : options.codeType) || 'typescript';
    var dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
    var onRenderRequestFunctionName = (options && options.onRenderRequestFunctionName) ? options.onRenderRequestFunctionName : renderRequestFunctionName;
    var onRenderInterfaceName = (options && options.onRenderInterfaceName) ? options.onRenderInterfaceName : renderInterfaceName;
    var responseDataSchema = dataKey ? getSchema(api.responseDataSchema, dataKey) : api.responseDataSchema;
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
    var code = artTemplate.render("{{if commentCode}}{{commentCode}}\n{{/if}}export function {{requestFunctionName}}(data{{if isTypescript}}: {{requestDataInterfaceName}}{{/if}}, extraData{{if isTypescript}}?: {{if api.requestExtraDataSchema}}{{requestExtraDataInterfaceName}}{{else}}unknown{{/if}}{{/if}}, ...args{{if isTypescript}}: CurrentRequestFunctionRestArgsType{{/if}}) {\n  return request{{if isTypescript}}<{{responseDataInterfaceName}}>{{/if}}(\n    processRequestFunctionConfig(data, extraData, {{requestFunctionName}}.requestConfig),\n    ...args\n  );\n}\n{{requestFunctionName}}.requestConfig = {\n  path: '{{api.path}}',\n  method: '{{api.method}}',\n  formDataKeyNameList: {{formDataKeyNameListStr}},\n  pathParamKeyNameList: {{pathParamKeyNameListStr}},\n  queryStringKeyNameList: {{queryStringKeyNameListStr}}\n}", templateTenderParams);
    return formatCode(code, {
        parser: codeType !== 'typescript' ? 'babel' : 'typescript'
    });
}
export function renderRequestFunctionName(api, options) {
    return changeCase.camelCase("".concat(api.path, " By ").concat(api.method));
}
function renderRequestFunctionComment(api) {
    var templateTenderParams = {
        api: api,
        apiDescription: [api.summary, api.description].filter(Boolean).join('、')
    };
    return artTemplate.render("/**\n   * @description{{if apiDescription}} {{apiDescription}}{{else}} \u65E0{{/if}}\n{{if api.docURL}}   * @doc {{api.docURL}}\n{{/if}}   * @url [ {{api.method.toUpperCase()}} ] {{api.path}}\n   */", templateTenderParams);
}
