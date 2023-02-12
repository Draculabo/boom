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
      ],
    },
  ];
}
