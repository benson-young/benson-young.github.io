<template>
  <div class="project-card animate__animated animate__fadeInUp">
    <div class="card-img">
      <img :src="project.cover" alt="" />
    </div>
    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.desc }}</p>
      <div class="tags">
        <span v-for="(t, i) in project.techs" :key="i" class="tag">
          {{ t }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-6px);
  }

  .card-img {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-body {
    padding: 20px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #1e293b;
    }

    p {
      color: #64748b;
      font-size: 14px;
      margin-bottom: 15px;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    .tag {
      background: #eff6ff;
      color: #2563eb;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
    }
  }
}
</style>