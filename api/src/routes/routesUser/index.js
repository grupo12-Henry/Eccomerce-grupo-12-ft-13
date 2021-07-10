const { Router } = require('express');
//modelos acá:
const router = Router();
const { Client, Order, Product, Shipping } = require('../../db');
const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');
const order = require('../../models/order');
const Op = Sequelize.Op;


//FALTA QUE RECIBA EL ARRAY DE PRODUCTOS Y QUE PASE ESTE PRODUCTO  ALA TABLA
//DETALLE DE PRODUCTOS Y QUE CREE EL PEDIDO CON ESTA INFO
// /Admin/XXXXX => las exclusivas de admin
// put envio => solo admin
// put/productos x ej /admin


router.post('/orderPost', async (req, res) => {
   //ver como hacer para meter los productos 
    const { id, ticket} = req.body;
    try {
      const user = await Client.findByPk(id)
      console.log(user)
      const newOrder = await Order.create({
       ticket: ticket
     })   
      newOrder.setClient(user)
      console.log('Pedido creado y asociado al cliente')
      return res.send(newOrder)
      } catch(error){
       res.send(error).status(404);
    }
  })



// let orderId = 3;
//POST DE PEDIDOS, FALTA COMPLETAR CON TODOS LOS CAMPOS
// router.post('/orderPost', async (req, res) => {
//   const { ticket, id } = req.body;
//   try {
//     const user = await Client.findByPk(id)
//     console.log(user)
//     // console.log
//     if(user){
//       console.log('entro al if')
//       const newOrder = await Order.create({
//         id: 12,
//         ticket: ticket
//         // ,clientId: id
//      }) 
//      orderId++  
//     newOrder.setClient(user)
//     }
//     console.log('Pedido creado')
//     return res.send(newOrder);
//     } catch(error){
//      res.send(error).status(404);
//   }
// })

//     const user = await Client.findByPk(id)
//     newOrder.setClient(user)


/* 

let orderId = 3;
//POST DE PEDIDOS, FALTA COMPLETAR CON TODOS LOS CAMPOS
router.post('/orderPost', async (req, res) => {
  const { ticket,id } = req.body;
  try {
    const user = await Client.findByPk(id)
    if(user){
      const newOrder = await Order.create({
        id:(orderId = orderId+1),
        ticket: ticket,
        clientId: id
     }) 
     orderId++  
    //  newOrder.setClients(id)
    }
    console.log('Pedido creado')
    return res.send(newOrder);
    } catch(error){
     res.send(error).status(404);
  }
})

*/



////////////////////////////////**zzz */
// PARA CARGAR DATOS Y PODER PROBAR LAS RUTAS, LUEGO BORRAR

let orderId = 3;
//POST DE PEDIDOS, FALTA COMPLETAR CON TODOS LOS CAMPOS => EMI
// recibo un array de productos=> products
// router.post('/orderPost', async (req, res) => {
//   const { products, id, ticket, orderId} = req.body;
//   console.log(products)
//   try {
//         const newOrder = await Order.create({
//          id,
//         ticket: ticket,
//         // Shipping:{state: 'pending'}
//       }
//        ,{
//            include: "Shipping"       
//      }
//      );
//      console.log(newOrder)
//     //  products.forEach(element => {
//     //      newOrder.AddProducts(element)
//     //  });
//     //  orderId++  
//     //  newOrder.setClients(id)  
//     return res.send(newOrder);
//     } catch(error){
//      res.send(error).status(404);
//   }
// })

//*hizo nico CARGAR UN NUEVO PEDIDO
// router.post('/orderPost', async (req, res) => {
//   const {fecha, pago, id_Cliente}=req.body
//         try {
//              const array_ModelosProductos=  req.body.productos.map(async(producto)=>{
//               return await Product.findOne({where:{name:producto}}) 
//           })
//           console.log( await Promise.all(array_ModelosProductos))
//           res.send( await Promise.all(array_ModelosProductos))
//           const order = await Order.Create({
//               date:fecha,
//               paymentMethod:pago,
//           }) 
//           order.addProducts(array_ModelosProductos)
//           Client.findByPk(id_Cliente).addOrder(order)
  
//       } catch (error) {
//           res.send(error).status(404)  
//       }
// })
       
//   })
//*




//POST DE CLIENTES- FALTA COMPLETAR CON TODOS LOS CAMPOS
// falta ver el autoincrement del id
//falta conectar con el login de firebase
router.post('/clientesPost', async (req, res) => {
    const { id, name,lastname, phone , state, adress, mail, identityCard  } = req.body;
  try {
    const newClient = await Client.create({
      id, name, lastname, phone, state, adress, mail, identityCard
    })
    console.log('cliente creado')
    return res.send(newClient)
    } catch(error){
     res.send(error).status(404);
  }
})

//POST DE ENVIOS--PARA PROBAR, DESPUES VER DONDE VA, SI AQUI O ADMIN ROUTES
//SOLUCIONAR LO DE AUTOINCREMENT
// router.post('/enviosPost', async (req, res) => {
//   const { shippingDate, state , cost, orderId } = req.body;
//   try {
//       const newShipping = await Shipping.create({
//       shippingDate:shippingDate,
//       state:state,
//       cost:cost
//     },{
//        include:{
//        model: Order,
//        include: User //nested model.Create
//        }
//     })
//     newShipping.addOrders(orderId);
//     console.log('envio creado')
//     return res.send(newShipping)
//     } catch(error){
//      res.send(error).status(404);
//   }
// })

router.post('/enviosPost', async (req, res) => {
  const { state, orderId } = req.body;
  try {
      const order= await Order.findByPk(orderId)
      const newShipping = await Shipping.create({
      state: state
    })
    console.log(newShipping)
    newShipping.setOrder(order);
    console.log('envio creado')
    return res.send(newShipping)
    } catch(error){
     res.send(error).status(404);
  }
})

//     newOrder.setClient(user)


/*
 User.create({
       name: "name",
       Login:
            {
            users: {..i.e several users if a user belongs to another user..}
            }
        },{
       include:{
      model: Login,
      include: User //nested model.Create
         }
    })

*/
/*
CREAR CON MISMO POST REGISTROS EN VARIAS TABLAS:
return Product.create({
  title: 'Chair',
  user: {
    firstName: 'Mick',
    lastName: 'Broadstone',
    addresses: [{
      type: 'home',
      line1: '100 Main St.',
      city: 'Austin',
      state: 'TX',
      zip: '78704'
    }]
  }
}, {
  include: [{
    association: Product.User,
    include: [ User.Addresses ]
  }]
}); */
/////////////////////////////////////////////////////////////////////////////////////////


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


//GET PEDIDOS'/pedidos/:id'  (donde id es el id de cliente)
//te devuelvo los pedidos especificos para un cliente y el estado del envio de cada pedido
router.get('/pedidos/:id',async (req, res)=>{
  const {id} = req.params;
  try {
    console.log('entro al try')
   const clientPedidos = await Client.findAll({
    include:[{
     model: Order,
     attributes:['date','ticket'],
     include:{model: Shipping,attributes:['state']}
    }],
   attributes: ['name', 'lastName'],
   where:{ id: id }
  })
  console.log(clientPedidos)
  clientPedidos?res.send(clientPedidos):res.sendStatus(400);
  } catch (error) {
    res.send(error).status(404);
  }
})

//FUNCIONA OK, DESCOMENTADO PORQUE ESTABA MODIFICANDO EL OTRO, GUARDADO DE BKP
// router.get('/pedidos/:id',async (req, res)=>{
//   const {id} = req.params;
//   try {
//     console.log('entro al try')
//    const clientPedidos = await Client.findAll({
//     include:[{
//     model: Order,
//      attributes:['date','ticket'],
//     }],
//   attributes: ['name', 'lastName'],
//   where:{ id: id }
//   })
//   console.log(clientPedidos)
//   clientPedidos?res.send(clientPedidos):res.sendStatus(400);
//   } catch (error) {
//     res.send(error).status(404);
//   }
// })













//HISTORIAL DE PEDIDOS QUE REALIZO UN DETERMINADO CLIENTE
// router.get('/pedidos/:id',async (req, res)=>{
//   const {id} = req.params;
//   try {
//     console.log('entro al try')
//     const ordersFilter = await Order.findAll({
//     include:[{
//     model: Client,
//     as:"cliente",
//     attributes:['name','lastname'],
//     where:{
//       id: id	
//    }
//   }],
//   attributes: ['id', 'ticket']
//   })
//   console.log(ordersFilter)
//   ordersFilter?res.send(ordersFilter):res.sendStatus(400);
//   } catch (error) {
//     res.send(error).status(404);

//   }
// })


// -Al hacer un GET a '/pedidos/:id' (donde id es el id de cliente)  me deberá permitir 
// ver información de mis pedidos anteriores y su estado (pendiente, entregado, 
//   para retiro en local, listado de productos por pedido, etc)



//USAR LOS INCLUDE
  // user.findAll({
  //   include:[{
  //     model: Address,
  //     as:"domicilio",
  //     attributes:['street']
  //   },{
  //     model: Post
  //     as:"publicaciones",
  //     attributes:['title','body']
  //     where:{
  //        title: "Foo"		
  //     }
  //   }],
  //   attributes: [name, age]
  
  // }).then(users=>res.json(users))












/*


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

/*
router.put('/productos/:id', async (req, res)=>{
    const id = req.params.id
    const {stock, name, type, Description, price, image, maker }=req.body
    try {
        const product = await Product.findByPk(id)
        await product.update({
          
            name: name||product.dataValues.name, 
            type: type||product.dataValues.type,
            Description: Description||product.dataValues.Description, 
            price: price||product.dataValues.price,
            image: image||product.dataValues.image,
            stock: stock||product.dataValues.stock,
            maker: maker||product.dataValues.maker
        });
        
        if(product){        
    res.send(product).status(200)
}
else{ res.sendStatus(400)}
    } catch (error) {
        res.send(error).status(404)
    }
    
 })

* */


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


//FUNCION DE JULI CON PROMESAS
// router.post('/orderPost', async (req, res) => {
//   const {fecha, pago, id_Cliente}=req.body
//   Order.create({
//     date: fecha,
//     ticket: 'soy un pedido',
//     paymentMethod: pago
//   }) .then (order => {
//     Shipping.create({
//       state: 'pending',
//     }) .then ( result => {
//       res.json(order);
//     })
//   }) .catch (err => {
//     res.json(err)
//   })
// });
   

module.exports = router;