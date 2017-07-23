import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/components/index/Index'
import List from '@/components/List/List'
import Detail from '@/components/Detail/Detail'
import User from '@/components/User/User'
import Cart from '@/components/Cart/Cart'
import CreateOrder from '@/components/CreateOrder/CreateOrder'
import OrderList from '@/components/OrderList/OrderList'
import OrderDetail from '@/components/OrderDetail/OrderDetail'

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
    },
    {
      path: '/user/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/createOrder',
      name: 'createOrder',
      component: CreateOrder
    },
    {
      path: '/order/list',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/order/detail',
      name: 'orderDetail',
      component: OrderDetail
    }
  ]
})

