import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: 'Arco Design / Form 表单',
  id: 'arco-design_form_6d49657c450e7bb4',
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
    title: 'Arco Design / Form 表单模版（请求数据）',
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
    title: 'Arco Design / Form 表单模版（响应数据）',
    content: tpl2,
  });

  function renderTpl(schemaList = []) {
    return artTemplate.render(\`
<template>
  <a-form ref="formRef" :model="form" :style="{width:'600px'}" @submit="handleSubmit">
    《each schemaList》
      <a-form-item field="《$value.keyName》" label="《$value.label||$value.keyName》"《if $value.rules.required》 :rules="[{required:true,message:'《$value.keyName》 is required'}]"《/if》>
        <a-input v-model="form.《$value.keyName》" />
      </a-form-item>《/each》
     <a-form-item>
      <a-space>
        <a-button html-type="submit">Submit</a-button>
        <a-button @click="$refs.formRef.resetFields()">Reset</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    const handleSubmit = ({values, errors}) => {
      console.log('values:', values, '\\\\nerrors:', errors);
    }

    const form = reactive(
      《apih.template.renderObject(schemaList, api, { onlyBody: true })》
    );

    return {
      form,
      options,
      treeData,
      handleSubmit
    }
  },
}
</script>
\`, { schemaList, api, params, documentConfig, apih, lodash });
  }

  return result;
};`,
});
