<script setup lang="ts">

</script>

<template>
  <router-link to="/">Home</router-link>
  <span class="link-separator"></span>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>

<style>
.link-separator {
  margin: 0 8px; /* 设置间隔大小，可以根据需要进行调整 */
}
</style>