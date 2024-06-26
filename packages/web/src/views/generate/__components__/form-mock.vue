<template>
  <div>
    <a-form
      ref="formRef"
      :model="currentDocumentConfig"
      layout="vertical"
      auto-label-width
    >
      <!------------------  基础配置  ------------------>
      <a-card title="基础配置">
        <a-row :gutter="gutter">
          <a-col :span="24">
            <a-form-item
              label="模板选择"
              field="mockTplId"
              style="margin-bottom: 0"
              :rules="[{ required: true, validator: validatorTpl.bind(null, 'mockTplId') }]"
              :validate-trigger="['change', 'input']"
            >
              <template #label>
                <a-space>
                  <span>模板</span>
                  <apih-tooltip
                    :content="!selectedTemplate ? '' : selectedTemplate.builtIn !== false ? '当前选择模板为系统内置模板，不可删除' : ''"
                  >
                    <a-popconfirm content="确认删除该模板?" @ok="handleDeleteTpl">
                      <a-button
                        size="mini"
                        status="danger"
                        :disabled="!showDelete"
                      >
                        删除模板
                      </a-button>
                    </a-popconfirm>
                  </apih-tooltip>
                  <a-button size="mini" type="primary" @click.prevent="handleAddTpl">新增模板</a-button>
                  <a-button size="mini" type="primary" :disabled="!currentDocumentConfig.mockTplId" @click.prevent="handleEditTpl" >编辑模板</a-button>
                </a-space>
              </template>
              <apih-select
                value-key="id"
                v-model="currentDocumentConfig.mockTplId"
                placeholder="请选择模板"
                :options="mockTemplateList"
                allow-clear
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
      <!------------------  生成内容配置  ------------------>
      <a-card title="生成内容配置">
        <a-row :gutter="gutter">
          <a-col style="margin-top: 20px" :span="24">
            <a-form-item label="响应数据 dataKey" field="mockDataKey">
              <a-input v-model="currentDocumentConfig.mockDataKey" :max-length="128"></a-input>
            </a-form-item>
          </a-col>
          <a-col style="margin-top: 20px" :span="24">
            <a-form-item label="String 值" field="mockDataKey">
              <a-input v-model="currentDocumentConfig.mockStringValue" :max-length="128"></a-input>
            </a-form-item>
          </a-col>
          <a-col style="margin-top: 20px" :span="24">
            <a-form-item label="Number 值" field="mockDataKey">
              <a-input-number v-model="currentDocumentConfig.mockNumberValue" :max-length="128"></a-input-number>
            </a-form-item>
          </a-col>
          <a-col style="margin-top: 20px" :span="24">
            <a-form-item label="Boolean 值" field="mockDataKey">
              <a-input v-model="currentDocumentConfig.mockBooleanValue" :max-length="128"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
    <CtrlDrawerMockTemplate ref="ctrlDrawerMockTemplateRef" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  PropType,
  computed,
  defineEmits,
  defineProps,
  defineExpose,
} from 'vue';
import { cloneDeep, get } from 'lodash';
import { Message } from '@arco-design/web-vue';
import { randomChar } from '@api-helper/core/lib/utils/util';
import { FORMAT_CODE_EXTENSION } from '@api-helper/core/lib/constant';

import message from '@/utils/message';
import { modalConfirm } from '@/utils';
import { Template } from '@/store/template/interface';
import { useDocumentConfig, useMockTemplate } from '@/store';
import genEmptyMockTemplate from '@/constants/template/mock/empty';
import CtrlDrawerMockTemplate from '../__controller__/ctrl-drawer-mock-template.vue';

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
const { currentDocumentConfig } = toRefs(useDocumentConfig());
const { mockTemplateMap, mockTemplateList, deleteMockTemplateById } = toRefs(useMockTemplate());

const formRef = ref();
const gutter = ref(15);
const ctrlDrawerMockTemplateRef = ref();

const selectedTemplate = computed(() => mockTemplateMap.value.get(currentDocumentConfig.value.mockTplId));
const showDelete = computed(() => selectedTemplate?.value?.builtIn === false);

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
  if (!get(currentDocumentConfig.value, keyName)) {
    return callback('必选项');
  }
  callback();
}

function handleAddTpl() {
  ctrlDrawerMockTemplateRef.value?.open({
    type: 'ADD',
    title: '新增模板',
    formComponentProps: {
      data: genEmptyMockTemplate(),
    },
  });
}

async function handleEditTpl() {
  const tplModel = cloneDeep(mockTemplateMap.value.get(currentDocumentConfig.value.mockTplId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.title += ` - 副本${randomChar(4)}`;
    tplModel.id = '';
    tplModel.builtIn = false;
  }
  ctrlDrawerMockTemplateRef.value?.open({
    type: 'EDIT',
    title: '修改模板',
    formComponentProps: {
      data: tplModel,
    },
  });
}

function handleDeleteTpl() {
  if (!selectedTemplate.value) {
    return message.warn('没有选择模板.');
  }
  deleteMockTemplateById.value(currentDocumentConfig.value.mockTplId, {
    onSuccess() {
      currentDocumentConfig.value.mockTplId = '';
    },
  });
}

function handleSuccess(id: string) {
  currentDocumentConfig.value.mockTplId = id;
  emit('exec-gen', id);
}

async function getFormModel() {
  return cloneDeep(currentDocumentConfig.value);
}

defineExpose({
  validate: async () => {
    const error = await formRef.value?.validate?.();
    if (error) {
      return Promise.reject(error);
    }
    return await getFormModel();
  },
  getFormRef() {
    return formRef.value;
  },
  getFormModel,
});
</script>
<style lang="scss" scoped>

</style>
