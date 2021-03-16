export const SET_TUITIONS = (state, payload) => {
  state.tuitions = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}