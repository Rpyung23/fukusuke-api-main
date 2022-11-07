let SchemaUsers = require("../schema/user.schema")
let {connect} = require("../../libs/persistence/connection")
class UsersModel
{
    async loginUserModel(user)
    {
        connect()
        try {
            var result = await SchemaUsers.findOne({email:user.email,password:user.password})
            return {error:null,datos:result}
        }catch (e) {
            return {error:e.toString(),datos:null}
        }
    }


    async registerUserModel(user)
    {
        try{
            connect()
            let oU = new SchemaUsers()
            oU.type = user.type
            oU.name = user.name
            oU.email = user.email
            oU.password  = user.password
            await oU.save()
            var datos = await SchemaUsers.findOne({
                email:user.email
            })
            return {
                error:null,
                datos:datos
            }
        }catch (e) {
            return {
                error:e.toString(),
                datos:null
            }
        }
    }


}

module.exports = UsersModel