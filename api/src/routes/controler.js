const jwt = require('jsonwebtoken');
const {secret,admin}={secret:process.env.SECRET,admin:process.env.ADMIN_TOKEN}
const { Client } = require('../db');

const authAdmin=function(req, res,next){
    const admin1= req.headers.authorization&&req.headers.authorization.split(' ')[1]
    const verification=admin1===admin

    verification? next():res.sendStatus(401)
}
 
const auth = function(req,res,next){
 const user= req.headers.authorization&&req.headers.authorization.split(' ')[1]
   const verification=user===admin
  try{
        const cliente =jwt.verify(user, secret)
        const token = Client.findOne({where:{name:cliente.cliente.name,mail:cliente.cliente.mail}}) 
        token|| verification ?next():res.sendStatus(401)
    }catch(error){
       console.log(error);res.sendStatus(401)
   }
}


module.exports = {auth,authAdmin};