import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    naviState: false
  },
  mutations: {
    toggle (state) {
      state.naviState = !state.naviState
    }
  },
  actions: {

  },
  getters: {
    getNaviState: state => {
      return state.naviState
    }
  }
})
