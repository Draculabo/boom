export default {
  '/components/': getComponentsSidebar(),
};

function getComponentsSidebar() {
  return [
    {
      text: '反馈',
      items: [
        {
          text: 'Status',
          link: '/components/status',
        },
        {
          text: 'Button',
          link: '/components/button',
        },
        {
          text: 'Switch',
          link: '/components/switch',
        },
        {
          text: 'Progress',
          link: '/components/progress'
        }
      ],
    },
    {
      text: '布局',
      items: [
        {
          text: 'Layout',
          link: '/components/layout',
        },
      ],
    },
    {
      text: '数据展示',
      items: [
        {
          text: 'Avatar',
          link: '/components/avatar',
        },
      ],
    },
  ];
}
