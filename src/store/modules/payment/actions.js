import Payment from '../../../api/Payment'

export const getPayments = ({commit}) => {
  Payment.all().then(response => {
    commit('SET_PAYMENTS', response.data)
  })
}