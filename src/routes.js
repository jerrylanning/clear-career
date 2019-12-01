import Home from './components/pages/Home.vue';
import Register from './components/pages/Register.vue';
import Login from './components/pages/Login.vue';
import Profile from './components/pages/Profile';
import Landing from './components/pages/Landing.vue';
import Explore from './components/pages/Explore';
import SearchMentors from "./components/pages/SearchMentors";
import MyMentors from "./components/pages/MyMentors";
import MyPaths from "./components/pages/MyPaths";

// This file is where we wil add routes, if you ever need to add a route first you must add it here.
const routes = [
    { path: '/' , component: Landing},
    { path: '/home/:name', component: Home , props: true },
    { path: '/my-path/:name', component: MyPaths, props: true},
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile},
    { path: '/explore', component: Explore},
    { path: '/search-mentors', component: SearchMentors},
    { path: '/my-mentors', component: MyMentors}
];

export default routes;
