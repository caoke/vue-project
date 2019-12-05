// import Vue from 'vue'
// import Router from 'vue-router'
// import Router from '../myRouter'

// import HelloWorld from '@/components/HelloWorld'

// const MemoryGame = () => import(/* webpackChunkName: MemoryGame */ '../components/MemoryGame.vue')

// const Css = () => import(/* webpackChunkName: Css */ '../components/css/Index.vue')
// const Flex = () => import(/* webpackChunkName: Css */ '../components/css/Flex.vue')
// const Center = () => import(/* webpackChunkName: Css */ '../components/css/Center.vue')
// const Float = () => import(/* webpackChunkName: Css */ '../components/css/Float.vue')
// const Editor = () => import(/* webpackChunkName: Editor */ '../components/Editor.vue')
// const List = () => import(/* webpackChunkName: Editor */ '@/views/list/Index.vue')

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: Flex
//     },
//     {
//       path: '/memory-game',
//       name: 'MemoryGame',
//       component: MemoryGame
//     }
//   ]
// })

import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../myRouter'
import RouterConfig from './modules'
import ToppingRouter from './topping'
// import CommonRouters from './common'
// (new VueRouter({
//   routes: [...ToppingRouter, ...RouterConfig]
// })).init()
Vue.use(VueRouter)

const Router = new VueRouter({
  // mode: 'history', // 需要服务端支持
  // base: '/',
  scrollBehavior: () => ({ y: 0 }),
  // the real routers
  routes: [...ToppingRouter, ...RouterConfig]
})
Router.init()

export default Router
