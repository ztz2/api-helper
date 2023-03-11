<script lang="tsx">
  import {
    ref,
    Ref,
    watch,
    computed,
    PropType,
    useSlots,
    Component,
    WatchStopHandle,
    defineComponent,
    ComponentPublicInstance,
  } from 'vue';
  import { merge } from 'lodash';
  import { nanoid } from 'nanoid';
  import { Drawer, Message, Modal } from '@arco-design/web-vue';
  import { OpenData, OpenConfig } from './interface';

  type FormComponentInstance = ComponentPublicInstance & {
    resetFields?(): void;
    validate?(): Promise<unknown>;
    getReactiveFormModel?(): undefined | Ref<Recordable>;
  };

  export default defineComponent({
    props: {
      drawer: {
        type: Boolean,
        default: true
      },
      formComponent: {
        required: true,
        // Vue组件
        type: Object as PropType<Component>
      },
      api: {
        type: Function as PropType<(data: any) => Promise<unknown>>
      },
      detailApi: {
        type: Function as PropType<(data: any) => Promise<unknown>>
      },
      width: String,
      successMsg: String,
      hideOk: Boolean,
      hideCancel: Boolean,
      okText: String,
      cancelText: String,
      okButtonProps: {
        type: Object,
        default: () => ({})
      },
      cancelButtonProps: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['success'],
    setup(props, { attrs, expose, emit }) {
      const formRef = ref<FormComponentInstance | undefined>();
      const formModel = ref<Recordable>({});
      const loadingOk = ref(false);
      const loadingDetail = ref(false);
      const currentVisible = ref(false);
      const openData = ref<Recordable>({});
      const openType = ref('ADD');
      const title = ref('');

      const slots = useSlots();
      const DialogComp = computed(() => (props.drawer ? Drawer : Modal));
      const loading = computed(() => loadingDetail.value || loadingOk.value);

      watch(
        () => openData.value,
        (val) => {
          formModel.value = val;
        },
        { immediate: true }
      );

      let fmWatcher: WatchStopHandle | undefined;
      watch(
        () => formRef.value,
        () => {
          if (formRef.value) {
            const fm = formRef.value?.getReactiveFormModel?.();
            if (fm) {
              fmWatcher && fmWatcher();
              fmWatcher = watch(
                () => fm.value,
                (val) => {
                  formModel.value = val;
                },
                { immediate: true }
              );
            } else {
              formModel.value = openData.value;
            }
          }
        },
        {
          immediate: true
        }
      );

      let openUid: string;
      async function open(config: OpenConfig, data?: OpenData) {
        const uid = nanoid();
        currentVisible.value = true;
        openUid = uid;
        config = merge(
          {
            type: 'ADD',
            resetForm: true
          },
          config
        );
        data = data ?? {};

        // 重置一些状态
        loadingOk.value = false;
        if (config.resetForm === true) {
          formRef.value?.resetFields && formRef.value?.resetFields?.();
        }

        if ('title' in config) {
          title.value = config.title as string;
        } else {
          title.value =
            config.type === 'ADD'
              ? '新增'
              : config.type === 'EDIT'
              ? '编辑'
              : config.type === 'DETAIL'
              ? '详情'
              : '';
        }

        if (typeof props.detailApi === 'function') {
          try {
            loadingDetail.value = true;
            const recordOpenUid = uid;
            const res = (await props.detailApi(
              data as Recordable
            )) as Recordable;
            if (recordOpenUid === openUid) {
              openData.value = res;
              openType.value = config.type as string;
            }
          } finally {
            loadingDetail.value = false;
          }
        } else {
          loadingDetail.value = false;
          openData.value = data as Recordable;
          openType.value = config.type as string;
        }
      }

      async function handleOk() {
        if (formRef.value?.validate) {
          const data = await formRef.value?.validate?.();
          const recordOpenUid = openUid;
          if (typeof props.api === 'function') {
            try {
              loadingOk.value = true;
              const res = await props.api(data);
              if (recordOpenUid === openUid) {
                currentVisible.value = false;
                // 重置表单
                formRef.value?.resetFields &&
                  (await formRef.value?.resetFields?.());
                if (props.successMsg) {
                  Message.success(props.successMsg);
                }
                emit('success', res);
              }
            } finally {
              if (recordOpenUid === openUid) {
                loadingOk.value = false;
              }
            }
          } else {
            currentVisible.value = false;
          }
        }
      }

      function close() {
        currentVisible.value = false;
      }

      function handleCancel() {
        close();
      }
      type ExecAsyncTaskConfig = {
        // 异步执行函数
        executor: () => Promise<unknown>;
        // 执行成功&是当前打开的窗口情况下，执行的回调
        completeCallback?: () => void;
        // 成功和失败都会执行的回调
        finallyCallback?: () => void;
      };
      /*
     async executor() {
       // 执行异步任务
       loading.value = true;
     },
     completeCallback() {
       // 执行完成关闭弹窗，emit成功事件
       dialogRef.value.close();
       emit('success');
     },
     finallyCallback() {
       // 关闭loading状态
       loading.value = false;
     }
      */
      async function execAsyncTask(
        executor: Function | ExecAsyncTaskConfig,
        completeCallback?: Function,
        finallyCallback?: Function
      ) {
        const executorFunc =
          typeof executor === 'function' ? executor : executor.executor;
        const completeCallbackFunc =
          typeof completeCallback === 'function'
            ? completeCallback
            : typeof executor !== 'function' && executor.completeCallback;
        const finallyCallbackFunc =
          typeof finallyCallback === 'function'
            ? finallyCallback
            : typeof executor !== 'function' && executor.finallyCallback;
        try {
          const recordOpenUid = openUid;
          await executorFunc();
          if (recordOpenUid === openUid) {
            completeCallbackFunc && completeCallbackFunc?.();
          }
        } finally {
          finallyCallbackFunc && finallyCallbackFunc?.();
        }
      }
      function getFormRef() {
        return formRef.value;
      }

      expose({
        open,
        close,
        getFormRef,
        execAsyncTask
      });

      return () => {
        const formComponent = props.formComponent as Component;
        const footerVNode =
          slots.footer?.({
            loading: loadingOk.value,
            disabled: loading.value,
            data: formModel.value,
            record: formModel.value
          }) ?? [];
        if (!props.hideOk) {
          footerVNode.unshift(
            <a-button
              data-sort="-10"
              type="primary"
              loading={loadingOk.value}
              disabled={loading.value}
              onClick={handleOk}
              {...props.okButtonProps}
            >
              {props.okText ? props.okText : '确定'}
            </a-button>
          );
        }
        if (!props.hideCancel) {
          footerVNode.unshift(
            <a-button
              data-sort="-20"
              onClick={handleCancel}
              {...props.cancelButtonProps}
            >
              {props.cancelText ? props.cancelText : '取消'}
            </a-button>
          );
        }

        const renderFooterVNode = footerVNode.sort((a, b) => {
          const tpl1 = Number(a.props?.['data-sort'] ?? a.props?.['dataSort']);
          const tpl2 = Number(b.props?.['data-sort'] ?? b.props?.['dataSort']);
          const sort1 = Number.isNaN(tpl1) ? 0 : tpl1;
          const sort2 = Number.isNaN(tpl2) ? 0 : tpl2;
          return sort1 - sort2;
        });

        return (
          <>
            <DialogComp.value
              {...attrs}
              width={props.width}
              title={title.value}
              visible={currentVisible.value}
              onCancel={() => (currentVisible.value = false)}
              v-slots={{
                footer: () => <>{renderFooterVNode}</>
              }}
            >
              <div>
                <a-spin size={32} loading={loading.value} style="width: 100%">
                  <a-row gutter={12}>
                    <a-col span={slots.default ? 8 : 24}>
                      <formComponent
                        ref={(v: unknown) =>
                          (formRef.value = v as FormComponentInstance)
                        }
                        type={openType.value}
                        data={openData.value}
                      />
                    </a-col>
                    { slots.default && <a-col span={16}>{ slots.default() }</a-col> }
                  </a-row>
                </a-spin>
              </div>
            </DialogComp.value>
          </>
        );
      };
    }
  });
</script>

<style scoped></style>
