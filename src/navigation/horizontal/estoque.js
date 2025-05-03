export default [
  {
    title: 'Estoque',
    icon: { icon: 'mdi-package-variant' },
    children: [
      {
        title: 'User',
        icon: { icon: 'mdi-account-outline' },
        children: [
          { title: 'List', to: 'user-list' },
          { title: 'View', to: { name: 'user-view-id', params: { id: 21 } } },
        ],
      },
    ],
  },
]
