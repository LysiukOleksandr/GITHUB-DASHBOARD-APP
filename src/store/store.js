import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    repositories: [],
    page: 10
  },
  mutations: {
    SET_REPOSITORIES: (state, data) => {
      state.repositories = data
    }
  },
  actions: {
    FETCH_REPOSITORIES ({ commit }, value) {
      axios.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&per_page=8`)
        .then(({ data }) => {
          const repos = data.items.map((item) => {
            return {
              avatar: item.owner.avatar_url,
              name: item.full_name,
              stars: item.stargazers_count,
              updated: new Date(Date.parse(item.updated_at)),
              github: item.html_url
            }
          })
          commit('SET_REPOSITORIES', repos)
        })
    }
  },
  getters: {
  }
}
)
