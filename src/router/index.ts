import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('../pages/Index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
