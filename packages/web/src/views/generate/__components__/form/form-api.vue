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
                field="apiTplId"
                style="margin-bottom: 0"
                :rules="[{ required: true, validator: validatorTpl.bind(null, 'apiTplId') }]"
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
                  <a-button size="mini" type="primary" :disabled="!currentDocumentConfig.apiTplId" @click.prevent="handleEditTpl" >编辑模板</a-button>
                </a-space>
              </template>
              <apih-select
                value-key="id"
                v-model="currentDocumentConfig.apiTplId"
                placeholder="请选择模板"
                :options="apiTemplateList"
                allow-clear
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
              <a-radio-group v-model="currentDocumentConfig.onlyApiFunc" :options="options.boolean" />
            </a-form-item>
          </a-col>
          <a-col v-if="currentDocumentConfig.onlyApiFunc === false" style="margin-top: 20px" :span="24">
            <a-form-item label="API函数头部代码" field="headCodeText" style="margin-bottom: 0">
              <a-textarea v-model="currentDocumentConfig.headCodeText" :max-length="512"></a-textarea>
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
    <CtrlDrawerAPITemplate ref="ctrlDrawerAPITemplateRef" @success="handleSuccess" />
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
import { FORMAT_CODE_EXTENSION } from '@api-helper/cli/lib/constants';

import message from '@/utils/message';
import { randomChar, modalConfirm } from '@/utils';
import { useDocumentConfig, useApiTemplate } from '@/store';
import genEmptyApiTemplate from '@/constants/template/api/empty';
import CtrlDrawerAPITemplate from '../../__controller__/ctrl-drawer-api-template.vue';
import { Template } from '@/store/template/interface';

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
const { apiTemplateMap, apiTemplateList, deleteApiTemplateById } = toRefs(useApiTemplate());

const formRef = ref();
const gutter = ref(15);
const ctrlDrawerAPITemplateRef = ref();

const selectedTemplate = computed(() => apiTemplateMap.value.get(currentDocumentConfig.value.apiTplId));
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
  ctrlDrawerAPITemplateRef.value?.open({
    type: 'ADD',
    title: '新增模板',
    formComponentProps: {
      data: genEmptyApiTemplate(),
    },
  });
}

async function handleEditTpl() {
  const tplModel = cloneDeep(apiTemplateMap.value.get(currentDocumentConfig.value.apiTplId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.title += ` - 副本${randomChar()}`;
    tplModel.id = '';
    tplModel.builtIn = false;
  }
  ctrlDrawerAPITemplateRef.value?.open({
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
  deleteApiTemplateById.value(currentDocumentConfig.value.apiTplId, {
    onSuccess() {
      currentDocumentConfig.value.apiTplId = '';
    },
  });
}

function handleSuccess(id: string) {
  currentDocumentConfig.value.apiTplId = id;
  emit('exec-gen', id);
}

function getFormModel() {
  return cloneDeep(currentDocumentConfig.value);
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
