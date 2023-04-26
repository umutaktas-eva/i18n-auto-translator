export default {
  receive: 'Receive',
  receive_order: 'Receive Order',
  ro: 'RO',
  ro_status: 'RO Status',
  fully_received: 'Fully Received',
  partially_received: 'Partially Received',
  non_received: 'Non-Received',
  overly_received: 'Overly Received',
  closed: 'Closed',
  vendor_ro_code: 'Vendor Receive Order Code',
  receive_order_title: 'Your Receive Info',
  receive_order_info:
    ' In order to make successful and systematical receive order, please provide requested information below.',
  receive_order_number: 'RO Number',
  receive_order_identifier_type: 'RO Identifier Type',
  identifier: 'Identifier',
  ro_date: 'RO Date',
  ship_from: 'Ship From',
  ship_to: 'Ship To',
  carrier_company: 'Carrier Company',
  arrival_date: 'Arrival Date',
  estimated_arrival_date: 'Estimated Arrival Date',
  manually: 'Manually',
  shipping_method: 'Shipping Method',
  your_items: 'Your Items',
  add_item: 'Add Item',
  expiration_date: 'Expiration Date',
  add_item_info:
    'Now, you can easily add your items with using the search bar below.',
  disable_btn_tooltip_info:
    'Please fulfill the required fields above to enable Add Item.',
  item_table: 'Item Table',
  item_code: 'Item Code',
  save_item_receive_info: 'Please add an item/items to receive order to save.',
  delete_ro: 'Delete Receive Order',
  delete_ro_warning_info:
    'This receive order is going to be deleted due to having no active items. Are you sure you want to delete this receive order?',
  remove_product_from_ro: 'Remove product from receive order',
  remove_product_from_ro_info:
    'This product will be removed after receive order has been saved. Are you sure?',
  confirm_close_reopen_ro: (ctx) =>
    `Are you sure you want to ${ctx.named('closeReopen')} this receive order?`,
  close: 'Close',
  reopen: 'Reopen',
  remaining_item_quantity: 'Remaining Item Quantity',
  ro_identifier_tag: 'RO Identifier Tag(s)',
  received_item_quantity: 'Received Item Quantity',
  ro_total_item_quantity: 'RO Total Item Quantity',
  add_new_ro: 'Add New Receive Order',
  saved_ro_list_title: 'You can see orders you have made listed below.',
  item_list: 'Item List',
  ro_item_code: 'RO Item Code',
  receive_without_removal: 'Receive Without Removal',
  receive_item: 'Receive Item',
  return_item: 'Return Item',
  receive_order_item: 'Receive Order Item',
  add_new_location: 'Add as new Location',
  warehouse_location: 'warehouse location',
  previously_received_items: (ctx) =>
    `Previously received items in ${ctx.named('condition')} condition`,
  previously_added_received_items: 'Previously added receive order items',
  inspect_required_message:
    'If the “Returned” condition is selected, the received quantity will not be added to inventory. Inspect is required on Inventory List.',

  errors: {
    select_store: 'Please select a store to continue.',
    error_by_exporting_data:
      'Something went wrong while exporting the data. Please try again later',
    error_by_fetching_vendor:
      'Something went wrong while fetching vendor list. Please try changing store or refreshing the page.',
  },
  message: {
    has_been_saved: 'has been saved',
    has_been_delete: 'has been deleted successfully',
    not_deleted: 'could not be deleted, please try again later',
    ro_saved_successfully: 'Receive order has been saved successfully',
    product_not_included_ro: 'Product is not included in this RO',
    new_location_added: 'New Location is added.',
    type_choose_case_type: 'Type quantity and choose case type',
  },

  hints: {
    search_different_types:
      '@:general.terminology.upc, @:general.terminology.ean, @:general.terminology.fnsku, @:general.terminology.asin, @:general.terminology.sku, @:general.terminology.product_name, @:general.terminology.brand, @:general.terminology.other_code',
  },
};
