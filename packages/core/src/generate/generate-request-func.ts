import { template, format } from '../utils';
import { APIHelper, ChangeCase } from '../types';
import { generateInterfaceName, GenerateInterfaceName } from './generate-interface';

const changeCase = require('change-case');

type GenerateRequestFunctionNameOptions = { changeCase: ChangeCase }
export function generateRequestFunctionName(api: APIHelper.API) {
  return changeCase.camelCase(`${api.path} By ${api.method}`);
}

function generateComment(api: APIHelper.API) {
  const templateTenderParams = {
    api,
    apiDescription: [api.summary, api.description].filter(Boolean).join('、')
  };
  return template.render(
`/**
   * @描述{{if apiDescription}} {{apiDescription}}{{else}} 无{{/if}}
{{if api.docURL}}   * @接口文档 {{api.docURL}}
{{/if}}   * @请求信息 [ {{api.method.toUpperCase()}} ] {{api.path}}
   */`, templateTenderParams);
}

export type GenerateRequestFuncOptions = {
  codeType: 'typescript' | 'javascript';
  onGenerateInterfaceName?: GenerateInterfaceName;
  onGenerateRequestFunctionName?(api: APIHelper.API, options: GenerateRequestFunctionNameOptions): string;
}
export function generateRequestFunc(api: APIHelper.API, options?: GenerateRequestFuncOptions) {
  if (!api) {
    return '';
  }

  const codeType = options?.codeType || 'typescript';
  const onGenerateRequestFunctionName = (options && options.onGenerateRequestFunctionName) ? options.onGenerateRequestFunctionName : generateRequestFunctionName;
  const onGenerateInterfaceName = (options && options.onGenerateInterfaceName) ? options.onGenerateInterfaceName : generateInterfaceName;

  const templateTenderParams = {
    api,
    isTypescript: codeType === 'typescript',
    commentCode: generateComment(api),
    formDataKeyNameListStr: JSON.stringify(api.formDataKeyNameList),
    pathParamKeyNameListStr: JSON.stringify(api.pathParamKeyNameList),
    queryStringKeyNameListStr: JSON.stringify(api.queryStringKeyNameList),
    requestFunctionName: onGenerateRequestFunctionName(api, { changeCase }),
    requestDataInterfaceName: onGenerateInterfaceName(api.requestDataSchema as APIHelper.Schema, api, { paramType: 'request', changeCase }),
    requestExtraDataInterfaceName: onGenerateInterfaceName(api.requestExtraDataSchema as APIHelper.Schema, api, { paramType: 'request', isExtraData: true, changeCase }),
    responseDataInterfaceName: onGenerateInterfaceName(api.responseDataSchema as APIHelper.Schema, api, { paramType: 'response', changeCase }),
  };

  const code = template.render(
    `{{if commentCode}}{{commentCode}}
{{/if}}export function {{requestFunctionName}}(data{{if isTypescript}}: {{requestDataInterfaceName}}{{/if}}, extraData{{if isTypescript}}: {{if api.requestExtraDataSchema}}{{requestExtraDataInterfaceName}}{{else}}unknown{{/if}}{{/if}}, ...args{{if isTypescript}}: CurrentRequestFunctionRestArgsType{{/if}}) {
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

  return format(code, {
    parser: codeType !== 'typescript' ? 'babel' : 'typescript'
  });
}

