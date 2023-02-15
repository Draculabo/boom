# Layout 布局

简单的页面布局效果

## 基础用法

**Layout 的使用方法**

通过type属性决定页面结构样式，然后结合Header、Aside和Content标签来实现页面布局效果。

**Header 的使用方法**

通过type属性决定位于页首的导航栏样式，可以在其中添加图标logo和无序列表等内容实现导航栏效果。

**Aside 的使用方法**

通过type属性决定位于页面两侧的的侧边栏样式，然后通过data传入的一维或二维的对象数组类型数据，实现不同类型的侧边栏效果。

传入的data为响应式对象数组，其内容规范为:

```ts
MenuItem {
  id: number;
  name: string;
  src: string; // 跳转的href
  className: {
    open: boolean; // 为true时具有朝下的箭头图标
    close: boolean; // 为true时具有朝左的箭头图标
    show: boolean; // 显示当前菜单项
    hide: boolean; // 隐藏当前菜单项
  };
  sub_menu: MenuItem[]; // 子菜单项内容
}
```

示例：

```ts
import { reactive } from 'vue';
const menu = reactive([
  {
    id: 0,
    name: '第一项',
    src: 'https://www.bytedance.com/', // 跳转的href
    className: {
      open: false, // 为true时具有朝下的箭头图标
      close: false, // 为true时具有朝左的箭头图标
      show: true, // 显示当前菜单项
      hide: false, // 隐藏当前菜单项
    },
    sub_menu: [], // 子菜单项内容
  },
  {
    id: 1,
    name: '第二项',
    src: '#',
    className: {
      open: false,
      close: false,
      show: true,
      hide: false,
    },
    sub_menu: [],
  },
  {
    id: 2,
    name: '第三项',
    src: '#',
    className: {
      open: false,
      close: true, // 拥有子菜单项，需要设置为true，使箭头图标出现
      show: true,
      hide: false,
    },
    sub_menu: [
      {
        id: 0,
        name: '第一子项',
        src: '#',
        className: {
          open: false,
          close: false,
          show: false,
          hide: true,
        },
        sub_menu: [],
      },
      {
        id: 1,
        name: '第二子项',
        src: '#',
        className: {
          open: false,
          close: false,
          show: false,
          hide: true,
        },
        sub_menu: [],
      },
      {
        id: 2,
        name: '第三子项',
        src: '#',
        className: {
          open: false,
          close: false,
          show: false,
          hide: true,
        },
        sub_menu: [],
      },
    ],
  },
]);

```

**Content 的使用方法**

通过type属性决定位于页面中央的内容容器，然后在其中添加标题、文字等内容实现正文显示效果。

## Layout样式

### 默认布局

页面仅有正文内容，导航栏和侧边栏不可见，Layout的type属性为*normal*或省略type属性。

:::demo 

```vue
<template>
  <Layout type="normal">

  </Layout>
</template>
```
