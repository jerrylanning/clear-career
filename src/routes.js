import Home from './components/pages/Home.vue';
import Register from './components/pages/Register.vue';
import Login from './components/pages/Login.vue';
import Profile from './components/pages/Profile';
import Explore from './components/pages/Explore';
import Advice from './components/pages/Advice';

// This file is where we wil add routes, if you ever need to add a route first you must add it here.
const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile},
    { path: '/explore', component: Explore},
    { path: '/advice', component: Advice}
];

export default routes;
