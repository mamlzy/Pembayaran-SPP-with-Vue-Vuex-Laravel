import Api from'./Api'

const END_POINT = 'pay'

export default {
  pay(payload) {
    return Api.get(END_POINT, payload)
  },
  getToken(payload) {
    return Api.post('gettoken', payload)
  },
  changeStatus(payload) {
    return Api.post('changestatus', payload)
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
  }
}