let {Schema,model,ObjectId} = require('mongoose')
const SchemaPaypal = Schema({
    idPaypal: {type:String,required: true},
    _idCliente:{type:ObjectId,required:true},
    total: String,
    date_Compra:{type:Number},
    detalleCompra:{type:String}
},{collection:'paypal'});

module.exports = model('paypal',SchemaPaypal)