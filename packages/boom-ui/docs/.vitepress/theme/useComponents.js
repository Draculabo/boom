import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import Status from '../../../src/components/status';
import BoomButton from '../../../src/components/button';
import BoomSpace from '../../../src/components/space';
import BoomIcon from '../../../src/components/icon';
import BoomLink from '../../../src/components/link';
import BoomSwitch from '../../../src/components/switch';
import BoomAvatar from '../../../src/components/avatar';
export function useComponents(app) {
  app.component('Status', Status);
  app.component('boom-button', BoomButton);
  app.component('boom-icon', BoomIcon);
  app.component('boom-link', BoomLink);
  app.component('boom-space', BoomSpace);
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
  app.component('boom-switch', BoomSwitch);
  app.component('boom-avatar', BoomAvatar);
}
