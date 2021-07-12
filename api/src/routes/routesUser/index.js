const { Router } = require('express');
//modelos acá:
const router = Router();
const { Client, Order, Product, Shipping , order_detail} = require('../../db');
const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');
const order = require('../../models/order');
const Op = Sequelize.Op;

//FUNCIONAN OK:

router.post('/clientesPost', async (req, res) => {
  const { id, name,lastname, phone , state, adress, mail, identityCard  } = req.body;
try {
  const newClient = await Client.create({
    id, name, lastname, phone, state, adress, mail, identityCard
  })
  return res.send(newClient)
  } catch(error){
   res.send(error).status(404);
}
})


//crea un nuevo envio, pasandole el idPedido (es para el admin)
router.post('/enviosPost', async (req, res) => {
  const { state, orderId } = req.body;
  try {
      const order= await Order.findByPk(orderId)
      const newShipping = await Shipping.create({
      state: state
    })
    newShipping.setOrder(order);
    return res.send(newShipping)
    } catch(error){
     res.send(error).status(404);
  }
})


//GET PEDIDOS'/pedidos/:id'  (donde id es el id de cliente)
//te devuelvo los pedidos especificos para un cliente y el estado del envio de cada pedido
//FALTA PONERLE QUE MUESTRE EL DETALLE DE LOS PEDIDOS 
router.get('/pedidos/:id',async (req, res)=>{
  const {id} = req.params;
  try {
    console.log('entro al try')
   const clientPedidos = await Client.findAll({
    include:{
     model: Order,
     attributes:['date','ticket'],
     include:[{model: Shipping,attributes:['state']},
             {model: Product,atributes:['name','price','image']}],
    //  include:{Product} ,
    // //  include:{model: Shipping,attributes:['state']},
    //  include:{model: Shipping,attributes:['state']}
    },
   attributes: ['name', 'lastName'],
   where:{ id: id }
  })
  console.log(clientPedidos[0].dataValues.orders[0])
  // console.log(clientPedidos.options.orders)
  // console.log(clientPedidos.orders.order)
  clientPedidos?res.send(clientPedidos):res.sendStatus(400);
  } catch (error) {
    res.send(error).status(404);
  }
})

router.get('/users/id/:id', async (req, res) => {//cambiar los nombres de las llamadas
  const id = req.params.id
  try {
      const user = await Client.findByPk(id, {
          include: {
              model: Order,
              include:[{model: Shipping,attributes:['state']},
             {model: Product,atributes:['name','price','image']}],
             attributes: {
              exclude: ['createdAt', 'updatedAt']
          }        
          }
      })

      user ? res.send(user) : res.sendStatus(400)

  } catch (error) {
      res.send(error).status(404)
  }
})


router.get('/users/id/:id', async (req, res) => {//cambiar los nombres de las llamadas
  const id = req.params.id
  try {
      const user = await Client.findByPk(id, {
          include: {
              model: Order,
              include:{model: Shipping,attributes:['state']},
              include:{model: Product},
              attributes: {
                  exclude: ['createdAt', 'updatedAt']
              }
          }
      })

      user ? res.send(user) : res.sendStatus(400)

  } catch (error) {
      res.send(error).status(404)
  }
})

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

//LISTO
router.get('/productos/', async (req, res) => {
  const {name}= req.query;
    console.log(name)
  try {
    const product = await Product.findAll({where: {name: {[Op.like]: `%${name}%`}}})
    console.log(product)
    product?res.send(product).status(200):res.sendStatus(400)
} catch (error) {
    res.send(error).status(404);
}
})

//GET PEDIDOS'/pedidos/' (de todos los clientes)

router.get('/pedidos',async (req, res)=>{
  try {
    console.log('entro al try')
   const clientPedidos = await Client.findAll({
    include:[{
    model: Order,
    // as:'Pedidos',
     attributes:['date','ticket'],
    }],
  attributes: ['name', 'lastName']
  })
  console.log(clientPedidos)
  clientPedidos?res.send(clientPedidos):res.sendStatus(400);
  } catch (error) {
    res.send(error).status(404);
  }
})




//FALTA QUE RECIBA EL ARRAY DE PRODUCTOS Y QUE PASE ESTE PRODUCTO  ALA TABLA
//DETALLE DE PRODUCTOS Y QUE CREE EL PEDIDO CON ESTA INFO
// /Admin/XXXXX => las exclusivas de admin
// put envio => solo admin
// put/productos x ej /admin

// router.post('/orderPost', async (req, res) => {
//    //ver como hacer para meter los productos 
//     const { id, ticket} = req.body;
//     try {
//       const user = await Client.findByPk(id)
//       console.log(user)
//       const newOrder = await Order.create({
//        ticket: ticket
//      })   
//       newOrder.setClient(user)
//       console.log('Pedido creado y asociado al cliente')
//       return res.send(newOrder)
//       } catch(error){
//        res.send(error).status(404);
//     }
//   })






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
    }  
})




   

module.exports = router;