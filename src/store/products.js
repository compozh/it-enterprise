import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  state: {
    products: []
  },
  mutations: {
    loadProducts(state, payload) {
      state.products = payload
    }
  },
  actions: {
    async fetchProducts({commit}) {
      commit('setLoading', true)
      commit('clearError')
      
      try {
        const response = await axios.get('/products')
        const resultProducts = JSON.parse(response.data.d)
        
        commit('loadProducts', resultProducts)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    }
  },
  getters: {
    products(state) {
      return state.products
    },
    productById(state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  }
}