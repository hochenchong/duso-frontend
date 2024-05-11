import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '嘟嘟' },
  },
  {
    path: '/:category',
    component: Home,
    meta: { title: '嘟嘟' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全局的路由守卫，在路由切换时根据路由的 meta 属性设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '不知道取名什么';
  next();
});

export default router;
