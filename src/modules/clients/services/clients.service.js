const { Client } = require('../models/client.model');

const findOne = (id) => Client.findById(id);

const create = (payload) => Client.create(payload);

const update = (id, payload) =>
  Client.findByIdAndUpdate(id, payload, {
    returnDocument: 'after',
  });

const remove = (id) => Client.findByIdAndRemove(id);

module.exports = {
  findOne,
  create,
  update,
  remove,
};
