import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  /* function(h){return h(App)} */
})
