<script setup lang="ts">
import Status from './components/status';
import BoomProgress from './components/progress';
import BoomButton from './components/button';
import BoomIcon from './components/icon';
import BoomLink from './components/link';
// 导入假数据
import {tableData,editData} from './assets/mockData'
const typeStatus = ['success', 'error', 'initial', 'warning', 'waiting', 'running', 'invalid'];
const handleClick=()=>{alert(111)}
</script>
<template>
  <Status type="warning"> afdfs </Status>
  <boom-progress />
  <!-- 表格组件 -->
  <boom-table :data="tableData" tableBgColor="boom-danger"  @submit="editData"></boom-table>
  <!-- 按钮组件 -->
  <!-- <boom-button @click="handleClick">禁用按钮</boom-button>
  <boom-button type="success" @click="handleClick" leftIcon="smile" rightIcon="cry">成功按钮</boom-button>
  <boom-button type="warning" round>圆角按钮</boom-button>
  <boom-button type="error"  size="small" >错误按钮</boom-button>
  <boom-button type="running" leftIcon="cry" circle></boom-button>
  <boom-button type="running" loading leftIcon="cry">软件工程</boom-button> -->
  <!-- <boom-icon></boom-icon> -->
  <boom-link type="success" disabled href="https://wangibook.github.io/my-baseui" target="_blank">我是Link</boom-link>
  <boom-link type="running" :underline="false">我是Link</boom-link>
  <boom-link type="warning" href="https://wangibook.github.io/my-baseui" target="_blank">我是Link</boom-link>
  <boom-link type="success" leftIcon="smile">图标1</boom-link>
  <boom-link type="error" rightIcon="cry">图标2</boom-link>

</template>
