import * as _changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { getSchema } from '@api-helper/core/lib/helpers';

import { ChangeCase } from '@/lib/types';
import artTemplate from '@/lib/art-template';
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
《/if》export function 《requestFunctionName》(data《if isTypescript》: 《requestDataInterfaceName》《/if》, extraData《if isTypescript》?: 《if api.requestExtraDataSchema》《requestExtraDataInterfaceName》《else》unknown《/if》《/if》, ...args《if isTypescript》: CurrentRequestFunctionRestArgsType《/if》) {
  return request《if isTypescript》<《responseDataInterfaceName》>《/if》(
    processRequestFunctionConfig(data, extraData, 《requestFunctionName》.requestConfig),
    ...args
  );
}
《requestFunctionName》.requestConfig = {
  path: '《api.path》',
  method: '《api.method.toUpperCase()》',
  formDataKeyNameList: 《formDataKeyNameListStr》,
  pathParamKeyNameList: 《pathParamKeyNameListStr》,
  queryStringKeyNameList: 《queryStringKeyNameListStr》
}`, templateTenderParams);

  return code;
}

export function renderRequestFunctionName(
  api: APIHelper.API,
  options: { changeCase: ChangeCase }) {
  const changeCase = options?.changeCase ?? _changeCase;
  return changeCase.camelCase(`${api.path} By ${api.method}`);
}

export function renderRequestFunctionComment(api: APIHelper.API, updateTime = '') {
  return artTemplate.render(
`/**
   * @description《if description》 《description》《else》 无《/if》《if docURL》
   * @doc 《docURL》《/if》
   * @url 《url》《if updateTime》
   * @update 《updateTime》《/if》
   */`, {
      description: [api.title, api.description].filter(Boolean).join('、'),
      docURL: api.docURL,
      url: `[ ${api.method.toUpperCase()} ] ${api.path}`,
      updateTime
    });
}
