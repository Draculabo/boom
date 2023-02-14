# Avatar 头像

用户或事物的象征，支持图片、图标、字符展示

## 基本使用

avatar 头像的基本使用

头像有`large`、 `default`、 `small`三种尺寸，支持自定义尺寸。


:::demo
```vue
<template>
    <boom-avatar :size=62></boom-avatar>
    <boom-avatar size="large"></boom-avatar>
    <boom-avatar></boom-avatar>
    <boom-avatar size="small"></boom-avatar>
</template>
```
:::

## 头像类型

支持图片、图标、字符类型，图标和字符可以自定义背景色
:::demo
```vue
<template>
    <boom-avatar src="../logo.svg" type="img"></boom-avatar>
    <boom-avatar type="icon" bg_color="#AD6508"></boom-avatar>
    <boom-avatar type="string" bg_color="#78FBFB" color="#DC8A20">U</boom-avatar>
</template>
```
:::

## API

| 参数      | 说明         | 类型           | 可选值                                    | 默认值 |
| ---------| -------------| ---------------| -----------------------------------------| ------ |
| type     | 类型          | string         | `string`  `icon`  `img`                   | icon   |
| size     | 尺寸          | string/number  | `number`  `default`  `large`  `small`     | default|
| bg_color | 背景颜色      | string         | —                                         |—  |
| color    | 字体颜色      | string         | —                                         |—  |
| src      | 图片资源地址  | string         | —                                         |—   |

:::tip Tips:  组件会检测传入的src链接是否有效，如无效则会自动使用默认图标