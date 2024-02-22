import { Template } from '@/store/template/interface';

import { COMMON_HEAD } from './common';

export default function genEmptyApiTemplate() {
  return new Template({
    content: `${COMMON_HEAD}
  console.log('数据参数: ', params);
  console.log('文档配置信息: ', documentConfig);
  console.log('API-Helper工具函数: ', apih);
  console.log('lodash工具函数: ', lodash);

  // 返回模板集合.
  const result = [];

  const apiList = params.apiList;

  const tpl1 =
  \`/**
 * @description 生成模板例子，这里获取请求API集合，根据这些API，可以生成想要的任何模板代码>
 *

《if apiList.length > 0》
请求API：《each apiList》
   《$value.label》
      url：《$value.path》
      method：《$value.method》《/each》
《/if》
*/\`;

  // 当一个模板定义好之后，使用 artTemplate.render 方法进行生成，并添加到result返回数组中
  // 当然可以生成多个模板，每次生成好之后，添加到result数组中即可
  result.push({
    title: '模版标题',
    content: artTemplate.render(tpl1, { apiList, params, documentConfig, apih, lodash }),
  });

  // 返回生成好的模板
  return result;
}
`,
  });
}
