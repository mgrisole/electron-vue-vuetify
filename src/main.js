import '@babel/polyfill'
import Vue from 'vue'
import VueTimers from 'vue-timers'
import VCharts from 'v-charts'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(VueTimers)
Vue.use(VCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
