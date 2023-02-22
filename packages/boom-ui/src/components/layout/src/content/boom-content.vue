<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useNamespace } from '../../../../common/hooks/useNamespace';
import './content.scss';
import { ContentType } from './content-types';
const props = defineProps({
  type: { type: String as PropType<ContentType>, default: 'center' },
});
const ns = useNamespace('content');

const typeClass = computed(() => {
  const { type } = props;
  const typeLyaout = ['center', 'left', 'right'];
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
