import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import '../../../src/iconfont/iconfont.css';
import { useComponents } from './useComponents';
import Status from '../../../src/components/status';
import BoomButton from '../../../src/components/button';
import BoomIcon from '../../../src/components/icon';
import BoomSwitch from '../../../src/components/switch';
import Layout from '../../../src/components/layout';
import Content from '../../../src/components/layout/src/content';
import Aside from '../../../src/components/layout/src/aside';
import Header from '../../../src/components/layout/src/header';
Content.name = 'C' + Content.name;
import BoomAvatar from '../../../src/components/avatar'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    ctx.app.component(Status.name, Status);
    ctx.app.component(BoomButton.name, BoomButton);
    ctx.app.component(BoomIcon.name, BoomIcon);
    ctx.app.component(BoomSwitch.name, BoomSwitch);
    ctx.app.component(Layout.name, Layout);
    ctx.app.component(Content.name, Content);
    ctx.app.component(Aside.name, Aside);
    ctx.app.component(Header.name, Header);
    ctx.app.component(BoomAvatar.name, BoomAvatar);
  },
};
