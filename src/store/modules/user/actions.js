import User from '../../../api/User'

export const getUsers = ({commit}) => {
  User.all().then(response => {
    commit('SET_USERS', response.data)
  })
}
export const Login = ({commit}, user) => {
  User.login(user).then(response => {
    commit('SET_AUTH_DATA', response.data)
    return response
  })
}

export const updateUser = ({commit}, payload) => {
  // console.log(payload.data, 'Data Update')
  return User.update(payload)
}

export const addUser = ({commit}, payload) => {
  // console.log(payload, 'Data Store')
  return User.store(payload)
}

export const deleteUser = ({commit}, payload) => {
  // console.log(payload.id)
  return User.delete(payload.id)
}