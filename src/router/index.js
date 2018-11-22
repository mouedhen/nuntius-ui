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
      path: '/about',
      name: 'about',
      meta: { layout: 'with-side-bar' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    { path: '*', redirect: '/not-found' }
  ]
})
