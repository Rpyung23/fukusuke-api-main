let {Schema,model,ObjectId} = require('mongoose')
const SchemaClients = Schema({
    name: String,
    dni: {type:String,required:true,unique:true},
    email: {type:String,required:true,unique:true},
    password:String,
    phone: String,
},{collection:'clients'});

module.exports = model('Clients2',SchemaClients)