import axios from '@/axios'
export default {
  namespaced: true,
  state: {
    questionnaireis: [],
    questionnaireById: [],
    result: []
  },
  actions: {
    async fetchAllQuestionnaireis({ commit }) {
      try {
        const { data } = await axios.get('/questionnaire');
        commit('setAnswersQuestionnaireis', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
    async fetchResByStore({ commit }, data) {
      try {
        await commit('setResByStore', data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
    async fetchQuestionnaireById({ commit }, id) {
      try {
        const { data } = await axios.post(`/questionnaireId`, { id });
        commit("setQuestionnaire", data)
      } catch (error) {
        commit('fetchFail', error)
      }
    },
  },
  mutations: {
    setAnswersQuestionnaireis(state, questionnaireis) {
      state.questionnaireis = questionnaireis
    },
    setQuestionnaire(state, questionnaire) {
      state.questionnaireById = questionnaire
    },
    setResByStore(state, data) {
      state.result = data
    }
  },
  getters: {
    questionnaireis: ({ questionnaireis }) => { return questionnaireis },
    questionnaireById: ({ questionnaireById }) => { return questionnaireById },
    result: ({ result }) => { return result },
  },
}