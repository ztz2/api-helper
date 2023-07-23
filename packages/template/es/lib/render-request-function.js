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
    var code = artTemplate.render("\u300Aif commentCode\u300B\u300AcommentCode\u300B\n\u300A/if\u300Bexport function \u300ArequestFunctionName\u300B(data\u300Aif isTypescript\u300B: \u300ArequestDataInterfaceName\u300B\u300A/if\u300B, extraData\u300Aif isTypescript\u300B?: \u300Aif api.requestExtraDataSchema\u300B\u300ArequestExtraDataInterfaceName\u300B\u300Aelse\u300Bunknown\u300A/if\u300B\u300A/if\u300B, ...args\u300Aif isTypescript\u300B: CurrentRequestFunctionRestArgsType\u300A/if\u300B) {\n  return request\u300Aif isTypescript\u300B<\u300AresponseDataInterfaceName\u300B>\u300A/if\u300B(\n    processRequestFunctionConfig(data, extraData, \u300ArequestFunctionName\u300B.requestConfig),\n    ...args\n  );\n}\n\u300ArequestFunctionName\u300B.requestConfig = {\n  path: '\u300Aapi.path\u300B',\n  method: '\u300Aapi.method.toLowerCase()\u300B',\n  formDataKeyNameList: \u300AformDataKeyNameListStr\u300B,\n  pathParamKeyNameList: \u300ApathParamKeyNameListStr\u300B,\n  queryStringKeyNameList: \u300AqueryStringKeyNameListStr\u300B\n}", templateTenderParams);
    return formatCode(code, {
        parser: codeType !== 'typescript' ? 'babel' : 'typescript'
    });
}
export function renderRequestFunctionName(api, options) {
    return options.changeCase.camelCase("".concat(api.path, " By ").concat(api.method));
}
function renderRequestFunctionComment(api) {
    var templateTenderParams = {
        api: api,
        apiDescription: [api.title, api.description].filter(Boolean).join('、')
    };
    return artTemplate.render("/**\n   * @description\u300Aif apiDescription\u300B \u300AapiDescription\u300B\u300Aelse\u300B \u65E0\u300A/if\u300B\n\u300Aif api.docURL\u300B   * @doc \u300Aapi.docURL\u300B\n\u300A/if\u300B   * @url [ \u300Aapi.method.toUpperCase()\u300B ] \u300Aapi.path\u300B\n   */", templateTenderParams);
}
