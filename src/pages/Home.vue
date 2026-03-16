<template>
  <div class="hero"> <!-- 去掉BaseLayout，避免布局嵌套导致留白 -->
    <!-- 粒子背景装饰 -->
    <div class="particles" ref="particles"></div>
    <div class="hero-content">
      <div class="title-wrap animate__animated animate__fadeInUp">
        <h1 class="main-title">前端开发工程师</h1>
        <p class="sub-title">专注于高质量前端开发 & 用户体验优化</p>
      </div>
      
      <!-- 新增：个人标签，丰富内容 -->
      <div class="tag-group animate__animated animate__fadeInUp animate__delay-300ms">
        <span class="tag">Vue3</span>
        <span class="tag">Vite</span>
        <span class="tag">Element Plus</span>
        <span class="tag">响应式设计</span>
        <span class="tag">工程化</span>
      </div>

      <!-- 按钮组 -->
      <div class="btn-group animate__animated animate__fadeInUp animate__delay-500ms">
        <el-button 
          type="primary" 
          size="large" 
          @click="router.push('/projects')" 
          class="primary-btn"
        >
          查看我的项目
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
        <el-button 
          size="large" 
          @click="router.push('/contact')" 
          class="secondary-btn"
        >
          立即联系我
        </el-button>
      </div>

      <!-- 新增：简短介绍，让首页更完整 -->
      <div class="intro animate__animated animate__fadeInUp animate__delay-700ms">
        <p>3年前端开发经验 | 独立完成10+企业级项目 | 注重代码规范与性能优化</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const particles = ref(null)

// 生成随机粒子背景（全屏）
const createParticles = () => {
  if (!particles.value) return
  particles.value.innerHTML = ''
  const count = window.innerWidth > 768 ? 60 : 30

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div')
    particle.classList.add('particle')
    particle.style.left = `${Math.random() * 100}vw`
    particle.style.top = `${Math.random() * 100}vh`
    particle.style.width = `${Math.random() * 6 + 2}px`
    particle.style.height = particle.style.width
    particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.1})`
    particle.style.animation = `float ${Math.random() * 12 + 8}s linear infinite`
    particle.style.animationDelay = `${Math.random() * 6}s`
    particles.value.appendChild(particle)
  }
}

const handleResize = () => {
  createParticles()
}

onMounted(() => {
  createParticles()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
// 核心：首页全屏无留白
.hero {
  height: 100vh;
  width: 100vw; // 强制占满屏幕宽度
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0; // 去掉所有内边距，避免留白
  margin: 0; // 去掉外边距

  // 粒子背景全屏
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
  }

  @keyframes float {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-10vh) rotate(360deg);
      opacity: 0;
    }
  }

  // 内容容器：居中，最大宽度限制但左右无留白
  .hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 900px;
    padding: 0 20px; // 仅移动端留内边距，无左右留白
  }

  // 标题区域
  .title-wrap {
    margin-bottom: 30px;

    .main-title {
      font-size: clamp(2.8rem, 7vw, 4.8rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 15px;
      background: linear-gradient(90deg, #fff, #e0e7ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .sub-title {
      font-size: clamp(1.2rem, 3vw, 1.6rem);
      color: #f0f4ff;
      font-weight: 400;
    }
  }

  // 标签组
  .tag-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 40px;

    .tag {
      padding: 8px 20px;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50px;
      font-size: 14px;
      backdrop-filter: blur(5px);
    }
  }

  // 按钮组
  .btn-group {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .primary-btn {
      padding: 14px 36px;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 600;
      background: #fff;
      color: #2563eb;
      border: none;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        background: #f8fafc;
        color: #1d4ed8;
      }
    }

    .secondary-btn {
      padding: 14px 36px;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 600;
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  // 简短介绍
  .intro {
    font-size: 14px;
    color: #e0e7ff;
    opacity: 0.9;
  }

  // 响应式适配
  @media (max-width: 768px) {
    .btn-group {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .primary-btn, .secondary-btn {
      width: 90%;
    }

    .tag-group {
      padding: 0 10px;
    }
  }
}
</style>