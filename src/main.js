// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUi from 'muse-ui'
import VueTimeago from 'vue-timeago'
import store from './store'


import 'muse-ui/dist/muse-ui.css'
import './assets/css/reset.css'

Vue.use(MuseUi)
Vue.config.productionTip = false

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'zh-CN',
  locales: {
    // you will need json-loader in webpack 1
    'zh-CN': require('vue-timeago/locales/zh-CN.json')
  }
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
