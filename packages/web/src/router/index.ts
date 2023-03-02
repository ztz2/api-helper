import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// @ts-ignore
import genRoutes from '~pages';

const routes: Array<RouteRecordRaw> = [
  ...genRoutes,
  {
    path: '/',
    redirect: 'home'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
