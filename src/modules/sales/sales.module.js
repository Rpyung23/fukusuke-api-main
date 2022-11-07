const createModule  = require('../../libs/module/module');
const { registerSalesController } = require('./controllers/sales.controller');

const salesModule = createModule();

registerSalesController(salesModule);

module.exports = { salesModule };
