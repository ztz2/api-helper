import * as _changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { getSchema } from '@api-helper/core/lib/helpers';

import {
  renderRequestFunctionName,
  renderRequestFunctionComment,
} from '@/lib/render-request-function';
import artTemplate from '@/lib/art-template';
import { renderInterfaceName } from '@/lib/render-interface';
import { isEmptySchema } from '@/lib/utils/util';

export function renderRequestFunctionDeclare(
  api: APIHelper.API,
  options: {
    dataKey?: string | undefined;
    genHeaders?: boolean;
    genCookies?: boolean;
    genRequestContentType?: boolean;
    genResponseContentType?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName;
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
  } = {}
) {
  if (!api) {
    return '';
  }
  const dataKey = options?.dataKey;
  const isEmptyRequestData = isEmptySchema(api.requestDataSchema);
  const onRenderRequestFunctionName = options?.onRenderRequestFunctionName ?? renderRequestFunctionName;
  const onRenderInterfaceName = options?.onRenderInterfaceName ?? renderInterfaceName;
  const responseDataSchema = dataKey ? getSchema(api.responseDataSchema, dataKey) : api.responseDataSchema;
  const headers = api.headers?.params?.map?.((item) => item.keyName)?.filter?.(Boolean) ?? [];
  const cookies = api.cookies?.params?.map?.((item) =>  item.keyName)?.filter?.(Boolean) ?? [];
  const templateTenderParams = {
    api,
    options,
    isEmptyRequestData,
    commentCode: renderRequestFunctionComment(api),
    formDataKeyNameListStr: JSON.stringify(api.formDataKeyNameList),
    pathParamKeyNameListStr: JSON.stringify(api.pathParamKeyNameList),
    queryStringKeyNameListStr: JSON.stringify(api.queryStringKeyNameList),
    headersStr: JSON.stringify(headers),
    cookiesStr: JSON.stringify(cookies),
    requestContentTypeStr: JSON.stringify(api.requestContentType ?? []),
    responseContentTypeStr: JSON.stringify(api.responseContentType ?? []),
    requestFunctionName: onRenderRequestFunctionName(api, {
      changeCase: _changeCase,
    }),
    requestDataInterfaceName: onRenderInterfaceName(api, {
      paramType: 'request',
      changeCase: _changeCase,
      schema: api.requestDataSchema as APIHelper.Schema,
    }),
    requestExtraDataInterfaceName: onRenderInterfaceName(api, {
      isExtraData: true,
      paramType: 'request',
      changeCase: _changeCase,
      schema: api.requestExtraDataSchema as APIHelper.Schema,
    }),
    responseDataInterfaceName: onRenderInterfaceName(api, {
      paramType: 'response',
      changeCase: _changeCase,
      schema: responseDataSchema,
    }),
  };

  const code = artTemplate.render(
    `《if commentCode》《commentCode》
《/if》declare const 《requestFunctionName》: {
  (data《if isEmptyRequestData》?《/if》: 《requestDataInterfaceName》, extraData?: 《if api.requestExtraDataSchema》《requestExtraDataInterfaceName》《else》unknown《/if》, ...args: CurrentRequestFunctionRestArgsType): Promise<《responseDataInterfaceName》>;
  requestConfig: {
    path: '《api.path》',
    method: '《api.method.toLowerCase()》',《if options.genHeaders》
    headers: 《headersStr》,《/if》《if options.genCookies》
    cookies: 《cookiesStr》,《/if》《if options.genRequestContentType》
    requestContentType: 《requestContentTypeStr》,《/if》《if options.genResponseContentType》
    responseContentType: 《responseContentTypeStr》,《/if》
    formDataKeyNameList: 《formDataKeyNameListStr》,
    pathParamKeyNameList: 《pathParamKeyNameListStr》,
    queryStringKeyNameList: 《queryStringKeyNameListStr》
  }
};`, templateTenderParams);

  return code;
}
