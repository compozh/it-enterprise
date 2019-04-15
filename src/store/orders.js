import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrders(state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async fetchOrders({commit}) {
      commit('setLoading', true)
      commit('clearError')
      
      try {
        const response = await axios.get('/orders')
        const resultOrders = JSON.parse(response.data.d)
        
        commit('loadOrders', resultOrders)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    }
  },
  getters: {
    orders(state) {
      return state.orders
    }
  }
}