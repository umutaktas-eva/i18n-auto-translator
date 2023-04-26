export default {
  inventory_health_report: 'Inventory Health Report',
  working: 'Working',
  shipped: 'Shipped',
  receiving: 'Receiving',
  inventory_age: 'Inventory Age',
  to_days: (ctx) => `${ctx.named('n')} days`,
  storage_type: 'Storage Type',
  aerosol: 'Aerosol',
  apparel: 'Apparel',
  flammable: 'Flammable',
  footwear: 'Footwear',
  oversize: 'Oversize',
  standard_size: 'Standard-Size',
  other: 'Other',
  non_selected: 'Non selected',
  more_than_one_selected: 'More than one selected',
  export_inventory_health_report_data:
    '@:general.terms.export @:inventoryHealthReport.inventory_health_report @:general.terms.data',
  exporting_inventory_health_report_data:
    '@:general.terms.exporting @:inventoryHealthReport.inventory_health_report @:general.terms.data',
  product_details: 'Product Details',
  available_tooltip:
    'The number of sellable units in-stock to fulfill orders. Available units do not include units that are pending removal.',
  inbound_quantity: '@:general.terminology.inbound @:general.terms.quantity',
  inbound_quantity_tooltip:
    'Inbound quantity = working + shipped + receiving units',
  inventory_age_tooltip:
    'Inventory age shows the age of your in-stock units. Inventory age unit = available + reserved - pending removal units.',
  estimated_excess_units: 'Estimated Excess Units',
  estimated_excess_units_tooltip:
    'Estimated excess are units for which we forecast that it will likely cost you more to keep in stock and pay storage costs than to reduce by advertising, liquidating or removing.',
  estimated_long_term_storage_fee: 'Estimated Long-Term Storage Fee',
  estimated_long_term_storage_fee_tooltip:
    'The estimated number of units that will be subject to long-term storage fees (if applicable) on your next charge date, assuming no further sales.',
  closed_sku_info:
    'This SKU may have been closed or visually changed by Amazon.',
  please_wait: '@:general.terms.please_wait Yourlist will be ready shortly.',
};
