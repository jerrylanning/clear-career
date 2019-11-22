import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from 'vue-router'

// Adding routes to our project
import routes from './routes';
const router = new VueRouter({mode: 'history', routes});

// Adding the Font Awesome to our project
library.add(faUserSecret);
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App)

}).$mount('#app');
