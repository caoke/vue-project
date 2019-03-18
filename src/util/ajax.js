import axios from 'axios'

const get = (url, params) => {
  axios.get(url, {
    params: params
  })
    .then((response) => {

    })
}
const post = (url, params, successCb) => {
  axios.post(url, params).then(response => {
    if (typeof successCb === 'function') {
      return successCb(response.body)
    }
  })
}
const ajax = {
  get,
  post
}
export default ajax
