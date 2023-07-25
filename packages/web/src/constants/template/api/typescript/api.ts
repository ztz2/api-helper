import { Template } from '@api-helper/template';

import { COMMON_HEAD } from '../common';
import { DEFAULT_SELECT_API_TPL_ID } from '@/constants';

export default new Template({
  label: '请求接口模板（Typescript）',
  value: DEFAULT_SELECT_API_TPL_ID,
  formatCodeExtension: '.ts',
  builtIn: true,
  content: `${COMMON_HEAD}
  // 返回模板集合.
  const result = [];

  const apiList = params.apiList;

  result.push({
    title: '请求接口模板（Typescript）',
    content: renderApi(),
  });

  result.push({
    title: '导出接口名称模板',
    content: renderApiTyping(),
  });

  function renderApi() {
     return artTemplate.render(\`
       《if config.onlyApiFunc === false》
         import { processRequestFunctionConfig, RequestFunctionRestArgsType } from '@api-helper/core/es/lib/helpers';
         《config.headCodeText》
         type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;
       《/if》
       《each apiList》
          《apih.template.renderInterface($value.requestDataSchema, $value, { paramType: 'request' })》
          《apih.template.renderInterface($value.requestExtraDataSchema, $value, { paramType: 'request', isExtraData: true })》
          《apih.template.renderInterface(
              config.dataKey ? apih.core.getSchema($value.responseDataSchema, config.dataKey) : $value.responseDataSchema,
              $value,
              { paramType: 'response' }
           )》
          《apih.template.renderRequestFunction($value, { codeType: 'typescript' })》
       《/each》
    \`, { apiList, params, config, apih, lodash });
  }

  function renderApiTyping() {
    return artTemplate.render(\`
      import { 《each apiList》《apih.template.renderRequestFunctionName($value)》,《/each》 } from '@/api';
    \`, { apiList, params, config, apih, lodash });
  }

  return result;
};`,
});
