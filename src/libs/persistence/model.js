const mongoose = require('mongoose');
const { Schema } = mongoose;

const createModel = (name, schema) => {
  const schemaInstance = new Schema(schema);
  const model = new mongoose.model(name, schemaInstance);

  return model;
};

module.exports = {
  createModel,
};
