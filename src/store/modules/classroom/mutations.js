export const SET_CLASSROOMS = (state, payload) => {
  state.classrooms = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}