import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: 'Ant Design Vue / Table 表格',
  id: 'ant-design-vue_table_e8a47e23e9b6c298',
  formatCodeExtension: '.vue',
  builtIn: true,
  content: `${COMMON_HEAD}
  // 返回模板集合.
  const result = [];

  const api = params.api;
  // 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
  const requestDataSchemaList = apih.core.filterSchemaPrimitiveValue(params.requestDataSchemaList);
  // 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
  const responseDataSchemaList = apih.core.filterSchemaPrimitiveValue(params.responseDataSchemaList);

  // 请求数据
  let tpl1 = '';
  if (requestDataSchemaList.length > 0) {
    tpl1 = renderTpl(requestDataSchemaList);
  } else {
    tpl1 = \`// 没有请求参数字段可以生成，如果有请求参数字段，请先选择后再进行模版生成\`;
  }
  result.push({
    title: 'Ant Design Vue / Table 表格模版（请求数据）',
    content: tpl1,
  });

  // 响应数据
  let tpl2 = '';
  if (responseDataSchemaList.length > 0) {
    tpl2 = renderTpl(responseDataSchemaList);
  } else {
    tpl2 = \`// 没有响应数据字段可以生成，如果有响应数据字段，请先选择后再进行模版生成\`;
  }
  result.push({
    title: 'Ant Design Vue / Table 表格模版（响应数据）',
    content: tpl2,
  });

  function renderTpl(schemaList = []) {
    return artTemplate.render(\`
<template>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>
<script>
  export default {
    setup() {
      return {
        dataSource: [{
          key: '1',《each schemaList》
          《$value.keyName》: '模拟数据(《$value.label||$value.keyName》)',《/each》
        }],
        columns: [《each schemaList》
          {
            title: '《$value.label||$value.keyName》',
            dataIndex: '《$value.keyName》',
            key: '《$value.keyName》',
          },《/each》
        ],
      };
    },
  };
</script>
\`, { schemaList, api, params, documentConfig, apih, lodash });
  }

  return result;
};`,
});
