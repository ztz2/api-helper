import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: 'Ant Design / Table 表格',
  id: 'ant-design_table_203fd1f8b62dd3bb',
  formatCodeExtension: '.tsx',
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
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push({
    title: 'Ant Design / Table 表格模版（请求数据）',
    content: tpl1,
  });

  // 响应数据
  let tpl2 = '';
  if (responseDataSchemaList.length > 0) {
    tpl2 = renderTpl(responseDataSchemaList);
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push({
    title: 'Ant Design / Table 表格模版（响应数据）',
    content: tpl2,
  });

  function renderTpl(schemaList = []) {
    return artTemplate.render(\`
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

《apih.template.renderInterface(schemaList, api, {
  prefix: '',
  name: 'DataType',
  dropComment: true,
  emptyBodyCode: 'Record<string, any>;',
})》

const columns: ColumnsType<DataType> = [《each schemaList》
  {
    title: '《$value.label》',
    dataIndex: '《$value.keyName》',
    key: '《$value.keyName》',
  },《/each》
];

const data: DataType[] = [{《each schemaList》
  《$value.keyName》: '模拟数据(《$value.label ? $value.label : $value.keyName》)',《/each》
}];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;
\`, { schemaList, api, params, documentConfig, apih, lodash });
  }

  return result;
};`,
});
