<script setup lang="ts">
import { computed, PropType, reactive } from 'vue';
import { useNamespace } from '../../../../common/hooks/useNamespace';
import './aside.scss';
import { AsideType } from './aside-types';
import { defaultMenu } from './menu';
export interface MenuItem {
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

const props = defineProps({
  type: { type: String as PropType<AsideType>, default: 'one-level' },
  data: { type: Object as PropType<MenuItem[]>, default: defaultMenu },
});
const ns = useNamespace('aside');

// 计算侧边栏样式
const typeClass = computed(() => {
  const { type } = props;
  const typeAside = ['one-level', 'two-levels', 'foldable'];
  let typeClassStr = `${ns.b()} ${ns.em('bg', 'invalid')}`;
  if (typeAside.includes(type)) {
    typeClassStr = `${ns.b()} ${ns.em('bg', type)}`;
  }
  console.log(typeClassStr);
  return typeClassStr;
});

const menu = reactive(props.data);

// 点击隐藏或显示二级菜单
const showSubMenu = (index: number) => {
  // 判断当前点击的菜单项是否拥有子菜单

  if (menu[index].sub_menu?.length > 0) {
    // 更改href内容，使拥有子菜单的菜单项点击后不会发生跳转，且不会回到页面开头
    menu[index].src = 'javascript:void(0);';
    // 子菜单未展开，则改变菜单项和子菜单项属性，将子菜单展开
    if (!menu[index].className.open && menu[index].className.close) {
      // 更改当前菜单项样式，使箭头图标朝下
      menu[index].className.open = true;
      menu[index].className.close = false;
      // 更改所有子菜单项样式，使其出现
      for (let i = 0; i < menu[index].sub_menu?.length; i++) {
        menu[index].sub_menu[i].className.show = true;
        menu[index].sub_menu[i].className.hide = false;
      }
    } else {
      // 更改当前菜单项样式，使箭头图标朝左
      menu[index].className.open = false;
      menu[index].className.close = true;
      for (let i = 0; i < menu[index].sub_menu?.length; i++) {
        // 更改所有子菜单项样式，使其隐藏
        menu[index].sub_menu[i].className.show = false;
        menu[index].sub_menu[i].className.hide = true;
      }
    }
  }
};
</script>
<template>
  <div id="boom-aside" :class="typeClass">
    <ul v-for="(menu_item, index) in props.data" :key="menu_item.id">
      <li name="menu_item" :class="menu_item.className">
        <a :href="menu_item.src" @click="showSubMenu(index)">
          {{ menu_item.name }}
        </a>
      </li>
      <ul v-for="sub_menu_item in menu_item.sub_menu" :key="sub_menu_item.id">
        <li
          v-if="typeClass == 'boomui-aside boomui-aside__bg--two-levels' || 'boomui-aside boomui-aside__bg--foldable'"
          name="sub_menu_item"
          :class="sub_menu_item.className"
        >
          <a :href="sub_menu_item.src">
            {{ sub_menu_item.name }}
          </a>
        </li>
      </ul>
    </ul>
    <slot />
  </div>
</template>
