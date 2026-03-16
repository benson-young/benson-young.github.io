<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/">MyPortfolio</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/" active-class="active">首页</router-link></li>
        <li><router-link to="/about" active-class="active">关于我</router-link></li>
        <li><router-link to="/skills" active-class="active">技能</router-link></li>
        <li><router-link to="/projects" active-class="active">项目</router-link></li>
        <li><router-link to="/contact" active-class="active">联系我</router-link></li>
      </ul>
      <!-- 移动端汉堡菜单 -->
      <div class="hamburger" @click="toggleMenu">
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <!-- 移动端菜单 -->
    <div class="mobile-menu" v-show="showMenu">
      <ul>
        <li><router-link to="/" @click="toggleMenu">首页</router-link></li>
        <li><router-link to="/about" @click="toggleMenu">关于我</router-link></li>
        <li><router-link to="/skills" @click="toggleMenu">技能</router-link></li>
        <li><router-link to="/projects" @click="toggleMenu">项目</router-link></li>
        <li><router-link to="/contact" @click="toggleMenu">联系我</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

// 切换移动端菜单
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #fff; // 固定白色背景，不透明
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); // 轻微阴影，更立体
  padding: 15px 0;

  .container {
    width: 100%; // 容器占满宽度，无留白
    max-width: 100%; // 取消最大宽度限制
    padding: 0 20px; // 仅留左右内边距
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    a {
      font-size: 24px;
      font-weight: 700;
      color: #2563eb; // 固定蓝色字体
      text-decoration: none;
      letter-spacing: 1px;
    }
  }

  .nav-links {
    display: flex;
    gap: 30px;
    list-style: none;

    a {
      color: #2563eb; // 固定蓝色字体，绝对看得见
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s;
      padding: 5px 0;
      position: relative;

      // hover下划线效果
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: #2563eb;
        transition: width 0.3s ease;
      }

      &:hover,
      &.active {
        color: #1d4ed8; // 加深蓝色
        &::after {
          width: 100%;
        }
      }
    }
  }

  .hamburger {
    display: none;
    font-size: 24px;
    color: #2563eb; // 蓝色汉堡菜单
    cursor: pointer;
  }

  .mobile-menu {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    z-index: 998;

    ul {
      list-style: none;
      text-align: center;

      li {
        margin: 10px 0;

        a {
          color: #2563eb;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }

  // 响应式
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }
}
</style>