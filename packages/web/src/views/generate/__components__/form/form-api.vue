<template>
  <div>
    <a-form
      ref="formRef"
      :model="currentProject"
      layout="vertical"
      auto-label-width
    >
      <!------------------  基础配置  ------------------>
      <a-card title="基础配置">
        <a-row :gutter="gutter">
          <a-col :span="24">
            <a-form-item
                label="模板选择"
                field="apiTplId"
                style="margin-bottom: 0"
                :rules="[{ required: true, validator: validatorTpl.bind(null, 'modelTplId') }]"
                :validate-trigger="['change', 'input']"
            >
              <template #label>
                <a-space>
                  <span>模板</span>
                  <div><a-button size="mini" @click.prevent="handleAddTpl">新增模板</a-button></div>
                  <div><a-button size="mini" :disabled="!currentProject.apiTplId" @click.prevent="handleEditTpl" >编辑模板</a-button></div>
                </a-space>
              </template>
              <a-select
                value-key="id"
                v-model="currentProject.apiTplId"
                :options="templateList"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
      <!------------------  生成内容配置  ------------------>
      <a-card title="生成内容配置">
        <a-row :gutter="gutter">
          <a-col :span="24">
            <a-form-item
                label="只生成API函数"
                field="onlyApiFunc"
                style="margin-bottom: 0"
            >
              <a-radio-group v-model="currentProject.onlyApiFunc" :options="options.boolean" />
            </a-form-item>
          </a-col>
          <a-col v-if="currentProject.onlyApiFunc === false" style="margin-top: 20px" :span="24">
            <a-form-item label="API函数头部代码" field="headCodeText" style="margin-bottom: 0">
              <a-textarea v-model="currentProject.headCodeText" :max-length="512"></a-textarea>
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
    <DialogAPITemplate ref="dialogAPITemplateRef" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  toRef,
  watch,
  isRef,
  toRefs,
  PropType,
  isReactive,
  defineEmits,
  defineProps,
  defineExpose,
} from 'vue';
import { cloneDeep, get } from 'lodash';
import { Message } from '@arco-design/web-vue';
import { FORMAT_CODE_EXTENSION } from '@api-helper/cli/lib/constants';

import { randomChar, modalConfirm } from '@/utils';
import { useProject, useApiTemplate } from '@/store';
import { Template } from '@/store/template/interface';
import genEmptyApiTemplate from '@/constants/template/api/empty';
import DialogAPITemplate from '../dialog/dialog-api-template.vue';

const emit = defineEmits(['success', 'exec-gen']);

const props = defineProps({
  data: {
    type: Object as PropType<Template>,
    default: () => ({}),
  },
  // ADD = '新增', EDIT = '修改'
  type: {
    type: String as PropType<'ADD' | 'EDIT' | 'DETAIL'>,
    default: 'ADD',
  },
});

const formRef = ref();
const gutter = ref(15);
const dialogAPITemplateRef = ref();
const { currentProject } = useProject();
const { templateMap, templateList } = toRefs(useApiTemplate());

const options = ref({
  formatCodeExtension: FORMAT_CODE_EXTENSION.map((type) => ({
    label: type,
    value: type,
  })) as any,
  boolean: [
    { label: '是', value: true },
    { label: '否', value: false },
  ] as any,
});

function validatorTpl(keyName: string, value: unknown, callback: Function) {
  if (!get(currentProject, keyName)) {
    return callback('必选项');
  }
  callback();
}

function handleAddTpl() {
  dialogAPITemplateRef.value?.open({
    type: 'ADD',
    title: '新增模板',
    formComponentProps: {
      data: genEmptyApiTemplate(),
    },
  });
}

async function handleEditTpl() {
  const tplModel = cloneDeep(templateMap.value.get(currentProject.apiTplId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.label += ` - 副本${randomChar}`;
    tplModel.value = '';
    tplModel.builtIn = false;
  }
  dialogAPITemplateRef.value?.open({
    type: 'EDIT',
    title: '修改模板',
    formComponentProps: {
      data: tplModel,
    },
  });
}

function handleSuccess(id: string) {
  currentProject.apiTplId = id;
  emit('exec-gen', id);
}

function getFormModel() {
  return cloneDeep(currentProject);
}

defineExpose({
  validate: async () => {
    const error = await formRef.value?.validate?.();
    if (error) {
      return Promise.reject(error);
    }
    return getFormModel();
  },
  getFormRef() {
    return formRef.value;
  },
  getFormModel,
});
</script>
<style lang="scss" scoped>

</style>
