import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import routes from './routes';
import store from './store'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)
const router = new VueRouter({mode: 'history', routes});

Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app');
