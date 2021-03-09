import Tuition from '../../../api/Tuition'

export const getTuitions = ({commit}) => {
  Tuition.all().then(response => {
    commit('SET_TUITIONS', response.data)
  })
}