let {Schema,model,ObjectId} = require('mongoose')
const SchemaUsers = Schema({
    type: String,
    name: String,
    email:{type:String,required:true,unique:true},
    password: String,
},{collection:'users'});

module.exports = model('User2',SchemaUsers)