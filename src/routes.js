import Home from './components/pages/Home.vue';
import Register from './components/pages/Register.vue';
import Login from './components/pages/Login.vue';
import Profile from './components/pages/Profile';
import Landing from './components/Landing.vue';
import Explore from './components/pages/Explore.vue';
import MentorProfile from './components/pages/MentorProfile.vue';

// This file is where we wil add routes, if you ever need to add a route first you must add it here.
const routes = [
    { path: '/' , component: Landing},
    { path: '/home/:name', component: Home , props: true },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/profile/:name', component: Profile},
    { path: '/explore', component: Explore},
    { path: '/mentor-profile', component: MentorProfile}
];

export default routes;
