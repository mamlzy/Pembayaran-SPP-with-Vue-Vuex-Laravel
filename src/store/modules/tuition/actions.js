import Tuition from '../../../api/Tuition'

export const getTuitions = ({commit}) => {
  Tuition.all().then(response => {
    commit('SET_TUITIONS', response.data)
  })
}

export const updateTuition = ({commit}, payload) => {
  // console.log(payload.data, 'Data Update')
  return Tuition.update(payload)
}

export const addTuition = ({commit}, payload) => {
  // console.log(payload, 'Data Store')
  return Tuition.store(payload)
}

export const deleteTuition = ({commit}, payload) => {
  // console.log(payload.id)
  return Tuition.delete(payload.id)
}