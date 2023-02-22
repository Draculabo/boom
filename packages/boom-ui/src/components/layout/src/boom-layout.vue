<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useNamespace } from '../../../common/hooks/useNamespace';
import './layout.scss';
import { LayoutType } from './layout-types';
const props = defineProps({
  type: { type: String as PropType<LayoutType>, default: 'no-aside' },
});
const ns = useNamespace('layout');

const typeClass = computed(() => {
  const { type } = props;
  const typeLyaout = ['normal', 'left-aside', 'right-aside', 'header', 'header-left-aside', 'header-right-aside'];
  let typeClassStr = `${ns.b()} ${ns.em('bg', 'invalid')}`;
  if (typeLyaout.includes(type)) {
    typeClassStr = `${ns.b()} ${ns.em('bg', type)}`;
  }
  return typeClassStr;
});
</script>
<template>
  <div :class="typeClass">
    <slot />
  </div>
</template>
