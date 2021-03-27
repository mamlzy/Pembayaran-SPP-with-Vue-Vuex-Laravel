import Student from '../../../api/Student'
import Classroom from '../../../api/Classroom'

export const countStudents = ({commit}) => {
  Student.count().then(response => {
    commit('SET_STUDENTS_COUNT', response.data)
  })
}

export const countClassrooms = ({commit}) => {
  Classroom.count().then(response => {
    commit('SET_CLASS_COUNT', response.data)
  })
}

export const countClassPerMajor = ({commit}) => {
  Classroom.countClassPerMajor().then(response => {
    commit('SET_CLASS_PER_MAJOR_COUNT', response.data)
  })
}