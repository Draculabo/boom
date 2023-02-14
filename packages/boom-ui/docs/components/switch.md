# status

## 基本使用


:::demo 使用 `check` (boolen) 属性为组件绑定当前的状态（开/关）
```vue
<template>
    <boom-switch v-model:check="res" />
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    let res = ref<boolean>(true);
</script>

```
:::

:::demo 使用 `disabled` (boolen)属性为组件设置是否可用
```vue
<template>
    <boom-switch v-model:check="res" :disabled="true" />
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    let res = ref<boolean>(true);
</script>

```
:::

| 参数 | 说明 | 类型   | 可选值                                                                                | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------------------------------------------- | ------- |
| check | 状态 | boolen | true / false                                                                         | false |
| disabled | 是否禁用 | boolen | true / false                                                                   | false |