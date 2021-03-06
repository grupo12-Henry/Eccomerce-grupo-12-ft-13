const { Router } = require('express');
//modelos acá:
const router = Router();
const { Client, Order, Product, Shipping, order_detail, Review} = require('../../db');
const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');
const order = require('../../models/order');
const Op = Sequelize.Op;
const { sendMessage } = require('../twilio')
const { send } = require('../nodemailer')

//FUNCIONAN OK:
router.post('/send-sms', async  (req, res) => {
  const response = await sendMessage( req.body.phone, req.body.testMessage)
  console.log(response.sid)
	res.send('recibido')
})

router.post('/send-mail', async  (req, res) => {
  const response = await send( req.body.mail, req.body.subject, req.body.text)
	res.send('recibido')
})


//trae todos los productos-->LISTO
router.delete('/favoritos/:id',async(req,res) => {//elimina una relacion de producto-usuario
  const id = req.params.id
  const pId=parseInt(req.query.product,10)
  console.log(id, 'producto:' ,pId)
    try {
      const cliente = await Client.findByPk(id)
      const product = await Product.findByPk(pId)
      cliente.removeProducts(product)
      res.send(product)
    } catch (error) {
      res.send(error).status(404);
    }
  
  })


router.get('/productos/all', async (req, res) => {
  try {
     const array_product = await Product.findAll({include:{model:Review}})
     res.send(array_product).status(200)}
  catch(error){
     res.send(error).status(404);
  }
})
router.get('/favorites/:id', async (req, res) => {
  const id = req.params.id
  try {
     const array_product = await Product.findAll({
       include:{model:Client,where:{id:id}}
      })
     res.send(array_product).status(200)}
  catch(error){
     res.send(error).status(404);
  }
})
//relacionar productos favoritos a un cliente 
router.post('/favoritos/:id',async(req,res) => {
const id = req.params.id
const pId=req.body.productId
console.log(id , 'producto:',pId)
  try {
    const cliente = await Client.findByPk(id)
    const product = await Product.findByPk(pId)
    cliente.addProducts(product)
    res.send(product)
  } catch (error) {
    res.send(error).status(404);
  }

})

// require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

router.post('/sendEmail', (req, res) => {

  const auth = {
    auth: {
        api_key: '41d0f4d82f94ae9a556df30e39a6a9ba-a0cfb957-5fc7f998',
        domain: 'sandboxf54c11cc136544a99ae8c54074a8561e.mailgun.org'
    }
  };

  const transporter = nodemailer.createTransport(mailGun(auth));

  console.log(req.body)
  const mailOptions = {
    from: 'grupo12ecommerce@gmail.com',
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      log('ERROR: ', err);
      return res.send(err);
  }
    log('Email sent!!!');
    return res.json({ message: 'Email sent!!!!!' });
  });

})

//trae el detalle de un producto -->LISTO
router.get('/productos/:id', async (req, res) => {
  const id = req.params.id
  try {
      const product = await Product.findByPk(id,{include:{model:Review}})
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
  const response = await send(mail, 'VinotecApp', 'Gracias por su visita a nuestro sitio web. Esperamos vuelva pronto soyhenry.com')

   const [newClient, status] = await Client.findOrCreate({ where:{mail},include:{model: Product},
    defaults:{ name:name, lastName, phone, state, adress, mail, identityCard,token:token}
  })
  return res.send(newClient)
  } catch(error){
   res.send(error).status(404);
}
})



//CREA UN NUEVO PEDIDO, PASANDOLE TODOS LOS PARAMETROS NECESARIOS
//products viene asi del front : "products":[{"id":2, "cantidad": 13, "subtotal": 150},{"id":9},{"id":5}]

  router.post('/orderPost', async (req, res) => {
     const { idClient,ticket, date,bill, paymentMethod,adress,mail,shippingDate,state,products,freight,guideNumber,cost,ivaCondition,
      ivaCost,subtotal,cantidad} = req.body;
     try {
      const user = await Client.findOrCreate({where:{id:idClient}
      })
      console.log('user', user)
      //  const user = await Client.findByPk(idClient)
       const newOrder = await Order.create({
         ticket, date, bill, paymentMethod, adress, ticket, mail, shippingDate, state, products, freight, guideNumber,
         cost, ivaCondition, ivaCost , subtotal,cantidad})
       newOrder.setClient(user)
       products.forEach(e=>{
         newOrder.setProducts(e.id, {through:{cantidad: e.cantidad, subtotal: e.subtotal}}); 
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
     attributes:['createdAt','ticket', 'id','date','bill'],
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


// -Al hacer un GET a '/users/:id' me deberá permitir ver mi información de usuario registrada.
//trae el detalle de un producto -->LISTO
router.get('/users/:id', async (req, res) => {
  const id = req.params.id
  try {
      const user = await Client.findByPk(id,{include:{model:Product}})
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











// falta solucionar cuando me pasan un phone
router.put('/users/:id', async (req, res) => {
	const id = req.params.id
	const {
		name,
		phone,
		lastName,
		state,
		adress,
		mail,
		identityCard,
		admin
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
//REVIEWS
//postea reviews de un producto. Id es el id de producto. 
router.post('/reviews/:id', async (req, res)=>{
  const id =parseInt( req.params.id,10);
  console.log('ELID',id)
  const value= parseInt( req.body.value,10)
  console.log('ELVALUE',value)
  const description = req.body.description;
  console.log('description',description)
  try {
    const producto = await Product.findByPk(id)
    const newReview = await Review.create({
     description,
     value,
      productId:id      
    }, {
      include: [ Product ]
    })
   //producto.addReviews(newReview)
    res.send(newReview).status(200)
  }catch (error) {
      res.send(error).status(404)
  }  
}) 

//Devuelve las reviews de un prod. 
router.get('/reviews/all', async (req, res)=>{
  try {
    const allReviews = await Review.findAll({include:{model:Product}})
    res.send(allReviews).status(200)
  }catch (error) {
      res.send(error).status(404)
  }  
})

module.exports = router;