import Vue from 'vue'
import App from './App.vue'
import factClick from 'fastclick'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
// 解决移动端300ms点击延迟
factClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
