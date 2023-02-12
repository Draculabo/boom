<template>
  <table :class="ns.b()">
    <thead>
      <tr>
        <th v-for="info of tHead" :key="info.key">{{ info.text }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in tBody" :key="item.id">
        <td v-for="(value,key) in item" :key="key" @click="showEditInput($event,key,index)">{{ value }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script setup lang="ts">
import BoomInput from '@/components/input/BoomInput.vue';
// 导入命名空间
import { useNamespace } from '../../common/hooks/useNamespace';
// 导入样式文件
import './table.scss';
import { ref, reactive, toRefs, createApp, App } from "vue"
import { tableProps } from './tableProps'
const props = defineProps(tableProps)
const { tHead, tBody,tableBgColor } = toRefs(props.data)
const ns = useNamespace('table')
let editInputApp: App<Element> | null = null;
const setValue = (value:string)=>{

}
const showEditInput = (event:any,key:number,index:number)=>{
  // editInputApp && removeEditInputApp(editInputApp);
  const target = event.target;
  const oFrag = document.createDocumentFragment();
  editInputApp = createApp(BoomInput,{value:target.textContent,setValue});
  if (editInputApp) {
    // editInputApp.mount(oFrag);
    target.appendChild(editInputApp);
  }
}
</script>

<style scoped lang="scss">

</style>
