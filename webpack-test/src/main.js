
import Vue from 'vue'
import './styles/main.css'
import App from './components/app.vue'

import 'lib-flexible/flexible'


new Vue({
  el: '#app',
  render: h => h(App)
})