# status

给予一个行为后的结果

## 基础用法

基础的 status 用法

:::demo 使用 `success` 、 `error` 、 `initial` 、 `warning` 、 `waiting` 、 `running` 、 `invalid`; 属性来定义 status 的样式。

```vue
<template>
  <Status>default status</Status>
  <Status type="success">success status</Status>
  <Status type="error">error status</Status>
  <Status type="warning">warning status</Status>
  <Status type="waiting">waiting status</Status>
  <Status type="running">running status</Status>
  <Status type="invalid">invalid status</Status>
</template>
```


## API

| 参数 | 说明 | 类型   | 可选值                                                                                | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------------------------------------------- | ------- |
| type | 类型 | string | `success` 、 `error` 、 `initial` 、 `warning` 、 `waiting` 、 `running` 、 `invalid` | default |
