import Payment from '../../../api/Payment'

export const getPayments = ({commit}) => {
  Payment.all().then(response => {
    commit('SET_PAYMENTS', response.data)
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