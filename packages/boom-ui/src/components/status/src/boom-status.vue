<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useNamespace } from '../../../common/hooks/useNamespace';
import './status.scss';
import { StatusType } from './types';
const props = defineProps({
  type: { type: String as PropType<StatusType>, default: 'initial' },
});
const ns = useNamespace('status');

const typeClass = computed(() => {
  const { type } = props;
  const typeStatus = ['success', 'error', 'initial', 'warning', 'waiting', 'running', 'invalid'];
  let typeClassStr = `${ns.b()} ${ns.em('bg', 'invalid')}`;
  if (typeStatus.includes(type)) {
    typeClassStr = `${ns.b()} ${ns.em('bg', type)}`;
  }
  console.log(typeClassStr);
  return typeClassStr;
});
</script>
<template>
  <span :class="typeClass"><slot /></span>
</template>
