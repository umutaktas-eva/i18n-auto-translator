export default {
  reimbursement: 'Reimbursement',
  reimbursed: 'Reimbursed',
  recovery: 'Recovery',
  inventory: 'Inventory',
  potential: 'Potential',
  financial: 'Financial',
  overview: 'Overview',
  reimbursement_overview:
    '@:reimbursement.reimbursement @:reimbursement.overview',
  reimbursed_quantity: '@:reimbursement.reimbursed @:general.terms.quantity',
  reimbursed_inventory: '@:reimbursement.reimbursed @:reimbursement.inventory',
  inventory_reimbursed: '@:reimbursement.inventory @:reimbursement.reimbursed',
  inventory_recovery: '@:reimbursement.inventory @:reimbursement.recovery',
  financial_recovery: '@:reimbursement.financial @:reimbursement.recovery',
  potential_financial_recovery:
    '@:reimbursement.potential @:reimbursement.financial_recovery',
  potential_inventory_recovery:
    '@:reimbursement.potential @:reimbursement.inventory_recovery',
  last_18_months: 'Last 18 Months',
  last_18_months_forecast: '@:reimbursement.last_18_months Forecast',
  reimbursed_amount: '@:reimbursement.reimbursed @:general.terminology.amount',
  reimbursed_amount_tooltip: 'Claimed by Reimbursement Cases.',
  not_requested_description:
    'Subscribe to reimbursement and Eva team will analyze, combine and manage your FBA reimbursements starting from the last 18 months.',
  requested_description:
    'Thank you for your interest in reimbursement process. An email will be sent to you within couple of hours, please check your inbox for further instructions.',
  start_reimbursement_now: 'Start Reimbursement Now',
  thank_you: 'Thank you',
  thank_you_request:
    'Thank you for your request to start Reimbursement Service.',
  order_form_steps_prompt_description:
    'Thank you for your interest in reimbursement process. In order to <br /> start the reimbursement, please approve the order form.',
  order_form_welcome_eva:
    'Welcome to Eva, an email will be sent to you within couple of hours, <br /> please check your inbox for further instructions.',
  case_overview: 'Case @:reimbursement.overview',
  case_status: 'Case Status',
  reimbursement_id: '@:reimbursement.reimbursement ID',
  case_id: 'Case ID',
  reason: 'Reason',
  reasons: 'Reasons',
  total_reimbursed_amount: 'Total @:reimbursement.reimbursed_amount',
  total_reimbursed_quantity: 'Total @:reimbursement.reimbursed_quantity',
  inventory_cash_reimbursed:
    '@:reimbursement.inventory Cash @:reimbursement.reimbursed',
  created_by: 'Created By',
  creation_date: 'Creation Date',
  approval_date: 'Approval Date',
  other: 'Other',
  most_reimbursed_items_by: 'Most Reimbursed Items by',
  most_reimbursed_items_by_value:
    '@:reimbursement.most_reimbursed_items_by Value',
  most_reimbursed_items_by_quantity:
    '@:reimbursement.most_reimbursed_items_by Quantity',
  filter: 'Filter',
  last_settlement_date: 'Last Settlement Date: ',
  quantity_units: '@:general.terms.quantity (Units)',
  reimbursed_field_by: (ctx) =>
    `Reimbursed ${ctx.named('field')} By ${ctx.named('by')}`,
  get_status_from_api: (ctx) => {
    switch (ctx.named('status')) {
      case 'Pending':
        return 'Pending';
      case 'In Progress':
        return 'In Progress';
      case 'Closed':
        return 'Closed';
      case 'Invoiced':
        return 'Invoiced';
      case 'Paid':
        return 'Paid';
      case 'Approved':
        return 'Approved';
      default:
        return '';
    }
  },
  get_reason_from_api: (ctx) => {
    switch (ctx.named('reason')) {
      case 'Damaged Warehouse':
        return 'Damaged Warehouse';
      case 'Prime Wardrobe':
        return 'Prime Wardrobe';
      case 'Customer Return':
        return 'Customer Return';
      case 'Lost Warehouse':
        return 'Lost Warehouse';
      case 'Reimbursement Reversal':
        return 'Reimbursement Reversal';
      case 'Damaged Outbound':
        return 'Damaged Outbound';
      case 'Return Adjustment':
        return 'Return Adjustment';
      case 'General Adjustment':
        return 'General Adjustment';
      case 'FBA CLI Planned Fee Reimbursement':
        return 'FBA CLI Planned Fee Reimbursement';
      case 'Payment Retraction':
        return 'Payment Retraction';
      case 'Customer Service Issue':
        return 'Customer Service Issue';
      case 'Fee Correction':
        return 'Fee Correction';
      case 'Unplanned Service Fee':
        return 'Unplanned Service Fee';
      case 'Damaged Inbound':
        return 'Damaged Inbound';
      case 'Lost Inbound':
        return 'Lost Inbound';
      case 'Lost Outbound':
        return 'Lost Outbound';
      default:
        return '';
    }
  },
  get_reimbursement_detail_type: (ctx) => {
    switch (ctx.named('type')) {
      case 'Lost Warehouse':
        return 'Lost Warehouse';
      case 'Damaged Warehouse':
        return 'Damaged Warehouse';
      case 'Lost Inbound':
        return 'Lost Inbound';
      case 'Damaged Inbound':
        return 'Damaged Inbound';
      case 'Customer Service Issue':
        return 'Customer Service Issue';
      case 'Customer Return':
        return 'Customer Return';
      case 'Reimbursement Reversal (Negative)':
        return 'Reimbursement Reversal (@:general.terms.negative)';
      default:
        return '';
    }
  },
};
