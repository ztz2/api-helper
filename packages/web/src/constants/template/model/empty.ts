import { COMMON_HEAD } from './common';
import { Template } from '@/store/template/interface';

export default function genEmptyModelTemplate() {
  return new Template({
    content: `${COMMON_HEAD}
  const api = params.api;
  // 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
  const requestDataSchemaList = apih.core.filterSchemaPrimitiveValue(params.requestDataSchemaList);
  // 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
  const responseDataSchemaList = apih.core.filterSchemaPrimitiveValue(params.responseDataSchemaList);

  const tpl1 = \`生成模板例子，这里获取请求数据和响应数据的字段，根据这些字段，可以生成想要的任何模板代码

《if requestDataSchemaList.length > 0》
请求数据字段：《each requestDataSchemaList》
   《$value.keyName》《$value.summary || $value.title》《/each》
《/if》

《if responseDataSchemaList.length > 0》
响应数据字段：《each responseDataSchemaList》
   《$value.keyName》《$value.summary || $value.title》《/each》
《/if》
  \`;

    // 当一个模板定义好之后，使用 artTemplate.render 方法进行生成，并添加到result返回数组中
    // 当然可以生成多个模板，每次生成好之后，添加到result数组中即可
    result.push(artTemplate.render(tpl1, { requestDataSchemaList, responseDataSchemaList, config }));

    // 返回生成好的模板
    return result;
}
`,
  });
}
