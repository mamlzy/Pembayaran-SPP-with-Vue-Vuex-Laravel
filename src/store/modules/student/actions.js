import Student from '../../../api/Student'

export const getStudents = ({commit}) => {
  Student.all().then(response => {
    commit('SET_STUDENTS', response.data)
  })
}

export const updateStudent = ({commit}, payload) => {
  return Student.update(payload)
}

export const addStudent = ({commit}, payload) => {
  // console.log(payload, 'Data Store')
  return Student.store(payload)
}

export const deleteStudent = ({commit}, payload) => {
  return Student.delete(payload.id)
}