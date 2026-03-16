<template>
  <div class="skill-item animate__animated animate__fadeInUp">
    <div class="skill-header">
      <span>{{ name }}</span>
      <span>{{ progress }}%</span>
    </div>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
    <p class="tip">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  progress: Number,
  desc: String,
});
</script>

<style lang="scss" scoped>
.skill-item {
  margin-bottom: 25px;

  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .progress-bar {
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;

    .progress {
      height: 100%;
      background: linear-gradient(to right, #2563eb, #4f46e5);
      transition: width 1s ease;
    }
  }

  .tip {
    font-size: 13px;
    color: #64748b;
    margin-top: 5px;
  }
}
</style>