import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const MemoryGame = () => import(/* webpackChunkName: MemoryGame */ '../components/MemoryGame.vue')
const Flex = () => import(/* webpackChunkName: MemoryGame */ '../components/Flex.vue')
const Center = () => import(/* webpackChunkName: MemoryGame */ '../components/Center.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/memory-game',
      name: 'MemoryGame',
      component: MemoryGame
    },
    {
      path: '/flex',
      name: 'Flex',
      component: Flex
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    }
  ]
})
