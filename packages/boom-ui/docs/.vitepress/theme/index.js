import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import '../../../src/iconfont/iconfont.css';
import { useComponents } from './useComponents';
import Status from '../../../src/components/status';
import BoomButton from '../../../src/components/button';
import BoomIcon from '../../../src/components/icon';
import BoomSwitch from '../../../src/components/switch';
import BoomAvatar from '../../../src/components/avatar';
import BoomProgress from '../../../src/components/progress';
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    ctx.app.component(Status.name, Status);
    ctx.app.component(BoomButton.name, BoomButton);
    ctx.app.component(BoomIcon.name, BoomIcon);
    ctx.app.component(BoomSwitch.name, BoomSwitch);
    ctx.app.component(BoomAvatar.name, BoomAvatar);
    ctx.app.component(BoomProgress.name, BoomProgress);
  },
};
