<template>
  <BaseLayout>
    <div class="projects-page">
      <h2 class="page-title animate__animated animate__fadeInDown">我的项目作品</h2>
      <div class="projects-container">
        <ProjectCard 
          v-for="project in userStore.projects" 
          :key="project.id" 
          :project="project"
        />
      </div>
      <!-- 模拟添加项目按钮（演示Pinia） -->
      <el-button type="primary" @click="addDemoProject" class="add-btn">
        新增演示项目
      </el-button>
    </div>
  </BaseLayout>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import BaseLayout from '@/components/BaseLayout.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const userStore = useUserStore()

// 模拟添加项目
const addDemoProject = () => {
  userStore.addProject({
    id: Date.now(),
    title: '演示项目（Vue3 + TS）',
    desc: '基于Vue3 + TypeScript开发的演示项目，用于面试展示',
    cover: 'https://picsum.photos/id/241/600/400',
    techs: ['Vue3', 'TypeScript', 'Vite', 'Element Plus'],
    detail: '独立完成前端架构搭建、组件封装、类型定义，代码覆盖率90%+'
  })
}
</script>

<style lang="scss" scoped>
.projects-page {
  padding: 40px 0;

  .page-title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 40px;
    color: #1e293b;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: #2563eb;
      border-radius: 2px;
    }
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }

  .add-btn {
    display: block;
    margin: 0 auto;
  }
}
</style>