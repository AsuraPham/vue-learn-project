import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PriceIndex from '@/components/PriceIndex'
import ProductList from '@/components/ProductList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/price',
      name: 'PriceIndex',
      component: PriceIndex
    },
    {
      path: '/product',
      name: 'ProductList',
      component: ProductList
    }
  ]
})
