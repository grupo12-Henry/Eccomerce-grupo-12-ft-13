const { Router } = require('express');
const { Product }=require('../../db')
//modelos acá:
const router = Router();

router.get('/productos/:id',async(req,res)=>{
    const id=req.params.id
    try {
        const product = await Product.findByPk(id)
        product?res.send(product).status(200):res.sendStatus(400)
    } catch (error) {
        res.send(error).status(404)
    }
})

router.get('/productos',async (req,res) => {
     try {
        const array_product = await Product.findAll()
        res.send(array_product).status(200)}
     catch(error){
        res.send(error).status(404)
     }
   
})


//  router.put('/productos/:id',(req, res)=>{
//     const id = req.params.id
//     const {stock, name, type, description, price, img }=req.body
//     try {
//         const product = await Product.findByPk(id)//
//     product={
//         name: name||product.name, 
//         type: type||product.type,
//         Description: description||product.Description, 
//         price: price||product.price,
//         img: img||product.img,
//         stock: stock||product.stock
//     }
//     product.save({fields:['name','type','description','price','stock','img']})
//     //product.reload()
//     res.send(product).status(200)
//     } catch (error) {
//         res.send(error).status(404)
//     }
    
//  })


//ver de cambiar el campo Description de tabla Product, esta con Mayusculas la D
router.post('/productos',async(req, res)=>{
const { stock, name, type, description, price, img }=req.body
if(typeof price ==='number' ){
try {
   const [producto,status ]=Product.findOrCreate({
       where:{
           name:name,type:type,Description:description,price:price,image:img,stock:stock}})
status?res.send(producto).status(200):res.send('Producto ya existente').status(400)
} catch (error) {
    res.send(error).status(404)
}}

})





module.exports = router