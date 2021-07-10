const { Router } = require('express');
const { Product, Client , Order, Shipping, Invoice} = require('../../db');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

//modelos acá:
const router = Router();
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
    const tipo = req.query.type ?req.query.type:'name'
    const type=req.query.name?req.query.name:'Vinos'

    try {
        const productos = await Product.findAndCountAll({
           where: {type:type}, 
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
        const productos = await Product.findAll({ attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'image', 'maker', 'price', 'Description', 'type', 'stock'] } })

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
router.get('/users/all', async (req,res)=>{//cambiar los nombres de las llamadas
try {
    const users= await Client.findAll()
    res.send(users)
} catch (error) {
    res.send(error).status(404)
}
})
router.get('/users/id/:id', async (req,res)=>{//cambiar los nombres de las llamadas
    const id = req.params.id
    try {
        const user = await Client.findByPk(id,{
            include:{
                model:TouristActivity,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
            }
        })
        res.send(user)
    } catch (error) {
        res.send(error).status(404)
    }
})
router.get('/pedidos/all',async (req,res)=>{//cambiar los nombres de las llamadas
    try {
        const pedidos = await Order.findAll()
        res.send(pedidos)
    }catch(error){
        res.send(error).status(404)  
    }
})
router.get('pedidos/filter',async(req,res)=>{//cambiar los nombres de las llamadas
const valor=req.query.valor;

    try {
        if(parametro && valor){
            const product = await Order.findAll({
                include:{
                    model:Shipping,
                    attributes:{
                        exclude:['createdAt','updatedAt']
                    },
                    where:{
                        state:valor
                    }
                }
            })
            res.send(product).status(200)
        }else{
            res.send('ingresar clave-valor').status(400)
        }
    } catch (error) {
        res.send(error).status(404)
    }

})
router.post('/pedidos', async (req, res) => {
const {fecha, pago, id_Cliente}=req.body

    try {
            
        const array_ModelosProductos=  req.body.productos.map(async(producto)=>{
            return await Product.findOne({where:{name:producto}}) 
        })
        //console.log( await Promise.all(array_ModelosProductos))
        
         const order = await Order.Create({
            date:fecha,
            paymentMethod:pago,
        }) 
        order.addProducts(array_ModelosProductos)
        Client.findByPk(id_Cliente).addOrder(order)
        res.send(await order)
    } catch (error) {
        res.send(error).status(404)  
    }



})



module.exports = router
