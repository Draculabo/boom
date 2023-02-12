<template>
    <!-- disabled为标签的原生属性来控制按钮的禁用状态 -->
    <button :class="bbg" :disabled="disabled">
        <span>
            <i class="iconfont icon-loading" v-if="loading"></i>
            <i :class="iconClass" v-if="leftIcon && !loading"></i>
            <span :style="slotStyle" v-if="slotDefault">
                <slot></slot>
            </span>
            <i :class="iconClass" v-if="rightIcon"></i>
        </span>
    </button>
</template>

<script setup lang="ts">
import { useNamespace } from "@/common/hooks/useNamespace";
import { ref, reactive, computed, useSlots, onMounted } from "vue"

const ns = useNamespace('button');
const props = defineProps({
    // 背景颜色
    type: {
        type: String,
        default: 'initial',
        validator(value: string) {
            return ['success', 'error', 'initial', 'warning', 'waiting', 'running', 'invalid'].indexOf(value) > -1;
        }
    },
    // 禁用参数
    disabled: Boolean,
    // 圆角属性
    round: Boolean,
    // 圆圈按钮
    circle: Boolean,
    // 按钮尺寸
    size: {
        type: String,
        default: "default",
        validator(value: string) {
            return ['default', 'large', 'medium', 'small'].indexOf(value) > -1;
        }
    },
    // 左图标
    leftIcon: {
        type: String,
        default: ""
    },
    // 右图标
    rightIcon: {
        type: String,
        default: ""
    },
    // 是否需要loading
    loading: Boolean
})
const bbg = computed(() => {
    return [
        ns.b(),
        ns.e(props.type),
        ns.e(props.disabled ? 'disabled' : ''),
        ns.e(props.round ? 'round' : ''),
        ns.e(props.circle ? 'circle' : ''),
        ns.e(props.size),
    ]
})
// 图标样式
const iconClass = computed(() => {
    return [
        'iconfont',
        props.leftIcon ? `icon-${props.leftIcon} left-icon` : '',
        props.rightIcon ? `icon-${props.rightIcon} right-icon` : ''
    ]
})
//判断<slot/>是否有传值
const slotDefault = ref(!!useSlots().default);
// 根据来增加样式图标
const slotStyle = computed(() => {
  return {
    'margin-left': props.leftIcon ? '4px' : '0',
    'margin-right': props.rightIcon ? '4px' : '0'
  }
})
</script>

<style scoped lang="scss">
@import './button.scss';
</style>
