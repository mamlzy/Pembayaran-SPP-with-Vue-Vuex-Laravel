import Major from '../../../api/Major'

export const getMajors = ({commit}) => {
  Major.all().then(response => {
    commit('SET_MAJORS', response.data)
  })
}

export const updateMajor = ({commit}, payload) => {
  // console.log(payload.data, 'Data Update')
  return Major.update(payload)
}

export const addMajor = ({commit}, payload) => {
  // console.log(payload, 'Data Store')
  return Major.store(payload)
}

export const deleteMajor = ({commit}, payload) => {
  // console.log(payload.id)
  return Major.delete(payload.id)
}