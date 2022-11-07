const { createModel } = require('../../../libs/persistence');

const Order = createModel('Order', {
  id: Number,
  date: String,
  total: Number
});

module.exports = {
  Order,
};
