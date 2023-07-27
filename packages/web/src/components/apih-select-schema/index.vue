<template>
  <div class="apih-select-schema">
    <ApihModal
      hide-ok
      ref="dialogRef"
    >
      <template #footer>
        <a-button type="primary" @click="handleSave">保存</a-button>
      </template>
      <a-row :gutter="5">
        <a-col :span="12">
          <a-card style="width: 100%">
            <template #title>
              <div class="text-center">请求数据字段</div>
            </template>
            <div style="width: 100%; height: calc(100vh - 277px)">
              <apih-schema-tree
                v-model:value="currentRequestDataSchemaValue"
                :data="requestDataSchemaList"
              />
            </div>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card style="width: 100%">
            <template #title>
              <div class="text-center">响应数据字段</div>
            </template>
            <div style="width: 100%; height: calc(100vh - 277px)">
              <apih-schema-tree
                v-model:value="currentResponseDataSchemaValue"
                :data="responseDataSchemaList"
              />
            </div>
          </a-card>
        </a-col>
      </a-row>
    </ApihModal>
    <span @click="showModal">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  toRef,
  PropType,
  defineProps,
  defineEmits,
} from 'vue';

import { cloneDeep } from 'lodash';
import { APIHelper } from '@api-helper/core';

import useSchema from '@/hooks/use-schema';
import ApihModal from '@/components/apih-modal/index.vue';

const props = defineProps({
  api: {
    type: Object as PropType<APIHelper.API>,
    default: () => ({}),
  },
  requestDataSchemaValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  responseDataSchemaValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
const emit = defineEmits([
  'update:requestDataSchemaValue',
  'update:responseDataSchemaValue',
]);
const {
  requestDataSchemaList,
  responseDataSchemaList,
} = useSchema(toRef(props, 'api'));
const dialogRef = ref();

const currentRequestDataSchemaValue = ref<string[]>([]);
const currentResponseDataSchemaValue = ref<string[]>([]);

watch(() => props.requestDataSchemaValue, (val) => {
  setPropsRequestDataSchemaValue2CurrentValue();
}, { deep: true, immediate: true });
watch(() => props.responseDataSchemaValue, (val) => {
  setPropsResponseDataSchemaValue2CurrentValue();
}, { deep: true, immediate: true });

function setPropsRequestDataSchemaValue2CurrentValue() {
  currentRequestDataSchemaValue.value = cloneDeep(props.requestDataSchemaValue);
}
function setPropsResponseDataSchemaValue2CurrentValue() {
  currentResponseDataSchemaValue.value = cloneDeep(props.responseDataSchemaValue);
}

function handleSave() {
  emit('update:requestDataSchemaValue', cloneDeep(currentRequestDataSchemaValue.value));
  emit('update:responseDataSchemaValue', cloneDeep(currentResponseDataSchemaValue.value));
}

function showModal() {
  setPropsRequestDataSchemaValue2CurrentValue();
  setPropsResponseDataSchemaValue2CurrentValue();
  dialogRef.value.open({
    title: '字段选择',
  });
}
</script>

<style lang="scss">
.apih-select-schema{
  display: inline-block;
}
</style>
