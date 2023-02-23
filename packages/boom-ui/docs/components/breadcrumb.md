# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基本使用

:::demo
```vue
<template>
    <boom-button>默认按钮</boom-button>
    <boom-button type="success">成功按钮</boom-button>
    <boom-button type="error">错误按钮</boom-button>
    <boom-button type="warning">警告按钮</boom-button>
    <boom-button type="waiting">等待按钮</boom-button>
    <boom-button type="running">运行按钮</boom-button>
    <boom-button type="invalid">无效按钮</boom-button>
 </template>
 
```
:::

## 禁用状态

按钮不可用状态，通过 *disabled* 属性设置实现
:::demo
```vue
<template>
    <boom-button disabled>默认按钮</boom-button>
    <boom-button type="success" disabled>成功按钮</boom-button>
    <boom-button type="error" disabled>错误按钮</boom-button>
    <boom-button type="warning" disabled>警告按钮</boom-button>
    <boom-button type="waiting" disabled>等待按钮</boom-button>
    <boom-button type="running" disabled>运行按钮</boom-button>
    <boom-button type="invalid" disabled>无效按钮</boom-button>
 </template>
```
:::

## 图标按钮

带图标类型的按钮，通过 *leftIcon* 或者 *rightIcon* 属性设置实现并确定 icon 出现的位置
:::demo
```vue
<template>
  <boom-button type="success" leftIcon="smile" >微笑按钮</boom-button>
  <boom-button type="error" rightIcon="cry">哭泣按钮</boom-button>
</template>
```
:::

## 圆角按钮

带圆角按钮，通过 *round* 属性设置实现按钮的圆角效果
:::demo
```vue
<template>
  <boom-button type="success" leftIcon="smile" round>微笑按钮</boom-button>
  <boom-button type="error" rightIcon="cry" round>哭泣按钮</boom-button>
</template>
```
:::

## 圆形按钮

圆形按钮，通过 *circle* 属性设置实现圆形按钮
:::demo
```vue
<template>
  <boom-button leftIcon="smile" circle></boom-button>
  <boom-button leftIcon="cry" circle></boom-button>
</template>
```
:::

## 加载状态

正在加载中的状态按钮，通过 *loading* 属性设置实现
:::demo
```vue
<template>
  <boom-button type="waiting" loading>加载中</boom-button>
</template>
```
:::

## 按钮尺寸

不同尺寸类型的按钮，通过 *size* 属性设置实现
:::demo
```vue
<template>
  <boom-button type="success" size='large'>大按钮</boom-button>
  <boom-button type="success">默认按钮</boom-button>
  <boom-button type="success" size='medium'>中按钮</boom-button>
  <boom-button type="success" size='small'>小按钮</boom-button>
</template>
```
:::
## Attributes

| 参数      | 说明                         | 类型    | 可选值                                                       | 默认值 |
| --------- | ---------------------------- | ------- | ------------------------------------------------------------ | ------ |
| type      | 类型                         | string  | initial / succes / error /  warning / waiting / running / invalid | initial      |
| size      | 尺寸                         | string  | default / large / medium / small                                       | default      |
| round     | 是否圆角按钮                 | boolean | —                                                            | false  |
| circle    | 是否圆形按钮                 | boolean | —                                                            | false  |
| loading   | 是否加载中状态               | boolean | —                                                            | false  |
| disabled  | 是否禁用状态                 | boolean | —                                                            | false  |
| leftIcon  | 图标按钮，并且icon展示在左侧 | string  | 参考图标库                                                   | —      |
| rightIcon | 图标按钮，并且icon展示在右侧 | string  | 参考图标库                                                   | —      |
