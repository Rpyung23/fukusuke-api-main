const { Product } = require('../models/product.model');

const findOne = (id) => Product.findById(id)

const findAll = () => Product.find()

const create = (payload) => Product.create(payload);

const update = (id, payload) =>
  Product.findByIdAndUpdate(id, payload, {
    returnDocument: 'after',
  });

const remove = (id) => Product.findByIdAndRemove(id);

module.exports = {
  findOne,
  create,
  update,
  remove,
  findAll
};
