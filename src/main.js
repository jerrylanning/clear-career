import Vue from 'vue';
import App from './App.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes';

Vue.config.productionTip = false;
import VueRouter from 'vue-router'

const router = new VueRouter({mode: 'history', routes});

Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App)

}).$mount('#app');
