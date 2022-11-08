let PaypalModel = require("../model/paypal.model")
const oP = new PaypalModel()
class PayPalController
{
    async registroClientsModel(obj)
    {
        var datos = await oP.insertPaypal(obj)
        return datos
    }

    async readComprasRealizadasPaypal(_id)
    {
        var datos = await oP.readComprasRealizadas(_id)
        return datos
    }


    async readVentasRealizadasPaypal()
    {
        var datos = await oP.readVentasRealizadas()
        return datos
    }

}

module.exports = PayPalController