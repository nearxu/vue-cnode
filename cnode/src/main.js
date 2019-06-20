import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'

import './assets/styles/reset.css'
import './assets/styles/common.scss'

// utils
import session from '@/server/session'

import router from './router'

Vue.config.productionTip = false

// Vue本身有$on和$emit的机制
Vue.prototype.$dispatch = function (eventName, data) {
  let parent = this.$parent
  while (parent) {
    parent.$emit(eventName, data)
    parent = parent.$parent
  }
}

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    let user = session.get('user')
    if (user) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
