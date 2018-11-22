import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('../views/NotFound')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: 'with-side-bar' },
      component: () => import('../views/Dashboard.vue')
    },
    { path: '*', redirect: '/not-found' }
  ]
})
