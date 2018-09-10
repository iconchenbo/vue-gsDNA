/*
* 入口js
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import './common/css/reset.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render:h => h(App),
  router,
});
