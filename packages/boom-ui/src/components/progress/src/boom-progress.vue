<script setup lang="ts">
import { useNamespace } from '../../../common/hooks/useNamespace';
import { progressProps } from './progress-types';
import type { ISvgData } from './progress-types';
import { CSSProperties, reactive, ref, toRefs, watch } from 'vue';
import './progress.scss';

function middleNum(num: number, min = 0, max = 100): number {
  let middle = 0;
  middle = Math.min(num, max);
  middle = Math.max(middle, min);
  return middle;
}
/* Progress attributes */
const props = defineProps(progressProps);
const {
  barBgColor,
  duration,
  dynamic,
  height,
  percentage,
  percentageTextColor,
  showText,
  status,
  strokeLinecap,
  strokeWidth,
  textPosition,
  type,
  percentageText,
} = toRefs(props);
const normalPercentage = ref(0),
  normalStrokeWidth = ref(0);
normalPercentage.value = middleNum(percentage.value);
normalStrokeWidth.value = middleNum(strokeWidth.value);
const ns = useNamespace('progress');
const isOutside = textPosition.value === 'outside';
const isInsideBg = textPosition.value === 'insideBg';
const data: ISvgData = reactive({
  pathString: '',
  trailPath: null,
  strokePath: null,
});
const setCircleProgress = () => {
  if (type.value === 'line') {
    return;
  }
  const radius = 50 - normalStrokeWidth.value / 2;
  const beginPositionY = -radius;
  const endPositionY = radius * -2;

  data.pathString = `M 50,50 m 0,${beginPositionY}
      a ${radius},${radius} 0 1 1 0,${-endPositionY}
      a ${radius},${radius} 0 1 1 0,${endPositionY}
      `;

  const len = Math.PI * 2 * radius;

  data.trailPath = {
    stroke: 'var(--boom-dividing-line, #dfe1e6)',
    strokeDasharray: `${len}px ${len}px`,
    strokeDashoffset: `0`,
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
  };

  data.strokePath = {
    stroke: barBgColor,
    strokeDasharray: `${(normalPercentage.value / 100) * len}px ${len}px`,
    strokeDashoffset: `0`,
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
  };
};
setCircleProgress();
watch(
  [
    barBgColor,
    duration,
    dynamic,
    height,
    percentage,
    percentageTextColor,
    showText,
    status,
    strokeLinecap,
    strokeWidth,
    textPosition,
    type,
    percentageText,
  ],
  () => {
    normalPercentage.value = middleNum(percentage.value);
    normalStrokeWidth.value = middleNum(strokeWidth?.value, 0, 50);
    setCircleProgress();
  }
);
</script>

<template>
  <div v-if="type === 'line'" :class="ns.b()">
    <div :class="ns.e('content')">
      <div :class="ns.e('line')" :style="{ height, borderRadius: height }">
        <div
          :class="[ns.e('bar'), textPosition, { [ns.em('bar', 'dynamic')]: dynamic, [ns.em('bar', status)]: status }]"
          :style="{
            height: height,
            borderRadius: height,
            width: `${normalPercentage}%`,
            animationDuration: `${duration}s`,
          }"
        >
          <span
            v-if="!isOutside && !isInsideBg && showText"
            :style="{
              lineHeight: height,
              color: percentageTextColor,
            }"
          >
            {{ percentageText ? percentageText : normalPercentage + '%' }}
          </span>
        </div>
        <span
          v-if="isInsideBg && showText"
          :style="{
            lineHeight: height,
            color: percentageTextColor,
          }"
        >
          {{ percentageText ? percentageText : normalPercentage + '%' }}
        </span>
      </div>
      <span
        v-if="isOutside && showText"
        :style="{
          lineHeight: height,
          color: percentageTextColor,
        }"
        >{{ percentageText ? percentageText : normalPercentage + '%' }}
      </span>
    </div>
  </div>
  <div v-else :class="ns.b()">
    <div :class="ns.e('circle')">
      <svg :class="ns.e('circle')" viewBox="0 0 100 100">
        <path fill-opacity="0" :stroke-width="normalStrokeWidth" :style="(data.trailPath as CSSProperties)" :d="data.pathString" />
        <path
          :d="data.pathString"
          :stroke-linecap="strokeLinecap"
          fill-opacity="0"
          :stroke="barBgColor"
          :stroke-width="normalPercentage ? normalStrokeWidth : 0"
          :style="(data.strokePath as CSSProperties)"
        />
      </svg>
      <slot />
      <span v-if="!$slots.default && showText" :class="ns.e('circle-text')" :style="{ color: percentageTextColor, userSelect: 'none' }">
        {{ normalPercentage }}%
      </span>
    </div>
  </div>
</template>
