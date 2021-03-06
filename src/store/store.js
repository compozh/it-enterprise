import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import products from './products'
import groups from './groups'
import orders from './orders'
import statuses from './statuses'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    groups,
    products,
    orders,
    statuses
  },
  state: {},
  mutations: {},
  actions: {}
})
