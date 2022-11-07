let express = require('express')
let app = express()
let {LogInUserJWT} = require("../../libs/jwt/jwt")
let UsersController = require("../controller/users.controller")
let oUC = new UsersController()

app.post("/loginUsers",async function (req,res)
{
    var obj = {
        email:req.body.email,
        password:req.body.password,
    }
    var datos = await oUC.loginController(obj)

    res.status(200).json({
        jwt:datos.datos != null ? LogInUserJWT(datos.datos) : null,
        msm: (datos.datos == null && datos.error == null) ? "No existen datos disponibles" : "LogIn con éxito"
    })
})



app.post("/registerUsers",async function (req,res)
{
    var obj = {
        name: req.body.name,
        type: req.body.type,
        email: req.body.email,
        password: req.body.password,
        id: req.body.id
    }

    var datos = await oUC.registerControllerUser(obj)

    res.status(200).json({
        msm: datos.error == null ? 'USUARIO ADMINISTRATIVO REGISTRADO CON EXITO': datos.error,
        datos: datos.datos
    })


})



module.exports = app
