import Payment from '../../../api/Payment'

export const getPayments = ({commit}) => {
  Payment.all().then(response => {
    commit('SET_PAYMENTS', response.data)
  })
}

export const getPaymentHistory = ({commit}) => {
  Payment.getPaymentHistory().then(response => {
    commit('SET_PAYMENT_HISTORY', response.data)
  })
}

export const getDetailHistory = ({commit}, payload) => {
  console.log("DETAIL ACTION ==>", payload)
  Payment.getDetailHistory(payload).then(response => {
    commit('SET_DETAIL_HISTORY', response.data)
  })
}

export const updatePayment = ({commit}, payload) => {
  // console.log(payload.data, 'Data Update')
  return Payment.update(payload)
}

export const addPayment = ({commit}, payload) => {
  // console.log(payload, 'Data Store')
  return Payment.store(payload)
}

export const deletePayment = ({commit}, payload) => {
  // console.log(payload.id)
  return Payment.delete(payload.id)
}