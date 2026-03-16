<template>
  <BaseLayout>
    <div class="skills-page">
      <h2 class="title animate__animated animate__fadeInDown">我的技能</h2>
      <div class="list">
        <SkillProgress
          v-for="(s, i) in skills"
          :key="i"
          :name="s.name"
          :progress="s.progress"
          :desc="s.desc"
        />
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import BaseLayout from "@/components/BaseLayout.vue";
import SkillProgress from "@/components/SkillProgress.vue";

const userStore = useUserStore();
const skills = userStore.skills;
</script>

<style lang="scss" scoped>
.skills-page {
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;

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
}
</style>