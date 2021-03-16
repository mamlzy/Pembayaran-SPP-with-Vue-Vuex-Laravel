import Api from'./Api'

const END_POINT = 'students'

export default {
  all() {
    return Api.get(END_POINT)
  },
  store(payload) {
    console.log(payload, 'Data Store')
    return Api.post(END_POINT, payload)
  },
  update(payload) {
    console.log(payload.data, 'Data Update')
    return Api.put(`${END_POINT}/${payload.id}`, payload.data)
  },
  delete(id) {
    return Api.delete(`${END_POINT}/${id}`)
  },
  destroy() {
    return Api.delete(END_POINT)
  }
}