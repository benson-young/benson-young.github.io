<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 前端作品集 | 用于面试展示</p>
      <div class="social">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="#">掘金</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #1e293b;
  color: white;
  padding: 30px 0;
  text-align: center;
  margin-top: 50px;

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .social {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;

    a {
      color: #94a3b8;
      &:hover {
        color: #3b82f6;
      }
    }
  }
}
</style>