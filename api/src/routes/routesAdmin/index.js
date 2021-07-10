const { Router } = require('express');

const Sequelize = require('sequelize');
const { Product, Client , Order, Shipping, Invoice,order_detail} = require('../../db');



//modelos acá:
const router = Router();


router.post('/clientesPost', async (req, res) => {
       try {
         //console.log(req.body,'reqbody')
         const { id, name } = req.body;
         //console.log(id, 'clientId')
        // console.log(name, 'ClientName')
         const newClient = await Client.create({
           
           name
         })
         console.log(newClient,'newclient')
         console.log('cliente creado')
         res.sendStatus(200)
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
        //console.log('entro aca '+id)
        const user = await Client.findByPk(id,{
            include:{
                model:Order,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
            }
        })
       // console.log(user)

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
            console.log(product)
            res.send(product).status(200)
        }else{
            res.send('ingresar clave-valor').status(400)
        }
    } catch (error) {
        res.send(error).status(404)
    }

})
router.post('/pedidos', async (req, res) => {
const {fecha, pago, id_Cliente,id}=req.body

    try {
            
        const array_ModelosProductos= await Promise.all( req.body.productos.map(async(producto)=>{
            return await Product.findOne({where:{name:producto}}) 
        }))
       
        
         const [order,status] = await Order.findOrCreate({
            where:{
            date:fecha,
            paymentMethod:pago,
            clientId:id_Cliente,
            order_detail:{
                cantidad:10,
                subTotal:7000 
            }},
            include: [{
                association: order_detail}]
                
        } )
        console.log(order)

        array_ModelosProductos.forEach(async(modelo)=> await order.addProduct(modelo))
       // order.addProducts(array_ModelosProductos)
        //const cliente=  await Client.findByPk(id_Cliente)
        cliente.addOrders(order)
        console.log(order)
        res.send(order)
    } catch (error) {
        res.send(error).status(404)  
    }



})



module.exports = router
