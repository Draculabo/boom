// 无侧边栏和页首导航栏、左侧边栏、右侧边栏、有页首、有左侧边栏和页首、有右侧边栏和页首
export type LayoutType = 'normal' | 'left-aside' | 'right-aside' | 'header' | 'header-left-aside' | 'header-right-aside';
// 文本居中显示、文本靠左侧显示、文本靠右侧显示
export type ContentType = 'center' | 'left' | 'right';
// 普通页首导航栏、外部投影导航栏、内部投影导航栏、有下边框导航栏、背景色与文字颜色对调导航栏
export type HeaderType = 'normal' | 'outside-shadow' | 'inside-shadow' | 'border-bottom' | 'invert';
// 一级菜单侧边栏、二级菜单侧边栏、可折叠侧边栏
export type AsideType = 'one-level' | 'two-levels' | 'foldable';
