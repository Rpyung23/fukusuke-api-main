let express = require('express')
let app = express()
let {LogInUserJWT, LogInClientsJWT} = require("../../libs/jwt/jwt")
let ClientsController = require("../controller/clients.controller")
let oUC = new ClientsController()


app.post("/loginClients",async function (req,res)
{
    var obj = {
        email:req.body.email,
        password:req.body.password,
    }

    var datos = await oUC.loginController(obj)

    res.status(200).json({
        jwt:datos.datos != null ? LogInClientsJWT(datos.datos) : null,
        msm: (datos.datos == null && datos.error == null) ? "No existen datos disponibles" : "LogIn con éxito"
    })
})

app.post("/registerClient",async function (req,res)
{
    var obj = {
        name: req.body.name,
        dni: req.body.dni,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }

    try {
        var datos = await oUC.registroClientsModel(obj)

        res.status(200).json({
            msm: datos.error == null ? 'CLIENTE REGISTRADO CON EXITO': datos.error,
            datos: datos.datos
        })
    }catch (e) {
        res.status(200).json({
            msm: e.toString(),
            datos: null
        })
    }


})



module.exports = app
