const { Order } = require('../models/order.model');

const findOne = (id) => Order.findById(id);

const create = (payload) => Order.create(payload);

const update = (id, payload) =>
  Order.findByIdAndUpdate(id, payload, {
    returnDocument: 'after',
  });

const remove = (id) => Order.findByIdAndRemove(id);

module.exports = {
  findOne,
  create,
  update,
  remove,
};
