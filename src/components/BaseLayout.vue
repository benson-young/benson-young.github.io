<template>
  <div class="base-layout">
    <!-- 导航栏 -->
    <NavBar />
    <!-- 内容区域：仅非首页页面使用，首页单独处理 -->
    <main class="main-content">
      <slot />
    </main>
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.base-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px; // 给导航栏留空间

  .main-content {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>