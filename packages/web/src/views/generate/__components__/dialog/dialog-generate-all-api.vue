<template>
  <ah-dialog
    ref="dialogRef"
    width="400px"
    :hide-ok="true"
    :form-component="Form"
  >
    <template #footer>
      <a-button type="primary" @click="handleGen">下载</a-button>
    </template>
  </ah-dialog>
</template>

<script lang="ts" setup>
import { omit } from 'lodash';
import { ref, defineExpose } from 'vue';
import { Message } from '@arco-design/web-vue';

import { useApiTemplate, useModelTemplate } from '@/store';
import renderTemplate from '@/core/render';
import { AhProject } from '@/core/interface';
import AhDialog from '@/components/ah-dialog/index.vue';
import Form from '../form/form-generate-all-api.vue';
import { RenderModelConfig } from '@/views/generate/interface';

type OpenDataType = {
  project: AhProject
};

const dialogRef = ref();
const codeList = ref<Array<string>>([]);
const apiTemplateMap = useApiTemplate().templateMap;
const modelTemplateMap = useModelTemplate().templateMap;

const openData = ref<OpenDataType>({
  project: new AhProject()
});

function close() {
  dialogRef.value.close();
}

function open(data: OpenDataType) {
  dialogRef.value.open({
    title: '生成项目全部API'
  });
  openData.value = data;
}

async function handleGen() {
  const data = await dialogRef.value.getFormRef().validate();
  const apiTemplate = apiTemplateMap.get(data.apiTplId);
  const interfaceTemplate = modelTemplateMap.get(data.interfaceTplId);

  if (!apiTemplate) {
    return Message.error('API模板异常，请重新选择');
  }
  if (!interfaceTemplate) {
    return Message.error('interface模板异常，请重新选择');
  }

  const project = openData.value.project;
  const { moduleList } = project;

  const tplList = [
    data.headCodeText?.trim() ? data.headCodeText + '\n' : null
  ];
  data.ignoreEmpty = true;

  for (let i = 0; i < moduleList.length; i++) {
    const apiList = moduleList[i].apiList;
    for (let w = 0; w < apiList.length; w++) {
      const api = apiList[w];
      // 1. 生成interface
      if (data.generateInterface) {
        const interfaceTplList = renderTemplate(interfaceTemplate, {
          project,
          moduleList,
          api,
          apiList: [api],
          requestFields: api.requestFields,
          responseFields: api.responseFields,
        }, omit(data, [
          'api',
          'requestFields',
          'requestFieldIds',
          'responseFields',
          'responseFieldIds'
        ]) as RenderModelConfig);
        tplList.push(
          interfaceTplList[0],
          interfaceTplList[1]
        )
      }

      // 2. 生成api函数
      const apiTpl = renderTemplate(apiTemplate, {
        project: project,
        moduleList: moduleList,
        apiList: [api]
      }, {
        ...data,
        onlyApiFunc: true
      })?.[0];
      tplList.push(apiTpl)
    }
  }

  const tpl = tplList.filter((t) => t).join('\n');

  // 进行下载
  const blob = new Blob([tpl], {
    type: 'text/plain;charset=utf-8'
  });
  const aEl = document.createElement('a');
  const objectUrl = URL.createObjectURL(blob);
  aEl.href = objectUrl;
  aEl.download = `index.${data.codeType === 'ts' ? 'ts' : 'js'}`;
  document.body.appendChild(aEl);
  aEl.click();
  document.body.removeChild(aEl);
  URL.revokeObjectURL(objectUrl);
}

defineExpose({
  open,
  close
})
</script>
<style lang="scss">

</style>
