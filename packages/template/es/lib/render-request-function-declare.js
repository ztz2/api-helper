import * as _changeCase from 'change-case';
import { getSchema } from '@api-helper/core/lib/helpers';
import { renderRequestFunctionName, renderRequestFunctionComment, } from '../lib/render-request-function';
import artTemplate from '../lib/art-template';
import { renderInterfaceName } from '../lib/render-interface';
export function renderRequestFunctionDeclare(api, options) {
    if (!api) {
        return '';
    }
    var dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
    var onRenderRequestFunctionName = (options && options.onRenderRequestFunctionName) ? options.onRenderRequestFunctionName : renderRequestFunctionName;
    var onRenderInterfaceName = (options && options.onRenderInterfaceName) ? options.onRenderInterfaceName : renderInterfaceName;
    var responseDataSchema = dataKey ? getSchema(api.responseDataSchema, dataKey) : api.responseDataSchema;
    var templateTenderParams = {
        api: api,
        commentCode: renderRequestFunctionComment(api),
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
    var code = artTemplate.render("\u300Aif commentCode\u300B\u300AcommentCode\u300B\n\u300A/if\u300Bexport declare const \u300ArequestFunctionName\u300B: {\n  (data: \u300ArequestDataInterfaceName\u300B, extraData?: \u300Aif api.requestExtraDataSchema\u300B\u300ArequestExtraDataInterfaceName\u300B\u300Aelse\u300Bunknown\u300A/if\u300B, ...args: CurrentRequestFunctionRestArgsType): Promise<\u300AresponseDataInterfaceName\u300B>;\n  readonly requestConfig: {\n    path: '\u300Aapi.path\u300B',\n    method: '\u300Aapi.method.toLowerCase()\u300B',\n    formDataKeyNameList: \u300AformDataKeyNameListStr\u300B,\n    pathParamKeyNameList: \u300ApathParamKeyNameListStr\u300B,\n    queryStringKeyNameList: \u300AqueryStringKeyNameListStr\u300B\n  }\n};", templateTenderParams);
    return code;
}
