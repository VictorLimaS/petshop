import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Cadastro from '../pages/Cadastro.vue';
import Agenda from '../pages/Agenda.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/cadastro', name: 'Cadastro', component: Cadastro },
    { path: '/agenda', name: 'Agenda', component: Agenda }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
