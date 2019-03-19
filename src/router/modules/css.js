export default [
  {
    path: '/css',
    name: 'css',
    noDropdown: false,
    sort: 0,
    icon: 'el-icon-picture',
    redirect: '/',
    component: () => import('@/views/frame/Frame.vue'),
    children: [
      {
        name: 'flex',
        path: 'flex',
        noDropdown: false,
        icon: 'el-icon-picture',
        component: () => import('@/components/css/Flex.vue'),
        children: [
          {
            name: 'grandson',
            path: 'grandson',
            component: () => import('@/components/css/Float.vue')
          }
        ]
      },
      {
        name: 'center',
        path: 'center',
        noDropdown: true,
        icon: 'el-icon-picture',
        component: () => import('@/components/css/Center.vue')
      },
      {
        name: 'float',
        path: 'float',
        noDropdown: true,
        icon: 'el-icon-picture',
        component: () => import('@/components/css/Float.vue')
      }
    ]
  }
]
