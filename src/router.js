import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog'
import Orders from '@/components/Orders'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/orders',
      name: 'order',
      component: Orders
    }
  ]
})
