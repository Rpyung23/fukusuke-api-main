let express = require('express')
let app = express()
let {isOkUserJWT,getTipoRoles} = require("../../libs/jwt/jwt")
var paypal = require('paypal-node-sdk');


app.post("/PagoPaypal",isOkUserJWT,async function (req,res)
{
    var amount = req.body.amount
    var items = req.body.items

    var permisos = req.body.data

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



module.exports = app