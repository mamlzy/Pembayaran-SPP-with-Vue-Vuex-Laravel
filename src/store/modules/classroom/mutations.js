export const SET_CLASSROOMS = (state, payload) => {
  state.classrooms = payload
}

export const SET_CLASSROOMS_COUNT = (state, payload) => {
  state.classroomsCount = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}