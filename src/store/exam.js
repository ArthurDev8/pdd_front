import axios from '@/axios'
export default {
  namespaced: true,
  state: {
    exam: [],
    result: []
  },
  actions: {
    async fetchExam({ commit }) {
      try {
        const { data } = await axios.get('/exam');
        commit('setExam', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
  },
  mutations: {
    setExam(state, exam) {
      state.exam = exam
    },
    setResByStore(state, data) {
      state.result = data
    }
  },
  getters: {
    exam: ({ exam }) => { return exam },
    result: ({ result }) => { return result },
  },
}