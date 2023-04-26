export default {
  tabs_title: {
    general: 'General',
    user_settings: 'User Settings',
    change_password: 'Change Password',
    payments: {
      payments: 'Payments',
      invoice_receipt: 'Invoice & Receipt',
      payment_methods: 'Payment Methods',
    },
  },
  general: {
    cancellation_request: 'Cancellation Request',
    cancellation_reason: 'Cancellation Reason',
    reason_categories: 'Reason Categories',
    select_option: 'Select Option',
    reason_below: 'Please enter the reason below',
    keep_reimbursements: 'I want to keep reimbursements',
    reimbursement_fee_info:
      '* Your reimbursement service fee will be 16% of the successful recovery amount.',
    cancel_subscription_info: (
      ctx
    ) => `We have received your request to cancel your subscription. Your
    subscription will be canceled on ${ctx.named('date')}, you can continue to
    use Eva until cancellation day.`,
    reason_options: {
      0: 'Amazon Account Suspended',
      1: 'Out of Business',
      2: 'Financial Issues',
      3: 'Switch to Other Platforms',
      4: 'No Pricer will be used',
      5: 'Platform Dissatisfaction',
      6: 'Customer Support',
      7: 'Dissatisfaction',
      8: 'Other',
    },
    request_received: 'Request Received',
    in_review: 'In Review',
  },
  change_password: {
    old_placeholder: 'Old Password',
    new_placeholder: 'New Password',
    confirm_placeholder: 'Confirm Password',
    successful_password_changes:
      'Your password has been successfully change. Please',
    to_your_eva_account: 'to your Eva account.',
    authorization_error: 'Authorization token error',
    old_password_wrong: 'Old password wrong.',
  },
  user_settings: {
    invite_new_user: (ctx) =>
      `Invite ${ctx.named('is_new') === true ? 'New' : ''} User ${
        ctx.named('steps') === true ? 'just in 2 steps!' : ''
      }`,
    please_invite_user: 'Please Invite User',
    user_list: 'User List',
    select_store: 'Select Store',
    user_name: 'User Name',
    permission: 'Permission',
    stores: 'Stores',
    pending_registration: 'Pending Registration',
    pending_verification: 'Pending Verification',
    manage_permissions: 'Manage Permissions',
    update_stores: 'Update Stores',
    email_already_registered:
      'The email address you have entered is already registered',
    connect_store: 'Connect Store',
    all_stores: 'All Stores',
    select_at_least_one_store: 'Please select at least one store to proceed.',
    select_all_stores: 'Select All Stores',
    none: 'None',
    view: 'View',
    edit: 'Edit',
    enter_user_email: 'Please Enter User Email and Click Next.',
    discard_user_info: (ctx) =>
      `Are you sure you want to discard ${
        ctx.named('first_name') ? ctx.named('first_name') : 'this'
      } ${ctx.named('last_name')} user from ${ctx.named('store_name')}?`,
    select_and_connect_stores: 'Select and Connect Stores for for this User.',
    all_of_your_stores: 'all of your stores',
  },
  payments: {
    invoice_receipt: {
      payments: 'Payments',
      amount: 'AMOUNT',
      status: 'STATUS',
      due_date: 'DUE DATE',
      paid_status: (ctx) =>
        `${
          ctx.named('paid_status_id') === 1
            ? 'Paid'
            : ctx.named('paid_status_id') === 2
            ? 'Partially Paid'
            : 'Unpaid'
        }`,
      view_invoice: 'View Invoice',
      payments_popup_type: (ctx) =>
        `${ctx.named('prompt_type') === 1 ? 'Invoice' : 'Receipt'}`,
      download: 'Download',
      downloading: 'Downloading',
      paid_amount: 'Paid Amount',
      amount_paid: (ctx) => `Amount ${ctx.named('to_be')} Paid`,
      total: 'Total',
      need_help: 'Have Questions? Visit our support site at',
      contact_us: 'Or contact us at',
      invoice_pdf_is_ready: 'Invoice PDF is ready.',
      receipt_pdf_is_ready: 'Receipt PDF is ready.',
      invoice_pdf_is_preparing_to_download:
        'Invoice PDF is preparing to download.',
      receipt_pdf_is_preparing_to_download:
        'Receipt PDF is preparing to download.',
    },
    payment_methods: {
      info_text:
        'Click the "Update Payment" button to update your credit card information.',
      update_payment_method: 'Update Payment Method',
      note: '**Please note that once the payment method is updated, all stores will be affected.',
      card_information: 'Card Information',
      update: 'Update',
    },
  },
};
