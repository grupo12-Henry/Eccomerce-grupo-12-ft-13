const { Router } = require('express');
//modelos acá:
const router = Router();
const { Client, Order, Product } = require('../../db');
const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


////////////////////////////////** */
// PARA CARGAR DATOS Y PODER PROBAR LAS RUTAS, LUEGO BORRAR
// router.post('/orderPost', async (req, res) => {
//   const { id, ticket} = req.body;
//   console.log('pepe')
//   try {
//     console.log('pepito')
//     const user = await Client.findByPk(id)
//     console.log(user)
//     console.log(id);
//     const newOrder = await Order.create({
//       id: uuidv4(),
//       ticket: ticket
//    })   
//     newOrder.setClients(user)
//     console.log(newOrder,'newOrder')
//     console.log('Pedido creado')
//     } catch(error){
//      res.send(error).status(404);
//   }
// })
//prueba
// router.post('/clientesPost', async (req, res) => {
//   try {
//     console.log(req.body,'reqbody')
//     const { id, name } = req.body;
//     console.log(id, 'clientId')
//     console.log(name, 'ClientName')
//     const newClient = await Client.create({
//       id,
//       name
//     })
//     console.log(newClient,'newclient')
//     console.log('cliente creado')
//     } catch(error){
//      res.send(error).status(404);
//   }
// })


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

 // console.log('entro a la ruta que quiero')
  // console.log(name)
  // try {
  //      const productName = await Product.findAll({
  //       where: {name: {[Op.like]: `%${name}%`}}
      
  //     // console.log(productName);
  //     // productName?res.send(productName).status(200):res.sendStatus(400)
  // }catch (error) {
  //     res.send(error).status(404);
  // }


/*
//TRAER TODOS LOS PEDIDOS INCLUYENDO USUARIOS
order.findAll({include:client}).then(orders=>{
  res.json({orders});
})


//TRAER LOS DATOS DE UN CLIENTE EN PARTICULAR:
GET /:clientName async
try{
  const clientName = req.params.clientName
  const client = await client.findOne({where:{clientName}})
  client?res.send(client):alert('client not found)
}


//TRAER TODOS LOS USUARIOS, JUNTOS CON SUS DIRECCIONES Y SUS POSTEOS

user.findAll({
	include:[{
	  model: Address,
	  as:"domicilio",
	  attributes:['street']
	},{
	  model: Post
	  as:"publicaciones",
	  attributes:['title','body']
	  where:{
	     title: "Foo"		
	  }
	}],
	attributes: [name, age]

}).then(users=>res.json(users))
*/

//TRAER TODOS LOS PEDIDOS DE UN CLIENTE CON SU ESTADO DE ENVIO
// router.get('/clients/:id', async(req, res)=>{
//   const id= req.params.id;
//   try {
//       const clientPedidos = await Clients.findAll({
//         include:[{
//           model: Orders,
//           as:"pedidos",
//           attributes:['date','ticket']
//         },{
//           model: shippings,
//           as:"Estado envío",
//           attributes:['state']        
//         }],
//         attributes: ['name', 'lastname']
//         });      
//       // order?res.send(order).status(200):res.sendStatus(400)
//   } catch (error) {
//       res.send(error).status(404);
//   }
// })


//TRAER LOS PEDIDOS POR ID
// router.get('/pedidos/:id', async(req, res)=>{
//   const id= req.params.id;
//   console.log(id)
//   try {
//       const order = await Order.findAll({
//           include:{model: Client}
//         });      
//       order?res.send(order).status(200):res.sendStatus(400)
//   } catch (error) {
//       res.send(error).status(404);
//   }
// })






// const recipePropias = await Recipe.findAll({include: Diet});
// ======================
// Albums.findAll({
//   include: [{
//     model: Artists,
//     as: 'Singer',
//     where: { name: 'Al Green' } //
//   }]
// })
// .then(albums => console.log(albums))
// .catch(console.error)

// const trabajadores = await modeloTrabajador.findAll({
//   // Queremos que incluya la relación "oficina"
//   include: [
//       {
//           association: modeloTrabajador.Oficina
//       }
//   ]
// });

///////////////////////////////////////////////
//ejemplo con SET
// async function createDogBreed(req, res){
//   const {name, height, weight, lifeExpectancy, temperament} = req.body;
//   try {
//       var catDog = await Dog.create({
//           id: uuidv4(),
//           name: name,
//           height: height,
//           weight: weight,
//           lifeExpectancy: lifeExpectancy
//       });
//       await catDog.setTemperaments(temperament);

//EJEMPLO CON INCLUDE
// const dogsInDB = await Dog.findAll({ include: Temperament });

// try {
//   var cliente= await  Client.findOne({where: {id:id}})                    
//              const [value,status]=await Order.create({
//                     where: {
//                         name: name,
//                         difficulty: difficulty,
//                         term: term,
//                         season: season, 
//                     }
//                 })
                
//             cliente&&cliente.addOrder(value)
            
//         })
//         res.sendStatus(200)
// } catch (error) {
//   res.send(error).status(404);
// }
  

module.exports = router;