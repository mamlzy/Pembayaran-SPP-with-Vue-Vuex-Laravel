import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Profile from '../views/Profile/Profile.vue'
import Summary from '../views/Summary/Summary.vue'
import Account from '../views/Admin/Account.vue'
import Major from '../views/Major/Major.vue'
import Student from '../views/Student/Student.vue'
import Classrooms from '../views/Classroom/Classroom.vue'
import Tuition from '../views/Tuition/Tuition.vue'
import Payment from '../views/Payment/Payment.vue'
import History from '../views/History/History.vue'

Vue.use(VueRouter)

// const isAdmin = async (to, from, next) => {
//   await store.dispatch['user/getLogin']
//   if (store.state['user/role'] == 'admin') {
//     return next();
//   }
//   console.log('gak ada role bro', store.getters['user/checkRole'])
//   return next('/');
// };



// async function checkRole() {
//   await store.dispatch['user/getAuth']
//   return store.getters['user/checkRole']
// }

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
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { isAuthenticated: true }
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
    // meta: { isAdmin: true },
  },
  {
    path: '/majors',
    name: 'Major',
    component: Major,
    meta: { isAuthenticated: true },
    // meta: { isAdmin: true },
  },
  {
    path: '/students',
    name: 'Student',
    component: Student,
    meta: { isAuthenticated: true },
    // meta: { isAdmin: true },
  },
  {
    path: '/classrooms',
    name: 'Classrooms',
    component: Classrooms,
    meta: { isAuthenticated: true },
    // meta: { isAdmin: true },
  },
  {
    path: '/tuitions',
    name: 'Tuition',
    component: Tuition,
    meta: { isAuthenticated: true },
    // meta: { isAdmin: true },
  },
  {
    path: '/payments',
    name: 'Payment',
    component: Payment,
    meta: { isAuthenticated: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
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

async function getRole() {
  await store.dispatch['user/getLogin']
  // return store.getters['user/getRole']
  // if (store.state['user/role'] != 'admin') {
  //   return next();
  // }
}

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.isAdmin)) {
//       next("/")
//   } else {
//       next()
//   }
// })

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
  else if (to.matched.some(record => record.meta.isAdmin)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch['user/getLogin']
    // .then((resp) => {
    //   console.log(resp)
      if (store.getters['user/getRole'] != 'admin') {
        console.log('Role ====>', store.getters['user/getRole'])
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      } else {
        console.log('Role ====>', store.state['user/role'])
        next()
      }

    // }).catch((err) => {
    //   console.log(err)
    // })
  } 
  else {
    next() // make sure to always call next()!
  }
})

export default router
