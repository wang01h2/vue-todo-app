import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'

import Index from '../pages/Index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/Index',
    },
    {
        path: '/Index',
        component: Index
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
