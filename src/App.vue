<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
// 路由出口，啥也不用写
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
</style>