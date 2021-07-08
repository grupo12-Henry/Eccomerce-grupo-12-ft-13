const { Router } = require('express');
//modelos acá:
const router = Router();
const { Client, Order } = require('../../db');

////////////////////////////////** */
// PARA CARGAR DATOS Y PODER PROBAR LAS RUTAS, LUEGO BORRAR
router.post('/clientesPost', async (req, res) => {
  try {
    console.log(req.body,'reqbody')
    const { id, name } = req.body;
    console.log(id, 'clientId')
    console.log(name, 'ClientName')
    const newClient = await Client.create({
      id,
      name
    })
    console.log(newClient,'newclient')
    console.log('cliente creado')
    } catch(error){
     res.send(error).status(404);
  }
})


router.post('/orderPost', async (req, res) => {
  try {
    console.log(req.body,'reqbody')
    const { id, ticket, clientId} = req.body;
    console.log(id, 'orderId')
    console.log(ticket, 'ticket')
    const user = await Client.findByPk(clientId)
    const newOrder = await Order.create({
      id,
      ticket
   })
  user&&user.setClients(newOrder)

    console.log(newOrder,'newOrder')
    console.log('Pedido creado')
    } catch(error){
     res.send(error).status(404);
  }
})
///////////////////////////////** */

//trae todos los productos
router.get('/productos', async (req, res) => {
  try {
     const array_product = await Product.findAll()
     res.send(array_product).status(200)}
  catch(error){
     res.send(error).status(404);
  }
})

//trae el detalle de un producto
router.get('/productos/:id', async (req, res) => {
  const id = req.params.id
  try {
      const product = await Product.findByPk(id)
      product?res.send(product).status(200):res.sendStatus(400)
  } catch (error) {
      res.send(error).status(404);
  }
})


router.get('/pedidos/:id', async(req, res)=>{
  const id= req.params.id;
  console.log(id)
  try {
    // const order = await Client.findAll(where: id, {include: Order});
      const order = await Order.findAll({
          include:{model: Client}
        });      
      order?res.send(order).status(200):res.sendStatus(400)
  } catch (error) {
      res.send(error).status(404);
  }
})

PUTO EL QUE LEE

// User.findAll({
//   include: [
//     {model: Tool, as: 'Instruments', include: [
//       {model: Teacher, include: [ /* etc */]}
//     ]}
//   ]
// }).then(users => {
//   console.log(JSON.stringify(users))

 
      // const dbRecipes = Recipe.findAll({where: {name: {[Op.like]: `%${name}%`}}, include: Diet})

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