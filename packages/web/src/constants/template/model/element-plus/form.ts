import { Template } from '@api-helper/template';
import { COMMON_HEAD } from '../common';

export default new Template({
  label: 'Element UI Plus / Form 表单',
  value: 'element-plus_form_24e5ca0ab18176d4',
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
    title: 'Element UI Plus / Form 表单模版（请求数据）',
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
    title: 'Element UI Plus / Form 表单模版（响应数据）',
    content: tpl2,
  });

  function renderTpl(schemaList = []) {
    return artTemplate.render(\`
<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    《each schemaList》
      <el-form-item label="《$value.label ? $value.label : $value.keyName 》" prop="《$value.keyName》">
        <el-input v-model="ruleForm.《$value.keyName》"></el-input>
      </el-form-item>《/each》
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

《apih.template.renderInterface(schemaList, api, {
  prefix: '',
  name: 'RuleForm',
  dropComment: true,
  emptyBodyCode: 'Record<string, any>;',
})》

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>(
  《apih.template.renderObject(schemaList, api, { onlyBody: true })》
);

const rules = reactive<FormRules<RuleForm>>({
 《each apih.core.filterSchemaRequired(schemaList)》
    《$value.keyName》: [
      { required: true, message: '必填项', trigger: 'change' }
    ],《/each》
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: \\\`\\\${idx + 1}\\\`,
  label: \\\`\\\${idx + 1}\\\`,
}))
</script>
\`, { schemaList, api, params, config, apih, lodash });
  }

  return result;
};`,
});
