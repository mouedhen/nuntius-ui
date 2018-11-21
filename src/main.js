import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Default from './layouts/Default'
import WithSideBar from './layouts/WithSideBar'

Vue.config.productionTip = false

Vue.component('default-layout', Default)
Vue.component('with-side-bar-layout', WithSideBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
