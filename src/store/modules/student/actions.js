import Student from '../../../api/Student'

export const getStudents = ({commit}) => {
  Student.all().then(response => {
    commit('SET_STUDENTS', response.data)
  })
}