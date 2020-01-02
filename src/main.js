import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  './style/base.css'

import Vuex from 'vuex'
Vue.use(Vuex)



Vue.use(ElementUI);

const store = new Vuex.Store({
   state:{
     
   },
})

Vue.config.productionTip = false

new Vue({
   store,
  render: h => h(App),
  router
}).$mount('#app')
