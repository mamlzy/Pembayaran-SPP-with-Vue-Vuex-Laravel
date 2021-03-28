import User from '../../../api/User'

export const getUsers = ({commit}) => {
  User.all().then(response => {
    commit('SET_USERS', response.data)
  })
}

export const getAuth = ({commit}) => {
  // console.log(payload.id)
  User.auth().then(response => {
    // console.log("GET AUTH MUTATION ==>>",response)
    commit('SET_AUTH_DATA', response.data)
  })
}

export const getLogin = ({commit}) => {
  // console.log(payload.id)
  User.loginUser().then(response => {
    console.log("GET LOGIN MUTATION ==>>",response.data.role)
    // return response.data.role
    commit('SET_ROLE', response.data.role)
  })
}

export const login = ({commit}, user) => {
  User.login(user).then(response => {
    commit('SET_AUTH_DATA', response.data)
    return response
  })
}

export const register = ({commit}, user) => {
  // console.log("REGISTER DATA ====>",  user)
  return User.register(user)
}

export const updateUser = ({commit}, payload) => {
  // console.log('UPDATE USER ACTION ===>', payload)
  return User.update(payload)
}

export const addUser = ({commit}, payload) => {
  console.log(payload, 'Data Store')
  return User.register(payload)
}

export const postImage = ({commit}, payload) => {
  console.log('POST IMAGE ACTION ==>', payload)
  return User.postImage(payload)
}

export const deleteUser = ({commit}, payload) => {
  // console.log(payload.id)
  return User.delete(payload.id)
}