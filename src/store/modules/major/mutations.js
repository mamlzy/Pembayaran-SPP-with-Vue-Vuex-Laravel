export const SET_MAJORS = (state, payload) => {
  state.majors = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}