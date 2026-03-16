import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载（优化首屏加载）
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { title: '首页 | 前端作品集' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: { title: '关于我 | 前端作品集' }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/pages/Skills.vue'),
    meta: { title: '我的技能 | 前端作品集' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/pages/Projects.vue'),
    meta: { title: '项目作品 | 前端作品集' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
    meta: { title: '联系我 | 前端作品集' }
  },
  // 404路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 路由切换平滑滚动
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫：修改页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router