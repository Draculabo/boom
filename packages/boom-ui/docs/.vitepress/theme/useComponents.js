import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import Status from '../../../src/components/status';
import Layout from '../../../src/components/layout';
import Content from '../../../src/components/layout/src/content';
import Aside from '../../../src/components/layout/src/aside';
import Header from '../../../src/components/layout/src/header';
import BoomButton from '../../../src/components/button';
import BoomIcon from '../../../src/components/icon';
import BoomSwitch from '../../../src/components/switch';
import BoomAvatar from '../../../src/components/avatar';
export function useComponents(app) {
  app.component('Status', Status);
  app.component('Layout', Layout);
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
  app.component('CContent', Content);
  app.component('Aside', Aside);
  app.component('Header', Header);
  app.component('boom-switch', BoomSwitch);
  app.component('boom-avatar', BoomAvatar);
}
