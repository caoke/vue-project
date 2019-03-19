export default [
  {
    path: '/editor',
    name: '表单',
    noDropdown: true,
    sort: 0,
    icon: 'el-icon-edit',
    redirect: '/game',
    component: () => import('@/views/frame/Frame.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/Editor.vue')
      }
    ]
  }
]
