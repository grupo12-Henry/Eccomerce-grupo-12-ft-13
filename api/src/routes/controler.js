const jwt = require('jsonwebtoken');
const {secret,admin}={secret:process.env.SECRET,admin:process.env.ADMIN_TOKEN}
const { Client } = require('../db');


const authAdmin=function(req, res,next){
    const admin1= req.headers.authorization&&req.headers.authorization.split(' ')[1]
    const verification=admin1===admin

    verification? next():res.sendStatus(401)
}
 
const auth = async function (req,res,next){
 const tokenHeader= req.headers.authorization&&req.headers.authorization.split(' ')[1]||req.query.token
   const verification=tokenHeader===admin
  try{
        const user1= jwt.verify(tokenHeader, secret)
       
        var user = await Client.findOne({where:{mail:user1.mail}})
        
        user.dataValues.token===tokenHeader|| verification ?next():res.sendStatus(401)
    }catch(error){
       console.log(error);res.sendStatus(401)
   }
}


module.exports = {auth,authAdmin};