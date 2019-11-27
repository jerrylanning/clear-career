import Vue from 'vue';
import App from './App.vue';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from './routes';
import store from './store'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

import VueGraph from 'vue-graph'
Vue.use(VueGraph)

const router = new VueRouter({mode: 'history', routes});

Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app');
