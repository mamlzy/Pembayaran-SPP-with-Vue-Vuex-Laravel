import User from '../../../api/User'

export const getUsers = ({commit}) => {
  User.all().then(response => {
    commit('SET_USERS', response.data)
  })
}