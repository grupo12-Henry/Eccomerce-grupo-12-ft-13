import React from 'react'
import {  useState } from "react";
import { addProduct } from '../../../../actions';
import {connect} from "react-redux"

function GestionProductos(props) {
    const [newProduct, setNewProduct] = useState({  
        name:'',
        Description:'',
        type:'',
        maker: '',
        stock:0,
        price:0,
        image:'',
        subcategories:[]
    });
    const handleInputChange = (e) => {
        setNewProduct({
          ...newProduct,
          [e.target.name]:e.target.value
        });
    }
    const handleArrayChange = (e) => {
        setNewProduct({
          ...newProduct,
          [e.target.name]:e.target.value.split('.')
        });
    }

    
  function handleSubmit(e) {
    e.preventDefault();
    props.addProduct(newProduct);
    alert('product Created');
    setNewProduct({  name:'',
    Description:'',
    type:'',
    maker: '',
    stock:0,
    price:0,
    image:'',
    subCategories:[]})
  }

    return (
        <div>
            <div className='CrearProducto'>
            <h3>crear producto</h3>
            {<form  onSubmit={e=>handleSubmit(e)} >
                <input type='text' name='name' placeholder ='nombre del producto' onChange={handleInputChange}/>
                <input type='text' name='Description' placeholder='descripcion' onChange={handleInputChange}/>
                <input name='type' placeholder='tipo' onChange={handleInputChange}/>
                <input type='text' name='image' placeholder='url de imagen' onChange={handleInputChange}/>
                <input type='text' name='maker' placeholder='fabricante' onChange={handleInputChange}/>
                <input type='number' name='price' placeholder='precio' onChange={handleInputChange}/>
                <input type='text' name='subcategories' placeholder='sub-categoria' onChange={handleArrayChange}/>
                <p>separa las sub-categorias con un punto</p>
                <input type='number' name='stock' placeholder='stock' onChange={handleInputChange}/>
                <button className='NewProductSubmitButton' name='submit' type='submit' >Submit</button>
            </form>} {console.log(newProduct)}
          </div>
     </div>
   )
}
function mapDispatchToProps(dispatch) {
    return {
      addProduct: info => dispatch(addProduct(info))
  }
}

export default connect(null, mapDispatchToProps)(GestionProductos)
