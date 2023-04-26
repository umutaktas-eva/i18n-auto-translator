export default {
  daily_sales: {
    select_days_hint: 'Please select days to view your data.',
    compare_text: 'Select two days to compare your sales',
    fields: {
      fba_sales: 'FBA Sales',
      fbm_sales: 'FBM Sales',
      total_expense: 'Total Expense',
      last_30_day_avg_sales: 'Last 30 Days Avg. Sales',
      last_30_day_avg_profit: 'Last 30 Days Avg. Profit',
      profit: 'Profit',
    },
    tooltip: {
      see: 'See',
      profit_details: 'Profit Details',
      profit: 'Profit',
      sales_shipping: 'Sales + Shipping',
      total_sales: 'Total Sales',
      orders: 'Orders',
      units: 'Units',
      expense_details: 'Expense Details',
      advertising_cost: 'Advertising Cost',
      refund: 'Refund',
      amazon_expense: 'Amazon Expense',
      cogs: 'COGS',
    },
  },
  top_asins: {
    title: 'Top ASINs',
    sku_list_selected_asin: 'SKU List of the Selected ASIN',
    fields: {
      sales: 'Sales',
    },
    table: {
      fulfillment_by: 'Fulfillment By',
      condition: 'Condition',
    },
    condition_string: (ctx) => {
      switch (ctx.named('condition')) {
        case 1:
        case 5:
          return 'Like New';
        case 2:
        case 6:
          return 'Very Good';
        case 3:
        case 7:
          return 'Good';
        case 4:
        case 8:
          return 'Acceptable';
        case 9:
        case 10:
          return 'Renewed';
        case 11:
          return 'New';
        default:
          return '-';
      }
    },
  },
  asin_segmentation: {
    title: 'ASIN Segmentation',
    table_header: (ctx) => {
      switch (ctx.named('segmentation_level')) {
        case 'low':
          return 'Low Selling ASINs';
        case 'medium':
          return 'Medium Selling ASINs';
        case 'other':
          return 'Others';
        default:
          return 'Top Selling ASINs';
      }
    },
    fields: {
      top_selling: {
        name: 'Top Selling ASINs',
        description: 'Sales from Top 20% ASINs',
      },
      medium_selling: {
        name: 'Medium Selling ASINs',
        description: 'Sales from Medium 20% ASINs',
      },
      low_selling: {
        name: 'Low Selling ASINs',
        description: 'Sales from Low 20% ASINs',
      },
      other: {
        name: 'Others',
        description: 'Sales from Other 40% ASINs',
      },
    },
    tooltip: {
      total_sales: 'Total Sales',
      total_quantity: 'Total Quantity',
      number_of_selling: '# of Selling ASINs',
    },
  },
  yoy_daily_sales: {
    title: 'YoY Daily Sales',
    fields: {
      previous_year_sales: 'Previous Year Sales',
      current_year_sales: 'This Year Sales',
      last_30_day_avg_sales: 'Last 30 Days Avg. Sales',
      previous_year_last_30_day_avg_sales:
        'Previous Year Last 30 Days Avg. Sales',
    },
    tooltip: {
      number_of_orders: '# of Orders',
      total_units: 'Total Units',
      no_sales_last_year: 'No Sales Last Year',
    },
  },
};
