<template>
  <div class="home">
    <a-avatar :size="64" class="split-line" :src="logo" />

    <a-input-search v-model:value="searchParams.text" placeholder="请输入搜索的内容" enter-button="搜索" size="large"
      @search="onSearch" />

    <a-tabs v-model:activeKey="activeKey" @change="onTabChange">
      <a-tab-pane key="post" tab="文章">
        <PostList />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片">
        <PictureList />
      </a-tab-pane>
      <a-tab-pane key="user" tab="用户">
        <UserList />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import logo from '../assets/logo.jpg'
import PictureList from '../components/PictureList.vue';
import UserList from '../components/UserList.vue';
import PostList from '../components/PostList.vue';
import { useRoute, useRouter } from 'vue-router';
import myAxios from '../plugins/myAxios'

myAxios.post("/post/list/page/vo", {}).then((res) => {
  console.log(res);
});

const router = useRouter();
const route = useRoute();
const activeKey = route.params.category;

// 默认参数
const initSearchParams = {
  text: "",
  pageSize: 10,
  pageNum: 1,
}

const searchParams = ref(initSearchParams);

// 监听
watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    text: route.query.text,
  } as any;
})

const onSearch = () => {
  router.push({
    query: searchParams.value,
  });
};

const onTabChange = (key: string) => {
  router.push({
    path: `/${key}`,
    query: searchParams.value,
  });
}
</script>

<style scoped>
.split-line {
  border-top: 1px solid;
  margin: 10px 0;
}
</style>