import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/components/index/Index'
import List from '@/components/List/List'
import Detail from '@/components/Detail/Detail'
import User from '@/components/User/User'

Vue.use(Router, {
  defaultTitle: 'test'
})

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})

