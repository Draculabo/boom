<script setup lang="ts">
import Status from './components/status';
import BoomProgress from './components/progress';
import BoomButton from './components/button';
import BoomIcon from './components/icon';
import BoomSwitch from './components/switch';
import BoomAvatar from './components/avatar';
import Layout from './components/layout';
import Header from './components/layout/src/header';
import Aside from './components/layout/src/aside';
import Content from './components/layout/src/content';

// 导入假数据
import { tableData, editData } from './assets/mockData';

import { ref, watch } from 'vue';
let res = ref<boolean>(true);

const typeStatus = ['success', 'error', 'initial', 'warning', 'waiting', 'running', 'invalid'];
const handleClick = () => {
  alert(111);
};

watch(res, (newVal, oldVal) => {
  console.log(newVal);
});
</script>
<template>
  <Status type="warning"> afdfs </Status>
  <boom-progress />
  <!-- 表格组件 -->
  <boom-table :data="tableData" table-bg-color="boom-danger" @submit="editData" />
  <!-- 按钮组件 -->
  <boom-button @click="handleClick"> 禁用按钮 </boom-button>
  <boom-button type="success" left-icon="smile" right-icon="cry" @click="handleClick"> 成功按钮 </boom-button>
  <boom-button type="warning" round> 圆角按钮 </boom-button>
  <boom-button type="error" size="small"> 错误按钮 </boom-button>
  <boom-button type="running" left-icon="cry" circle />
  <boom-button type="running" loading left-icon="cry"> 软件工程 </boom-button>
  <boom-switch v-model:check="res" />
  <boom-avatar />
  <boom-icon />
  <Layout type="header-left-aside">
    <Header type="invert">
      <ul>
        <li>首页</li>
      </ul>
    </Header>
    <Aside>
      <ul>
        <li>第一项</li>
        <li>第二项</li>
      </ul>
    </Aside>
    <Content>TEST</Content>
  </Layout>
</template>
<style>
.boomui-layout.boomui-layout__bg--normal .boomui-content {
  margin: 0% 5%;
}
.boomui-layout.boomui-layout__bg--header .boomui-content,
.boomui-layout.boomui-layout__bg--header .boomui-aside {
  margin-top: 0px;
}
.boomui-layout.boomui-layout__bg--header-right-aside .boomui-aside,
.boomui-layout.boomui-layout__bg--header-right-aside .boomui-content,
.boomui-layout.boomui-layout__bg--header-left-aside .boomui-aside,
.boomui-layout.boomui-layout__bg--header-left-aside .boomui-content {
  margin-top: 0px;
}
.vp-doc li + li {
  margin-top: 0px;
}
.boomui-aside {
  display: inline-flex;
  position: static;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
.boomui-header.boomui-header__bg--outside-shadow {
  margin-bottom: 8px;
}
</style>
