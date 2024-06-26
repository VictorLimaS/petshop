import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Cadastro from '../pages/Cadastro.vue';
import Agenda from '../pages/Agenda.vue';
import Admin from '../pages/Admin.vue';
import Subirimg from '../components/Subirimg.vue'
import { auth } from '../firebase/firebase';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/cadastro', name: 'Cadastro', component: Subirimg },
  { path: '/agenda', name: 'Agenda', component: Agenda },
  { 
    path: '/admin', 
    name: 'Admin', 
    component: Admin,
    meta: { requiresAdmin: true } 
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (currentUser && currentUser.email === 'admin@hotmail.com') {
    if (to.name === 'Login') {
      next({ name: 'Admin' });
    } else {
      next();
    }
  } else if (requiresAdmin) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
