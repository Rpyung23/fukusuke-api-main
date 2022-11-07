const createModule = require('../../libs/module/module')
const {
  registerProductsController,
} = require('./controllers/products.controller');

const productsModule = createModule();

registerProductsController(productsModule);

module.exports = productsModule;
