const { User } = require('../models/user.model');

const findOne = (id) => User.findById(id);

const create = (payload) => User.create(payload);



const update = (id, payload) =>
  User.findByIdAndUpdate(id, payload, {
    returnDocument: 'after',
  });

const remove = (id) => User.findByIdAndRemove(id);

module.exports = {
  findOne,
  create,
  update,
  remove,
};
