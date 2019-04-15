import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  state: {
    statuses: []
  },
  mutations: {
    loadStatuses(state, payload) {
      state.statuses = payload
    }
  },
  actions: {
    async fetchStatuses({commit}) {
      commit('setLoading', true)
      commit('clearError')
      
      try {
        const response = await axios.get('/statuses')
        const resultStatuses = JSON.parse(response.data.d)
        
        commit('loadStatuses', resultStatuses)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    }
  },
  getters: {
    statuses(state) {
      return state.statuses
    }
  }
}