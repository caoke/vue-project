import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const MemoryGame = () => import(/* webpackChunkName: MemoryGame */ '../components/MemoryGame.vue')
const Flex = () => import(/* webpackChunkName: MemoryGame */ '../components/Flex.vue')
const Center = () => import(/* webpackChunkName: MemoryGame */ '../components/Center.vue')
const Editor = () => import(/* webpackChunkName: MemoryGame */ '../components/Editor.vue')

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
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
