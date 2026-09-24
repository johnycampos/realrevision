export default [
  {
    title: 'Vendas',
    menuKey: 'vendas',
    icon: { icon: 'mdi-cart-outline' },
    children: [
      {
        title: 'PDV (Novo)',
        to: 'venda-ponto1',
      },
      {
        title: 'Histórico de Vendas',
        to: 'venda-historico',
      },
    ],
  },
]
