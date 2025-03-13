import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RegisterEmployee from '../views/RegisterEmployee.vue';
import History from '../views/History.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register-employee',
      name: 'register-employee',
      component: RegisterEmployee,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
  ],
});

export default router;