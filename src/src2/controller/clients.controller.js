let ClientsModel = require("../model/clients.model")
const oU = new ClientsModel()
class ClientsController
{
    async loginController(user)
    {
        var datos = await oU.loginClientsModel(user)
        return datos
    }

    async registroClientsModel(user)
    {
        var datos = await oU.registroClientsModel(user)
        return datos
    }
}

module.exports = ClientsController