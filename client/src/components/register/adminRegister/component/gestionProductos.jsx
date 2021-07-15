import React from 'react'
import {  useState } from "react";
import { addProduct, editProduct, deleteProduct} from '../../../../actions';


function GestionProductos() {
    const [newProduct, setNewProduct] = useState({
        id:0,
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
      let a = []
      e.target.value.split('-').forEach(e=> a.push(e))
        setNewProduct({
          ...newProduct,
         [e.target.name]:a
        });
    }


  function editSubmit(e) {
    e.preventDefault();
    // console.log(newProduct.id, newProduct)
    editProduct(newProduct.id, newProduct);
    alert('product change');
  }
  function handleSubmit(e) {
    e.preventDefault();
    addProduct(newProduct);
    alert('product Created');
  }
  function deleteSubmit(e) {
    e.preventDefault();
    deleteProduct(newProduct.id);
    alert('product deleted');
  }

    return (
        <div>
            <div className='CrearProducto'  class="form-row ml-5">
            <h3>Crear Producto</h3>
            {<form  onSubmit={e=>handleSubmit(e)} >
                <input type='text' class="form-control m-2" autoComplete='off' name='name' placeholder ='nombre del producto' onChange={handleInputChange}/>
                <input type='text' class="form-control m-2" autoComplete='off' name='Description' placeholder='descripcion' onChange={handleInputChange}/>
                <input name='type' class="form-control m-2" autoComplete='off' placeholder='tipo' onChange={handleInputChange}/>
                <input type='text' class="form-control m-2" autoComplete='off' name='image' placeholder='url de imagen' onChange={handleInputChange}/>
                <input type='text' class="form-control m-2" autoComplete='off' name='maker' placeholder='fabricante' onChange={handleInputChange}/>
                <input type='number' class="form-control m-2" autoComplete='off' name='price' placeholder='precio' onChange={handleInputChange}/>
                <input type='text' class="form-control m-2" autoComplete='off' name='subcategories' placeholder='sub-categoria' onChange={handleArrayChange}/>
                <p class='m-1'>(separa las sub-categorias con un (-) guion medio)</p>
                <input type='number' class="form-control m-2" autoComplete='off' name='stock' placeholder='stock' onChange={handleInputChange}/>
                <button className='NewProductSubmitButton' name='submit' type='submit' class="btn btn-secondary ml-5 btn-sm">Submit</button>
            </form>}
          </div>
          <div className='EditarProducto' class='form-row m-5'>
<h3>editar producto</h3>
{<form  onSubmit={e=>editSubmit(e)} >
    <input type='number'class="form-control mt-2 ml-5" name='id' autoComplete='off' placeholder='id del producto a modificar' onChange={handleInputChange}/>
    <input type='text' class="form-control mt-2 ml-5" name='name' placeholder ='nombre del producto' onChange={handleInputChange}/>
    <input type='text' class="form-control mt-2 ml-5" name='Description' placeholder='descripcion' onChange={handleInputChange}/>
    <input name='type' class="form-control mt-2 ml-5" placeholder='tipo' onChange={handleInputChange}/>
    <input type='text' class="form-control mt-2 ml-5" name='image' placeholder='url de imagen' onChange={handleInputChange}/>
    <input type='text' class="form-control mt-2 ml-5" name='maker' placeholder='fabricante' onChange={handleInputChange}/>
    <input type='number' class="form-control mt-2 ml-5" name='price' placeholder='precio' onChange={handleInputChange}/>
    <input type='text' class="form-control mt-2 ml-5" name='subcategories' placeholder='sub-categoria' onChange={handleArrayChange}/>
    <p>separa las sub-categorias con un (-) guion medio</p>
    <input type='number' class="form-control mt-2 ml-5" name='stock' placeholder='stock' onChange={handleInputChange}/>
    <button className='NewProductSubmitButton' class="form-control mt-2 ml-5" name='submit' type='submit' >Submit</button>
</form>}
</div>
<h3 class="mt-5 ml-2">Eliminar un producto</h3>
{<form  onSubmit={e=>deleteSubmit(e)} >
  <div class="form-row mt-2 ml-5">
    <input type='number' class="form-control mt-2 ml-5" name='id' autoComplete='off' placeholder='id del producto a modificar' onChange={handleInputChange}/>
      <button>Delete</button>
      </div>
    </form>}
     </div>
   )
}



export default (GestionProductos)
