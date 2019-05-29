import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Nav from '@/pages/nav';
import Error from '@/pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '*',
      name: '404',
      component: Error
    }
  ]
})
