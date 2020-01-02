import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  './style/base.css'


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router
}).$mount('#app')
