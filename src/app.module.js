const createModule = require('./libs/module/module');
const productsModule = require('./modules/products/products.module');
const clientsModule = require('./modules/clients/clients.module');
/*const reportsModule = require('./modules/reports/reports.module');*/
const usersModule = require('./modules/users/users.module');
/*const ordersModule = require('./modules/orders/orders.module');
const salesModule = require('./modules/sales/sales.module');*/

const appModule = createModule();

appModule.use(productsModule);
appModule.use(clientsModule);
/*appModule.use(reportsModule);*/
appModule.use(usersModule);
/*appModule.use(ordersModule);
appModule.use(salesModule);*/

module.exports = appModule;
