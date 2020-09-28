import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    repositories: [],
    repositoryDetails: {},
    totalCount: 0
  },
  mutations: {
    SET_REPOSITORIES: (state, payload) => {
      state.repositories = payload[0]
      state.totalCount = payload[1]
    },
    SET_REPOSITORY_DETAILS: (state, payload) => {
      state.repositoryDetails = payload
    }
  },
  actions: {
    fetchRepositories ({ commit }, value) {
      axios.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&per_page=8
      `)
        .then(({ data }) => {
          const payload = [data.items.map((item) => {
            return {
              avatar: item.owner.avatar_url,
              name: item.full_name,
              stars: item.stargazers_count,
              updated: new Date(Date.parse(item.updated_at)),
              github: item.html_url,
              routePath: `card/${item.full_name}`
            }
          }), data.total_count]
          commit('SET_REPOSITORIES', payload)
        }).catch(error => {
          console.log(error)
        })
    },
    fetchRepositoryDetails ({ commit }, value) {
      axios.get(`https://api.github.com/repos/${value}`).then(({ data }) => {
        const payload = {

          id: data.id,
          avatar: data.owner.avatar_url,
          name: data.full_name,
          stars: data.stargazers_count,
          updated: new Date(Date.parse(data.updated_at)),
          language: data.language,
          description: data.description,
          github: data.html_url,
          status: data.private ? 'private' : 'public'

        }
        commit('SET_REPOSITORY_DETAILS', payload)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
  }
}
)
