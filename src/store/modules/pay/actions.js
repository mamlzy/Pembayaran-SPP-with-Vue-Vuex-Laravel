import Pay from '../../../api/Pay'

// export const getPayments = ({commit}) => {
//   Payment.all().then(response => {
//     commit('SET_PAYMENTS', response.data)
//   })
// }

export const doPayment = ({commit}, payload) => {
  // console.log('ACTION ====>', payload)
  return Pay.getToken(payload).then(response => {
    console.log('ACTION DO PAYMENT ====>', response)
    commit('SET_TRANSACTION_TOKEN', response.data)
  })
}

export const changeStatus = ({commit}, payload) => {
  // console.log('ACTION ====>', payload)
  return Pay.changeStatus(payload).then(response => {
    console.log('ACTION CHANGE STATUS ====>', response)
    // commit('SET_CHANGE_STATUS', response.data)
  })
}

export const getSuccess = ({commit}, payload) => {
  // console.log('ACTION ====>', payload)
  // return Pay.getToken(payload).then(response => {
    // console.log('ACTION GET SUCCESS ====>', payload)
    commit('SET_GET_SUCCESS', payload)
  // })
}
