<template>
  <div class="home">
    <a-avatar :size="64" class="split-line" type="image/svg+xml" src="/vite.svg" />

    <a-input-search v-model:value="searchText" placeholder="请输入搜索的内容" enter-button="搜索" size="large"
      @search="onSearch" />

    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchText = ref("");
const activeKey = ref("1")

const onSearch = (value: string) => {
  alert(value);
}
</script>

<style scoped>
.split-line {
  border-top: 1px solid #ccc; /* 分割线的颜色和宽度 */
  margin: 10px 0; /* 上下外边距 */
}
</style>