<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ProgressType } from './types';
const props = defineProps({
  type: { type: String as PropType<ProgressType>, default: 'initial' },
});
</script>
<template>
  暂时什么都没有捏
</template>
