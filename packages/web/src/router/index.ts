import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/home/index.vue';

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

export default router;
