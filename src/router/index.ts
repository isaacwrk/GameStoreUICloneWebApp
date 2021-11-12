import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SearchScreen from '../views/SearchScreen.vue';
import InfoScreen from '../views/InfoScreen.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: SearchScreen,
    },
    {
        path:'/info',
        name:'info',
        component: InfoScreen
    },
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
