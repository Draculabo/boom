import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import Status from '../../../src/components/status';
export function useComponents(app) {
  app.component('Status', Status);
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
}
