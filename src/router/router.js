import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Itens from '../pages/Itens.vue';


const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/itens', name: 'Itens', component: Itens},
]


const router = createRouter( {
    history: createWebHistory(),
    routes
});

export default router;