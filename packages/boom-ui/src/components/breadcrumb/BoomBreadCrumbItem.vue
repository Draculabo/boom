<template>
    <!-- <li class="m-breadcrumb-item">
    <a class="m-breadcrumb-item__link" :href="to||" @click="handleClick" v-if="to">
      <slot></slot>
    </a>
    <span class="m-breadcrumb-item__span" v-else>
      <slot/>
    </span>
    <span>
      <i class="m-breadcrumb-item__separator iconfont" :class="separatorClass" v-if="separatorClass"></i>
      <span class="m-breadcrumb-item__separator" v-else> {{ separator }} </span>
    </span>
  </li> -->
</template>

<script setup lang="ts">
import {ref,reactive, inject, triggerRef} from "vue"
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  to: {
    type: [String, Object],
  }
})
const breadcrumbKey = ref(inject('breadcrumbKey'))
const handleClick = (e:any) => {
  e.preventDefault();
  router.push(props.to!)
}
</script>

<style scoped>
@import './breadcrumb.scss'
</style>
