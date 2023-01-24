import type { PropType, Ref } from 'vue';
type ProgressStatusType = 'success' | 'warning' | 'error' | 'none';

interface ISvgPath {
  stroke: Ref<string> | string;
  strokeDasharray: string;
  strokeDashoffset: string;
  transition: string;
}

export interface ISvgData {
  pathString: string;
  trailPath: ISvgPath | null;
  strokePath: ISvgPath | null;
}

export const progressProps = {
  // 线性进度条的高度
  height: {
    type: String,
    default: '20px',
  },
  // 圆形进度条宽度
  strokeWidth: {
    type: Number,
    default: 10,
  },
  // 进度条类型 'circle' | 'line'
  type: {
    type: String,
    default: 'circle',
  },
  // 是否显示进度条文字内容
  showText: {
    type: Boolean,
    default: true,
  },
  // 进度条百分比
  percentage: {
    type: Number,
    default: 20,
  },
  // 进度条文字内容位置 'insideLeft' | 'inside' | 'insideRight' | 'outside' | 'insideBg'
  textPosition: {
    type: String,
    default: 'inside',
  },
  // 进度条状态 'success' | 'warning' | 'error' | 'none'
  status: {
    type: String as PropType<ProgressStatusType>,
    default: 'none',
  },
  // 是否动态进度条(仅限 type='line' 时使用)
  dynamic: {
    type: Boolean,
    default: false,
  },
  // 动态进度条速度控制，数值越大，速度越慢(仅限 type='line' 时使用)
  duration: {
    type: Number,
    default: 2.5,
  },
  // 进度条颜色
  barBgColor: {
    type: String,
    default: '#5170ff',
  },
  // 进度条文字颜色
  percentageTextColor: {
    type: String,
    default: '#000',
  },
  // 圆形进度条两端的形状 butt/round/square，round、square 比 butt 两端长一截
  strokeLinecap: {
    type: String,
    default: 'round',
  },
  // 进度条文字内容
  percentageText: {
    type: String,
    default: '',
  },
};
