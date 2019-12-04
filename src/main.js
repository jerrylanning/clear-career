import Vue from 'vue';
import App from './App.vue';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import routes from './routes';
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faSort, faSortDown, faSortUp, faThumbsUp, faThumbsDown, faCheck} from '@fortawesome/free-solid-svg-icons'
import VueGraph from 'vue-graph'

//Adding Font Awesome icons
library.add(faSort, faSortDown, faSortUp, faThumbsUp, faThumbsDown, faCheck);
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueGraph);
const router = new VueRouter({mode: 'history', routes});

Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app');
