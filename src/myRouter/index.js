class HistoryRoute {
  constructor () {
    this.current = null
  }
}
class vueRouter {
  mode = ''
  constructor (options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routersMap = this.createMap(this.routes)
    this.history = new HistoryRoute()
  }
  init () {
    if (!location.hash) location.hash = '/'
    window.addEventListener('load', () => {
      console.log(location.hash.slice(1))
      this.history.current = location.hash.slice(1)
      console.log(this.history.current)
    })
    window.addEventListener('hashchange', () => {
      this.history.current = location.hash.slice(1)
    })
  }
  createMap (routes) {
    return routes.reduce((memo, current) => {
      memo[current.path] = current.component
      return memo
    }, {})
  }
}
vueRouter.install = function (Vue) {
  if (vueRouter.install.installed) return
  vueRouter.install.installed = true
  Vue.mixin({
    beforeCreate () {
      if (this.$options && this.$options.router) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, 'current', this._router.history)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
    }
  })
  Vue.component('router-view', {
    render (h) {
      let current = this._self._routerRoot._router.history.current
      let routersMap = this._self._routerRoot._router.routersMap
      console.log(routersMap[current])
      return h(routersMap[current])
    }

  })
}

export default vueRouter
