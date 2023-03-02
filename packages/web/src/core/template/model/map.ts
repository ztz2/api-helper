import { COMMON_HEAD } from './common';
import { Template } from '@/store/template/interface';

export default new Template({ value: '对象_UI8QKroW6B3Kfq_fNsRhY', label: '对象', content: `${COMMON_HEAD}
  const project = params.project;
  const moduleList = params.moduleList;
  const apiList = params.apiList;
  const requestFields = params.requestFields;
  const responseFields = params.responseFields;
  const api = utils.processAPI({ api: params.api, project, apiList, moduleList }, config);

  // 请求数据Interface生成
  let reqTpl = utils.generateModel({
    fieldList: requestFields,
    renderType: 'map',
    gutterNum: 0,
    config
  });
  if (reqTpl.trim().replace(/\\n/gim, '').length > 0 || config.ignoreEmpty) {
    reqTpl = \`export const \${api.requestDataMapName} = \${reqTpl}\n\`;
  } else {
    reqTpl = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(reqTpl);

  // 响应数据Interface生成
  let respTpl = utils.generateModel({
    fieldList: responseFields,
    renderType: 'map',
    gutterNum: 0,
    config
  });
  if (respTpl.trim().replace(/\\n/gim, '').length > 0 || config.ignoreEmpty) {
    respTpl = \`export const \${api.responseDataMapName} = \${respTpl}\n\`;
  } else {
    respTpl = \`// 没有字段可以生成\n// 如果有响应数据字段，请先选择后在进行生成\`;
  }
  result.push(respTpl);

  return result;
};`});
