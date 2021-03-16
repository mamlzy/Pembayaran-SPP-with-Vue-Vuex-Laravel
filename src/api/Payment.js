import Api from'./Api'

const END_POINT = 'payments'

export default {
  all() {
    return Api.get(END_POINT)
  },
  store(data) {
    return Api.post(END_POINT, data)
  },
  delete(id) {
    return Api.delete(`${END_POINT}/${id}`)
  },
  destroy() {
    return Api.delete(END_POINT)
  }
}