import Vue from 'vue'
import Vuex from 'vuex'

import major from './modules/major'
import student from './modules/student'
import classroom from './modules/classroom'
import tuition from './modules/tuition'
import payment from './modules/payment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    major,
    student,
    classroom,
    tuition,
    payment,
  }
})
