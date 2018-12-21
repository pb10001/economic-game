import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/agriculture',
      name: 'agriculture',
      component: () => import('./views/Agriculture.vue'),
    },
    {
      path: '/stones',
      name: 'stones',
      component: () => import('./views/Stones.vue'),
    },
    {
      path: '/proto',
      name: 'proto',
      component: () => import('./views/Proto.vue'),
    },
  ],
});
