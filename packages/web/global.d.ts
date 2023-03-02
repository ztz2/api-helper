/* eslint-disable */
declare type Recordable<T = any> = Record<string, T>;
declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE' | 'PATCH';
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '~pages' {
  import { RouteRecordRaw } from 'vue-router';
  const genRoutes: Array<RouteRecordRaw>
  export default genRoutes;
}
