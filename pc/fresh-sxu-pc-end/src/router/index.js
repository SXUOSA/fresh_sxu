import Vue from 'vue'
import Router from 'vue-router'
import 首页 from '@/pages/首页'
import Error from '@/pages/404'
import Nav from '@/pages/nav'
import 走进山大 from '@/pages/走进山大'
import 入学准备 from '@/pages/入学准备'
import 校内生活 from '@/pages/校内生活'
import 校外生活 from '@/pages/校外生活'
import 其他信息 from '@/pages/其他信息'
import 关于我们 from '@/pages/关于我们'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: '首页',
      component: 首页,

    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
      redirect:'/走进山大',
      children:
      [ 
        {path: '/走进山大',name: '走进山大',component: 走进山大},

        {path: '/入学准备',name: '入学准备',component: 入学准备},

        {path:'/校内生活',name:'校内生活',component: 校内生活 },

        {path:'/校外生活',name:'校外生活',component: 校外生活},

        {path:'/其他信息',name:'其他信息',component: 其他信息},

        {path: '/关于我们',name: '关于我们',component: 关于我们},
      ] 
    },
    {
      path: '*',
      name: '404',
      component: Error
    }
  ],
})
