export default {
  sales_and_finance: {
    title: 'Sales & Finance',
  },
  expenses_overview: {
    title: 'Expenses, Refunds & COGS',
    fields: {
      expenses_cogs: 'Expenses & COGS',
      fba_shipping_fee: 'FBA Shipping Fee',
      fba_inventory_storage_fee: 'FBA Inventory Storage Fee',
      amazon_selling_fee: 'Amazon Selling Fee',
      amazon_fba_fee: 'Amazon FBA Fee',
      amazon_subscription: 'Amazon Subscription',
      advertising_cost: 'Advertising Cost',
      disposal_fee: 'Disposal Fee',
      storage_renewal_fee: 'Storage Renewal Fee',
      other_fee: 'Other Fee',
      shipping_label_purchase: 'Shipping Label Purchase',
    },
  },
  aggregated_field: (ctx) =>
    `${ctx.linked('general.terms.aggregated')} ${ctx.named('field')}`,
};
