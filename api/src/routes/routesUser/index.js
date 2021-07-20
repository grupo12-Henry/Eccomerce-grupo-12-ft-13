const { Router } = require('express');
//modelos acá:
const router = Router();
const { Client, Order, Product, Shipping , order_detail} = require('../../db');
const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');
const order = require('../../models/order');
const Op = Sequelize.Op;

//FUNCIONAN OK:

//trae todos los productos-->LISTO
router.get('/productos/all', async (req, res) => {
  try {
     const array_product = await Product.findAll()
     res.send(array_product).status(200)}
  catch(error){
     res.send(error).status(404);
  }
})

//trae el detalle de un producto -->LISTO
router.get('/productos/:id', async (req, res) => {
  const id = req.params.id
  try {
      const product = await Product.findByPk(id)
      product?res.send(product).status(200):res.sendStatus(400)
  } catch (error) {
      res.send(error).status(404);
  }
})



//agrega un nuevo cliente --> OK 
router.post('/clientesPost', async (req, res) => {
  let {
		name,
		lastName,
		phone,
		state,
		adress,
		mail,
		identityCard,
    token
	} = req.body;
 try {
  // const newClient = await Client.findOrCreate({ where:{mail, token, name},
    const [newClient, status] = await Client.findOrCreate({ where:{mail, name},
    deault:{ name, lastName, phone, state, adress, mail, identityCard,token}
  })
  return res.send(newClient)
  } catch(error){
   res.send(error).status(404);
}
})



//CREA UN NUEVO PEDIDO, PASANDOLE TODOS LOS PARAMETROS NECESARIOS
//products viene asi del front : "products":[{"id":2, "cantidad": 13, "subtotal": 150},{"id":9},{"id":5}]

  router.post('/orderPost', async (req, res) => {
     const { idClient,ticket, date,bill, paymentMethod,adress,mail,shippingDate,state,products,freight,guideNumber,cost,ivaCondition,ivaCost,subtotal,cantidad} = req.body;
     try {
      const user = await Client.findOrCreate({where:{id:idClient}
      })
      console.log('user', user)
      //  const user = await Client.findByPk(idClient)
       const newOrder = await Order.create({
         ticket, date, bill, paymentMethod, adress, ticket, mail, shippingDate, state, products, freight, guideNumber, cost, ivaCondition, ivaCost , subtotal,cantidad})
       newOrder.setClient(user)
       products.forEach(e=>{
         newOrder.setProducts(e.id, {through:{cantidad: e.cantidad, subTotal: e.subtotal}}); 
         })
       return res.send(newOrder)
       } catch(error){
        res.send(error).status(404);
     }
   })


//GET PEDIDOS'/pedidos/:id'  (donde id es el id de cliente)
//te devuelvo los pedidos especificos para un cliente y el estado del envio de cada pedido

router.get('/pedidos/:id',async (req, res)=>{
  const {id} = req.params;
  try {
   const clientPedidos = await Client.findAll({
    include:{
     model: Order,
     attributes:['date','ticket'],
     include:[{model: Product, atributes:['name','price','image']}]
    },
   attributes: ['name', 'lastName'],
   where:{ id: id }
  })
   clientPedidos?res.send(clientPedidos):res.sendStatus(400);
  } catch (error) {
    res.send(error).status(404);
  }
})


// router.get('/users/id/:id', async (req, res) => {//cambiar los nombres de las llamadas
//   const id = req.params.id
//   try {
//       const user = await Client.findByPk(id, {
//           include: {
//               model: Order,
//               include:[{model: Shipping,attributes:['state']},
//              {model: Product,atributes:['name','price','image']}],
//              attributes: {
//               exclude: ['createdAt', 'updatedAt']
//           }        
//           }
//       })
//       user ? res.send(user) : res.sendStatus(400)
//   } catch (error) {
//       res.send(error).status(404)
//   }
// })



// -Al hacer un GET a '/users/:id' me deberá permitir ver mi información de usuario registrada.
//trae el detalle de un producto -->LISTO
router.get('/users/:id', async (req, res) => {
  const id = req.params.id
  try {
      const user = await Client.findByPk(id)
      user?res.send(user).status(200):res.sendStatus(400)
  } catch (error) {
      res.send(error).status(404);
  }
})



//LISTO
router.get('/productos/', async (req, res) => {
  const {name}= req.query;
  try {
    const product = await Product.findAll({where: {name: {[Op.like]: `%${name}%`}}})
    product?res.send(product).status(200):res.sendStatus(400)
} catch (error) {
    res.send(error).status(404);
}
})

//GET PEDIDOS'/pedidos/' (de todos los clientes)

router.get('/pedidos',async (req, res)=>{
  try {
   const clientPedidos = await Client.findAll({
    include:{
     model: Order,
     attributes:['date','ticket'],
     include:{model: Product}
    },
   attributes: ['name', 'lastName'],
  })
   clientPedidos?res.send(clientPedidos):res.sendStatus(400);
  } catch (error) {
    res.send(error).status(404);
  }
})

// , atributes:['name','price','image'] saque linea 149 entre ] y ,




// router.get('/pedidos',async (req, res)=>{
//   try {
//     console.log('entro al try')
//    const clientPedidos = await Client.findAll({
//     include:[{
//     model: Order,
//     // as:'Pedidos',
//      attributes:['date','ticket'],
//     }],
//   attributes: ['name', 'lastName']
//   })
//   console.log(clientPedidos)
//   clientPedidos?res.send(clientPedidos):res.sendStatus(400);
//   } catch (error) {
//     res.send(error).status(404);
//   }
// })




// falta solucionar cuando me pasan un phone
router.put('/users/:id', async (req, res)=>{
    const id = req.params.id
    let phone = parseInt(req.body.phone,10)
    const {name, lastName, state, adress, mail, identityCard }=req.body
    try {
        const user = await Client.findByPk(id)
        // phone?phone=strtoint(phone):null;
        console.log(typeof(phone))
        // phone?phone = strtoint(phone):null;
        await user.update({
            name: name||user.dataValues.name, 
            lastName: lastName||user.dataValues.lastName,
            phone: phone|| user.dataValues.phone, 
            state: state||user.dataValues.state,
            adress: adress||user.dataValues.adress,
            mail: mail||user.dataValues.mail,
            identityCard: identityCard||user.dataValues.identityCard
       })
          if(user){        
              res.send(user).status(200)
          }else{ res.sendStatus(400)}
    }catch (error) {
        res.send(error).status(404)
        console.log('hasta las manos')
    }  
})



  

module.exports = router;