const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

const EMPLOYEE_ADDED = 'EMPLOYEE_ADDED';

function employeeAdded(employee) {
  pubsub.publish(EMPLOYEE_ADDED, { employeeAdded: employee });
}

module.exports = {
  pubsub,
  EMPLOYEE_ADDED,
  employeeAdded,
};
