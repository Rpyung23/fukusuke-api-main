const { Sale } = require('../models/sale.model');

const findOne = (id) => Sale.findById(id);

const create = (payload) => Sale.create(payload);

const update = (id, payload) =>
  Sale.findByIdAndUpdate(id, payload, {
    returnDocument: 'after',
  });

const remove = (id) => Sale.findByIdAndRemove(id);

module.exports = {
  findOne,
  create,
  update,
  remove,
};
