const createModule = require('../../libs/module/module');
const {
  registerOrdersController,
} = require('./controllers/orders.controller');

const ordersModule = createModule();

registerOrdersController(ordersModule);

module.exports = { ordersModule };