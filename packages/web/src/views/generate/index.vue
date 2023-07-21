<template>
  <div class="generate-container">
    <template v-if="isEmpty"><a-empty /></template>
    <template v-else>
      <a-spin tip="加载中..." class="loading-detail" :loading="loading">
        <div :style="{width: `${gap}px`}" class="generate-left-side">
          <ApihCategory
            :data="ahProject.categoryList"
            v-model:selected-keys="selectedKeys"
            style="height: calc(100vh - 106px)"
          />
        </div>
        <div
            :style="{marginLeft: `${gap + 20}px`}"
            class="generate-body"
        >
          <div
              class="generate-handle"
              style="display: flex;justify-content: space-between;"
              :style="{width: `calc(100vw - ${gap + 60}px)`}"
          >
            <a-space>
              <a-button
                :disabled="selectApiList.length === 0"
                type="primary"
                @click="dialogAPIRef.open({
                  type: 'ADD',
                  title: '生成(API函数代码)',
                }, {
                  apiList: selectApiList
                })"
              >
                生成(API函数代码)
              </a-button>
              <a-button
                :disabled="selectApiList.length === 0"
                type="primary"
                @click="dialogModelRef.open({
                  type: 'ADD',
                  title: '生成(表单代码)'
                }, {
                  categoryList: selectedAhModule,
                  apiList: selectApiList
                })"
              >
                生成(表单代码)
              </a-button>
              <a-button
                :disabled="apiTemplateStore.customTemplateList.length === 0 && modelTemplateStore.customTemplateList.length === 0"
                @click="handleExport"
              >
                导出自定义模板
              </a-button>
              <a-button
                @click="dialogImportRef.open({
                  type: 'ADD',
                  title: '导入自定义模板'
                })"
              >
                导入自定义模板
              </a-button>
            </a-space>
            <a-space style="margin-left: 14px">
              <a-button
                type="primary"
                @click="dialogPrettierRef.open({
                  type: 'EDIT',
                  title: 'prettier配置',
                })"
              >
                prettier配置
              </a-button>
            </a-space>
          </div>
          <div class="generate-content" style="position: relative;z-index: 1;">
            <a-empty v-if="selectedAhModule.length === 0" style="margin-top: 20px">
              <template #image>
                <icon-face-smile-fill />
              </template>
              请先左边的API
            </a-empty>
            <a-collapse
              v-else
              class="generate-collapse"
              expand-icon-position="right"
              :default-active-key="[0]"
              destroy-on-hide
            >
              <a-collapse-item
                v-for="(ahModule, index) of selectedAhModule"
                :key="index"
              >
                <template #header>
                  <div class="generate-collapse__project-header">
                    <div>{{ahModule.name}}</div>
                    <small>{{ahModule.description}}</small>
                  </div>
                </template>
                <a-collapse
                  v-if="ahModule.apiList.length > 0"
                  expand-icon-position="right"
                  :default-active-key="[0]"
                  destroy-on-hide
                >
                  <a-collapse-item
                    v-for="(api, idx) of ahModule.apiList"
                    :key="idx"
                    :class="`generate-collapse-item--${api.method.toLowerCase()}`"
                  >
                    <template #header>
                      <a-space>
                        <a-tag>{{api.method.toUpperCase()}}</a-tag>
                        <a-tooltip content="点击复制接口路径">
                          <span @click.stop="handleCopyPath(api.path)">{{api.path}}</span>
                        </a-tooltip>
                        <small><strong>{{api.label}}</strong></small>
                      </a-space>
                    </template>
                    <a-collapse expand-icon-position="right" :default-active-key="['3-2']" destroy-on-hide>
                      <a-collapse-item key="3-1">
                        <template #header>
                          <div>
                            接口API函数
                          </div>
                        </template>
                        <div>
                          <apih-code :code="renderAPIFunc(api)"></apih-code>
                        </div>
                      </a-collapse-item>
                      <a-collapse-item :key="3-3-2">
                        <template #header>
                          <div>请求参数</div>
                        </template>
                        <div>
                          <apih-code :code="renderMap(api)"></apih-code>
                        </div>
                      </a-collapse-item>
                      <a-collapse-item :key="3-3-3">
                        <template #header>
                          <div>响应数据</div>
                        </template>
                        <div>
                          <apih-code :code="renderMap(api, true)"></apih-code>
                        </div>
                      </a-collapse-item>
                    </a-collapse>
                  </a-collapse-item>
                </a-collapse>
              </a-collapse-item>
            </a-collapse>
          </div>
        </div>
      </a-spin>
    </template>
  </div>

  <DialogAPI ref="dialogAPIRef" />
  <DialogModel ref="dialogModelRef" />
  <DialogImport ref="dialogImportRef" />
  <DialogPrettier ref="dialogPrettierRef" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'generate-xe52f2',
});
</script>

<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
} from 'vue';
import { cloneDeep } from 'lodash';
import { useRoute } from 'vue-router';
import useClipboard from 'vue-clipboard3';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { getSchema } from '@api-helper/core/es/lib/helpers';

import {
  useProject,
  useApiTemplate,
  useModelTemplate,
} from '@/store';
import {
  API_CUSTOM_TEMPLATE_ID,
  MODEL_CUSTOM_TEMPLATE_ID, SECRET_KEY,
} from '@/constants';
import { getDocs } from '@/api';
import { aes } from '@/utils/crypto';
import { modalConfirm } from '@/utils';
import renderTemplate from '@/utils/render-template';
import { Template } from '@/store/template/interface';
import ApihCategory from '@/components/apih-category/index.vue';
import { Project, APIHDocument } from '@/store/project/interface';

import DialogAPI from './__components__/dialog/dialog-api.vue';
import DialogModel from './__components__/dialog/dialog-model.vue';
import DialogImport from './__components__/dialog/dialog-import.vue';
import DialogPrettier from './__components__/dialog/dialog-prettier.vue';

const route = useRoute();

const projectStore = useProject();
const apiTemplateStore = useApiTemplate();
const modelTemplateStore = useModelTemplate();

const { toClipboard } = useClipboard();

const gap = ref(320);
const loading = ref(true);
const dialogAPIRef = ref();
const dialogModelRef = ref();
const dialogImportRef = ref();
const dialogPrettierRef = ref();
const isEmpty = computed(() => !project.value);

const project = computed<Project>(() => {
  const { id } = route.query;
  return projectStore.data.find((itm) => itm.id === id) as Project;
});
const ahProject = ref<APIHelper.Document>(new APIHDocument());
const selectedKeys = ref<string[]>([]);
const selectedAhModule = computed<Array<APIHelper.Category>>(() => {
  const categoryList = [...ahProject.value.categoryList] as Array<APIHelper.Category>;
  return categoryList.map((module) => {
    module = { ...module };
    module.apiList = module.apiList.filter((api) => selectedKeys.value.includes(api.id));
    return module.apiList.length > 0 ? module : null;
  }).filter((t) => t) as Array<APIHelper.Category>;
});
const selectApiList = computed<APIHelper.Category['apiList']>(() => {
  const res = [] as APIHelper.Category['apiList'];
  const modules = selectedAhModule.value as Array<APIHelper.Category>;
  for (let i = 0; i < modules.length; i++) {
    for (let j = 0; j < modules[i].apiList.length; j++) {
      res.push(modules[i].apiList[j]);
    }
  }
  return res;
});

const mapMemo: Map<string, string[]> = new Map<string, string[]>();
async function renderMap(api: APIHelper.API, isResp = false): Promise<string> {
  const params = {
    api,
    requestDataSchemaList: [] as APIHelper.SchemaList,
    responseDataSchemaList: [] as APIHelper.SchemaList,
  };
  const record = mapMemo.get(api.id) ?? [];

  if (isResp) {
    if (record?.[1]) {
      return record?.[1];
    }
    const dataKey = project.value?.dataKey ?? '';
    let responseDataSchema: APIHelper.Schema | null = cloneDeep(api.responseDataSchema);
    if (dataKey) {
      responseDataSchema = getSchema(responseDataSchema, dataKey);
    }
    params.responseDataSchemaList = responseDataSchema?.params ?? [];
  } else {
    if (record?.[0]) {
      return record?.[0];
    }
    params.requestDataSchemaList = api.requestDataSchema ? api.requestDataSchema.params : [];
  }

  const res = await renderTemplate(modelTemplateStore.defaultModelTemplate, params, projectStore.currentProject);

  let result: string;
  if (isResp) {
    record[1] = res?.[1].content ?? '';
    result = record[1] as string;
  } else {
    record[0] = res?.[0].content ?? '';
    result = record[0] as string;
  }

  mapMemo.set(api.id, record);

  return result;
}

const apiMemo: Map<string, string> = new Map<string, string>();
async function renderAPIFunc(api: APIHelper.API) {
  if (apiMemo.has(api.id)) {
    return apiMemo.get(api.id);
  }
  const res = (await renderTemplate(apiTemplateStore.defaultApiTemplate, {
    apiList: [api],
  }, {
    ...projectStore.currentProject,
    onlyApiFunc: true,
  }))?.[0];
  const value = res?.content ?? '';
  apiMemo.set(api.id, value);
  return value;
}

function handleCopyPath(path: string) {
  toClipboard(path);
  Message.success('已复制到剪切板');
}

async function handleExport() {
  await modalConfirm('确认要导出全部自定义模板吗？');
  const dataMap: Recordable = {};
  if (apiTemplateStore.customTemplateList.length > 0) {
    dataMap[API_CUSTOM_TEMPLATE_ID] = apiTemplateStore.customTemplateList;
  }
  if (modelTemplateStore.customTemplateList.length > 0) {
    dataMap[MODEL_CUSTOM_TEMPLATE_ID] = modelTemplateStore.customTemplateList;
  }
  const exportContent = aes.encrypt(JSON.stringify(dataMap), SECRET_KEY);
  const eleLink = document.createElement('a');
  eleLink.download = '自定义模板.txt';
  eleLink.style.display = 'none';
  eleLink.style.position = 'fixed';
  const blob = new Blob([exportContent]);
  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

onMounted(async () => {
  if (project.value) {
    try {
      loading.value = true;
      const res: any = await getDocs(project.value);
      ahProject.value = res?.[0] as APIHelper.Document;
    } finally {
      loading.value = false;
    }
  }
});
</script>
<style lang="scss">
@import "../../style/variable.scss";

$fixed-y: 86px;
$fixed-x: 20px;
.generate-container{
  @at-root .generate-left-side{
    position: fixed;
    top: $fixed-y;
    left: $fixed-x;
  }
  @at-root .loading-detail{
    width: 100%;
    position: relative;
    >.arco-spin-mask{
      position: absolute;
      top: 0;
      width: 100%;
      height: calc(100vh - 106px);
    }
  }
  @at-root .generate-body{
    position: relative;
    margin-top: 42px;
    @at-root .generate-handle{
      width: 100%;
      position: fixed;
      z-index: 10;
      top: 66px;
      padding: 20px 0 10px 0;
      background: #fff;
    }
  }
  @at-root .generate-collapse{
    border: none;
    >.arco-collapse-item {
      >.arco-collapse-item-header{
        background: none;
        border: none;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(59,65,81,.3);
        @at-root .generate-collapse__project-header{
          display: flex;
          height: 51px;
          align-items: center;

          >div:first-child{
            font-size: 24px;
            font-weight: bold;
          }
          >small{
            font-size: 14px;
            padding: 0 10px;
          }
        }
      }
      >.arco-collapse-item-content{
        padding: 0;
        >.arco-collapse-item-content-box{
          padding-top: 5px;
          /** 二级 **/
          >.arco-collapse{
            border-radius: 0;
            border: none;
            >.arco-collapse-item{
              margin-bottom: 4px;
              border-radius: 0;
              border-bottom: 1px solid transparent;
              .arco-tag{ color: #fff; font-weight: bold; }
              >.arco-collapse-item-header{
                padding-top: 10px;
                padding-bottom: 10px;
                border: none;
              }
              >.arco-collapse-item-content{
                padding: 0;
                >.arco-collapse-item-content-box{
                  padding-top: 0;
                  padding-bottom:  0;
                  /** 三级 **/
                  >.arco-collapse{
                    border-left: 0;
                    border-right: 0;
                    border-bottom: none;
                    border-radius: 0;
                    .arco-collapse-item{
                      border-top: 1px solid transparent;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @at-root .generate-collapse-item--get{ // 二级栏目
    $border-color: rgb(97, 175, 254);
    $background-color: rgb(97, 175, 254, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--post{ // 二级栏目
    $border-color: rgb(73, 204, 144);
    $background-color: rgb(73, 204, 144, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--put{ // 二级栏目
    $border-color: rgb(252, 161, 48);
    $background-color: rgb(252, 161, 48, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--delete{// 二级栏目
    $border-color: rgb(249, 62, 62);
    $background-color: rgb(249, 62, 62, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--options{// 二级栏目
    $border-color: rgb(15, 198, 194);
    $background-color: rgb(15, 198, 194, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--head{// 二级栏目
    $border-color: rgb(183, 29, 232);
    $background-color: rgb(183, 29, 232, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--connect{// 二级栏目
    $border-color: rgb(255, 87, 34);
    $background-color: rgb(255, 87, 34, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--trace{// 二级栏目
    $border-color: rgb(120, 22, 255);
    $background-color: rgb(120, 22, 255, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--patch{// 二级栏目
    $border-color: rgb(134, 144, 156);
    $background-color: rgb(134, 144, 156, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }
}
</style>
