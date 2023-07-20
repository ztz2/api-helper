<template>
  <apih-dialog
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    :form-component="Form"
    hide-ok
  >
    <template #footer>
      <a-button type="primary" @click="handleSave">保存</a-button>
    </template>
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  nextTick,
  computed,
  defineExpose,
} from 'vue';
import { merge, cloneDeep } from 'lodash';

import { useProject } from '@/store';
import Form from '../form/form-prettier.vue';
import { Template } from '@/store/template/interface';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';
import message from '@/utils/message';

const { currentProject } = useProject();

const dialogRef = ref();

function close() {
  dialogRef.value.close();
}

function open(config: DialogOpenConfig) {
  dialogRef.value.open(merge(config, {
    formComponentProps: {
      data: cloneDeep(currentProject),
    },
  }));
}

async function handleSave() {
  const data = await dialogRef.value.getFormRef().validate();
  currentProject.prettierrcOptions = data.prettierrcOptions;
  message.success('已保存');
  close();
}

defineExpose({
  open,
  close,
});
</script>
