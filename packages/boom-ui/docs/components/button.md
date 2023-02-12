# Button 按钮

## 常用 button 按钮

## 基本使用

关键词信息按钮

```shell
['success', 'error', 'initial', 'warning', 'waiting', 'running', 'invalid'];
```

button 按钮的基本使用

使用type属性传递上述关键字即可得到不同颜色的按钮

```vue
<template>
   <boom-button type="warning">警告按钮</boom-button>
</template>
```

## 禁用状态

按钮不可用状态，通过 *disabled* 属性设置实现

```vue
<template>
   <boom-button disabled>禁用按钮</boom-button>
</template>
```

## 带图标

#### 带图标类型的按钮，通过 leftIcon 或者 rightIcon 属性设置实现并确定 icon 出现的位置

```html
<template>
  <boom-button type="running" leftIcon="cry" >等待按钮</boom-button>
  <boom-button type="running" rightIcon="smile">等待按钮</boom-button>
</template>
```

## 加载状态

正在加载中的状态按钮，通过 *loading* 属性设置实现

```html
<template>
  <boom-button type="success" loading>成功按钮</boom-button>
</template>
```

## 不同大小

不同大小类型的按钮，通过 *size* 属性设置实现

```vue
<template>
  <boom-button type="success" size='large'>成功按钮</boom-button>
</template>
```

## Attributes

| 参数      | 说明                         | 类型    | 可选值                                                       | 默认值 |
| --------- | ---------------------------- | ------- | ------------------------------------------------------------ | ------ |
| type      | 类型                         | string  | succes / error / initial / warning / waiting / running / invalid | —      |
| size      | 尺寸                         | string  | large / medium / small                                       | —      |
| round     | 是否圆角按钮                 | boolean | —                                                            | false  |
| circle    | 是否圆形按钮                 | boolean | —                                                            | false  |
| loading   | 是否加载中状态               | boolean | —                                                            | false  |
| disabled  | 是否禁用状态                 | boolean | —                                                            | false  |
| leftIcon  | 图标按钮，并且icon展示在左侧 | string  | 参考图标库                                                   | —      |
| rightIcon | 图标按钮，并且icon展示在右侧 | string  | 参考图标库                                                   | —      |