//无侧边栏、左侧边栏、右侧边栏，两侧侧边栏、无页尾、无页首
export type LayoutType = 'no-aside' | 'left-aside' | 'right-aside' | 'both-aside' | 'no-footer' | 'no-header';
//普通页首导航栏、外部投影导航栏、内部投影导航栏、有下边框导航栏、背景色与文字颜色对调导航栏
export type HeaderType = 'normal' | 'outside-shadow' | 'inside-shadow' | 'border-bottom' | 'invert';
//一级菜单侧边栏、二级菜单侧边栏、可折叠侧边栏、可隐藏侧边栏
export type AsideType = 'one-level' | 'two-level' | 'foldable' | 'hide-able';
