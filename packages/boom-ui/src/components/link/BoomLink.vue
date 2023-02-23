<template>
    <a :class="lbg" :href="href">
        <i  :class="iconClass" v-if="leftIcon"></i>
        <span :style="spanStyle">
            <slot />
        </span>
        <i :class="iconClass" v-if="rightIcon"></i>
    </a>
</template>

<script setup lang="ts">
import { useNamespace } from "../../common/hooks/useNamespace";
import { ref, reactive, computed, useSlots, onMounted } from "vue"
const ns = useNamespace('link');
const props = defineProps({
    // original props
    href: String,
    // font color
    type: {
        type: String,
        default: 'initial',
        validator(value: string) {
            return ['success', 'error', 'initial', 'warning', 'waiting', 'running', 'invalid'].indexOf(value) > -1;
        }
    },
    // isValidate
    disabled: {
        type: Boolean,
        default: false
    },
    // underlined
    underline: {
        type: Boolean,
        default: true
    },
    // icon
    leftIcon: String,
    rightIcon: String
})


const spanStyle = computed(() => {
    return {
        'margin-left': props.leftIcon ? '3px' : '',
        'margin-right': props.rightIcon ? '3px' : ''
    }
})
// 图标样式
const iconClass = computed(() => {
    return [
        'iconfont',
        props.leftIcon ? `icon-${props.leftIcon} left-icon` : '',
        props.rightIcon ? `icon-${props.rightIcon} right-icon` : ''
    ]
})

const lbg = computed(() => {
    return [
        ns.b(),
        ns.e(props.type),
        ns.e(props.disabled ? 'disabled' : ''),
        ns.e(props.underline ? '' : 'nounderline'),
    ]
})
</script>

<style lang="scss" scoped>
@import './link.scss';
</style>
