import { COMMON_HEAD } from './common';
import { Template } from '@/store/template/interface';

export default new Template({ value: 'API_gAHoEYCIUVnAlqIifY9S5', label: 'API', content: `${COMMON_HEAD}
let apiList = params.apiList;
const project = params.project;
const moduleList = params.moduleList;

config.typingList = [];
// API处理
apiList = apiList.map((api) => {
  api = utils.processAPI({ api, project, apiList, moduleList }, config);
  if (config.requestDataConstraint) {
    config.typingList.push(api.requestParamsInterfaceName);  }
  if (config.responseDataConstraint) {
    config.typingList.push(api.responseParamsInterfaceName);
  }
  return api;
});

/********* 生成API函数方法 -- 开始 ***********/
const TPL1 = \`《if !config.onlyApiFunc》《if config.headCodeText》《config.headCodeText》《if config.semi》;《/if》
《if config.codeType==='ts' && config.typingList.length && (config.requestDataConstraint || config.responseDataConstraint)》《if config.typingList.length > 2》import {《each config.typingList typing i》
  《typing》,《if i === config.typingList.length - 1》\n《/if》《/each》}《else》import { 《each config.typingList typing i》《if i > 0》, 《/if》《typing》 《/each》《/if》 from '@/typing/'《if config.semi》;《/if》\n《/if》
《/if》《/if》《each apiList》《if $value.summary》// 《$value.summary》《/if》
export function 《$value.requestFunctionName》(data《if config.codeType === 'ts'》: 《if config.requestDataConstraint》《$value.requestParamsInterfaceName》《else》any《/if》《/if》) {
  return request《if config.codeType === 'ts'》《if config.responseDataConstraint》<《$value.responseParamsInterfaceName》>《else》<any>《/if》《/if》({《if config.duplicateRequests》
    duplicateRequests: false,《/if》《if config.baseURL》
    baseURL: 《config.baseURL》,《/if》
    url: 《if $value.requestURL.includes('{')》\\\`《else》'《/if》《$value.requestURL》《if $value.requestURL.includes('{')》\\\`《else》'《/if》,
    method: '《$value.method》',
    《if $value.method === 'get' || $value.contentType.includes('application/x-www-form-urlencoded')》params: data,《else》data,《/if》
  })《if config.semi》;
}
《$value.requestFunctionName》.requestConfig = {
  path: '《$value.url》',
  method: '《$value.method.toUpperCase()》',
}《/if》《if $index < apiList.length - 1》\n《/if》《if $index < apiList.length - 1》\n《/if》《/each》\n\`;

  result.push(template.render(TPL1, { project, apiList, moduleList, config }));
  /********* 生成API函数方法 -- 结束 ***********/

  /********* 生成API函数导出方法 -- 开始 ***********/
  // const sortBy = lodash.sortBy;
  // apiList = sortBy(apiList, (item) => item.requestFunctionName.length);
  const TPL2 = \`import {《if apiList.length > 2》《each apiList》
 《$value.requestFunctionName》,《if $index === apiList.length - 1》\n《/if》《/each》《 else 》《each apiList》《if $index > 0》, 《/if>《$value.requestFunctionName》《/each》 《/if》} from '@/api/'《if config.semi》;《/if》\`;
  result.push(template.render(TPL2, { project, apiList, moduleList, config }));
  /********* 生成API函数导出方法 -- 结束 ***********/

  return result;
};`});
