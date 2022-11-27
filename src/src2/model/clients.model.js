let SchemaClients = require("../schema/clients.schema")
let {connect} = require("../../libs/persistence/connection")
class ClientsModel
{
    async loginClientsModel(user)
    {
        connect()
        try {
            var result = await SchemaClients.findOne({email:user.email,password:user.password})
            return {error:null,datos:result}
        }catch (e) {
            return {error:e.toString(),datos:null}
        }
    }

    async registroClientsModel(user)
    {
        try{
            connect()
            let oS = new SchemaClients()
            oS.name = user.name
            oS.dni = user.dni
            oS.email = user.email
            oS.phone = user.phone
            oS.password = user.password
            await oS.save()
            var datos = await SchemaClients.findOne({
                email:user.email
            })

            return {
               error:null,
                datos:datos
            }
        }catch (e) {
            console.log(e)
            return {
                error:e.toString(),
                datos:null
            }
        }

    }


}

module.exports = ClientsModel