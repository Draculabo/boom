<script setup lang="ts">
import { CSSProperties,computed, ref, onMounted} from 'vue';
import { useNamespace } from '../../../common/hooks/useNamespace';
import './avatar.scss';
import { avatarProps } from './avatar-types';

const props = defineProps(avatarProps)
const {
    src,
    size,
    bg_color,
    type,
    color,
} = props
enum S{
    large = '54',
    default = '42',
    small = '32',
}
const ns = useNamespace('avatar');
const avatarClass = computed(() => {
    let typeAvatar = ['default', 'large', 'small']
    if(type==='icon' || (type==='img' && !checkImgExists())){
        return typeAvatar.includes(String(size)) 
        ? `${ns.b()} ${ns.e('icon')} ${ns.m(String(size))}`
        :`${ns.b()} ${ns.e('icon')}`
    }
    else if(type==='img' && checkImgExists()) {
        return typeAvatar.includes(String(size)) 
        ? `${ns.b()} ${ns.e('img')} ${ns.m(String(size))}`
        : `${ns.b()} ${ns.e('img')}`
    }
    else if(type==='string') {
        return typeAvatar.includes(String(size)) 
        ? `${ns.b()} ${ns.e('string')} ${ns.m(String(size))}`
        : `${ns.b()} ${ns.e('string')}`
    }
})
const avatarStyle = computed((): CSSProperties => {
    if(typeof size === 'number') {
        return type==='icon' || 'string'
        ? {width: `${size}px`,
           height: `${size}px`,
          "background-color": `${bg_color}`,
          "color":`${color}`}
        :{width: `${size}px`,
           height: `${size}px`}
    }else{
        return type==='icon' || 'string'
        ? {"background-color": `${bg_color}`,
          "color":`${color}`}
          :{}
    }
})
//判断图片是否存在
function checkImgExists() {
    try {
        var ImgObj = new Image()!
      ImgObj.src = src!
      if(ImgObj.width > 0 && ImgObj.height > 0) {
        return true
      }else {
        return false
      }
    } catch {
        return;
    }
      
}
//根据文字宽度缩放大小
const element = ref();
if(type==='string'){
    onMounted(() => {
    const avatar_size = typeof size==='number' ? size : Number(S[size])
    const Stylescale = avatar_size - 8 < element.value.offsetWidth
        ? (avatar_size - 7) / element.value.offsetWidth
        : 1
    element.value.style.transform= `scale(${Stylescale}) translateX(-50%)`
})
}
</script>

<template>
    <div :class="avatarClass" :style="avatarStyle" >
        <img
        v-if="type === 'img' && checkImgExists()"
        :src=src
        :size=size
        >
        <svg v-if="type === 'icon'|| (type==='img' && !checkImgExists())" viewBox="64 64 64 64">
            <circle cx="95" cy="90" r="10" stroke="white" fill="none" stroke-width="3"></circle>
            <path d="M 80 113 Q 95 87, 110 113" stroke="white" fill="none" stroke-width="3"/>
        </svg>
        <span v-if="type==='string'" ref="element">
                <slot />
        </span>
    </div>
</template>