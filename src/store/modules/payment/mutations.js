export const SET_PAYMENTS = (state, payload) => {
  state.payments = payload

}
export const SET_PAYMENT_HISTORY = (state, payload) => {
  state.paymentHistory = payload
}

export const SET_DETAIL_HISTORY = (state, payload) => {
  state.detailHistory = payload
  console.log('DETAIL ====>', state.detailHistory)
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}