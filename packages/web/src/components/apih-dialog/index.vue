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
import {
  Drawer,
  Message,
} from '@arco-design/web-vue';
import { merge } from 'lodash';
import { nanoid } from 'nanoid';

import {
  DialogProps,
  DialogOpenConfig,
  FormComponentProps,
} from './interface';
import { noop } from '@/utils';

type FormComponentInstance = ComponentPublicInstance & {
  validate?(): Promise<unknown>;
  resetFields?(): void;
};

export default defineComponent({
  props: {
    formComponent: {
      type: Object as PropType<Component>,
    },
    api: {
      type: Function as PropType<(data: any) => Promise<unknown>>,
    },
    width: String,
    successMsg: String,
    hideOk: Boolean,
    hideCancel: Boolean,
    okText: String,
    cancelText: String,
    okButtonProps: {
      type: Object,
      default: () => ({}),
    },
    cancelButtonProps: {
      type: Object,
      default: () => ({}),
    },
    span: {
      type: Array,
      default: () => [24],
    },
  },
  emits: ['success'],
  setup(props, { attrs, expose, emit }) {
    const slots = useSlots();

    const formRef = ref<FormComponentInstance | undefined>();
    const title = ref('新增');
    const loadingOk = ref(false);
    const currentVisible = ref(false);
    const dialogOpenType = ref('ADD');
    const dialogProps = ref<DialogProps>({});
    const formComponentProps = ref<FormComponentProps>({});

    const loading = computed(() => loadingOk.value);
    const currentDialogProps = computed(() => ({
      ...{},
      ...dialogProps.value,
    }));
    const currentFormComponentProps = computed(() => ({
      ...{},
      ...formComponentProps.value,
    }));

    function close() {
      currentVisible.value = false;
    }

    let dialogOpenUid: string;
    async function open(config: DialogOpenConfig) {
      const uid = nanoid();
      dialogOpenUid = uid;
      config = merge(
        {
          type: 'ADD',
          resetForm: true,
        },
        config,
      );

      // 重置一些状态
      loadingOk.value = false;
      if (config.resetForm !== false) {
        formRef.value?.resetFields?.();
      }

      // 模态框标题
      if (config.title || config.dialogProps?.title) {
        title.value = config.title || config.dialogProps?.title as string;
      } else {
        title.value = config.type === 'ADD'
          ? '新增'
          : config.type === 'EDIT'
            ? '编辑'
            : config.type === 'DETAIL'
              ? '详情'
              : '';
      }

      currentVisible.value = true;
      dialogProps.value = config?.dialogProps ?? undefined! as DialogProps;
      formComponentProps.value = config?.formComponentProps ?? undefined! as FormComponentProps;
      dialogOpenType.value = config.type ?? 'ADD';
    }

    async function handleOk() {
      if (typeof props.api !== 'function') {
        currentVisible.value = false;
        return;
      }
      if (!formRef.value?.validate) {
        currentVisible.value = false;
        return;
      }
      const data = await formRef.value?.validate?.();
      const recordOpenUid = dialogOpenUid;
      try {
        loadingOk.value = true;
        const res = await props.api(data);
        if (recordOpenUid === dialogOpenUid) {
          currentVisible.value = false;
          // 重置表单
          formRef.value?.resetFields?.();
          if (props.successMsg) {
            Message.success(props.successMsg);
          }
          emit('success', res);
        }
      } finally {
        if (recordOpenUid === dialogOpenUid) {
          loadingOk.value = false;
        }
      }
    }

    /*
    dialogRef.value.execAsyncTask(async () => {
      // 执行异步任务
      loading.value = true;
      // 返回需要操作组件异步数据
      return 100;
    }).then((res: unknown) => {
      // // res 是executor上面执行的返回值
      console.log(res); // -> 100
      // 执行完成关闭弹窗，emit成功事件
      dialogRef.value.close();
      emit('success');
    }).finally(() => {
      // 关闭loading状态
      loading.value = false;
    });
    */
    async function execAsyncTask<T>(
      executor: () => Promise<T>,
    ): Promise<T> {
      const recordOpenUid = dialogOpenUid;
      return new Promise((resolve, reject) => {
        try {
          const exec = executor();
          if (exec instanceof Promise) {
            exec.then((v) => {
              resolve(v);
            }).catch((err) => reject(err));
            return;
          }
          resolve(exec as T);
        } catch (e) {
          reject(e);
        }
      }).then((res) => {
        if (recordOpenUid === dialogOpenUid) {
          return res as T;
        }
        return new Promise(noop);
      }).catch((err) => {
        if (recordOpenUid === dialogOpenUid) {
          return Promise.reject(err);
        }
        return new Promise(noop);
      }) as Promise<T>;
    }

    function getFormRef() {
      return formRef.value;
    }

    expose({
      open,
      close,
      getFormRef,
      execAsyncTask,
    });

    return () => {
      const formComponent = props.formComponent as Component;
      const footerVNode = slots.footer?.({
        loading: loadingOk.value,
        disabled: loading.value,
        data: currentFormComponentProps.value.data,
        record: currentFormComponentProps.value.data,
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
            </a-button>,
        );
      }
      if (!props.hideCancel) {
        footerVNode.unshift(
            <a-button
              data-sort="-20"
              onClick={close}
              {...props.cancelButtonProps}
            >
              {props.cancelText ? props.cancelText : '取消'}
            </a-button>,
        );
      }

      const renderFooterVNode = footerVNode.sort((a, b) => {
        const tpl1 = Number(a.props?.['data-sort'] ?? a.props?.dataSort);
        const tpl2 = Number(b.props?.['data-sort'] ?? b.props?.dataSort);
        const sort1 = Number.isNaN(tpl1) ? 0 : tpl1;
        const sort2 = Number.isNaN(tpl2) ? 0 : tpl2;
        return sort1 - sort2;
      });

      let span1 = props.span[0];
      let span2 = props.span[1];

      // 没有设置默认值，重置成默认
      if (slots.default && props.span?.length === 1) {
        span1 = 8;
        span2 = 16;
      }
      return (
        <Drawer
          class="apih-dialog"
          {...attrs}
          {...currentDialogProps.value as any}
          width={props.width}
          title={title.value}
          visible={currentVisible.value}
          onCancel={() => (currentVisible.value = false)}
          v-slots={{
            footer: () => <>{renderFooterVNode}</>,
          }}
        >
          <div>
            <a-spin size={32} loading={loading.value} style="width: 100%">
              {
                formComponent ? (
                  <a-row gutter={12}>
                    <a-col span={span1}>
                      <formComponent
                        {...currentFormComponentProps.value}
                        ref={
                          (v: unknown) => (formRef.value = v as FormComponentInstance)
                        }
                        visible={currentVisible.value}
                        type={dialogOpenType.value}
                      />
                    </a-col>
                    { slots.default && <a-col span={span2}>{ slots.default() }</a-col> }
                  </a-row>
                ) : (
                  slots.default && slots.default()
                )
              }
            </a-spin>
          </div>
        </Drawer>
      );
    };
  },
});
</script>

<style lang="scss">
.apih-dialog{
  .arco-drawer-body{
    background-color: #eee;
  }
}
</style>
