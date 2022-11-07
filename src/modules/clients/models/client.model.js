const { createModel } = require('../../../libs/persistence');

const Client = createModel('Client', {
  name: String,
  dni: {type:String,required:true,unique:true},
  email: {type:String,required:true,unique:true},
  password:String,
  phone: String,
});

module.exports = {
  Client,
};
