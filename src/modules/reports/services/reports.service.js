const { Report } = require('../models/report.model');

const findOne = (id) => Report.findById(id);

const create = (payload) => Report.create(payload);

const update = (id, payload) =>
  Report.findByIdAndUpdate(id, payload, {
    returnDocument: 'after',
  });

const remove = (id) => Report.findByIdAndRemove(id);

module.exports = {
  findOne,
  create,
  update,
  remove,
};
