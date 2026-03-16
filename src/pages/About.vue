<template>
  <BaseLayout>
    <div class="about-page">
      <h2 class="title animate__animated animate__fadeInDown">关于我</h2>
      <div class="content">
        <div class="left animate__animated animate__fadeInLeft">
          <img src="https://picsum.photos/id/1005/400/400" alt="头像" />
        </div>
        <div class="right animate__animated animate__fadeInRight">
          <h3>前端开发工程师 | 面试求职</h3>
          <p>
            熟悉 HTML5、CSS3、JavaScript 核心语法，掌握 Vue3 全家桶，了解前端工程化、打包优化、跨端适配。
          </p>
          <p>
            具备独立开发页面、组件封装、接口联调能力，注重用户体验与代码规范。
          </p>
          <p>
            希望入职贵公司，在实际项目中持续成长，为团队创造价值。
          </p>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
</script>

<style lang="scss" scoped>
.about-page {
  padding: 60px 0;

  .title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 50px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: #2563eb;
      border-radius: 2px;
    }
  }

  .content {
    display: flex;
    gap: 40px;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;

    .left {
      flex: 1;
      img {
        width: 100%;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }

    .right {
      flex: 1.5;

      h3 {
        font-size: 22px;
        margin-bottom: 20px;
        color: #1e293b;
      }

      p {
        margin-bottom: 15px;
        color: #475569;
        line-height: 1.8;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
    }
  }
}
</style>