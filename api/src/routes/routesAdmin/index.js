const Sequelize=require('sequelize')
Op = Sequelize.Op
const {
	Router
} = require('express');
const {
	Product,
	Client,
	Order,
} = require('../../db');
const {
	auth,
	authAdmin
} = require('../controler')
const { send } = require('../nodemailer');

//modelos acá:

const router = Router();


router.get('/userMail', async (req, res)=>{
    const mail = req.query.mail;
    const user = await Client.findOne({where: {mail}})
    user&&res.send(user)||res.sendStatus(400)
})


router.get('/pedidos/filter', async (req, res) => {//envia todos los pedidos con el estado especificado
    const valor = req.query.valor;

    try {
        if (!!valor) {
            const product = await Order.findAll({
               where: {
                   state:valor
               }
            })
            
            res.send(product).status(200)
        } else {
            res.send('ingresar clave-valor').status(400)
        }
    } catch (error) {
        res.send(error).status(404)
    }


})
router.get('/detallePedido/:id', async (req, res) => { //envia detalle de un pedido
	const id = req.params.id
	try {
		const pedido = await Order.findByPk(id, {
			include: [{
				model: Client,
				model: Product
			}]
		})
		pedido ? res.send(pedido) : res.send('pedido no encontrado')
	} catch (error) {
		res.send(error).status(404)
	}
})
// router.get('/recomendados/:id',async (req,res)=>{
// 	const id = req.params.id
// 	try{
// 		const cliente= await Client.findByPk(id,{
// 			include:{model:Product}
// 		   })
// 		   //res.send(cliente.products)
// 		var array=[]

// 		   for(let i=0;i<cliente.products.length;i++){
// 			array.push(await Product.findOne({where:{ subcategories:{[Op.like]: `%${cliente.products[i].subcategories[0]}%`}}}))
// 		   }

		


// 		/* const productos = cliente.products&&cliente.products.forEach(async(prod)=>{
		 
// 		 return recomendado =await Product.findOne({where:{ subcategories:{[Op.like]: `%${prod.subcategories[0]}%`}}})
// 		}) */
// 		Promise.all(array)
// 		.then(el=>{console.log(el); res.send(el)})
// 	}			
// 	catch(error){
// 		res.send(error).status(404)

// 	}



// })



router.delete('/producto/:id', async (req, res) => {
	const id = req.params.id
	try {
		const producto = Product.destroy({
			where: {
				id: id
			}
		})
		cliente === 1 ? res.send('producto eliminado satisfactoriamente') : res.send('producto inexistente')
	} catch (error) {
		res.send(error).status(404)
	}
})

router.delete('/client/:id', async (req, res) => {
	const id = req.params.id
	try {
		const cliente = await Client.destroy({
			where: {
				id: id
			}
		})

		cliente === 1 ? res.send('usuario eliminado satisfactoriamente') : res.send('usuario inexistente')
	} catch (error) {
		res.send(error).status(404)
	}
})

router.post('/clientesPost', async (req, res) => { //crea un nuevo cliente

	const {
		name,
		lastName,
		phone,
		state,
		adress,
		mail,
		identityCard,
		admin
	} = req.body;
	const token = req.headers.authorization && req.headers.authorization.split(' ')[1]
	try {

		const newClient = await Client.findOrCreate({
					where:{mail:mail},
		default:{	name,
			lastName,
			phone: phone + '',
			state,
			adress,
			mail,
			identityCard,
			admin,
			token}
		})
		res.send(newClient)
	} catch (error) {
		res.send(error).status(404);
	}
})

router.get('/productos/all', async (req, res) => { //devuelve todos los productos
	const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0

	try{
		const product = await Product.findAndCountAll({
			limit: 8,
			offset: offset,
			// include:{model:Review}
		})
		res.send(product).status(200)
	} catch (error) {
		res.send(error).status(404)
	}
})
router.get('/productos/order', async (req, res) => {
	//ordena (ascendente o descendente) los productos segun el campo que le envies 
	
	const order = req.query.order ? req.query.order.toUpperCase() : 'ASC' //default:asc
	const tipo = req.query.type ? req.query.type : 'name' //default:names
	const type = req.query.name ? req.query.name : 'Vinos' //default:Vinos

	try {
		const productos = await Product.findAndCountAll({
			where: {
				type: type
			},
			
			order: [
				[tipo, order]
			],
			

		})
		res.send(productos).status(200)
	} catch (error) {
		res.send(error).status(404)
	}

})
router.get('/productos/subcategories', async (req, res) => { //envia todos los nombres de los productos
	try {
		const productos = await Product.findAll({
			attributes: {
				exclude: ['createdAt', 'updatedAt', 'image', 'maker', 'price', 'Description', 'stock','id','name','type']
			}
		})
		let arrays=productos.map(product=>product.subcategories)
		 arrays=arrays.join().split(',')
	
		let result = arrays.filter((item,index)=>{
			return arrays.indexOf(item) === index;
		  })
		  console.log(result.length)
		res.send(result)
	} catch (error) {
		res.send(error).status(404)
	}

})
router.get('/productos/names', async (req, res) => { //envia todos los nombres de los productos
	try {
		const productos = await Product.findAll({
			attributes: {
				exclude: ['createdAt', 'updatedAt', 'image']
			}
		})
		res.send(productos)
	} catch (error) {
		res.send(error).status(404)
	}

})
router.get('/productos/id/:id', async (req, res) => { //devuelve el producto con determinado id
	const id = req.params.id
	try {
		const product = await Product.findByPk(id)
		product ? res.send(product).status(200) : res.sendStatus(400)
	} catch (error) {
		res.send(error).status(404)
	}
})
router.put('/actualizarStock/:id',async (req, res) => {
    const id = req.params.id
    const stock = parseInt(req.body.stock,10)
    try {
       console.log(stock)
      const product = await Product.findByPk(id)
        product.update({stock: stock})
       
        res.send({mesaje:'stock actualizado',product:product})
    } catch (error) {
        res.send(error).status(404)
    }
})



router.put('/productos/:id', async (req, res) => { //modifica el producto seleccionado mediante id
	const id = req.params.id
	const {
		stock,
		name,
		type,
		Description,
		price,
		image,
		maker,
		subcategories
	} = req.body
	try {
	console.log(id)
	console.log(stock)
		const product = await Product.findByPk(id)
		await product.update({
			name: name || product.dataValues.name,
			type: type || product.dataValues.type,
			Description: Description || product.dataValues.Description,
			price: price || product.dataValues.price,
			image: image || product.dataValues.image,
			stock: stock || product.dataValues.stock,
			maker: maker || product.dataValues.maker,
			subcategories: subcategories.length>0? subcategories : product.dataValues.subcategories
		});

		if (product) {
			res.send(product).status(200)
		} else {
			res.sendStatus(400)
		}
	} catch (error) {
		res.send(error).status(404)
	}

})


router.post('/productos', async (req, res) => { //crea nuevo productos
	const {
		stock,
		name,
		type,
		Description,
		price,
		image,
		maker,
		subcategories
	} = req.body

	// if (typeof price === 'number') {
	try {

		const producto = await Product.findOrCreate({
			where: {
				name: name,
				type: type,
				Description: Description,
				price: price,
				image: image,
				stock: stock,
				maker: maker,
				subcategories: subcategories
			},
			defaults: {
				name: name,
				type: type,
				Description: Description,
				price: price,
				image: image,
				stock: stock,
				maker: maker,
				subcategories: subcategories
			}
		})

		const newProduct = await Product.findOne({
			where: {
				name: name
			}
		})


		res.send(newProduct.dataValues).status(200)
	} catch (error) {
		res.send(error).status(404)
	}
	// }

})
router.get('/users/all', async (req, res) => { //trae todo los clientes
	try {
		const users = await Client.findAll()

		res.send(users)
	} catch (error) {
		res.send(error).status(404)
	}
})
router.get('/users/id/:id', async (req, res) => { //trae usuario con todos sus pedidos, datos de envios, facturas
	const id = req.params.id
	try {
		const user = await Client.findByPk(id, {
			include: {
				model: Order,
				include: {
					model: Product
				}
			}
		})

		user ? res.send(user) : res.sendStatus(400)

	} catch (error) {
		res.send(error).status(404)
	}
})

router.get('/pedidos/all', async (req, res) => { //envia todos los pedidos
	try {
		const pedidos = await Order.findAll()

		res.send(pedidos)
	} catch (error) {
		res.send(error).status(404)
	}
})

router.post('/orderPost', async (req, res) => {
	let {
		idMP,
		idClient,
		ticket,
		date,
		bill,
		paymentMethod,
		adress,
		mail,
		shippingDate,
		state,
		products,
		freight,
		guideNumber,
		cost,
		ivaCondition,
		ivaCost,
		subtotal,
		cantidad
	} = req.body;
	try {
		if(idMP){const encontrarPedido = await Order.findOne({where:{idMP: idMP}})
		if (encontrarPedido) return res.send('ya existe un pedido con ese id');}
		const user = await Client.findByPk(idClient)
		const newOrder = await Order.create({
			ticket,
			idMP,
			date,
			bill,
			paymentMethod,
			adress,
			ticket,
			mail,
			shippingDate,
			state,
			freight,
			guideNumber,
			cost,
			ivaCondition,
			ivaCost,
			subtotal,
			cantidad
		})
		newOrder.setClient(user)
		products.forEach(e => {
			newOrder.setProducts(e.id, {
				through: {
					cantidad: e.cantidad,
					subTotal: e.subtotal
				}
			});
			Product.decrement({stock: e.cantidad}, {where: {id: e.id}})
		})
		return res.send(newOrder)
	} catch (error) {
		res.send(error).status(404)
	}
})

router.put('/pedidos/id/:id', async (req, res) => { //modifica un pedido segun los datos enviados(no hace falta enviar todos los campos)
	const id = req.params.id
	const {
		bill,
		date,
		paymentMethod,
		adress,
		ticket,
		mail,
		cost,
		state,
		guideNumber,
		freight,
		ivaCost,
		ivaCondition,
		shippingDate
	} = req.body
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
			// console.log(order.mail, order.mail.slice(1,-1))
			const response = await send(order.mail||'marcosmc86@gmail.com', 'VinotecApp', "pedido "+state+' soyhenry.com')
			res.send(order).status(200)
		} else {
			res.sendStatus(400)
		}
	} catch (error) {
		res.send(error).status(404)
	}

})

router.put('/users/:id',async (req, res) => {
	const id = req.params.id
	const {
		name,
		phone,
		lastName,
		state,
		adress,
		mail,
		identityCard,
		admin,
		token
	} = req.body
	try {
		const user = await Client.findByPk(id)

		await user.update({
			name: name || user.dataValues.name,
			lastName: lastName || user.dataValues.lastName,
			phone: phone || user.dataValues.phone,
			state: state || user.dataValues.state,
			adress: adress || user.dataValues.adress,
			mail: mail || user.dataValues.mail,
			identityCard: identityCard || user.dataValues.identityCard,
			admin: admin || user.dataValues.admin,
			token: token || user.dataValues.token,
		})
		if (user) {
			res.send(user).status(200)
		} else {
			res.sendStatus(400)
		}
	} catch (error) {
		res.send(error).status(404)
	}
})

// router.delete('/pedidos/id/:id', async (req, res) => { //borra un producto de la tabla intermedia 'order_detail'
// 	const id = req.params.id //id de pedido
// 	const pId=parseInt(req.query.idProd,10)
// 	console.log('OrdId:', id);
// 	console.log('ProdId:', pId);
// 	try {
// 		const order = await Order.findByPk(id)
// 		const product = await Product.findByPk(pId)
// 		order.removeProducts(product)
// 		res.send(order).status(200)
// 	} catch (error) {
// 		res.send(error).status(404);
// 	}
// });
// router.put('/pedidos/id/:id', async (req, res) => { //modifica un producto de la tabla intermedia 'order_detail'
// 	const id = req.params.id //id de pedido
// 	const pId=parseInt(req.query.idProd,10)
// 	console.log('OrdId:', id);
// 	console.log('ProdId:', pId);
// 	try {
// 		const order = await Order.findByPk(id)
// 		const product = await Product.findByPk(pId)
// 		order.removeProducts(product)
// 		res.send(order).status(200)
// 	} catch (error) {
// 		res.send(error).status(404);
// 	}
// });
	

module.exports = router