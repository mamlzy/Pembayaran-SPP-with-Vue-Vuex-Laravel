import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
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
    user,
    major,
    student,
    classroom,
    tuition,
    payment,
  }
})
