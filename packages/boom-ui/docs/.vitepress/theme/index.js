import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import '../../../src/iconfont/iconfont.css';
import { useComponents } from './useComponents';
import Status from '../../../src/components/status';
import Layout from '../../../src/components/layout';
import Content from '../../../src/components/layout/src/content';
import Aside from '../../../src/components/layout/src/aside';
import Header from '../../../src/components/layout/src/header';
Content.name = 'C' + Content.name;
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    ctx.app.component(Status.name, Status);
    ctx.app.component(Layout.name, Layout);
    ctx.app.component(Content.name, Content);
    ctx.app.component(Aside.name, Aside);
    ctx.app.component(Header.name, Header);
  },
};
