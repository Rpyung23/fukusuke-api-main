let {Schema,model,ObjectId} = require('mongoose')
const SchemaPaypal = Schema({
    idPaypal: String,
    email:{type:String,required:true,unique:true},
    total: String,
},{collection:'paypal'});

module.exports = model('paypal',SchemaPaypal)