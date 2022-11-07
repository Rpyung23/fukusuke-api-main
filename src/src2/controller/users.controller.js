let UsersModel = require("../model/users.model")
const oU = new UsersModel()
class UsersController
{
    async loginController(user)
    {
        var datos = await oU.loginUserModel(user)
        return datos
    }

    async registerControllerUser(user)
    {
        var datos = await oU.registerUserModel(user)
        return datos
    }
}

module.exports = UsersController