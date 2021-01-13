import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    meta: {title: '首页'},
    component: () => import('@/views/main/Main')
  },
  {
    path: '/403',
    name: '403',
    meta: {title: '没有权限'},
    component: () => import('@/views/main/403')
  },
  {
    path: '*',
    name: '404',
    meta: {title: '页面不存在'},
    component: () => import('@/views/main/404')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
