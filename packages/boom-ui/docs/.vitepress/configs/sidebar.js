export default {
  '/components/': getComponentsSidebar(),
};

function getComponentsSidebar() {
  return [
    {
      text: 'Basic 基础组件',
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
          text: 'Link',
          link: '/components/link',
        },
        {
          text: 'Switch',
          link: '/components/switch',
        },
        {
          text: 'Space',
          link: '/components/space',
        },
        {
          text: 'Avatar',
          link: '/components/avatar',
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
  ];
}
