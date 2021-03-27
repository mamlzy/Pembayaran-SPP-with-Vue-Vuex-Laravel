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
  async logout(form) {
    await Csrf.getCookie()
  
    return Api.post('logout', form)
  },
  all() {
    return Api.get(END_POINT)
  },
  store(payload) {
    return Api.post(END_POINT, payload)
  },
  update(payload) {
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
    return Api.get('/user')
  }
}