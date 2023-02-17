import { reactive } from 'vue';
// 定义菜单
export const defaultMenu = reactive([
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
