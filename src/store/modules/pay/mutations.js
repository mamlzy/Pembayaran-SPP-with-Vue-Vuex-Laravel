export const SET_PAYMENTS = (state, payload) => {
  state.payments = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}

export const SET_TRANSACTION_TOKEN = (state, payload) => {
  state.transactionToken = payload
  // console.log("STATE TOKEN =====>", state.transactionToken)
}

// export const SET_CHANGE_STATUS = (state, payload) => {
//   state.status = payload
//   console.log("STATE STATUS =====>", state.status)
// }

export const SET_GET_SUCCESS = (state, payload) => {
  state.getSuccess = payload
  console.log("MUTATION SET SUCCESS =====>", payload)
}