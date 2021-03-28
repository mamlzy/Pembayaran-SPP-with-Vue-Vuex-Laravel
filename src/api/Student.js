import Api from'./Api'

const END_POINT = 'students'

export default {
  all() {
    return Api.get(END_POINT)
  },
  count() {
    return Api.get(`${END_POINT}/count`)
  },
  store(payload) {
    console.log(payload, 'Data Store')
    return Api.post(END_POINT, payload)
  },
  update(payload) {
    console.log(payload.data, 'Data Update')
    return Api.put(`${END_POINT}/${payload.id}`, payload.data)
  },
  delete(payload) {
    return Api.put(`${END_POINT}/delete/${payload.id}`, payload.data)
  },
  destroy() {
    return Api.delete(END_POINT)
  }
}