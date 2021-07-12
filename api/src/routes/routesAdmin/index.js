const { Router } = require('express');
const { Product, Client , Order, Shipping, Invoice} = require('../../db');
const Sequelize = require('sequelize');


const Op = Sequelize.Op;

//modelos acá:

const router = Router();


router.post('/clientesPost', async (req, res) => {
    const { id, name,lastname, phone , state, adress, mail, identityCard  } = req.body;
  try {
    const newClient = await Client.create({
      name, lastname, phone, state, adress, mail, identityCard
    })
    return res.send(newClient)
    } catch(error){
     res.send(error).status(404);
  }
  })

router.get('/productos/all', async (req, res) => {
    const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0

    try {
        const product = await Product.findAndCountAll({
            limit: 8,
            offset: offset
        })
        res.send(product).status(200)
    } catch (error) {
        res.send(error).status(404)
    }
})
router.get('/productos/order', async (req, res) => {
    const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0
    const order = req.query.order ? req.query.order.toUpperCase() : 'ASC'
    const tipo = req.query.type ? req.query.type : 'name'
    const type = req.query.name ? req.query.name : 'Vinos'

    try {
        const productos = await Product.findAndCountAll({
            where: { type: type },
            offset: offset,
            order: [[tipo, order]],
            limit: 10,

        })

        res.send(productos).status(200)
    } catch (error) {
        res.send(error).status(404)
    }

})
router.get('/productos/names', async (req, res) => {
    try {
        const productos = await Product.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'image', 'maker', 'price', 'Description', 'type', 'stock'] } })

        res.send(productos)
    } catch (error) {
        res.send(error).status(404)
    }

})
router.get('/productos/id/:id', async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findByPk(id)
        product ? res.send(product).status(200) : res.sendStatus(400)
    } catch (error) {
        res.send(error).status(404)
    }
})




router.put('/productos/:id', async (req, res) => {
    const id = req.params.id
    const { stock, name, type, Description, price, image, maker } = req.body
    try {
        const product = await Product.findByPk(id)
        await product.update({

            name: name || product.dataValues.name,
            type: type || product.dataValues.type,
            Description: Description || product.dataValues.Description,
            price: price || product.dataValues.price,
            image: image || product.dataValues.image,
            stock: stock || product.dataValues.stock,
            maker: maker || product.dataValues.maker
        });

        if (product) {
            res.send(product).status(200)
        }
        else { res.sendStatus(400) }
    } catch (error) {
        res.send(error).status(404)
    }

})


router.post('/productos', async (req, res) => {
    const { stock, name, type, Description, price, image, maker } = req.body
    if (typeof price === 'number') {
        try {
            const { producto } = await Product.findOrCreate({
                where: { name: name, type: type, Description: Description, price: price, image: image, stock: stock, maker: maker },
                default: { name: name, type: type, Description: Description, price: price, image: image, stock: stock, maker: maker }
            })
            const newProduct = await Product.findOne({
                where: { name: name }
            })

            res.send(newProduct.dataValues).status(200)
        } catch (error) {
            res.send(error).status(404)
        }
    }

})
router.get('/users/all', async (req, res) => {//cambiar los nombres de las llamadas
    try {
        const users = await Client.findAll()
        res.send(users)
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
router.get('/pedidos/all', async (req, res) => {//cambiar los nombres de las llamadas
    try {
        const pedidos = await Order.findAll()
        

        res.send(pedidos)
    } catch (error) {
        res.send(error).status(404)
    }
})
router.get('pedidos/filter', async (req, res) => {//cambiar los nombres de las llamadas
    const valor = req.query.valor;

    try {
        if (parametro && valor) {
            const product = await Order.findAll({
                include: {
                    model: Shipping,
                    attributes:{
                        exclude: ['createdAt', 'updatedAt']
                    },
                    where: {
                        state: valor
                    }
                }
            })
            console.log(product)
            res.send(product).status(200)
        } else {
            res.send('ingresar clave-valor').status(400)
        }
    } catch (error) {
        res.send(error).status(404)
    }

})


router.put('/pedidos/id/:id', async (req, res) => {//modificar nombre de rutas
    const id = req.params.id
    const { bill, date, paymentMethod, adress, ticket, mail } = req.body
    try {
        const order = await Order.findByPk(id)
        if (order) {

            await order.update({
                bill: bill || order.dataValues.bill,
                date: date || order.dataValues.date,
                paymentMethod: paymentMethod || order.dataValues.paymentMethod,
                adress: adress || order.dataValues.adress,
                ticket: ticket || order.dataValues.ticket,
                mail: mail || order.dataValues.mail,
            });
            res.send(order).status(200)
        }
        else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.send(error).status(404)
    }

})
router.put('/envio/id/:id', async (req, res) => {

    const id = req.params.id
    const { shippingDate, state, freight, guideNumber, cost } = req.body
    try {
        const envio = await Shipping.findByPk(id)
        if (envio) {

            await envio.update({
                shippingDate: shippingDate || envio.dataValues.shippingDate,
                state: state || envio.dataValues.state,
                freight: freight || envio.dataValues.freight,
                guideNumber: guideNumber || envio.dataValues.guideNumber,
                cost: cost || envio.dataValues.cost
            });
            res.send(envio).status(200)
        }
        else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.send(error).status(404)
    }

})


router.put('/factura/id/:id', async (req, res) => {

    const id = req.params.id
    const { ivaCondition, ivaCost } = req.body
    try {
        const factura = await Invoice.findByPk(id)
        if (factura) {
          
            await factura.update({
                ivaCondition: ivaCondition || factura.dataValues.ivaCondition,
                ivaCost: ivaCost || factura.dataValues.ivaCost
            });
            res.send(factura).status(200)
        }
        else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.send(error).status(404)
    }

})


router.put('/users/:id', async (req, res)=>{
    const id = req.params.id
    let phone = parseInt(req.body.phone,10)
    const {name, lastName, state, adress, mail, identityCard }=req.body
    try {
        const user = await Client.findByPk(id)
        
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

 
router.post('/orderPost', async (req, res) => {
  const {date, paymentMethod, ticket, clientId, productos, cantidad, subTotal}=req.body
  let RTA = [];
  const order1 = await Order.create({ //crea el pedido (la compra)
    date, 
    paymentMethod,
    ticket,
    shipping: {
      state:'pending',
    },
    invoice: { // asi vacío solo le agrega el OrderId a la tabla Invoices
      // ivaCondition:'Exento',
      // ivaCost: 21
    },
    // products: {
    //   id: productId
    // }
    // order_details: {
    //   cantidad: cantidad,
    //   subTotal: subTotal
    // }
  }, {
    include: ["shipping", "invoice"]
  }) 

  .then (async order => {
    let clienteEnCuestion = await Client.findByPk(clientId); //busca al cliente con ese Id
    clienteEnCuestion.addOrders(order); //addOrder le agrega el Id del cliente a la tabla Orders
    //ACA ABAJO ESTA LO QUE ESCRIBIO NICO
    const array_ModelosProductos = await Promise.all( productos.map(async(producto)=>{
      return await Product.findOne({where:{id:producto}}) //recorre 'productos', que es un array de id de productos, y por cada id se trae el modelo de ese producto.
     }))
    array_ModelosProductos.forEach(async modelo=>await order.addProducts(modelo))
  }) 
  //LO UNICO QUE FALTA ES QUE AGREGUE cantidad y subTotal a la tabla intermedia
  
  .then(response => {
    res.json('El pedido se creo correctamente')
  }) 
  
  .catch (err => {
    res.json(err)
  })
})

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



module.exports = router
