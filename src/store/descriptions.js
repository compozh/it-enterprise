import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  state: {
    description: ''
  },
  mutations: {
    loadDescription(state, payload) {
      state.description = payload
    }
  },
  actions: {
    async fetchDescription({commit}, id) {
      console.log(id);
      commit('setLoading', true)
      commit('clearError')
      
      try {
        const response = await axios.get('/description/' + id)
        console.log(response);
        const resultDescription = JSON.parse(response.data.d)
        
        commit('loadDescription', resultDescription)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    }
  },
  getters: {
    description(state) {
      return state.description
    }
  }
}