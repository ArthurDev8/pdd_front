import Vue from 'vue'
import Vuex from 'vuex'
import questionnaireis from "./questionnaireis"
import exam from "./exam"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    questionnaireis,
    exam
  }
})
