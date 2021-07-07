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


//ver de cambiar el campo Description de tabla Product, esta con Mayusculas la D
router.post('/productos',async(req, res)=>{
const { stock, name, type, Description, price, image, maker }=req.body
if(typeof price ==='number' ){
try {
   const {producto }= await Product.findOrCreate({
        where:{name:name,type:type,Description:Description,price:price,image:image,stock:stock, maker: maker},
        default:{name:name,type:type,Description:Description,price:price,image:image,stock:stock, maker: maker}
            })
        const newProduct =await Product.findOne({
            where:{ name:name}
        })
        
        // console.log(newProduct)
res.send(newProduct.dataValues).status(200)
} catch (error) {
    res.send(error).status(404)
}}

})





module.exports = router