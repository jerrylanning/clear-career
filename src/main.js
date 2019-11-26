import Vue from 'vue';
import App from './App.vue';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from './routes';

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

const router = new VueRouter({mode: 'history', routes});

// Adding the Font Awesome to our project

Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App)

}).$mount('#app');
