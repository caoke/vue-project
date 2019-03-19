export default [
  {
    path: '/list',
    name: '列表',
    noDropdown: true,
    sort: 0,
    icon: 'el-icon-document',
    redirect: '/',
    component: () => import('@/views/frame/Frame.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/list/Index.vue')
      }
    ]
  }
]
