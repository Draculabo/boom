<template>
  <div class="boomui-space" :class="wholeClass" :style="size">
      <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '../../common/hooks/useNamespace';
import { computed, ref,} from 'vue'
const ns = useNamespace('space');
// refer to attributes to toggle class
const props = defineProps({
  direction: {
    type: String,
    default: 'horizontal',
    validator(value: string) {
            return ['horizontal', 'vertical'].indexOf(value) > -1;
        }
  },
  size: Number
})
const size = computed(()=>{
  return `gap : ${props.size}px`
})
const wholeClass = computed(()=>{
  const styles: any[] = [];
  if (props.direction === 'vertical') {
    styles.push(ns.e('vertical'));
    return styles
  }
  return styles
})
</script>

<style lang="scss" scoped>
@import './space.scss'
</style>
