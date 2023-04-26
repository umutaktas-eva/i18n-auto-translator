export default {
  marketplace_card: {
    coming_soon: 'Coming Soon',
    syncing: 'Syncing',
    manage: 'Manage',
    connect: 'Connect',
    syncing_description: (ctx) =>
      `Please wait while we sync your ${ctx.named('marketplace')} store data.`,
    connect_description: (
      ctx
    ) => `Eva gives seamless integration with ${ctx.named(
      'marketplace'
    )} stores to
    simultaneously syncronize your listing prices on Amazon without any of
    the hassle.`,
  },
  marketplace_connect_popup: {
    connect_description: (ctx) =>
      `Connect your ${ctx.named(
        'marketplace'
      )} store to with the selected Amazon store.`,
    shopify_shop_name_placeholder: 'Enter Your Shop Name',
    shopify_access_token_placeholder: 'Enter Admin API Access Token',
    walmart_partner_id_placeholder: 'Partner ID',
    walmart_client_id_placeholder: 'Client ID',
    client_secret_id_placeholder: 'ClientSecret ID',
  },
  marketplace_page: {
    sync_settings_title: (ctx) =>
      `Sync your Amazon settings with ${ctx.named('marketplaceTitle')}`,
    sync_price_toggle_title: (ctx) =>
      `Sync your Amazon prices to ${ctx.named('marketplaceTitle')}`,
    sync_price_toggle_description: (
      ctx
    ) => `Download template to match your Amazon SKU's with
    ${ctx.named('marketplaceTitle')}`,
    download_template_text:
      'Download your Amazon SKUs from Download Template button',
    download_template: 'Download Template',
    in_progress: 'In Progress',
    request_template: 'Request Template',
    map_amazon_sku: (ctx) =>
      `Map your Amazon SKU's with ${ctx.named('marketplaceTitle')}`,
    upload_template_text: (
      ctx
    ) => `Check your template double time and upload your template to sync
    your Amazon prices with ${ctx.named('marketplaceTitle')}`,
    uploading_field: (ctx) => `Uploading ${ctx.named('field')}`,
    upload_template: 'Upload Template',
    upload_files: 'Upload Files',
    upload_info_text:
      'Once your template is uploaded, you will receive an email for the report of your upload.',
    upload_status: 'Upload Status',
    template: 'Template',
    file: 'File,',
    processing_file: 'Processing File',
    results: 'Results',
  },
  marketplace_price_flex: {
    price_flex_toggle_title: 'Set your price flexibility',
    price_flex_toggle_description: (ctx) =>
      `Set your ${ctx.named(
        'marketplaceTitle'
      )} price flexibility and choose stores you want to apply.`,
    notification_below_popup: (ctx) =>
      `Changing the product prices on your ${ctx.named(
        'marketplaceTitle'
      )} store below Amazon prices may cause buybox suppression on Amazon. Do you want to continue?`,
    notification_popup: 'Your changes will be saved. Do you want to continue?',
  },
};
