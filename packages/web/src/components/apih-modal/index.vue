<script lang="tsx">
import {
  useSlots,
  Component,
  defineComponent,
} from 'vue';
import {
  Modal,
} from '@arco-design/web-vue';
import {
  useDialog,
  defaultDialogProps,
} from './use-dialog';

export default defineComponent({
  props: defaultDialogProps,
  emits: ['success'],
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

    expose({
      open,
      close,
      getFormRef,
      execAsyncTask,
    });
    return () => {
      const formComponent = props.formComponent as Component;

      return (
        <Modal
          class="apih-modal"
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
        </Modal>
      );
    };
  },
});
</script>

<style lang="scss">
//.apih-modal{
//  .arco-modal-body{
//    background-color: #eee;
//  }
//}
</style>
