import { createRouter, createWebHistory } from 'vue-router';
import AboutUs from "../components/AboutUs.vue";
import Login from "../components/AuthUserLogin.vue";
import SignUp from "../components/AuthUserSignUp.vue";
import Trajets from "../components/Trajets.vue";
import Profile from "../components/Profile.vue";
import Home_ from "../components/Home_.vue";
const routes = [
    {
        path : '/',
        name : 'Home_',
        component : Home_,
    },
    {
        path : '/aboutUs',
        name : 'AboutUs',
        component: AboutUs,
    },
    {
        path : '/login',
        name : 'AuthUserLogin',
        component : Login,
    },
    {
        path : '/signUp',
        name : 'AuthUserSignUp',
        component: SignUp,
    },
    {
        path : '/trajets',
        name : 'Trajets',
        component: Trajets,
    },
    {
        path: '/profile/:userId',  
        name: 'Profile',
        component: Profile,
        props: true, 
      },

];

const router = createRouter({history: createWebHistory(import.meta.env.BASE_URL), routes});

export default router;