<template>
  <input type="text" :class="ns.b()" :value="value" @input="onInput" @blur="onBlur" @click="onClick">
</template>

<script setup lang="ts">
import { useNamespace } from "@/common/hooks/useNamespace";
import {ref,reactive} from "vue"
const ns = useNamespace('input')
const props = defineProps({
    value:{
        type:String,
        default:''
    },
    setValue:{
        type:Function,
        default:()=>{}
    }
})
const inputValue = ref<string>(props.value)
const onInput = (e:any)=>{
    inputValue.value = e.target.value.trim();
}
const onClick = (e:any)=>{
    e.stopPropagation();
}
const onBlur = ()=>{
    props.setValue(inputValue.value);
}

</script>

<style scoped>

</style>
