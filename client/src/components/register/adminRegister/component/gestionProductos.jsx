import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addProduct, editProduct, deleteProduct} from '../../../../actions';


function GestionProductos() {

  const AllProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  //Cuando renderiza el componente, me trae todos los productos.
  useEffect(() => { 
      dispatch(getProducts());
  }, []);

  //A PARTIR DE ACA ES LO QUE ESTABA CODEADO
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
      <div class='container'>
        <div class='containter mt-05 ml-3 mr-03 mb-3'>
          <h3 class='mt-03 ml-3 mr-03 mb-3'>Ver Productos</h3>
          <div class="table-responsive">
            <table 
                class="table table-sm table-bordered mt-05 ml-3 mr-03 mb-3 "
                data-toggle="table"
                data-pagination="true"
                data-search="true"
                data-url="data.json">
                <thead>
                    <tr>
                    <th scope="col" data-field="id" data-sortable="true" >ID</th>
                    <th scope="col" data-field="name" data-sortable="true" >Nombre</th>
                    <th scope="col" data-field="maker" data-sortable="true" >Fabricante</th>
                    <th scope="col" data-field="type" data-sortable="true" >Categoria</th>
                    <th scope="col" data-field="subcategories" data-sortable="false" >Subcategoria</th>
                    <th scope="col" data-field="stock" data-sortable="false" >Stock</th>
                    <th scope="col" data-field="price" data-sortable="true" >Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllProducts.map(prod => (
                            <tr>
                            <th scope="row">{prod.id}</th>
                            <td>{prod.name}</td>
                            <td>{prod.maker}</td>
                            <td>{prod.type}</td>
                            <td>{prod.subcategories}</td>
                            <td>{prod.stock}</td>                            
                            <td>{prod.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
          </div>
        </div>

        {/* A partir de aca es lo que estaba codeado */}
        <div className='CrearProducto'  class="form-row ml-5">
          <h3>Crear un producto</h3>
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
          <h3>Modificar un producto</h3>
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

        <div>
          <h3 class="mt-5 ml-2">Eliminar un producto</h3>
          {<form  onSubmit={e=>deleteSubmit(e)} >
            <div class="form-row mt-2 ml-5">
              <input type='number' class="form-control mt-2 ml-5" name='id' autoComplete='off' placeholder='id del producto a modificar' onChange={handleInputChange}/>
                <button>Delete</button>
                </div>
            </form>}
        </div>
      </div>
   )
}



export default (GestionProductos)