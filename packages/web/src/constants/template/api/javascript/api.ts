import { COMMON_HEAD } from '../common';
import { Template } from '@/store/template/interface';

export default new Template({
  label: '请求接口模板（Javascript）',
  value: 'javascript_api_d85fb69ff5bc9b2f',
  formatCodeExtension: '.ts',
  builtIn: true,
  content: `${COMMON_HEAD}
  // 返回模板集合.
  const result = [];

  const apiList = params.apiList;

  result.push({
    title: '请求接口模板（Javascript）',
    content: renderApi(),
  });

  result.push({
    title: '导出接口名称模板',
    content: renderApiTyping(),
  });

  function renderApi() {
     return artTemplate.render(\`
       《if config.onlyApiFunc === false》
         import { processRequestFunctionConfig } from '@api-helper/core/es/lib/helpers';
         《config.headCodeText》
       《/if》
       《each apiList》
          《apih.template.renderRequestFunction($value, { codeType: 'javascript' })》
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
