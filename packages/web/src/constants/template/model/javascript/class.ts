import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  label: 'class',
  value: 'class_el2h7OwE9uumxpo6ZCX0s',
  formatCodeExtension: '.js',
  builtIn: true,
  content: `${COMMON_HEAD}
  const api = params.api;
  const requestDataSchemaList = params.requestDataSchemaList;
  const responseDataSchemaList = params.responseDataSchemaList;
  let tpl1, tpl2 = '';
  // 请求数据
  if (requestDataSchemaList.length > 0) {
    tpl1 = utils.apihTemplate.renderClass(requestDataSchemaList, api, {
      paramType: 'request'
    });
  } else {
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl1);

  // 响应数据
  if (responseDataSchemaList.length > 0) {
    tpl2 = utils.apihTemplate.renderClass(responseDataSchemaList, api, {
      paramType: 'response'
    });
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl2);

  return result;
};`,
});
