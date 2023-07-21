import { COMMON_HEAD } from '../common';
import { Template } from '@/store/template/interface';

export default new Template({
  label: 'interface',
  value: 'interface_Y4AIsXBlcKRXjU95av0Cx',
  formatCodeExtension: '.ts',
  builtIn: true,
  content: `${COMMON_HEAD}
  // 返回模板集合.
  const result = [];

  const api = params.api;
  const requestDataSchemaList = params.requestDataSchemaList;
  const responseDataSchemaList = params.responseDataSchemaList;

  // 请求数据
  let tpl1 = '';
  if (requestDataSchemaList.length > 0) {
    tpl1 = apih.template.renderInterface({
      type: 'object',
      params: requestDataSchemaList
    }, api, {
      paramType: 'request'
    });
  } else {
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push({
    title: 'Typescript Interface 模版（请求数据）',
    content: tpl1,
  });

  // 响应数据
  let tpl2 = '';
  if (responseDataSchemaList.length > 0) {
    tpl2 = apih.template.renderInterface({
      type: 'object',
      params: responseDataSchemaList
    }, api, {
      paramType: 'response'
    });
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push({
    title: 'Typescript Interface 模版（响应数据）',
    content: tpl2,
  });

  return result;
};`,
});
