import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  value: 'interface_Y4AIsXBlcKRXjU95av0Cx',
  label: 'interface',
  default: true,
  content: `${COMMON_HEAD}
  const api = params.api;
  const requestDataSchemaList = params.requestDataSchemaList;
  const responseDataSchemaList = params.responseDataSchemaList;
  let tpl1, tpl2 = '';
  // 请求数据
  if (requestDataSchemaList.length > 0) {
    tpl1 = utils.apih.generateClass({
      type: 'object',
      params: requestDataSchemaList
    }, api, {
      paramType: 'request'
    });
  } else {
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl1);

  // 响应数据
  if (responseDataSchemaList.length > 0) {
    tpl2 = utils.apih.generateInterface({
      type: 'object',
      params: responseDataSchemaList
    }, api, {
      paramType: 'response'
    });
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl2);

  return result;
};`,
});
