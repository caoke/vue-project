/**
 * @description GET 请求
 * @param {object} vm vue的实例
 * @param {string} url  请求地址
 * @param {object} option 请求参数
 * @param {function} callback  成功回调函数
 * @param {object} config 请求设置
 */
const getRequest = (vm, url, option, callback, config) => {
  config = config || {}
  let newObj = Object.assign({
    params: option
  }, config)
  return vm.$http.get(url, newObj).then((res) => {
    if (res.body.code === 0) {
      if (typeof callback === 'function') {
        return callback(res.body)
      } else {
        throw new Error('callback should be a function')
      }
    } else {
      // vm.$message.error(res.body.message)
      vm.$message.error({
        message: res.body.message,
        duration: 3000
      })
    }
  }, (err) => {
    vm.$message.error(err.statusText)
  })
}

/**
 * @description post 请求
 * @param {object} vm vue的实例
 * @param {string} url  请求地址
 * @param {object} option 请求参数
 * @param {function} callback  成功回调函数
 * @param {object} config 请求设置
 */
const postRequest = (vm, url, option, callback, isLoading, config) => {
  let loading = ''
  if (isLoading) {
    loading = vm.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      fullscreen: false,
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  config = config || {}
  return vm.$http.post(url, option, config).then((res) => {
    if (res.body.code === 0) {
      if (isLoading) loading.close()
      if (typeof callback === 'function') {
        return callback(res.body)
      } else {
        throw new Error('callback should be a function')
      }
    } else {
      if (isLoading) loading.close()
      vm.$message.error(res.body.message)
      // vm.$notify.error({
      //     message: res.body.message,
      //     title: `接口${url.substring(url.lastIndexOf('/') + 1)}`,
      //     duration: 0
      // })
    }
  }, (err) => {
    if (isLoading) loading.close()
    vm.$message.error(err.statusText)
  })
}
const utils = {
  getRequest,
  postRequest
}
export default utils
