export default {
  general_overview: {
    title: 'General Overview',
    hint: 'You can overview your account here',
    terms: {
      previous_period: 'Previous Period',
      current_period: 'Current Period',
    },
    net_profit: {
      title: 'Net Profit',
      hint: 'Profit Details are calculated based on the product cost added to your SKUs. Please be sure to enter product costs.',
      fields: {
        net_profit: 'Net Profit',
        roi: 'ROI',
        margin: 'Margin',
      },
    },
    total_sales: {
      title: 'Total Sales',
      fields: {
        total_sales: 'Total Sales',
        organic_sales: 'Organic Sales',
        advertising_sales: 'Advertising Sales',
        fba_sales: 'FBA Sales',
        fbm_sales: 'FBM Sales',
        orders: 'Orders',
        units: 'Units',
        shipping_amount: 'Shipping Amount',
        avg_order_amount: 'Average Order Amount',
      },
    },
    total_expense: {
      title: 'Total Expense',
      last_settlement_date: 'Last settlement date',
      fields: {
        total_expense: 'Total Expense',
        fba_fee: 'FBA Fee',
        refund: 'Refund',
        referral_fee: 'Referral Fee',
        cogs: 'COGS',
        product_cost: 'Product Cost',
        fbm_shipping: 'FBM Shipping',
        additional_cost: 'Additional Cost',
        storage_fee: 'Storage Fee',
        advertising_cost: 'Advertising Cost',
        amazon_expense: 'Amazon Expense',
      },
    },
    organic_sales: {
      title: 'Organic Sales',
    },
    advertising_sales: {
      title: 'Advertising Sales',
    },
    acos: {
      title: 'ACoS',
    },
    tacos: {
      title: 'TACoS',
    },
  },
  sales_expenses: {
    title: 'Sales & Expenses',
    fields: {
      reimbursement: 'Reimbursement',
      total_sales: 'Total Sales',
      fba_sales: 'FBA Sales',
      fbm_sales: 'FBM Sales',
      cogs: 'COGS',
      total_refund: 'Total Refund',
      amazon_expense: 'Amazon Expense',
      total_profit: 'Total Profit',
      quantity: 'Quantity',
      avg_sales_order_item: 'Avg. Sales/Order Item',
      profit: 'Profit',
      qty_units: 'Quantity (Units)',
    },
  },
  marketplace_details: {
    title: 'Marketplace Details',
    fields: {
      profit: 'Profit',
      total_sales: 'Total Sales',
      orders: 'Orders',
      units: 'Units',
    },
  },
  sku_status: {
    title: 'SKU Status',
    hint: 'Total & Pricer Enabled in stock SKUs are updated every 24 hours. Pricer enabled in stock SKUs are updated every hour.',
    labels: {
      total_skus: 'Total SKUs',
      pricer_enabled_skus: 'Pricer Enabled SKUs',
      pricer_enabled_instock_skus: 'Pricer Enabled In Stock SKUs',
    },
  },
  buy_box_ownership: {
    title: 'Buy Box Ownership',
    labels: {
      owner_skus: 'Buy Box Owner SKUs',
      chasing_skus: 'Buy Box Chasing SKUs',
      suppressed_skus: 'Suppressed Buy Box SKUs',
    },
  },
  pricing_activity: {
    title: 'Pricing Activity',
    labels: {
      pricing_decisions: 'Pricing Decisions',
      price_change_above_min: 'Price Change Above Min. Price',
      increased_sales_price: 'Increased Sales Price',
    },
  },
  sales_order_heatmap: {
    title: 'Sales Order Heatmap',
    top_five_states: 'Top 5 States',
    fields: {
      amount: 'Amount',
      quantity: 'Quantity',
    },
  },
  sku_info: {
    alert: (ctx) => `${ctx.named('costExistSkuCount')} out of
    ${ctx.named('totalSalesSku')}
    SKUs' cost does not exist.`,
    please_update: 'please update',
    update: `your SKUs' cost info in order to see more accurate profit.`,
  },
};
