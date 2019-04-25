import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PriceIndex from '@/components/PriceIndex'
import ProductList from '@/components/ProductList'
import Profile from '@/app/profile/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/@:username',
      component: Profile,
      name: Profile
    }
  ]
})
