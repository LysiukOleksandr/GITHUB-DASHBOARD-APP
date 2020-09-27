import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    repositories: []
  },
  mutations: {
    SET_REPOSITORIES: (state, data) => {
      state.repositories = data
    }
  },
  actions: {
    async FETCH_REPOSITORIES ({ commit }, value) {
      await axios.get(`https://api.github.com/search/repositories?q=${value}`)
        .then((response) => {
          commit('SET_REPOSITORIES', response.data.items)
        })
    }
  },
  getters: {}
})
