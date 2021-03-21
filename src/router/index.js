import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Home from '../views/Home.vue'
import Summary from '../views/Summary/Summary.vue'
import Account from '../views/Admin/Account.vue'
import Major from '../views/Major/Major.vue'
import Student from '../views/Student/Student.vue'
import Classrooms from '../views/Classroom/Classroom.vue'
import Tuition from '../views/Tuition/Tuition.vue'
import Payment from '../views/Payment/Payment.vue'

Vue.use(VueRouter)

// const isAdmin = (to, from, next) => {
//   // store.dispatch['user/getAuth']
//   if (store.getters['user/checkRole'] == 'admin') {
//     return next();
//   }
//   return next('/');
// };

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true  }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestOnly: true }
  },
  {
    path: '/',
    name: 'Summary',
    component: Summary,
    meta: { isAuthenticated: true }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { isAuthenticated: true },
    // beforeEnter: isAdmin
  },
  {
    path: '/majors',
    name: 'Major',
    component: Major,
    meta: { isAuthenticated: true },
    // beforeEnter: isAdmin
  },
  {
    path: '/students',
    name: 'Student',
    component: Student,
    meta: { isAuthenticated: true },
    // beforeEnter: isAdmin
  },
  {
    path: '/classrooms',
    name: 'Classrooms',
    component: Classrooms,
    meta: { isAuthenticated: true },
    // beforeEnter: isAdmin
  },
  {
    path: '/tuitions',
    name: 'Tuition',
    component: Tuition,
    meta: { isAuthenticated: true },
    // beforeEnter: isAdmin
  },
  {
    path: '/payments',
    name: 'Payment',
    component: Payment,
    meta: { isAuthenticated: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function isLoggedIn() {
  return localStorage.getItem('auth')
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isAuthenticated)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})

export default router
