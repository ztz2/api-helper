import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  label: 'Table 表格',
  value: 'class_w234fswefewfxs123sdfe',
  formatCodeExtension: '.vue',
  builtIn: true,
  content: `${COMMON_HEAD}
  const api = params.api;
  const requestDataSchemaList = params.requestDataSchemaList;
  const responseDataSchemaList = params.responseDataSchemaList;
  let tpl1, tpl2 = '';
  // 请求数据
  if (requestDataSchemaList.length > 0) {
    tpl1 = renderForm(requestDataSchemaList);
  } else {
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl1);

  // 响应数据
  if (responseDataSchemaList.length > 0) {
    tpl2 = renderForm(responseDataSchemaList);
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl2);

  function renderForm(schemaList = []) {
    const formItemCodeWrap = schemaList.map((item) => {
      return \`    <el-table-column
      prop="\${item.keyName}"
      label="\${item.title?item.title:item.keyName}"
      width="180">\`
    });
    return \`<template>
  <el-table
    :data="tableData"
    style="width: 100%">
\${formItemCodeWrap.join('\\n')}
  </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          \${schemaList.map((item, index) => \`\${index > 0 ? '          ' : ''}\${item.keyName}: '\${item.title?item.title:item.keyName}'\`).join(',\\n')}
        }]
      }
    }
  }
</script>
\`
  }

  return result;
};`,
});
