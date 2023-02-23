import { createApp } from 'vue';
// 导入图标样式
import '@/iconfont/iconfont.css';
import App from './App.vue';
import BoomButton from '@/components/button';
import BoomTable from '@/components/table';
import BoomIcon from '@/components/icon';
import BoomSpace from '@/components/space';
import BoomBreadCrumb from '@/components/breadcrumb';

createApp(App).use(BoomTable).mount('#app');
