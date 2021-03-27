import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import summary from './modules/summary'
import major from './modules/major'
import student from './modules/student'
import classroom from './modules/classroom'
import tuition from './modules/tuition'
import payment from './modules/payment'
import pay from './modules/pay'

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
    summary,
    major,
    student,
    classroom,
    tuition,
    payment,
    pay,
  }
})
