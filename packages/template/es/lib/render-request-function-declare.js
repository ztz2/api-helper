import * as _changeCase from 'change-case';
import { getSchema } from '@api-helper/core/lib/helpers';
import { renderRequestFunctionName, renderRequestFunctionComment, } from '../lib/render-request-function';
import artTemplate from '../lib/art-template';
import { renderInterfaceName } from '../lib/render-interface';
import { isEmptySchema } from '../lib/utils/util';
export function renderRequestFunctionDeclare(api, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    if (options === void 0) { options = {}; }
    if (!api) {
        return '';
    }
    var dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
    var isEmptyRequestData = isEmptySchema(api.requestDataSchema);
    var onRenderRequestFunctionName = (_a = options === null || options === void 0 ? void 0 : options.onRenderRequestFunctionName) !== null && _a !== void 0 ? _a : renderRequestFunctionName;
    var onRenderInterfaceName = (_b = options === null || options === void 0 ? void 0 : options.onRenderInterfaceName) !== null && _b !== void 0 ? _b : renderInterfaceName;
    var responseDataSchema = dataKey ? getSchema(api.responseDataSchema, dataKey) : api.responseDataSchema;
    var headers = (_h = (_g = (_f = (_e = (_d = (_c = api.headers) === null || _c === void 0 ? void 0 : _c.params) === null || _d === void 0 ? void 0 : _d.map) === null || _e === void 0 ? void 0 : _e.call(_d, function (item) { return item.keyName; })) === null || _f === void 0 ? void 0 : _f.filter) === null || _g === void 0 ? void 0 : _g.call(_f, Boolean)) !== null && _h !== void 0 ? _h : [];
    var cookies = (_p = (_o = (_m = (_l = (_k = (_j = api.cookies) === null || _j === void 0 ? void 0 : _j.params) === null || _k === void 0 ? void 0 : _k.map) === null || _l === void 0 ? void 0 : _l.call(_k, function (item) { return item.keyName; })) === null || _m === void 0 ? void 0 : _m.filter) === null || _o === void 0 ? void 0 : _o.call(_m, Boolean)) !== null && _p !== void 0 ? _p : [];
    var templateTenderParams = {
        api: api,
        options: options,
        isEmptyRequestData: isEmptyRequestData,
        commentCode: renderRequestFunctionComment(api),
        formDataKeyNameListStr: JSON.stringify(api.formDataKeyNameList),
        pathParamKeyNameListStr: JSON.stringify(api.pathParamKeyNameList),
        queryStringKeyNameListStr: JSON.stringify(api.queryStringKeyNameList),
        headersStr: JSON.stringify(headers),
        cookiesStr: JSON.stringify(cookies),
        requestContentTypeStr: JSON.stringify((_q = api.requestContentType) !== null && _q !== void 0 ? _q : []),
        responseContentTypeStr: JSON.stringify((_r = api.responseContentType) !== null && _r !== void 0 ? _r : []),
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
    var code = artTemplate.render("\u300Aif commentCode\u300B\u300AcommentCode\u300B\n\u300A/if\u300Bdeclare const \u300ArequestFunctionName\u300B: {\n  (data\u300Aif isEmptyRequestData\u300B?\u300A/if\u300B: \u300ArequestDataInterfaceName\u300B, extraData?: \u300Aif api.requestExtraDataSchema\u300B\u300ArequestExtraDataInterfaceName\u300B\u300Aelse\u300Bunknown\u300A/if\u300B, ...args: CurrentRequestFunctionRestArgsType): Promise<\u300AresponseDataInterfaceName\u300B>;\n  requestConfig: {\n    path: '\u300Aapi.path\u300B',\n    method: '\u300Aapi.method.toLowerCase()\u300B',\u300Aif options.genHeaders\u300B\n    headers: \u300AheadersStr\u300B,\u300A/if\u300B\u300Aif options.genCookies\u300B\n    cookies: \u300AcookiesStr\u300B,\u300A/if\u300B\u300Aif options.genRequestContentType\u300B\n    requestContentType: \u300ArequestContentTypeStr\u300B,\u300A/if\u300B\u300Aif options.genResponseContentType\u300B\n    responseContentType: \u300AresponseContentTypeStr\u300B,\u300A/if\u300B\n    formDataKeyNameList: \u300AformDataKeyNameListStr\u300B,\n    pathParamKeyNameList: \u300ApathParamKeyNameListStr\u300B,\n    queryStringKeyNameList: \u300AqueryStringKeyNameListStr\u300B\n  }\n};", templateTenderParams);
    return code;
}
