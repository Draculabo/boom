import { ref, reactive, defineProps } from 'vue';
export type StatusType = 'success' | 'error' | 'initial' | 'warning' | 'waiting' | 'running' | 'invalid';
// 导出组件需要定义的参数
export const tableProps = {
  data: {
    type: Object,
    default: () => ({
      tHead: [],
      tbody: [],
    }),
  },
  tableBgColor:{
    type:String,
    default:'boom-success'
  },
  tableTextColor:{
    type:String,
    default:''
  }
};
// export const emit = defineEmits(['submit']);