const { createModel } = require('../../../libs/persistence');

const User = createModel('User', {
  type: String,
  id: Number,
  name: String,
  email:{type:String,required:true,unique:true},
  password: String,
});

module.exports = {
  User,
};
