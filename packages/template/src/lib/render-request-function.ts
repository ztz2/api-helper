import * as changeCase from 'change-case';
import { getSchema } from '@api-helper/core/lib/helpers';
import template from '@/lib/template';
import { ChangeCase } from '@/lib/types';
import formatCode from '@/lib/utils/prettier';
import { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '@/lib/render-interface';

export function renderRequestFunction(
  api: APIHelper.API,
  options?: {
    codeType: 'typescript' | 'javascript';
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
    requestFunctionName: onRenderRequestFunctionName(api, { changeCase }),
    requestDataInterfaceName: onRenderInterfaceName(api.requestDataSchema as APIHelper.Schema, api, { paramType: 'request', changeCase }),
    requestExtraDataInterfaceName: onRenderInterfaceName(api.requestExtraDataSchema as APIHelper.Schema, api, { paramType: 'request', isExtraData: true, changeCase }),
    responseDataInterfaceName: onRenderInterfaceName(responseDataSchema as APIHelper.Schema, api, { paramType: 'response', changeCase }),
  };

  const code = template.render(
    `{{if commentCode}}{{commentCode}}
{{/if}}export function {{requestFunctionName}}(data{{if isTypescript}}: {{requestDataInterfaceName}}{{/if}}, extraData{{if isTypescript}}?: {{if api.requestExtraDataSchema}}{{requestExtraDataInterfaceName}}{{else}}unknown{{/if}}{{/if}}, ...args{{if isTypescript}}: CurrentRequestFunctionRestArgsType{{/if}}) {
  return request{{if isTypescript}}<{{responseDataInterfaceName}}>{{/if}}(
    processRequestFunctionConfig(data, extraData, {{requestFunctionName}}.requestConfig),
    ...args
  );
}
{{requestFunctionName}}.requestConfig = {
  path: '{{api.path}}',
  method: '{{api.method}}',
  formDataKeyNameList: {{formDataKeyNameListStr}},
  pathParamKeyNameList: {{pathParamKeyNameListStr}},
  queryStringKeyNameList: {{queryStringKeyNameListStr}}
}`, templateTenderParams);

  return formatCode(code, {
    parser: codeType !== 'typescript' ? 'babel' : 'typescript'
  });
}

export function renderRequestFunctionName(
  api: APIHelper.API,
  options?: {
    changeCase: ChangeCase
  }) {
  return changeCase.camelCase(`${api.path} By ${api.method}`);
}

function renderRequestFunctionComment(api: APIHelper.API) {
  const templateTenderParams = {
    api,
    apiDescription: [api.summary, api.description].filter(Boolean).join('、')
  };
  return template.render(
`/**
   * @description{{if apiDescription}} {{apiDescription}}{{else}} 无{{/if}}
{{if api.docURL}}   * @doc {{api.docURL}}
{{/if}}   * @url [ {{api.method.toUpperCase()}} ] {{api.path}}
   */`, templateTenderParams);
}
