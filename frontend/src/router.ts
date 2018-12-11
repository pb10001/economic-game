import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Agriculture from './views/Agriculture.vue';

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
      component: Agriculture,
    },
  ],
});
