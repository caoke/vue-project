export default [
  {
    path: '/memory-game',
    name: '记忆游戏',
    noDropdown: true,
    sort: 0,
    icon: 'el-icon-goods',
    redirect: '/',
    component: () => import('@/views/frame/Frame.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/MemoryGame.vue')
      }
    ]
  }
]
