let express = require('express')
let app = express()
let PayPalController = require("./../controller/paypal.controller")
let oP = new PayPalController()
let {isOkUserJWT,getTipoRoles} = require("../../libs/jwt/jwt")
var paypal = require('paypal-node-sdk');



app.post("/PagoPaypal",isOkUserJWT,async function (req,res)
{
    var amount = req.body.amount
    var items = req.body.items

    var permisos = req.body.data
    console.log(permisos)
    console.log(amount)
    console.log(items)

    if(permisos.rol == getTipoRoles().cliente)
    {
        try {
            paypal.configure({
                'mode': 'sandbox', //sandbox or live
                'client_id': 'AW5M_dedVij9riC3tZgWWL7mY7oXZFbWmZiv3oVcwbpRhzt5AhHp_x9Q1WmVLRLiaxgXgkomfSZJvVPx',
                'client_secret': 'EJ29PilMKKrerep0zs5x5By1qZd_Pxa90JleTTNpfyg92UUIgZnAXRuChYpAcUsdZTGnZCvBWNRu132G'
            });

            var newPayment = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": "http://return.url",
                    "cancel_url": "http://cancel.url"
                },
                "transactions": [{
                    "item_list": {
                        "items": items
                    },
                    "amount": amount,
                    "description": "This is the payment description."
                }]
            };

            var payment = await paypal.payment.create(newPayment);

            var codeP = oP.registroClientsModel({
                idPaypal: payment.id,
                total: payment.transactions[0].amount.total,
                _idCliente: req.body.data.idUser,
                detalleCompra:req.body.detalleCompra
            })

            res.status(200).json({
                idPaypal: payment.id,
                transactions:payment.transactions,
                msm: payment.intent + " "+payment.state
            })

        }catch (e) {
            res.status(200).json({
                idPaypal: null,
                transactions:null,
                msm:e.toString()
            })
        }
    }else{
        res.status(403)
            .json({
            idPaypal: null,
            transactions:null,
            msm:'ROL NO PERMITIDO'
        })
    }


})

app.post("/registerPagoPaypal",isOkUserJWT,async function (req,res){
    var permisos = req.body.data
    console.log(req.body.data.idUser)
    if(permisos.rol == getTipoRoles().cliente)
    {
        try {

            var codeP = oP.registroClientsModel({
                idPaypal: req.body.idPaypal,
                total: req.body.total,
                _idCliente: req.body.data.idUser,
                detalleCompra:req.body.detalleCompra
            })

            res.status(200).json({
                status_code : 200
            })

        }catch (e) {
            res.status(200).json({
                status_code : 400
            })
        }
    }else{
        res.status(403)
            .json({
                idPaypal: null,
                transactions:null,
                msm:'ROL NO PERMITIDO'
            })
    }
})

app.post("/readComprasRealizadasPaypal",isOkUserJWT,async function (req,res)
{
    var permisos = req.body.data
    console.log(permisos.idUser)

    if(permisos.rol == getTipoRoles().cliente)
    {
        try {

            var datos = await oP.readComprasRealizadasPaypal(req.body.data.idUser)
            res.status(200).json(datos)

        }catch (e) {
            res.status(200).json({
                idPaypal: null,
                transactions:null,
                msm:e.toString()
            })
        }
    }else{
        res.status(403)
            .json({
                idPaypal: null,
                transactions:null,
                msm:'ROL NO PERMITIDO'
            })
    }


})


app.post("/readVentasRealizadasPaypal",isOkUserJWT,async function (req,res)
{
    var permisos = req.body.data
    console.log(permisos.idUser)

    if(permisos.rol == getTipoRoles().administrativos)
    {
        try {

            var datos = await oP.readVentasRealizadasPaypal()
            res.status(200).json({
                datos:datos,
                msm:datos.length > 0 ? '' : 'ROL NO PERMITIDO'
            })

        }catch (e) {
            res.status(200).json({
                datos:[],
                msm:'ROL NO PERMITIDO'
            })
        }
    }else{
        res.status(403)
            .json({
                datos:[],
                msm:'ROL NO PERMITIDO'
            })
    }


})



module.exports = app