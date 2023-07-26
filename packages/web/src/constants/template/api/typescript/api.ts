import { Template } from '@/store/template/interface';

import { COMMON_HEAD } from '../common';
import { DEFAULT_SELECT_API_TPL_ID } from '@/constants';

export default new Template({
  title: '请求接口模板（Typescript）',
  id: DEFAULT_SELECT_API_TPL_ID,
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
       《if documentConfig.onlyApiFunc === false》
         import { processRequestFunctionConfig, RequestFunctionRestArgsType } from '@api-helper/core/es/lib/helpers';
         《documentConfig.headCodeText》
         type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;
       《/if》
       《each apiList》
          《apih.template.renderInterface($value.requestDataSchema, $value, { paramType: 'request' })》
          《apih.template.renderInterface($value.requestExtraDataSchema, $value, { paramType: 'request', isExtraData: true })》
          《apih.template.renderInterface(
              documentConfig.dataKey ? apih.core.getSchema($value.responseDataSchema, documentConfig.dataKey) : $value.responseDataSchema,
              $value,
              { paramType: 'response' }
           )》
          《apih.template.renderRequestFunction($value, { codeType: 'typescript' })》
       《/each》
    \`, { apiList, params, documentConfig, apih, lodash });
  }

  function renderApiTyping() {
    return artTemplate.render(\`
      import { 《each apiList》《apih.template.renderRequestFunctionName($value)》,《/each》 } from '@/api';
    \`, { apiList, params, documentConfig, apih, lodash });
  }

  return result;
};`,
});
