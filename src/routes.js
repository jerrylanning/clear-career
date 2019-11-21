import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

// This file is where we wil add routes, if you ever need to add a route first you must add it here.
const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

export default routes;
