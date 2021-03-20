export const SET_USERS = (state, payload) => {
  state.users = payload
}

export const SET_AUTH_DATA = (state, payload) => {
  state.authData = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}