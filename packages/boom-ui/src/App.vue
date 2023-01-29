<script setup lang="ts">
import Layout, { Header } from './components/layout';
import status from './components/status';
</script>
<template>
  <Layout type="no-aside">
    <Header type="invert">
      <img src="" alt="logo" />
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul>
    </Header>
  </Layout>
  <status type="success"> adfad </status>
</template>
