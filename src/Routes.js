import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Feed from '@/pages/Feed/Feed';
import MyProject from "@/pages/MyProject/MyProject";
import Login from "@/pages/Login/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'feed',
        name: 'Feed',
        component: Feed,
      },
      {
        path: 'my-projects',
        name: 'my-projects',
        component: MyProject,
      }
    ],
  }
  ],
});
