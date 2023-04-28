export default {
  get_help: 'get help from here',
  not_enabled: {
    hint: "Please contact us to start Eva Pricing Management for your Amazon store. We'll check your account and get back to you as soon as possible.",
  },
  actions: {
    min_max_prices: '@:general.filters.min_max @:general.terminology.prices',
    in_stock_skus: '@:general.filters.in_stock @:general.terminology.skus',
  },
  account_level_export: {
    title:
      '@:general.terminology.account @:general.terms.level @:general.terms.export',
    hint: 'Choose to apply export functions in @:general.terminology.account @:general.terms.level',
  },
  store_level_settings: {
    title:
      '@:general.terminology.store @:general.terms.level @:general.terms.settings',
    hint: `You can click the "@:(repricer.store_level_settings.title)" button to create an automation setting to apply all SKUs.`,
    master_store: {
      title: 'Master Store',
      hint: '* If the costs in other marketplaces are higher or lower than the costs in the master store marketplace, Click the checkbox, choose the above / below choices and enter preferred percentage from the Stores section. This will affect Min Price, Max Price, Fixed Price, and Map Price.',
      fields: {
        convert_currency: 'Convert Master Store Currency',
        select_your_master_store: 'Please Select Your Master Store',
        daily_auto_sync: 'Daily Auto Sync',
      },
      messages: {
        skus_are_updated: 'SKUs are updated',
        sku_is_updated: 'SKU is updated',
      },
    },
    fee_cost_settings: {
      title: 'Fee & Cost Settings',
      fields: {
        shipping_to_fba_warehouse_cost: {
          title: 'Shipping to FBA Warehouse Cost',
          use_amazon_shipment_cost: 'Use Amazon Shipment Costs',
          use_amazon_shipment_cost_hint: 'Amazon Partnered Carrier Agreement',
          use_manual_shipping_to_amazon_cost:
            'Use Manual Shipping to Amazon Costs',
          use_manual_shipping_to_amazon_cost_hint:
            'Agreements with other Carriers',
        },
        vat_on_fees: {
          title: 'VAT on Fees',
          hint: 'If you are paying VAT on Amazon Referral Fee, FBA Fee, and Additional Cost',
        },
      },
    },
    new_sku_settings: {
      title: 'New SKUs Settings',
      fields: {
        product_cost: '@:general.terminology.product_cost',
      },
      settings: {
        target_return_based_pricing: 'Target return based pricing',
        manual_min_price_based_pricing: 'Manual min. price based pricing',
        enable_pricing_for_new_skus: 'Enable pricing for the new SKUs',
      },
    },
    brand_pricing_configuration: {
      title: 'Brand Pricing Configuration',
      settings: {
        ignore_hijackers: {
          title: 'Ignore Hijackers',
          hint: 'Enable the setting to ignore competition with hijackers. Once enabled, your product will not compete with hijackers (competitors who are selling the exact product). Do not use it if you are the reseller of the product. We advise this setting only for the brand owners of the product.',
        },
        set_price_rounding: {
          title: 'Set Price Rounding',
          hint: 'When the "Price Rounding" feature is enabled, the remainder of price will be fixed to the remainder you set.',
        },
        twin_sku_pricing: {
          title: 'Twin SKU Pricing',
          hint: 'If you have both FBA and FBM for the same SKU (Twin SKU situation) you can configure your Twin SKU pricing strategy based on your FBA SKU.',
        },
      },
    },
    other_pricing_settings: {
      title: 'Other Pricing Settings',
    },
    actions: {
      clear_automation_settings: 'Clear Automation Settings',
    },
  },
  prompt: {
    enter_sync: 'Enter "Sync"',
    type_sync_to_confirm: 'Type "Sync" to confirm',
  },
};
