<template>
    <ul :class="pstyle">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import { useNamespace } from "../../common/hooks/useNamespace";
import {ref,reactive, computed, provide} from "vue"
const nsbc = useNamespace('breadcrumb')
const pstyle = computed(()=>[nsbc.b()])
// 定义参数
const props = defineProps({
  // 分割符字符串
  separator: {
    type: String,
    default: '/'
  },
  separatorClass: {
    type: String,
    default: ''
  }
})
// 向子元素进行注入
provide('breadcrumbKey',props)
// console.log(props);
</script>

<style scoped lang="scss">
@import './breadcrumb.scss'
</style>
