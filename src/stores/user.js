import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    // 个人信息（可自定义）
    userInfo: {
      name: '全栈开发工程师',
      desc: '专注于用户体验与交互设计，精通Vue3/React生态',
      avatar: 'https://picsum.photos/id/1005/200/200'
    },
    // 项目列表（模拟数据）
    projects: [
      {
        id: 1,
        title: '企业级后台管理系统',
        desc: '基于Vue3 + Element Plus开发，包含权限管理、数据可视化、表单校验等核心功能',
        cover: 'https://picsum.photos/id/237/600/400',
        techs: ['Vue3', 'Element Plus', 'ECharts', 'Pinia'],
        detail: '负责前端架构搭建、权限模块开发、性能优化，页面加载速度提升40%+'
      },
      {
        id: 2,
        title: '移动端H5商城',
        desc: '响应式H5商城，支持商品列表、购物车、地址管理、支付对接等功能',
        cover: 'https://picsum.photos/id/239/600/400',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Axios', 'Swiper'],
        detail: '负责移动端适配、商品模块开发、接口联调，兼容95%以上移动端浏览器'
      },
      {
        id: 3,
        title: '静态博客（GitHub Pages）',
        desc: '基于VitePress开发的静态博客，支持文章分类、标签、搜索',
        cover: 'https://picsum.photos/id/240/600/400',
        techs: ['VitePress', 'Markdown', 'GitHub Pages', 'SEO优化'],
        detail: '独立完成博客搭建、主题定制、自动化部署，累计访问量10000+'
      }
    ],
    // 技能列表
    skills: [
      { name: 'HTML5 & CSS3', progress: 95, desc: '语义化标签、Flex/Grid、动画、响应式、BEM规范' },
      { name: 'JavaScript (ES6+)', progress: 90, desc: '异步编程、闭包、原型链、模块化、TS基础' },
      { name: 'Vue3 + Pinia', progress: 85, desc: 'Composition API、组件封装、状态管理、路由' },
      { name: '工程化 & 优化', progress: 80, desc: 'Vite/Webpack、懒加载、CDN、首屏优化、缓存策略' }
    ]
  }),
  // 计算属性
  getters: {
    // 过滤出Vue相关项目
    vueProjects: (state) => {
      return state.projects.filter(item => item.techs.includes('Vue3'))
    }
  },
  // 方法
  actions: {
    // 模拟更新个人信息
    updateUserInfo(newInfo) {
      this.userInfo = { ...this.userInfo, ...newInfo }
    },
    // 模拟添加项目
    addProject(project) {
      this.projects.push(project)
    }
  }
})