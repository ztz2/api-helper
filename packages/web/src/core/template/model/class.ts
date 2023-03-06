import { COMMON_HEAD } from './common';
import { Template } from '@/store/template/interface';

export default new Template({ value: 'class_el2h7OwE9uumxpo6ZCX0s', label: 'class', content: `${COMMON_HEAD}
  const project = params.project;
  const categoryList = params.categoryList;
  const apiList = params.apiList;
  const requestFields = params.requestFields;
  const responseFields = params.responseFields;
  const api = utils.processAPI({ api: params.api, project, apiList, categoryList }, config);

  // 请求数据生成
  let reqTpl = utils.generateModel({
    fieldList: requestFields,
    renderType: 'class',
    gutterNum: 0,
    config
  });
  if (reqTpl.trim().replace(/\\n/gim, '').length > 0 || config.ignoreEmpty) {
    reqTpl = \`export class \${api.requestDataClassName} \${reqTpl}\n\`;
  } else {
    reqTpl = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(reqTpl);

  // 响应数据生成
  let respTpl = utils.generateModel({
    fieldList: responseFields,
    renderType: 'class',
    gutterNum: 0,
    config
  });
  if (respTpl.trim().replace(/\\n/gim, '').length > 0 || config.ignoreEmpty) {
    respTpl = \`export class \${api.responseDataClassName} \${respTpl}\n\`;
  } else {
    respTpl = \`// 没有字段可以生成\n// 如果有响应数据字段，请先选择后在进行生成\`;
  }
  result.push(respTpl);

  return result;
};`});
