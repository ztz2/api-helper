import { COMMON_HEAD } from '../common';
import { Template } from '@/store/template/interface';

export default new Template({ value: '对象_UI8QKroW6B3Kfq_fNsRhY', label: '对象', default: true, content: `${COMMON_HEAD}
  const api = params.api;
  const requestDataSchemaList = params.requestDataSchemaList;
  const responseDataSchemaList = params.responseDataSchemaList;
  let tpl1, tpl2 = '';
  // 请求数据
  if (requestDataSchemaList.length > 0) {
    tpl1 = utils.apih.generateMap(requestDataSchemaList, api, {
      paramType: 'request',
      onlyMap: config.onlyMap
    });
  } else {
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl1);

  // 响应数据
  if (responseDataSchemaList.length > 0) {
    tpl2 = utils.apih.generateMap(responseDataSchemaList, api, {
      paramType: 'response',
      onlyMap: config.onlyMap
    });
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl2);

  return result;
};`});
