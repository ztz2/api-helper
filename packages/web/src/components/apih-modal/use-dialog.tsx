import {
  ref,
  computed,
  useSlots,
  useAttrs,
  PropType,
  Component,
  ComponentPublicInstance,
} from 'vue';
import { nanoid } from 'nanoid';
import { merge } from 'lodash';
import { Message } from '@arco-design/web-vue';
import { noop } from '@/utils';

export const defaultDialogProps = {
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
    type: Array as PropType<Array<number>>,
    default: () => [24],
  },
  // 关闭时是否卸载节点
  unmountOnClose: Boolean,
};

export type FormComponentInstance = ComponentPublicInstance & {
  validate?(): Promise<unknown>;
  resetFields?(): void;
};

export function useDialog(props: typeof defaultDialogProps, emit: Function) {
  const attrs = useAttrs();
  const slots = useSlots();

  const formRef = ref<FormComponentInstance | undefined>();
  const title = ref('新增');
  const dialogOpenUid = ref(nanoid());
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

  async function open(config: DialogOpenConfig) {
    const uid = nanoid();
    dialogOpenUid.value = uid;
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
    const recordOpenUid = dialogOpenUid.value;
    try {
      loadingOk.value = true;
      // @ts-ignore
      const res = await props.api(data);
      if (recordOpenUid === dialogOpenUid.value) {
        currentVisible.value = false;
        // 重置表单
        formRef.value?.resetFields?.();
        if (props.successMsg) {
          Message.success(props.successMsg?.toString?.());
        }
        emit('success', res);
      }
    } finally {
      if (recordOpenUid === dialogOpenUid.value) {
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
    const recordOpenUid = dialogOpenUid.value;
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
      if (recordOpenUid === dialogOpenUid.value) {
        return res as T;
      }
      return new Promise(noop);
    }).catch((err) => {
      if (recordOpenUid === dialogOpenUid.value) {
        return Promise.reject(err);
      }
      return new Promise(noop);
    }) as Promise<T>;
  }

  function getFormRef() {
    return formRef.value;
  }

  function renderFooter() {
    const footerVNode = slots.footer?.({
      loading: loadingOk.value,
      disabled: loading.value,
      data: currentFormComponentProps.value.data,
      record: currentFormComponentProps.value.data,
    }) ?? [];
    if (!props.hideOk) {
      // @ts-ignore
      footerVNode.unshift(<a-button data-sort="-10" type="primary"
          loading={loadingOk.value}
          disabled={loading.value}
          onClick={handleOk}
          {...props.okButtonProps}
        >
          {props.okText ? props.okText : '确定'}
        </a-button>);
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

    return footerVNode.sort((a: any, b: any) => {
      const tpl1 = Number(a.props?.['data-sort'] ?? a.props?.dataSort);
      const tpl2 = Number(b.props?.['data-sort'] ?? b.props?.dataSort);
      const sort1 = Number.isNaN(tpl1) ? 0 : tpl1;
      const sort2 = Number.isNaN(tpl2) ? 0 : tpl2;
      return sort1 - sort2;
    });
  }

  function renderFormComponent() {
    const FormComponent = (props as Recordable).formComponent;
    let span1 = (props as Recordable).span[0];
    let span2 = (props as Recordable).span[1];

    // 没有设置默认值，重置成默认
    if (slots.default && (props as Recordable).span?.length === 1) {
      span1 = 8;
      span2 = 16;
    }
    return (
      <a-row gutter={12}>
        <a-col span={span1}>
          <FormComponent
            {...attrs}
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
    );
  }

  return {
    title,
    formRef,
    loading,
    loadingOk,
    dialogOpenUid,
    currentVisible,
    dialogOpenType,
    currentDialogProps,
    open,
    close,
    handleOk,
    getFormRef,
    renderFooter,
    execAsyncTask,
    renderFormComponent,
  };
}
