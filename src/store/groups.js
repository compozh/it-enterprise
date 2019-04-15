import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  state: {
    groups: []
  },
  mutations: {
    loadGroups(state, payload) {
      state.groups = payload
    }
  },
  actions: {
    async fetchGroups({commit}) {
      commit('setLoading', true)
      commit('clearError')
      
      try {
        const response = await axios.get('/groups')
        const resultGroups = JSON.parse(response.data.d)
        
        commit('loadGroups', resultGroups)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    }
  },
  getters: {
    groups(state) {
      return state.groups
    }
  }
}