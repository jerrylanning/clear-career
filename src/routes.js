import Home from './components/pages/Home.vue';
import Register from './components/pages/Register.vue';
import Login from './components/pages/Login.vue';
import Profile from './components/pages/Profile';
import Explore from './components/pages/Explore';
import Advice from './components/pages/Advice';
import Landing from './components/pages/Landing.vue';
import MentorProfile from './components/pages/MentorProfile.vue';
import SearchMentors from "./components/pages/SearchMentors";
import MyMentors from "./components/pages/MyMentors";
import MyPaths from "./components/pages/MyPaths";
import CareerPage from "./components/pages/CareerPage";

// This file is where we wil add routes, if you ever need to add a route first you must add it here.
const routes = [
    { path: '/' , component: Landing},
    { path: '/home/:name', component: Home , props: true },
    { path: '/my-path', component: MyPaths},
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/profile/:name', component: Profile},
    { path: '/explore', component: Explore},
    { path: '/mentor-profile/:name', component: MentorProfile, props: true},
    { path: '/search-mentors', component: SearchMentors},
    { path: '/advice', component: Advice},
    { path: '/my-mentors', component: MyMentors},
    { path: '/career-page/:name', component: CareerPage},
];

export default routes;
