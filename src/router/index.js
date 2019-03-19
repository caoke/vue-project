// import Vue from 'vue'
// import Router from 'vue-router'
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
//       component: HelloWorld
//     },
//     {
//       path: '/memory-game',
//       name: 'MemoryGame',
//       component: MemoryGame
//     },
//     {
//       path: '/css',
//       name: 'Css',
//       component: Css,
//       children: [
//         {
//           path: 'flex',
//           name: Flex,
//           component: Flex
//         },
//         {
//           path: 'center',
//           name: 'Center',
//           component: Center
//         },
//         {
//           path: 'float',
//           name: 'Float',
//           component: Float
//         }
//       ]
//     },
//     {
//       path: '/editor',
//       name: 'Editor',
//       component: Editor
//     },
//     {
//       path: '/list',
//       name: 'List',
//       component: List
//     }
//   ]
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules'
import ToppingRouter from './topping'
// import CommonRouters from './common'
Vue.use(VueRouter)
export default new VueRouter({
  // mode: 'history', // 需要服务端支持
  // base: '/',
  scrollBehavior: () => ({ y: 0 }),
  // the real routers
  routes: [...ToppingRouter, ...RouterConfig]
})
