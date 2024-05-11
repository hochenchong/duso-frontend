<template>
  <div class="home">
    <div class="avatar-container">
      <a-avatar :size="64" class="split-line" :src="logo" />
    </div>

    <a-input-search v-model:value="searchParams.text" placeholder="请输入搜索的内容" enter-button="搜索" size="large"
      @search="onSearch" />

    <a-tabs v-model:activeKey="activeKey" @change="onTabChange">
      <a-tab-pane key="post" tab="文章">
        <PostList :post-list="postList" />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片">
        <PictureList />
      </a-tab-pane>
      <a-tab-pane key="user" tab="用户">
        <UserList :user-list="userList" />
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

const postList = ref([]);

myAxios.post("/post/list/page/vo", {}).then((res) => {
  postList.value = res.records;
});


const userList = ref([]);
myAxios.post("/user/list/page/vo", {}).then((res) => {
  userList.value = res.records;
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

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>