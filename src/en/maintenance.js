export default {
  maintenance: 'Maintenance',
  maintenance_description: (ctx) =>
    `Please be advised that there will be scheduled maintenance across our network from ${ctx.named(
      'from'
    )} to ${ctx.named('to')}`,
  maintenance_details:
    'This is because we are performing Maintenance. We apologize for any inconvenience. For more information, or if you have any questions, please contact success@eva.guru',
};
