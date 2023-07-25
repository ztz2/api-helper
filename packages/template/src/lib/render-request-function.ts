import * as _changeCase from 'change-case';
import { getSchema } from '@api-helper/core/lib/helpers';

import { ChangeCase } from '@/lib/interface';
import artTemplate from '@/lib/art-template';
import formatCode from '@/lib/utils/prettier';
import { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '@/lib/render-interface';

export function renderRequestFunction(
  api: APIHelper.API,
  options?: {
    codeType?: 'typescript' | 'javascript';
    dataKey?: string | undefined;
    onRenderInterfaceName?: typeof renderInterfaceName;
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
  }
) {
  if (!api) {
    return '';
  }

  const codeType = options?.codeType || 'typescript';
  const dataKey = options?.dataKey;

  const onRenderRequestFunctionName = (options && options.onRenderRequestFunctionName) ? options.onRenderRequestFunctionName : renderRequestFunctionName;
  const onRenderInterfaceName = (options && options.onRenderInterfaceName) ? options.onRenderInterfaceName : renderInterfaceName;

  const responseDataSchema = dataKey ? getSchema(api.responseDataSchema, dataKey) : api.responseDataSchema;

  const templateTenderParams = {
    api,
    isTypescript: codeType === 'typescript',
    commentCode: renderRequestFunctionComment(api),
    formDataKeyNameListStr: JSON.stringify(api.formDataKeyNameList),
    pathParamKeyNameListStr: JSON.stringify(api.pathParamKeyNameList),
    queryStringKeyNameListStr: JSON.stringify(api.queryStringKeyNameList),
    requestFunctionName: onRenderRequestFunctionName(api, { changeCase: _changeCase }),
    requestDataInterfaceName: onRenderInterfaceName(api.requestDataSchema as APIHelper.Schema, api, { paramType: 'request', changeCase: _changeCase }),
    requestExtraDataInterfaceName: onRenderInterfaceName(api.requestExtraDataSchema as APIHelper.Schema, api, { paramType: 'request', isExtraData: true, changeCase: _changeCase }),
    responseDataInterfaceName: onRenderInterfaceName(responseDataSchema as APIHelper.Schema, api, { paramType: 'response', changeCase: _changeCase }),
  };

  const code = artTemplate.render(
    `《if commentCode》《commentCode》
《/if》export function 《requestFunctionName》(data《if isTypescript》: 《requestDataInterfaceName》《/if》, extraData《if isTypescript》?: 《if api.requestExtraDataSchema》《requestExtraDataInterfaceName》《else》unknown《/if》《/if》, ...args《if isTypescript》: CurrentRequestFunctionRestArgsType《/if》) {
  return request《if isTypescript》<《responseDataInterfaceName》>《/if》(
    processRequestFunctionConfig(data, extraData, 《requestFunctionName》.requestConfig),
    ...args
  );
}
《requestFunctionName》.requestConfig = {
  path: '《api.path》',
  method: '《api.method.toLowerCase()》',
  formDataKeyNameList: 《formDataKeyNameListStr》,
  pathParamKeyNameList: 《pathParamKeyNameListStr》,
  queryStringKeyNameList: 《queryStringKeyNameListStr》
}`, templateTenderParams);

  return formatCode(code, {
    parser: codeType !== 'typescript' ? 'babel' : 'typescript'
  });
}

export function renderRequestFunctionName(
  api: APIHelper.API,
  options: { changeCase: ChangeCase }) {
  const changeCase = options?.changeCase ?? _changeCase;
  return changeCase.camelCase(`${api.path} By ${api.method}`);
}

function renderRequestFunctionComment(api: APIHelper.API) {
  const templateTenderParams = {
    api,
    apiDescription: [api.title, api.description].filter(Boolean).join('、')
  };
  return artTemplate.render(
`/**
   * @description《if apiDescription》 《apiDescription》《else》 无《/if》
《if api.docURL》   * @doc 《api.docURL》
《/if》   * @url [ 《api.method.toUpperCase()》 ] 《api.path》
   */`, templateTenderParams);
}
