import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './assets/style/sass/main.scss'

import Default from './layouts/Default'
import WithSideBar from './layouts/WithSideBar'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component('default-layout', Default)
Vue.component('with-side-bar-layout', WithSideBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
