const { Router } = require('express');
//modelos acá:
const router = Router();
// const { Client, Order, Product, Shipping , order_detail} = require('../../db');
const Sequelize = require('sequelize');
// const order = require('../../models/order');
const bodyParser = require("body-parser")
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// app.use(bodyParser.urlencoded({ extended: false }))
// Agrega credenciales
mercadopago.configure({
  access_token: 'APP_USR-392066547320183-072316-f819befeb9b16b2530ad2ab1fd244dd3-795901018' // TETE
});



router.post('/', (req, res)=>{
    let preference = {
        items: [
        //   {
        //     id: '',
        //     category_id: '',
        //     currency_id: 'ARS',
        //     description: '',
        //     title: 'Mi producto',
        //     quantity: 1,
        //     unit_price: 100
        //   }
        //     title: 'Mi producto',
        //     unit_price: 100,
        //     quantity: 1,
        //   },
        ],
        back_urls: {
            success: 'http://localhost:3000/',
            failure: 'http://localhost:3000/',
            pending: 'http://localhost:3000/',
          },
        
    };
    req.body.forEach(x=> preference.items.push({id: x.id, currency_id:'ARS', quantity: x.cantidad, title: x.name||x.title, unit_price:x.price}))
      
      mercadopago.preferences.create(preference)
      .then(function(response){
          console.log(response)
          res.send( response.body.sandbox_init_point)
      }).catch(function(error){
        console.log('error',error);
      });
    // res.send('hola')
})

module.exports = router;

/*
APRO: Pago aprobado.
CONT: Pago pendiente.
OTHE: Rechazado por error general.
CALL: Rechazado con validación para autorizar.
FUND: Rechazado por monto insuficiente.
SECU: Rechazado por código de seguridad inválido.
EXPI: Rechazado por problema con la fecha de expiración.
FORM: Rechazado por error en formulario.

*/