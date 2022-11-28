let mongoose = require("mongoose")
let SchemaPaypal = require("../schema/paypal.schema")
let {connect} = require("../../libs/persistence/connection")
const SchemaClients = require("../schema/clients.schema");

class PaypalModel
{
    async insertPaypal(obj)
    {
        try{
            connect()
            let oS = new SchemaPaypal()
            oS.idPaypal = obj.idPaypal
            oS._idCliente = mongoose.Types.ObjectId(obj._idCliente);
            oS.total = obj.total
            oS.date_Compra =  Date.now()
            oS.detalleCompra = obj.detalleCompra
            await oS.save()
            return 200

        }catch (e)
        {
            console.log(e.toString())
            return 400
        }
    }

    async readComprasRealizadas(_id)
    {
        connect()
        console.log(_id)
        try {
            var result = await SchemaPaypal.find({_idCliente: mongoose.Types.ObjectId(_id)})
            return result
        }catch (e) {
            console.log(e)
            return []
        }
    }


    async readVentasRealizadas()
    {
        connect()

        try {
            var result = await SchemaPaypal.find()
            return result
        }catch (e) {
            console.log(e)
            return []
        }
    }


}

module.exports = PaypalModel