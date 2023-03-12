<template>
  <div class="generate-container">
    <template v-if="isEmpty"><a-empty /></template>
    <template v-else>
      <a-spin tip="加载中..." style="width: 100%" :loading="loading">
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
              :style="{width: `calc(100vw - ${gap + 80}px)`}"
          >
            <a-space>
              <a-button
                :disabled="selectApiList.length === 0"
                type="primary"
                @click="dialogAPIRef.open({
                  type: 'ADD',
                  title: '生成(API函数代码)'
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
            </a-space>
          </div>
          <div class="generate-content" style="height: 2000px">
            <a-collapse
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
                        <span>{{api.url}}</span>
                        <small><strong>{{api.summary}}</strong></small>
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
                      <a-collapse-item v-for="(code, codeIdx) of renderMap(api)" :key="`3-3${codeIdx}`">
                        <template #header>
                          <div>
                            {{codeIdx === 0 ? '请求参数' : '响应数据'}}
                          </div>
                        </template>
                        <div>
                          <apih-code :code="code"></apih-code>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'generate',
});
</script>

<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
} from 'vue';
import { useRoute } from 'vue-router';
import { APIHelper } from '@api-helper/core';
import {
  useProject,
  useApiConfig,
  useModelConfig,
  useGenerateAllApiConfig,
} from '@/store';
import { getSwaggerDocs } from '@/api';

import { AhProject } from '@/core/interface';
import renderTemplate from '@/utils/renderTemplate';
import { IProject } from '@/store/project/interface';
import DialogAPI from './__components__/dialog/dialog-api.vue';
import ApihCategory from '@/components/apih-category/index.vue';
import DialogModel from './__components__/dialog/dialog-model.vue';
import apiFuncTemplate from '@/constants/template/api/default';
import mapTemplate from '@/constants/template/model/javascript/map';

const gap = ref(320);
const loading = ref(true);
const dialogAPIRef = ref();
const dialogModelRef = ref();
const route = useRoute();
const projectStore = useProject();
const isEmpty = computed(() => !project);
const { toggleApiConfig } = useApiConfig();
const { toggleModelConfig } = useModelConfig();
const { toggleGenerateAllApiConfig } = useGenerateAllApiConfig();

const project = computed<IProject>(() => {
  const id = route.query.id;
  return projectStore.data.find((itm) => itm.id === id) as IProject;
});
const ahProject = ref<APIHelper.Document>(new AhProject() as any);
const selectedKeys = ref<string[]>([]);
const selectedAhModule = computed<Array<APIHelper.Category>>(() => {
  const categoryList = [...ahProject.value.categoryList] as Array<APIHelper.Category>;
  return categoryList.map((module) => {
    module = { ... module };
    module.apiList = module.apiList.filter((api) => selectedKeys.value.includes(api.id));
    return module.apiList.length > 0 ? module : null;
  }).filter((t) => t) as Array<APIHelper.Category>;
});
const selectApiList = computed<APIHelper.Category['apiList']>(() => {
  const res = [] as APIHelper.Category['apiList'];
  const modules =  selectedAhModule.value as Array<APIHelper.Category>;
  for (let i = 0; i < modules.length; i++) {
    for (let j = 0; j < modules[i].apiList.length; j++) {
      res.push(modules[i].apiList[j]);
    }
  }
  return res;
});

function renderMap(api: APIHelper.API): string[] {
  return renderTemplate(mapTemplate, {
    api,
    requestDataSchemaList: api.requestDataSchema ? api.requestDataSchema.params : [],
    responseDataSchemaList: api.responseDataSchema ? api.responseDataSchema.params : [],
  }, {
    onlyMap: true
  } as any);
}

function renderAPIFunc(api: APIHelper.API) {
  return renderTemplate(apiFuncTemplate, {
    apiList: [api]
  }, {
    onlyApiFunc: true
  } as any)[0] ?? '';
}

onMounted(async () => {
  if (project.value) {
    try {
      loading.value = true;
      const res: any = await getSwaggerDocs(project.value);
      ahProject.value = res?.[0] as APIHelper.Document;
      toggleApiConfig(project.value.id);
      toggleModelConfig(project.value.id);
      toggleGenerateAllApiConfig(project.value.id);
    } finally {
      loading.value = false;
    }
  }
})
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
  @at-root .generate-body{
    position: relative;
    margin-top: 42px;
    @at-root .generate-handle{
      width: 100%;
      position: fixed;
      z-index: 10;
      top: 66px;
      right: $fixed-x;
      padding-top: 20px;
      background: $root-background;
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
