import { DrawerConfig } from '@arco-design/web-vue';

export type DrawerProps = Partial<DrawerConfig>;
export type FormComponentProps = {
  data?: any
} & Recordable;
export type DrawerOpenConfig = {
  // 操作类型，默认ADD
  type: 'ADD' | 'EDIT' | 'DETAIL';
  // 是否重置表单，默认true
  resetForm?: boolean;
  // 模态框标题
  title?: string;
  // 模态框props
  dialogProps?: DrawerProps
  // 表单组件 props
  formComponentProps?: FormComponentProps
};
