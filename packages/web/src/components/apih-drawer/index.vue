<script lang="tsx">
import {
  useSlots,
  Component,
  defineComponent, watch,
} from 'vue';
import { Drawer } from '@arco-design/web-vue';
import {
  useDialog,
  defaultDialogProps,
} from '../apih-modal/use-dialog';

export default defineComponent({
  name: 'apih-drawer',
  props: defaultDialogProps,
  emits: ['success', 'update:visible'],
  setup(props, { attrs, expose, emit }) {
    const {
      title,
      loading,
      currentVisible,
      currentDialogProps,
      open,
      close,
      getFormRef,
      renderFooter,
      execAsyncTask,
      renderFormComponent,
    } = useDialog(props as any, emit);
    const slots = useSlots();
    watch(() => props.visible, (v) => {
      currentVisible.value = v;
    });
    watch(() => currentVisible.value, (v) => {
      emit('update:visible', v);
    });

    expose({
      open,
      close,
      getFormRef,
      execAsyncTask,
    });
    return () => {
      const formComponent = props.formComponent as Component;

      let span1 = props.span[0];
      let span2 = props.span[1];

      // 没有设置默认值，重置成默认
      if (slots.default && props.span?.length === 1) {
        span1 = 8;
        span2 = 16;
      }
      return (
        <Drawer
          class={{
            'apih-drawer': true,
            'apih-drawer--hide-footer': props.hideFooter,
          }}
          {...attrs}
          {...currentDialogProps.value as any}
          width={props.width}
          title={title.value}
          visible={currentVisible.value}
          unmountOnClose={props.unmountOnClose}
          onCancel={() => (currentVisible.value = false)}
          v-slots={{
            footer: () => <>{renderFooter()}</>,
          }}
        >
          <div>
            <a-spin
              size={32}
              loading={loading.value}
              style="width: 100%"
            >
              {
                formComponent ? (
                  renderFormComponent()
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
.apih-drawer{
  .arco-drawer-body{
    background-color: #eee;
  }
}
.apih-drawer--hide-footer{
  .arco-drawer-footer{
    display: none;
  }
}
</style>
