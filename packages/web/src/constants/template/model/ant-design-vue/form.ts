import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: 'Ant Design Vue / Form 表单',
  id: 'ant-design-vue_form_7623856acb2a549a',
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
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push({
    title: 'Ant Design Vue / Form 表单模版（请求数据）',
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
    title: 'Ant Design Vue / Form 表单模版（响应数据）',
    content: tpl2,
  });

  function renderTpl(schemaList = []) {
    return artTemplate.render(\`
<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    《each schemaList》
      <a-form-item label="《$value.label ? $value.label : $value.keyName 》" name="《$value.keyName》"《if $value.rules.required》 required《/if》>
        <a-input v-model:value="formState.《$value.keyName》" />
      </a-form-item>《/each》
     <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { Dayjs } from 'dayjs';
import { reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';

《apih.template.renderInterface(schemaList, api, {
  prefix: '',
  name: 'FormState ',
  dropComment: true,
  emptyBodyCode: 'Record<string, any>;',
})》
const formRef = ref();
const labelCol = { span: 5 };
const wrapperCol = { span: 13 };
const formState: UnwrapRef<FormState> = reactive(
  《apih.template.renderObject(schemaList, api, { onlyBody: true })》
);
const rules: Record<string, Rule[]> = {
 《each apih.core.filterSchemaRequired(schemaList)》
    《$value.keyName》: [
      { required: true, message: '必填项', trigger: 'change' }
    ],《/each》
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch(error => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>
\`, { schemaList, api, params, documentConfig, apih, lodash });
  }

  return result;
};`,
});
