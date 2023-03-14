<template>
  <div>
    <a-space>
      <a-button @click="dialogCU.open({ type: 'ADD' })" type="primary">添加</a-button>
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
      :data="tableData"
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
              <a-button @click="dialogCU.open({ type: 'EDIT' }, record)" size="mini">编辑</a-button>
              <a-button @click="handleDelete(record)" type="primary" status="danger" size="mini">删除</a-button>
              <a-button size="mini" :href="`/#/generate?id=${record.id}`" type="primary">生成</a-button>
            </a-space>
          </template>
        </a-table-column>
      </template>
    </a-table>
  </div>
  <DialogCU ref="dialogCU" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
});
</script>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useProject } from '@/store';
import { Project } from '@/store/project/interface';
import { confirm } from '@/utils';
import DialogCU from './__components__/dialog/dialog-cu.vue';

const dialogCU = ref();
const projectStore = useProject();

const selectedKeys = ref<Array<string>>([]);
const tableData = computed(() => projectStore.data);
const rowSelection = reactive<any>({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: true,
});

function handleDelete(row: (Project | string) | Array<Project | string>) {
  confirm('确认要进行删除吗？', () => {
    projectStore.delete(row);
  });
}
</script>
