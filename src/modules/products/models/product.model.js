const { createModel } = require('../../../libs/persistence');

const Product = createModel('Product', {
  category: String,
  name: String,
  description: String,
  imagen: String,
  price: Number,
  discount: Number,
  stock: Number,
});

module.exports = {
  Product,
};
