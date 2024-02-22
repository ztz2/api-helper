import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from './common';

/**
 * @description
 */
export default function genEmptyModelTemplate() {
  return new Template({
    content: `${COMMON_HEAD}
  console.log('数据参数: ', params);
  console.log('文档配置信息: ', documentConfig);
  console.log('API-Helper工具函数: ', apih);
  console.log('lodash工具函数: ', lodash);

  // 返回模板集合.
  const result = [];

  const api = params.api;
  // 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
  const requestDataSchemaList = apih.core.filterSchemaPrimitiveValue(params.requestDataSchemaList);
  // 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
  const responseDataSchemaList = apih.core.filterSchemaPrimitiveValue(params.responseDataSchemaList);

  const tpl1 = \`/**
 * @description 生成模板例子，这里获取请求数据和响应数据的字段，根据这些字段，可以生成想要的任何模板代码。
 *

《if requestDataSchemaList.length > 0》
请求数据字段：《each requestDataSchemaList》
   《$value.keyName》《$value.label》《/each》
《/if》
《if responseDataSchemaList.length > 0》
响应数据字段：《each responseDataSchemaList》
   《$value.keyName》《$value.label》《/each》
《/if》
*/\`;

    // 当一个模板定义好之后，使用 artTemplate.render 方法进行生成，并添加到result返回数组中
    // 当然可以生成多个模板，每次生成好之后，添加到result数组中即可
    result.push({
      title: '模版标题',
      content: artTemplate.render(tpl1, { requestDataSchemaList, responseDataSchemaList, params, documentConfig, apih, lodash }),
    });

    // 返回生成好的模板
    return result;
}
`,
  });
}
