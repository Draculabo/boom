<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useNamespace } from '../../../common/hooks/useNamespace';
import './layout.scss';
import { AsideType } from './layout-types';
const props = defineProps({
  type: { type: String as PropType<AsideType>, default: 'one-level' },
});
const ns = useNamespace('aside');

const typeClass = computed(() => {
  const { type } = props;
  const typeLyaout = ['one-level', 'two-level', 'foldable', 'hide-able'];
  let typeClassStr = `${ns.b()} ${ns.em('bg', 'invalid')}`;
  if (typeLyaout.includes(type)) {
    typeClassStr = `${ns.b()} ${ns.em('bg', type)}`;
  }
  console.log(typeClassStr);
  return typeClassStr;
});
</script>
<template>
  <ul :class="typeClass">
    <slot />
  </ul>
</template>
