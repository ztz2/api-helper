<template>
  <div>
    <a-space>
      <a-button @click="ctrlDrawerCuRef.open({ type: 'ADD' })" type="primary">添加</a-button>
      <a-button
        :disabled="selectedKeys.length === 0"
        @click="handleDelete(selectedKeys)"
        type="primary"
        status="danger"
      >
        删除
      </a-button>
    </a-space>
  </div>
  <div style="margin-top: 14px">
    <a-table
      v-model:selectedKeys="selectedKeys"
      :data="documentConfigList"
      :row-selection="rowSelection"
      :pagination="false"
      row-key="id"
    >
      <template #columns>
        <a-table-column title="项目名称" data-index="title"></a-table-column>
        <a-table-column title="项目ID" data-index="id"></a-table-column>
        <a-table-column title="文档地址" data-index="url"></a-table-column>
        <a-table-column title="操作" :width="200">
          <template #cell="{ record }">
            <a-space>
              <a-button @click="ctrlDrawerCuRef.open({ type: 'EDIT', formComponentProps: { data: record } })" size="mini">编辑</a-button>
              <a-button @click="handleDelete(record)" type="primary" status="danger" size="mini">删除</a-button>
              <a-button size="mini" :href="`/#/generate?id=${record.id}`" type="primary">生成</a-button>
            </a-space>
          </template>
        </a-table-column>
      </template>
    </a-table>
  </div>
  <CtrlDrawerCu ref="ctrlDrawerCuRef" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
});
</script>
<script lang="ts" setup>
import {
  ref,
  toRefs,
  reactive,
} from 'vue';

import { confirm } from '@/utils';
import { useDocumentConfig } from '@/store';
import CtrlDrawerCu from './__controller__/ctrl-drawer-cu.vue';
import { DocumentConfig } from '@/store/document-config/interface';

const {
  documentConfigList,
  deleteDocumentConfig,
} = toRefs(useDocumentConfig());

const ctrlDrawerCuRef = ref();
const selectedKeys = ref<Array<string>>([]);
const rowSelection = reactive<any>({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: true,
});

function handleDelete(row: (DocumentConfig | string) | Array<DocumentConfig | string>) {
  confirm('确认要进行删除吗？', () => {
    deleteDocumentConfig.value(row);
  });
}
</script>
