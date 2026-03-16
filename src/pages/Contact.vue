<template>
  <BaseLayout>
    <div class="contact-page">
      <h2 class="title animate__animated animate__fadeInDown">联系我</h2>
      <div class="form-box animate__animated animate__fadeInUp">
        <el-form label-width="80px">
          <el-form-item label="姓名">
            <el-input placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="留言">
            <el-input type="textarea" rows="5" placeholder="请输入留言" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
</script>

<style lang="scss" scoped>
.contact-page {
  padding: 60px 20px;
  max-width: 700px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
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

  .form-box {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>