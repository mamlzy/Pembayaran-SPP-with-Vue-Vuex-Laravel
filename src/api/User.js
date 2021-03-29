import { postImage } from '../store/modules/user/actions'
import Api from'./Api'
import Csrf from'./Csrf'

const END_POINT = 'users'

export default {
  async register(form) {
    await Csrf.getCookie()
  
    return Api.post('register', form)
  },
  async login(form) {
    await Csrf.getCookie()
  
    return Api.post('login', form)
  },
  async logout(authData) {
    await Csrf.getCookie()
  
    return Api.post('logout', authData)
  },
  all() {
    return Api.get(END_POINT)
  },
  count() {
    return Api.get(`${END_POINT}/count`)
  },
  store(payload) {
    return Api.post(END_POINT, payload)
  },
  async update(payload) {
    await Csrf.getCookie()

    return Api.put(`${END_POINT}/${payload.id}`, payload.data)
  },
  delete(id) {
    return Api.delete(`${END_POINT}/${id}`)
  },
  destroy() {
    return Api.delete(END_POINT)
  },
  auth() {
    return Api.get('/user')
  },
  loginUser() {
    return Api.get('/getuser')
  },
  postImage(payload) {
    return Api.post(`${END_POINT}/postimage`, payload)
  }
}