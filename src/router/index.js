import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Major from '../views/Major/Major.vue'
import Student from '../views/Student/Student.vue'
import Classrooms from '../views/Classroom/Classroom.vue'
import Tuition from '../views/Tuition/Tuition.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/majors',
    name: 'Major',
    component: Major
  },
  {
    path: '/students',
    name: 'Student',
    component: Student
  },
  {
    path: '/classrooms',
    name: 'Classrooms',
    component: Classrooms
  },
  {
    path: '/tuitions',
    name: 'Tuition',
    component: Tuition
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
