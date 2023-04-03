import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Home from '@/views/home/index.vue';

NProgress.configure({ showSpinner: false });

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/generate',
    name: 'generate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/generate/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
