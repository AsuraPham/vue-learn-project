import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import profile from '../app/profile/Profile.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    profile
  }
})
