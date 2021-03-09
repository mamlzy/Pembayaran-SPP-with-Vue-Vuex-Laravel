import Major from '../../../api/Major'

export const getMajors = ({commit}) => {
  Major.all().then(response => {
    commit('SET_MAJORS', response.data)
  })
}