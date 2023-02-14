# Link 链接
## 文字超链接
## 基本使用

基础的文字链接用法


使用type属性  `initial` 、`success` 、 `error` 、 `warning` 、 `waiting` 、 `running` 、 `invalid`。传递上述关键字值即可得到不同颜色的文字链接


:::demo
```vue
<template>
    <boom-link href="https://cn.vuejs.org/" target="_blank">默认链接</boom-link>
    <boom-link type="success">成功链接</boom-link>
    <boom-link type="error">错误链接</boom-link>
    <boom-link type="warning">警告链接</boom-link>
    <boom-link type="waiting">等待链接</boom-link>
    <boom-link type="running">运行链接</boom-link>
    <boom-link type="invalid">无效链接</boom-link>
 </template>
 
```
:::

## 禁用状态

链接不可用状态，通过 *disabled* 属性设置实现
:::demo
```vue
<template>
    <boom-link disabled>默认链接</boom-link>
    <boom-link type="success" disabled>成功链接</boom-link>
    <boom-link type="error" disabled>错误链接</boom-link>
    <boom-link type="warning" disabled>警告链接</boom-link>
    <boom-link type="waiting" disabled>等待链接</boom-link>
    <boom-link type="running" disabled>运行链接</boom-link>
    <boom-link type="invalid" disabled>无效链接</boom-link>
 </template>
```
:::

## 图标链接

带图标类型的链接，通过 *leftIcon* 或者 *rightIcon* 属性设置实现并确定 icon 出现的位置
:::demo
```vue
<template>
  <boom-link type="success" leftIcon="smile" >微笑链接</boom-link>
  <boom-link type="error" rightIcon="cry">哭泣链接</boom-link>
</template>
```
:::


## 下划线

鼠标移动是否有下划线类型的链接，通过 *underline* 属性设置实现
:::demo
```vue
<template>
  <boom-link type="success" >有下划线</boom-link>
  <boom-link type="success" :underline="false">无下划线</boom-link>
</template>
```
:::
## Attributes

| 参数      | 说明                         | 类型    | 可选值                                                       | 默认值 |
| --------- | ---------------------------- | ------- | ------------------------------------------------------------ | ------ |
| type      | 类型                         | string  | initial / succes / error /  warning / waiting / running / invalid | initial      |
| disabled  | 是否禁用状态                 | boolean | —                                                            | false  |
| underline  | 是否有下划线                | boolean | —                                                            | true  |
| href  | 跳转链接               | string | —                                                            | —  |
| leftIcon  | 图标链接，并且icon展示在左侧 | string  | 参考图标库                                                   | —      |
| rightIcon | 图标链接，并且icon展示在右侧 | string  | 参考图标库                                                   | —      |
