import Classroom from '../../../api/Classroom'

export const getClassrooms = ({commit}) => {
  Classroom.all().then(response => {
    commit('SET_CLASSROOMS', response.data)
  })
}