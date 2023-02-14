# Space 间隔

常用于多个组件，或多个元素之间的间距设置，避免紧贴在一起

## 基本使用

Space 的基本使用


:::demo
```vue
<template>
    <boom-space>
    <boom-button>默认按钮</boom-button>
    <boom-button type="success">成功按钮</boom-button>
    <boom-button type="error">错误按钮</boom-button>
    <boom-button type="warning">警告按钮</boom-button>
    <boom-button type="waiting">等待按钮</boom-button>
    <boom-button type="running">运行按钮</boom-button>
    <boom-button type="invalid">无效按钮</boom-button>
    <boom-button>默认按钮</boom-button>
    <boom-button type="success">成功按钮</boom-button>
    <boom-button type="error">错误按钮</boom-button>
    <boom-button type="warning">警告按钮</boom-button>
    <boom-button type="waiting">等待按钮</boom-button>
    <boom-button type="running">运行按钮</boom-button>
    <boom-button type="invalid">无效按钮</boom-button>
    </boom-space>
 </template>
 
```
:::

## 纵向布局

使用 *direction* 来控制布局的方式
:::demo
```vue
<template>
    <boom-space direction="vertical">
    <boom-button>默认按钮</boom-button>
    <boom-button type="success">成功按钮</boom-button>
    <boom-button type="error">错误按钮</boom-button>
    <boom-button type="warning">警告按钮</boom-button>
    <boom-button type="waiting">等待按钮</boom-button>
    <boom-button type="running">运行按钮</boom-button>
    <boom-button type="invalid">无效按钮</boom-button>
    <boom-button>默认按钮</boom-button>
    <boom-button type="success">成功按钮</boom-button>
    <boom-button type="error">错误按钮</boom-button>
    <boom-button type="warning">警告按钮</boom-button>
    <boom-button type="waiting">等待按钮</boom-button>
    <boom-button type="running">运行按钮</boom-button>
    <boom-button type="invalid">无效按钮</boom-button>
    </boom-space>
 </template>
```
:::

## 自定义 Size

通过调整 size 的值来控制间距的大小
:::demo
```vue
<template>
    <boom-space :size="20">
    <boom-button>默认按钮</boom-button>
    <boom-button type="success">成功按钮</boom-button>
    <boom-button type="error">错误按钮</boom-button>
    <boom-button type="warning">警告按钮</boom-button>
    <boom-button type="waiting">等待按钮</boom-button>
    <boom-button type="running">运行按钮</boom-button>
    <boom-button type="invalid">无效按钮</boom-button>
    <boom-button>默认按钮</boom-button>
    <boom-button type="success">成功按钮</boom-button>
    <boom-button type="error">错误按钮</boom-button>
    <boom-button type="warning">警告按钮</boom-button>
    <boom-button type="waiting">等待按钮</boom-button>
    <boom-button type="running">运行按钮</boom-button>
    <boom-button type="invalid">无效按钮</boom-button>
    </boom-space>
 </template>
```
:::


## Attributes

| 参数      | 说明                         | 类型    | 可选值                                                       | 默认值 |
| --------- | ---------------------------- | ------- | ------------------------------------------------------------ | ------ |
| direction      | 布局方向                         | string  | horizontal / vertical  | horizontal      |
| size      | 间隔                         | number  |  -------| 0      |
