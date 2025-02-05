const cron = require('node-cron');

const scheduleCronJobs = () => {
  cron.schedule(process.env.CRON_SCHEDULE, () => {
    console.log('Executing scheduled task');
    // Add logic for cleanup or recurring tasks here
  });
};

module.exports = scheduleCronJobs;
