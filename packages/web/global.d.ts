/* eslint-disable */
import type {
  ModalConfig,
  DrawerConfig,
} from '@arco-design/web-vue';
import { DefineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';

// 对话框类型
declare global {
  module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  module '~pages' {
    import { RouteRecordRaw } from 'vue-router';
    const genRoutes: Array<RouteRecordRaw>
    export default genRoutes;
  }

  type Recordable<T = any> = Record<string, T>;
  type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE' | 'PATCH';

  type FormComponentProps = {
    data?: any
  } & Recordable;
  type DialogProps = Partial<DrawerConfig & ModalConfig>;
  type DialogOpenConfig = {
    // 操作类型，默认ADD
    type: 'ADD' | 'EDIT' | 'DETAIL';
    // 是否重置表单，默认true
    resetForm?: boolean;
    // 模态框标题
    title?: string;
    // 模态框props
    dialogProps?: DialogProps
    // 表单组件 props
    formComponentProps?: FormComponentProps
  };
}
