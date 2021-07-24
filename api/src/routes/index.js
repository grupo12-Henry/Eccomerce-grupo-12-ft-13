const { Router } = require('express');
const routesAdmin = require('./routesAdmin/index.js')
const routesUser = require('./routesUser/index.js')
const routesCheckout = require('./routesCheckout/index.js')

const router = Router();
router.use('/admin',routesAdmin)
router.use('/',routesUser)
<<<<<<< HEAD
// router.use('/')
=======
router.use('/checkout', routesCheckout)
>>>>>>> main

module.exports = router;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



