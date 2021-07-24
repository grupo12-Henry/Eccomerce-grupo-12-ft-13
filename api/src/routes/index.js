const { Router } = require('express');
const routesAdmin = require('./routesAdmin/index.js')
const routesUser = require('./routesUser/index.js')

const router = Router();
router.use('/admin',routesAdmin)
router.use('/',routesUser)
// router.use('/')

module.exports = router;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



