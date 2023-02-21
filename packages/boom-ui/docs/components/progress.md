# Progress 进度条

用于展示操作进度，告知用户当前状态和预期

## 直线进度条

*Progress* 组件需设置 `percentage` 属性，表示进度条对应的百分比。 该属性默认为`30`，并且必须在 `0-100` 的范围内。 你可以通过设置 `status` 来设置进度条状态。还可以通过 `height` 属性来设置其高度。
:::demo

```vue
<template>
  <div style="border: 1px solid #dcdfe6">
    <boom-progress type='line' status="success" />
    <boom-progress type='line' height='5px' status="warning" />
    <boom-progress type='line' height='20px' status="danger" />
  </div>
</template>
```

:::

## 环形进度条

*Progress* 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `strokeWidth` 属性来设置其大小。
:::demo

```vue
<template>
  <div style="border: 1px solid #dcdfe6; overflow: hidden; width: 100%;">
    <boom-progress style="float: left" percentage='0' />
    <boom-progress style="float: left" percentage='25' />
    <boom-progress style="float: left" percentage='50' />
    <boom-progress style="float: left" percentage='75' strokeWidth='15' />
    <boom-progress style="float: left" percentage='100' strokeWidth='5' />
  </div>
</template>
```

:::

## 文字标识显示

*Progress* 组件可通过 `show-text` 属性来指定是否显示文字标识。
:::demo

```vue
<template>
  <div style="border: 1px solid #dcdfe6">
    <boom-progress type="line" percentage='30' />
    <boom-progress type="line" :show-text="false" percentage='30' />
  </div>
</template>
```

:::

## 文字标识位置

*Progress* 组件可通过 `text-position` 属性来指定文字标识位置。
:::demo

```vue
<template>
  <div style="border: 1px solid #dcdfe6">
  <div style="border: 1px solid #dcdfe6">
    <boom-progress type="line" text-position='inside' percentage='30' />
    <boom-progress type="line" percentage='30' />
  </div>
  </div>
</template>
```

:::

## 动态进度条

*Progress* 组件可通过 `dynamic` 属性来使得进度条处于动态，当且仅当在`type='line'`情况下生效，可通过`duration`属性控制速度。
:::demo

```vue
<template>
  <div style="border: 1px solid #dcdfe6">
    <boom-progress type="line" :dynamic="true" />
    <boom-progress type="line" :dynamic="true" duration="5" />
  </div>
</template>
```

:::

## API

| 参数         | 说明                  | 类型             | 可选值                                    | 默认值  |
| ------------ | ------------         | --------------  | -----------------------------------------| ------ |
| type         | 类型                  | string          | `line`  `circle`                         |`circle` |
| height       | 线性进度条的高度       | string          | —                                        | `15px`  |
| strokeWidth  | 圆形进度条宽度         | number          | —                                        | `10`   |
| showText     | 是否显示文字           | boolean         | `true` `false`                           | true   |
| percentage   | 进度条百分比           | number          | —                                        | `30`   |
| textPosition | 进度条文字内容位置     | string           |`insideLeft` `inside` `insideRight` `outside` `insideBg`| `outside` |
| status       | 进度条状态           | string           | `success` `warning` `danger` `none`       | `none` |
| dynamic      | 是否动态              | boolean          | `true` `false`                           |`false` |
| duration     | 动态进度条速度         | number           | —                                        | `2.5` |
| barBgColor   | 进度条颜色            | string           | —                                        |`#5170ff`|
| percentageTextColor | 进度条文字颜色  | string          | —                                        | `#000`  |
| strokeLinecap  | 圆形进度条两端的形状  | string         | `butt` `round` `square`                   | `round` |
| percentageText | 进度条文字内容       | string           | —                                        |—       |
