export default {
  replenished: 'Replenished',
  download_export: (ctx) =>
    `${ctx.linked('general.terms.download')} Export ${ctx.named('field')}`,
  replenishment_data:
    '@:general.terminology.replenishment @:general.terms.data',
  as_filtered_report: 'as Filtered Report',
  export_as_filtered:
    '@:general.terms.export @:replenishment.as_filtered_report',
  exporting_replenishment_data: 'Exporting @:replenishment.replenishment_data',
  export_replenishment_data:
    '@:general.terms.export @:replenishment.replenishment_data',
  replenishment_settings:
    '@:general.terminology.replenishment @:general.terms.settings',
  your_replenishment_data_ready: 'Your Replenishment Data is ready!',
  last_data_updated_time: 'Last Data Updated Time',
  your_new_replenishment_data_updating:
    'Your New Replenishment Data is updating now!',
  full_replenishment_level: 'Full Replenishment Level',
  days_of_inventory: (ctx) =>
    `${ctx.named('number') ? ctx.named('number') : ''} days of Inventory`,
  replenishment_forecast_level: 'Replenishment Forecast Level',
  stock_out_alert_level: 'Stock Out Alert Level',
  sku_sold_info: 'SKUs Sold in the Last 60 Days',
  enter_product_cost_info:
    'Please enter product costs of your SKUs to simulate and list them below.',
  in_stock_cost: 'In Stock Cost',
  inbound_cost: '@:general.terminology.inbound @:general.terminology.cost',
  full_replenishment_field: (ctx) =>
    `Full Replenishment ${ctx.named('field') ? ctx.named('field') : ''}`,
  fund: 'Fund',
  forecast: 'Forecast',
  level_days: 'Level Days',
  replenishment_forecast_level_days:
    '@:general.terminology.replenishment @:replenishment.forecast @:replenishment.level_days',
  stock_out_alert_level_days:
    '@:replenishment.stock_out_alert_level @:general.terms.days',
  simulate: 'Simulate',
  restock_day: 'Restock Day',
  required_fund: 'Required Fund',
  set_replenishment_amount:
    '@:general.terms.set @:general.terminology.replenishment @:general.terminology.amount',
  your_spending_power: 'Your Spending Power',
  skus_out_of: (ctx) =>
    `${ctx.named('restockFoundSku')} SKUs out of ${ctx.named('allSkuNum')}`,
  pricer_enabled_replenished: 'Pricer enabled SKUs to be replenished',
  filter_by_tooltip:
    'Filters can be applied to the replenishment listing. Filters do not affect the simulation results.',
  sales_velocity: '@:general.terminology.sales @:general.terminology.velocity',
  days_of: 'Days of',
  alarm_red_text: (ctx) =>
    `Inventory is less than ${ctx.named(
      'stockOutAlertDay'
    )} days left. Please replenish ${ctx.named(
      'replenishUnits'
    )} units to have ${ctx.named(
      'fullRestockDay'
    )} days of inventory. Your sales velocity is ${ctx.named(
      'salesVelocity'
    )}/day.`,
  alarm_orange_text: (ctx) =>
    `Please replenish ${ctx.named('replenishUnits')} units, to have ${ctx.named(
      'fullRestockDay'
    )} days of inventory. Your sales velocity is ${ctx.named(
      'salesVelocity'
    )}/day.`,
  visually_changed_info:
    'This SKU may have been closed or visually changed by Amazon.',
  do_you_want_to_save:
    'These changes will be applied on the next Replenishment data update. Do you want to save and continue?',
  full_replenishment_level_days: 'Full Replenishment Level Days',
  validation_messages: {
    higher_than_forecast:
      'Full Replenishment Level Days must be higher than Replenishment Forecast and Stock Out Alert Level Days.',
    lower_than_forecast:
      'Replenishment Forecast Level Days must be lower than Full Replenishment Level Days.',
    lower_than_forecast_and_full_replenishment:
      'Stock Out Alert Level Days must be lower than Replenishment Forecast and Full Replenishment Level Days.',
    check_stock_out_alert_level_days:
      'Check Stock Out Alert Level Days, Replenishment Forecast and Full Replenishment Level Days.',
    stock_out_alert_day_not_equal:
      'Stock Out Alert Level Days, Replenishment Forecast and Full Replenishment Level Days must be not equal.',
  },
  replenishment_export_history:
    '@:general.terminology.replenishment @:general.terms.export @:general.terms.history',
  export_as_filtered_history:
    '@:general.terms.export as Filtered @:general.terms.history',
  set_day: '@:general.terms.set @:general.date.day',
};
