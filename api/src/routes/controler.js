const jwt = require('jsonwebtoken');
const {secret,admin}={secret:process.env.SECRET,admin:process.env.ADMIN_TOKEN}
const { Client } = require('../db');

const authAdmin=function(req, res,next){
    const admin1= req.headers.authorization&&req.headers.authorization.split(' ')[1]
    const verification=admin1===admin

    verification? next():res.sendStatus(401)
}
 
const auth = async function (req,res,next){
 const tokenHeader= req.headers.authorization&&req.headers.authorization.split(' ')[1]
   const verification=tokenHeader===admin
  try{
        
        const user = await Client.findOne({where:{token:tokenHeader}})
        
        user.dataValues.token===tokenHeader|| verification ?next():res.sendStatus(401)
    }catch(error){
       console.log(error);res.sendStatus(401)
   }
}


module.exports = {auth,authAdmin};