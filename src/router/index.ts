import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SearchScreen from '../views/SearchScreen.vue';
import Forza from '../views/abouts/Forza4.vue';
import Dishonored from '../views/abouts/Dishonored2.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: SearchScreen,
    },
    {
        path:'/info/forza',
        name:'forzainfo',
        component: Forza
    },
    {
        path:'/info/dishonored',
        name:'dishonoredinfo',
        component: Dishonored
    }
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
