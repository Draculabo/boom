<template>
  <div class="switch-box">
    <input id="switchButton" type="checkbox" class="switch" :checked="check" :disabled="disabled" @input="checkChange" />
    <label for="switchButton" />
  </div>
</template>

<script setup lang="ts">
import './switch.scss';

type sw = {
  check: boolean;
  disabled?: boolean;
};

const props = withDefaults(defineProps<sw>(), {
  check: false,
  disabled: false,
});

// 双向传值
let emit = defineEmits(['update:check']);
const checkChange = () => {
  emit('update:check', !props.check);
};
</script>
