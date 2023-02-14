# Layout 布局

简单的页面布局效果

## 基础用法

**Layout 的使用方法**

通过type属性决定页面结构样式，然后结合Header、Aside和Content标签来实现页面布局效果。

**Header 的使用方法**

通过type属性决定位于页首的导航栏样式，可以在其中添加图标和无序列表等内容实现导航栏效果。

**Aside 的使用方法**

通过type属性决定位于页面两侧的的侧边栏样式，然后通过导入响应式的一维或二维数组类型数据，实现不同类型的侧边栏效果。

**Content 的使用方法**

通过type属性决定位于页面中央的内容容器，然后在其中添加标题、文字等内容实现正文显示效果。

## Layout样式

### 默认布局

页面仅有正文内容，导航栏和侧边栏不可见，Layout的type属性为*normal*或省略type属性。

:::demo 

```vue
<template>
  <Layout type="normal">
    <Content>
      默认布局
    </Content>
  </Layout>
</template>
```
:::

即使存在侧边栏和导航栏，也不会显示。

:::demo 

```vue
<!-- <template>
  <Layout type="normal">
    <Header>导航栏</Header>
    <Aside>侧边栏</Aside>
    <Content>
      默认布局
    </Content>
  </Layout>
</template> -->
```
:::

### 侧边栏布局

页面有正文内容和侧边栏，侧边栏可以在页面左侧或右侧，导航栏不可见，Layout的type属性为*left-aside*或*right-aside*。

左侧边栏

:::demo 

```vue
<!-- <template>
  <Layout type="left-aside">
    <Aside>侧边栏</Aside>
    <Content>
      左侧边栏布局
    </Content>
  </Layout>
</template> -->
```
:::

右侧边栏

:::demo 

```vue

<!-- <template>
  <Layout type="right-aside">
    <Aside>侧边栏</Aside>
    <Content>
      右侧边栏布局
    </Content>
  </Layout>
</template> -->
```
:::

即使存在导航栏，也不会显示。

:::demo 

```vue
<!-- <template>
  <Layout type="left-aside">
    <Header>导航栏</Header>
    <Aside>侧边栏</Aside>
    <Content>
      左侧边栏布局
    </Content>
  </Layout>
</template> -->
```
:::

## API

| 参数 | 说明 | 类型   | 可选值                                                                                | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------------------------------------------- | ------- |
| type | 类型 | string | `success` 、 `error` 、 `initial` 、 `warning` 、 `waiting` 、 `running` 、 `invalid` | default | 