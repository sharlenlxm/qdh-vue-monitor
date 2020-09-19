// eslint-disable-next-line


/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [

  {
    path: '/',
    redirect: 'ddlogin',

  },
  {
    path: '/ddlogin',
    name: 'ddlogin',
    component: () => import('@/views/ddlogin'),
    meta: {
      title: '登录',
      keepAlive: false,
      permission: ['user']
    }
  },
  {
    path: '/ddindex',
    name: 'ddindex',
    component: () => import('@/views/compontent/index/index'),
    meta: {
      title: '首页',
      keepAlive: false,
      permission: ['user']
    }
  },
  {
    path: '/Manage',
    name: 'Manage',
    component: () => import('@/views/compontent/Manage/Manage'),
    meta: {
      title: '巡检管理',
      keepAlive: false,
      permission: ['user']
    }
  },
  {
    path: '/zhnshib',
    name: 'zhnshib',
    component: () => import('@/views/compontent/zhnshib/zhnshib'),
    meta: {
      title: '智能识别',
      keepAlive: false,
      permission: ['user']
    }
  },
  {
    path: '/xtonggli',
    name: 'xtonggli',
    component: () => import('@/views/compontent/xtonggli/xtonggli'),
    meta: {
      title: '系统管理',
      keepAlive: false,
      permission: ['user']
    }
  },
  {
    path: '/station',
    name: 'station',
    component: () => import('@/views/compontent/station'),
    meta: {
      title: 'station主页',
      keepAlive: false,
      permission: ['user']
    }
  },
  
  {
    path: '/404',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/500',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/exception/500')
  },
]
