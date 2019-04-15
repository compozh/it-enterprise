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
    async fetchDescription({commit, getters}, id) {
      try {
        const response = await axios.get('/description/' + id)
        return JSON.parse(response.data.d)

      } catch (error) {
        commit('setError', error.message)
      }
    },
    async fetchGroups({dispatch, commit}) {
      commit('setLoading', true)
      commit('clearError')
      
      try {
        const response = await axios.get('/groups')
        const resultGroups = JSON.parse(response.data.d)
        
        for (let groupId in resultGroups) {
          let id = resultGroups[groupId].Id
          let description = await dispatch('fetchDescription', id)
          resultGroups[groupId].description = description
         }
        
        commit('loadGroups', resultGroups)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    },
  },
  getters: {
    groups(state) {
      return state.groups
    }
  }
}
