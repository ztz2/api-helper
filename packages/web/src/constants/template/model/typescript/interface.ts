import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: 'Typescript / interface',
  id: 'typescript_interface_004b76d09ea723be',
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
    const schema = (requestDataSchemaList.length === 1 && (requestDataSchemaList[0].type === 'array' || requestDataSchemaList[0].type === 'object')) ? requestDataSchemaList[0] : apih.core.createSchema('object', { params: requestDataSchemaList });
    tpl1 = apih.template.renderInterface(
      schema,
      api,
      {
        paramType: 'request',
      }
    );
  } else {
    tpl1 = \`// 没有请求参数字段可以生成，如果有请求参数字段，请先选择后再进行模版生成\`;
  }
  result.push({
    title: 'Typescript Interface 模版（请求数据）',
    content: tpl1,
  });

  // 响应数据
  let tpl2 = '';
  if (responseDataSchemaList.length > 0) {
    const schema = (responseDataSchemaList.length === 1 && (responseDataSchemaList[0].type === 'array' || responseDataSchemaList[0].type === 'object')) ? responseDataSchemaList[0] : apih.core.createSchema('object', { params: responseDataSchemaList });
    tpl2 = apih.template.renderInterface(
      schema,
      api,
      {
        paramType: 'response',
      }
    );
  } else {
    tpl2 = \`// 没有响应数据字段可以生成，如果有响应数据字段，请先选择后再进行模版生成\`;
  }
  result.push({
    title: 'Typescript Interface 模版（响应数据）',
    content: tpl2,
  });

  return result;
};`,
});
