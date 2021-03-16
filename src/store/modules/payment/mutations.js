export const SET_PAYMENTS = (state, payload) => {
  state.payments = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}