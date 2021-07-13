const { Router } = require('express');
const { Product, Client , Order, Shipping, Invoice} = require('../../db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//modelos acá:

const router = Router();


router.post('/clientesPost', async (req, res) => {//crea un nuevo cliente
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

router.get('/productos/all', async (req, res) => {//devuelve todos los productos
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
    //ordena (ascendente o descendente) los productos segun el campo que le envies 
    const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0//default:0 , primeros 10
    const order = req.query.order ? req.query.order.toUpperCase() : 'ASC'//default:asc
    const tipo = req.query.type ? req.query.type : 'name'//default:names
    const type = req.query.name ? req.query.name : 'Vinos'//default:Vinos

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
router.get('/productos/names', async (req, res) => {//envia todos los nombres de los productos
    try {
        const productos = await Product.findAll({ attributes: { exclude: ['id','createdAt', 'updatedAt', 'image', 'maker', 'price', 'Description', 'type', 'stock'] } })
        res.send(productos)
    } catch (error) {
        res.send(error).status(404)
    }

})
router.get('/productos/id/:id', async (req, res) => {//devuelve el producto con determinado id
    const id = req.params.id
    try {
        const product = await Product.findByPk(id)
        product ? res.send(product).status(200) : res.sendStatus(400)
    } catch (error) {
        res.send(error).status(404)
    }
})




router.put('/productos/:id', async (req, res) => {//modifica el producto seleccionado mediante id
    const id = req.params.id
    const { stock, name, type, Description, price, image, maker, subcategories  } = req.body
    try {
        const product = await Product.findByPk(id)
        await product.update({

            name: name || product.dataValues.name,
            type: type || product.dataValues.type,
            Description: Description || product.dataValues.Description,
            price: price || product.dataValues.price,
            image: image || product.dataValues.image,
            stock: stock || product.dataValues.stock,
            maker: maker || product.dataValues.maker,
            subcategories: subcategories || product.dataValues.subcategories
        });

        if (product) {
            res.send(product).status(200)
        }
        else { res.sendStatus(400) }
    } catch (error) {
        res.send(error).status(404)
    }

})


router.post('/productos', async (req, res) => {//crea nuevo productos
    const { stock, name, type, Description, price, image, maker ,subcategories } = req.body
    if (typeof price === 'number') {
        try {
            const { producto } = await Product.findOrCreate({
                where: { name: name, type: type, Description: Description, price: price, image: image, stock: stock, maker: maker,subcategories:subcategories },
                default: { name: name, type: type, Description: Description, price: price, image: image, stock: stock, maker: maker,subcategories:subcategories }
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
router.get('/users/all', async (req, res) => {//trae todo los clientes
    try {
        const users = await Client.findAll()
        res.send(users)
    } catch (error) {
        res.send(error).status(404)
    }
})
router.get('/users/id/:id', async (req, res) => {//trae usuario con todos sus pedidos, datos de envios, facturas
    const id = req.params.id
    try {
        const user = await Client.findByPk(id, {
            include: {
                model: Order,
                include: {model: Product}
            }
        })

        user ? res.send(user) : res.sendStatus(400)

    } catch (error) {
        res.send(error).status(404)
    }
})
router.get('/pedidos/all', async (req, res) => {//envia todos los pedidos
    try {
        const pedidos = await Order.findAll()
        

        res.send(pedidos)
    } catch (error) {
        res.send(error).status(404)
    }
})
router.get('pedidos/filter', async (req, res) => {//envia todos los pedidos con el estado especificado
    const valor = req.query.valor;

    try {
        if (!!valor) {
            const product = await Order.findAll({
               where: {
                   state:valor
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


router.put('/pedidos/id/:id', async (req, res) => {//modifica un pedido segun los datos enviados(no hace falta enviar todos los campos)
    const id = req.params.id
    const { bill, date, paymentMethod, adress, ticket, mail ,cost, state, guideNumber, freight, ivaCost, ivaCondition, shippingDate } = req.body
    try {
        const order = await Order.findByPk(id)
        if (order) {

            await order.update({
                bill: bill || order.dataValues.bill,
                date: date || order.dataValues.date,
                paymentMethod: paymentMethod || order.dataValues.paymentMethod,
                adress: adress || order.dataValues.adress,
                guideNumber: guideNumber || order.dataValues.guideNumber,
                cost: cost || order.dataValues.cost,
                ivaCondition: ivaCondition || order.dataValues.ivaCondition,
                ivaCost: ivaCost || order.dataValues.ivaCost,
                freight: freight || order.dataValues.freight,
                state: state || order.dataValues.state,
                shippingDate: shippingDate || order.dataValues.shippingDate,
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

router.put('/users/:id', async (req, res)=>{
    const id = req.params.id
    let phone = parseInt(req.body.phone,10)
    const {name, lastName, state, adress, mail, identityCard, admin }=req.body
    try {
        const user = await Client.findByPk(id)
        
        await user.update({
            name: name||user.dataValues.name, 
            lastName: lastName||user.dataValues.lastName,
            phone: phone|| user.dataValues.phone, 
            state: state||user.dataValues.state,
            adress: adress||user.dataValues.adress,
            mail: mail||user.dataValues.mail,
            identityCard: identityCard||user.dataValues.identityCard,
            admin: admin||user.dataValues.admin,
       })
          if(user){        
              res.send(user).status(200)
          }else{ res.sendStatus(400)}
    }catch (error) {
        res.send(error).status(404)
    }  
}) 

 


 



module.exports = router
