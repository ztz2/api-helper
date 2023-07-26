import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: '请求接口模板（Javascript）',
  id: 'javascript_api_d85fb69ff5bc9b2f',
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
       《if documentConfig.onlyApiFunc === false》
         import { processRequestFunctionConfig } from '@api-helper/core/es/lib/helpers';
         《documentConfig.headCodeText》
       《/if》
       《each apiList》
          《apih.template.renderRequestFunction($value, { codeType: 'javascript' })》
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
