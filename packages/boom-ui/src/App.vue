<script setup lang="ts">
import Layout, { Header, Aside, Content } from './components/layout';
import { reactive } from 'vue';
const menu = reactive([
  {
    id: 0,
    name: '第一项',
    src: 'https://www.bytedance.com/', // 跳转的href
    className: {
      open: false, // 为true时具有朝下的箭头图标
      close: false, // 为true时具有朝左的箭头图标
      show: true, // 显示当前菜单项
      hide: false, // 隐藏当前菜单项
    },
    sub_menu: [], // 子菜单项内容
  },
  {
    id: 1,
    name: '第二项',
    src: '#',
    className: {
      open: false,
      close: false,
      show: true,
      hide: false,
    },
    sub_menu: [],
  },
  {
    id: 2,
    name: '第三项',
    src: '#',
    className: {
      open: false,
      close: true, // 拥有子菜单项，需要设置为true，使箭头图标出现
      show: true,
      hide: false,
    },
    sub_menu: [
      {
        id: 0,
        name: '第一子项',
        src: '#',
        className: {
          open: false,
          close: false,
          show: false,
          hide: true,
        },
        sub_menu: [],
      },
      {
        id: 1,
        name: '第二子项',
        src: '#',
        className: {
          open: false,
          close: false,
          show: false,
          hide: true,
        },
        sub_menu: [],
      },
      {
        id: 2,
        name: '第三子项',
        src: '#',
        className: {
          open: false,
          close: false,
          show: false,
          hide: true,
        },
        sub_menu: [],
      },
    ],
  },
]);
</script>
<template>
  <Layout type="header-left-aside">
    <Header type="invert">
      <!-- <img src="" alt="logo" />
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul> -->
      导航栏
    </Header>
    <Aside type="foldable" :data="menu">
      侧边栏
      <!-- <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul> -->
    </Aside>
    <Content type="center">
      <!-- <h1>TEST TITLE</h1>
      <p>
        test width test width test width test width test width test width test width test width test width test width test width test width
        test width test width test width test width test width
      </p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p>
      <p>test height</p> -->
      默认布局
    </Content>
  </Layout>
</template>
