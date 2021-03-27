import Classroom from '../../../api/Classroom'

export const getClassrooms = ({commit}) => {
  Classroom.all().then(response => {
    commit('SET_CLASSROOMS', response.data)
  })
}

export const updateClassroom = ({commit}, payload) => {
  // console.log(payload.data, 'Data Update')
  return Classroom.update(payload)
}

export const addClassroom = ({commit}, payload) => {
  // console.log(payload, 'Data Store')
  return Classroom.store(payload)
}

export const deleteClassroom = ({commit}, payload) => {
  // console.log(payload.id)
  return Classroom.delete(payload.id)
}