import { defineConfig } from 'vitepress';
import nav from './configs/nav.js';
import sidebar from './configs/sidebar.js';

import { demoBlockPlugin } from 'vitepress-theme-demoblock';

export default defineConfig({
  title: 'boom',
  description: '基于vue实现的组件库',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: process.env.BASE || '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  markdown: {
    headers: {
      level: [0, 0],
    },

    // options for markdown-it-anchor
    anchor: { permalink: () => {} },

    // options for markdown-it-toc

    toc: { level: [1, 2] },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less',
      });
    },
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',

    algolia: {
      appId: 'LYMQIS0HTT',
      apiKey: '11a3c40c9a5b161ad00e3c462cc1d3ce',
      indexName: 'boom',
      placeholder: '请输入关键词',
    },

    // nav
    nav,

    // sidebar
    sidebar,

    editLink: {
      pattern: 'https://github.com/Draculabo/boom/edit/main/packages/boom-ui/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Draculabo/boom' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Draculabo',
    },
  },
});
