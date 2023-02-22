# Layout 布局

简单的页面布局效果，示例中的css样式仅供演示使用。

## 基础用法

**Layout 的使用方法**

使用Layout标签进行创建，通过type属性决定页面结构样式，然后结合Header、Aside和Content标签来实现页面布局效果。

**Header 的使用方法**

使用Header标签进行创建，通过type属性决定位于页首的导航栏样式，可以在其中添加图标logo和无序列表等内容实现导航栏效果。

**Aside 的使用方法**

使用Aside标签进行创建，通过type属性决定位于页面两侧的的侧边栏样式，然后通过data属性传入的一维或二维的对象数组类型数据，实现不同类型的侧边栏效果。


**Content 的使用方法**

使用Content标签进行创建，示例中使用CContent标签是因为演示时Content标签会出现重名现象，通过type属性决定位于页面中央的内容容器，然后在其中添加标题、文字等内容实现正文显示效果。



## Layout样式

### 默认布局

页面仅有正文内容，导航栏和侧边栏不可见，Layout的type属性为*normal*。

:::demo 

```vue
<template>
  <Layout type="normal">
    <CContent>默认布局</CContent>
  </Layout>
</template>
<style>
.boomui-layout.boomui-layout__bg--normal{
  .boomui-content{
     margin: 0% 12% ;
  }
}
.boomui-aside {
  display: inline-flex;
  position: static;
  width: 25%;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
</style>
```
:::

即使存在侧边栏和导航栏，也不会显示。

:::demo 

```vue
<template>
  <Layout type="normal">
    <Header>导航栏</Header>
    <Aside></Aside>
    <CContent>默认布局</CContent>
  </Layout>
</template>
<style>
.boomui-layout.boomui-layout__bg--normal{
  .boomui-content{
     margin: 0% 12% ;
  }
}
.boomui-aside {
  display: inline-flex;
  position: static;
  width: 25%;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
</style>
```
:::

### 侧边栏布局

页面有正文内容和侧边栏，侧边栏可以在页面左侧或右侧，在左侧或右侧取决于Aside标签定义于Content标签前还是后，导航栏不可见，Layout的type属性为*left-aside*或*right-aside*。

左侧边栏

:::demo 

```vue
<template>
  <Layout type="left-aside">
    <Aside></Aside>
    <CContent>
      左侧边栏布局
    </CContent>
  </Layout>
</template>
<style>
.boomui-aside {
  display: inline-flex;
  position: static;
  width: 25%;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
</style>
```
:::

右侧边栏

:::demo 

```vue

<template>
  <Layout type="right-aside">
    <Aside></Aside>
    <CContent>
      右侧边栏布局
    </CContent>
  </Layout>
</template>
<style>
.boomui-aside {
  display: inline-flex;
  position: static;
  width: 25%;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
</style>
```
:::

即使存在导航栏，也不会显示。

:::demo 

```vue
<template>
  <Layout type="left-aside">
    <Header>导航栏</Header>
    <Aside></Aside>
    <CContent>
      左侧边栏布局
    </CContent>
  </Layout>
</template>
<style>
.boomui-aside {
  display: inline-flex;
  position: static;
  width: 25%;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
</style>
```
:::

### 导航栏布局

页面有正文内容和导航栏，侧边栏不可见，Layout的type属性为*header*。

:::demo 

```vue
<template>
  <Layout type="header">
  <Header>导航栏</Header>
    <CContent>
      导航栏布局
    </CContent>
  </Layout>
</template>
<style>
.boomui-layout.boomui-layout__bg--header{
  .boomui-content, .boomui-aside{
     margin-top: 0px;
  }
}
.boomui-aside {
  display: inline-flex;
  position: static;
  width: 25%;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
</style>
```
:::

即使存在侧边栏，也不会显示。

:::demo 

```vue
<template>
  <Layout type="header">
  <Header>导航栏</Header>
  <Aside></Aside>
    <CContent>
      导航栏布局
    </CContent>
  </Layout>
</template>
<style>
.boomui-layout.boomui-layout__bg--header{
  .boomui-content, .boomui-aside{
     margin-top: 0px;
  }
}
.boomui-aside {
  display: inline-flex;
  position: static;
  width: 25%;
}
.boomui-content {
  display: inline-block;
  height: 85%;
}
.boomui-header {
  position: static;
}
</style>
```
:::

### 导航栏及侧边栏布局

页面有正文内容、导航栏和侧边栏，侧边栏可以在页面左侧或右侧，Layout的type属性为*header-left-aside*或*header-right-aside*。

导航栏及左侧边栏

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header>导航栏</Header>
    <Aside></Aside>
    <CContent>导航栏及左侧边栏布局</CContent>
  </Layout>
</template>
<style>
.boomui-layout.boomui-layout__bg--header-left-aside{
  .boomui-aside, .boomui-content{
     margin-top: 0px;
  }
  .boomui-aside {
    display: inline-flex;
    position: static;
    width: 25%;
  }
  .boomui-content {
    display: inline-block;
    height: 85%;
  }
  .boomui-header {
    position: static;
  }
}
</style>
```
:::

导航栏及右侧边栏

:::demo 

```vue
<template>
  <Layout type="header-right-aside">
    <Header>导航栏</Header>
    <Aside></Aside>
    <CContent>
      导航栏及右侧边栏布局
    </CContent>
  </Layout>
</template>
<style>
.boomui-layout.boomui-layout__bg--header-right-aside{
  .boomui-aside, .boomui-content{
     margin-top: 0px;
  }
  .boomui-aside {
    display: inline-flex;
    position: static;
    width: 25%;
  }
  .boomui-content {
    display: inline-block;
    height: 85%;
  }
  .boomui-header {
    position: static;
  }
}
</style>
```
:::

## Content样式

### 内容居中

Content中的内容位于水平居中的位置，Content的type属性为*center*或省略。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header>导航栏</Header>
    <Aside></Aside>
    <CContent>
      内容居中
      <h1>TEST TITLE</h1>
      <p>test paragraph</p>
    </CContent>
  </Layout>
</template>
```
:::

### 内容居左

Content中的内容位于水平靠左的位置，Content的type属性为*left*。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header>导航栏</Header>
    <Aside></Aside>
    <CContent type="left" >
      内容居左
      <h1>TEST TITLE</h1>
      <p>test paragraph</p>
    </CContent>
  </Layout>
</template>
```
:::

### 内容居右

Content中的内容位于水平靠右的位置，Content的type属性为*right*。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header>导航栏</Header>
    <Aside></Aside>
    <CContent type="right">
      内容居右
      <h1>TEST TITLE</h1>
      <p>test paragraph</p>
    </CContent>
  </Layout>
</template>
```
:::

## Aside样式

可以通过:data，向Aside中传入菜单数据，数据可以是响应式的一维或二维数组。

### 一级菜单

Aside中的菜单为一级菜单，Aside的type属性为*one-level*或省略,传入的data为一维数组，若data二维数组，隐藏第二维的子菜单项。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header>导航栏</Header>
    <Aside type="first-level" :data="defaultMenu"></Aside>
    <CContent>
      一级菜单
    </CContent>
  </Layout>
</template>
```
:::

### 二级菜单

Aside中的菜单为二级菜单，Aside的type属性为*two-levels*,可以传入二维数组data进行展示。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header>导航栏</Header>
    <Aside type="second-level"></Aside>
    <CContent>
      二级菜单
    </CContent>
  </Layout>
</template>
```
:::

### 二级可收起菜单

Aside中的菜单为二级可收起菜单，点击拥有子菜单项的一级菜单项可以打开或收起子菜单，Aside的type属性为*foldable*,传入的data为二维数组。


:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header>导航栏</Header>
    <Aside type="foldable"></Aside>
    <CContent>
      二级可收起菜单
    </CContent>
  </Layout>
</template>
```
:::


## Header样式

### 普通导航栏

Header为白底蓝字导航栏，Header的type属性为*normal*或省略。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header type="normal">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul>
    </Header>
    <Aside></Aside>
    <CContent>
      普通导航栏
    </CContent>
  </Layout>
</template>
<style>
.vp-doc li + li {
    margin-top: 0px;
}
</style>
```
:::

### 外投影导航栏

Header为有外投影的导航栏，Header的type属性为*outside-shadow*。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
   <Header type="outside-shadow">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul>
    </Header>
    <Aside></Aside>
    <CContent>
      外投影导航栏
    </CContent>
  </Layout>
</template>
<style>
.boomui-header.boomui-header__bg--outside-shadow {
  margin-bottom: 8px;
}
</style>
```
:::

### 内阴影导航栏

Header为有内阴影的导航栏，Header的type属性为*inside-shadow*。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
   <Header type="inside-shadow">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul>
    </Header>
    <Aside></Aside>
    <CContent>
      内阴影导航栏
    </CContent>
  </Layout>
</template>
```
:::

### 下边框导航栏

Header为有下边框的导航栏，Header的type属性为*border-bottom*。
:::demo 

```vue
<template>
  <Layout type="header-left-aside">
   <Header type="border-bottom">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul>
    </Header>
    <Aside></Aside>
    <CContent>
      下边框导航栏
    </CContent>
  </Layout>
</template>
```
:::

### 反色导航栏

Header为蓝底白字导航栏，Header的type属性为*invert*。

:::demo 

```vue
<template>
  <Layout type="header-left-aside">
    <Header type="invert">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">个人主页</a></li>
      </ul>
    </Header>
    <Aside></Aside>
    <CContent>
      反色导航栏
    </CContent>
  </Layout>
</template>
```
:::


## API

### Layout

| 参数 | 说明 | 类型   | 可选值                                                                                | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------------------------------------------- | ------- |
| type | 类型 | string | `normal` 、 `header` 、 `left-aside` 、 `right-aside` 、 `header-left-aside` 、 `header-right-aside` | `normal` | 

### Content

| 参数 | 说明 | 类型   | 可选值                                                                                | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------------------------------------------- | ------- |
| type | 类型 | string | `center` 、 `left` 、 `right`  | `center` | 

### Aside

| 参数 | 说明 | 类型   | 可选值                                                                                | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------------------------------------------- | ------- |
| type | 类型 | string | `one-level` 、 `two-levels` 、 `foldable` | `one-level` | 
| data | 菜单数据 | Object | 省略、手动创建响应式对象数组  |  示例的中的数组


### Header

| 参数 | 说明 | 类型   | 可选值                                                                                | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------------------------------------------- | ------- |
| type | 类型 | string | `normal` 、 `outside-shadow` 、 `inside-shadow` 、 `border-bottom` 、 `invert`  | `normal` | 


