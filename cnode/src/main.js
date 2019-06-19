import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'

import './assets/styles/reset.css'
import './assets/styles/common.scss'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
