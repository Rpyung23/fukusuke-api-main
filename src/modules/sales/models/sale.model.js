const createModel = require('../../../libs/module/module');
const { Product } = require('../../products/models/product.model');

const Sale = createModel('Sale', {
  clientId: String,
  priceBeforeDiscount: Number,
  discount: Number,
  priceAfterDiscount: Number,
  products: [Product],
  status: String,
});

module.exports = {
  Sale,
};
