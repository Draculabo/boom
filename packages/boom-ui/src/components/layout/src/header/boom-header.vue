<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useNamespace } from '../../../../common/hooks/useNamespace';
import './header.scss';
import { HeaderType } from './header-types';
const props = defineProps({
  type: { type: String as PropType<HeaderType>, default: 'normal' },
});
const ns = useNamespace('header');

const typeClass = computed(() => {
  const { type } = props;
  const typeLyaout = ['normal', 'outside-shadow', 'inside-shadow', 'border-bottom', 'invert'];
  let typeClassStr = `${ns.b()} ${ns.em('bg', 'invalid')}`;
  if (typeLyaout.includes(type)) {
    typeClassStr = `${ns.b()} ${ns.em('bg', type)}`;
  }
  console.log(typeClassStr);
  return typeClassStr;
});
</script>
<template>
  <div :class="typeClass">
    <slot />
  </div>
</template>
