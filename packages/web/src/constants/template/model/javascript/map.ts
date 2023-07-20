import { COMMON_HEAD } from '../common';
import { DEFAULT_SELECT_MODEL_TPL_ID } from '@/constants';
import { Template } from '@/store/template/interface';

export default new Template({
  label: '对象',
  value: DEFAULT_SELECT_MODEL_TPL_ID,
  formatCodeExtension: '.js',
  builtIn: true,
  content: `${COMMON_HEAD}
  const api = params.api;
  const requestDataSchemaList = params.requestDataSchemaList;
  const responseDataSchemaList = params.responseDataSchemaList;

  let tpl1, tpl2 = '';
  // 请求数据
  if (requestDataSchemaList.length > 0) {
    tpl1 = apih.template.renderObject(requestDataSchemaList, api, {
      paramType: 'request',
      onlyMap: config.onlyMap
    });
  } else {
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl1);

  // 响应数据
  if (responseDataSchemaList.length > 0) {
    tpl2 = apih.template.renderObject(responseDataSchemaList, api, {
      paramType: 'response',
      onlyMap: config.onlyMap
    });
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl2);

  return result;
};`,
});
