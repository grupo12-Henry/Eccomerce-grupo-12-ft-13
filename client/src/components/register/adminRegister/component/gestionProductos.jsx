import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addProduct, editProduct, deleteProduct, getDetail} from '../../../../actions';


function GestionProductos() {

  const AllProducts = useSelector(state => state.products);
  const productDetail = useSelector(state => state.productDetail);
  const dispatch = useDispatch();

  //Cuando renderiza el componente, me trae todos los productos.
  useEffect(() => { 
      dispatch(getProducts());
  }, [AllProducts]);

  //Estado local que maneja los valores de CREACION Y de MODIFICACIÓN de PRODUCTOS. NO lleva el campo ID (este se asigna automaticamente en la creación, y ya existe en la modificación)
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
      let a = []
      e.target.value.split('-').forEach(e=> a.push(e))
        setNewProduct({
          ...newProduct,
         [e.target.name]:a
        });
    }

  const insertProductInfo = async (e) => {
    e.preventDefault();
    dispatch(getDetail(e.target.value));
  }
  function editSubmit(e) {
    e.preventDefault();
    editProduct(productDetail.id, newProduct);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProduct(newProduct));
  }
  function deleteSubmit(e) {
    e.preventDefault();
    if(window.confirm('¿Esta seguro de que desea borrar este producto? Esta operación no se puede deshacer.')) {
      deleteProduct(e.target.value);
     } 
  }

    return (
      <div class='container' className='jah287'>
        {/* Tabla de productos */}
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
                    <th scope="col" data-field="price" data-sortable="true" >Modificar</th>
                    <th scope="col" data-field="price" data-sortable="true" >Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllProducts && AllProducts.map(prod => (
                            <tr>
                            <th scope="row">{prod.id}</th>
                            <td>{prod.name}</td>
                            <td>{prod.maker}</td>
                            <td>{prod.type}</td>
                            <td>{prod.subcategories}</td>
                            <td>{prod.stock}</td>                            
                            <td>{prod.price}</td>
                            <td >
                              <button class="btn btn-sm btn-info" value={prod.id} onClick={(e) => insertProductInfo(e)} >
                                  Modificar
                              </button>
                            </td>
                            <td >
                              <button class="btn btn-sm btn-danger" value={prod.id} onClick={(e) => deleteSubmit(e)} >
                                  Eliminar
                              </button>
                            </td>
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
          {<form >
              <input type='text' class="form-control mt-2 ml-5" autoComplete='off' name='name' placeholder ='nombre del producto' onChange={handleInputChange}/>
              <input type='text' class="form-control mt-2 ml-5" autoComplete='off' name='Description' placeholder='descripcion' onChange={handleInputChange}/>
              {/* <input name='type' class="form-control m-2" autoComplete='off' placeholder='tipo' onChange={handleInputChange}/> */}
              <select class="form-control mt-2 ml-5" name="type" onChange={handleInputChange}>
                        <option key='vinos' value='Vinos'>Vinos</option>
                        <option key='cervezas' value='cervezas'>Cervezas</option>
                        <option key='espumantes' value='Espumantes'>Espumantes</option>
                        <option key='whiskys' value='Whiskys'>Whiskys</option>
                        <option key='bebidas' value='Bebidas'>Bebidas</option>
                        <option key='varios' value='varios'>Varios</option>
                </select>
              <input type='text' class="form-control mt-2 ml-5" autoComplete='off' name='image' placeholder='url de imagen' onChange={handleInputChange}/>
              <input type='text' class="form-control mt-2 ml-5" autoComplete='off' name='maker' placeholder='fabricante' onChange={handleInputChange}/>
              <input type='number' class="form-control mt-2 ml-5" autoComplete='off' name='price' placeholder='precio' onChange={handleInputChange}/>
              <input type='text' class="form-control mt-2 ml-5" autoComplete='off' name='subcategories' placeholder='sub-categoria' onChange={handleArrayChange}/>
              <p class='mt-2 ml-5'>Separa las sub-categorias con un guion medio " - " </p>
              <input type='number' class="form-control mt-2 ml-5" autoComplete='off' name='stock' placeholder='stock' onChange={handleInputChange}/>
              <button className='NewProductSubmitButton' name='submit' type='submit' class="btn btn-primary btn-lg btn-block mt-2 ml-5" onClick={e=>handleSubmit(e)}>CREAR</button>
          </form>}
        </div>

        <div className='EditarProducto' class='form-row m-5'>
          <h3>Modificar un producto</h3>
          {<form >
              <input type='number'class="form-control mt-2 ml-5" name='id' autoComplete='off' value={productDetail.id}/>
              <input type='text' class="form-control mt-2 ml-5" name='name' placeholder ={productDetail.name} onChange={handleInputChange}/>
              <input type='text' class="form-control mt-2 ml-5" name='Description' placeholder={productDetail.Description} onChange={handleInputChange}/>
              {/* <input name='type' class="form-control mt-2 ml-5" placeholder='tipo' onChange={handleInputChange}/> */}
              <select class="form-control mt-2 ml-5" name="type" onChange={handleInputChange}>
                        <option key='vinos' value='Vinos'>Vinos</option>
                        <option key='cervezas' value='cervezas'>Cervezas</option>
                        <option key='espumantes' value='Espumantes'>Espumantes</option>
                        <option key='whiskys' value='Whiskys'>Whiskys</option>
                        <option key='bebidas' value='Bebidas'>Bebidas</option>
                        <option key='varios' value='varios'>Varios</option>
              </select>
              <input type='text' class="form-control mt-2 ml-5" name='image' placeholder='url de imagen' onChange={handleInputChange}/>
              <input type='text' class="form-control mt-2 ml-5" name='maker' placeholder={productDetail.maker} onChange={handleInputChange}/>
              <input type='number' class="form-control mt-2 ml-5" name='price' placeholder={productDetail.price} onChange={handleInputChange}/>
              <input type='text' class="form-control mt-2 ml-5" name='subcategories' placeholder={productDetail.subcategories} onChange={handleArrayChange}/>
              <p class='mt-2 ml-5'>Separa las sub-categorias con un guion medio " - " </p>
              <input type='number' class="form-control mt-2 ml-5" name='stock' placeholder={productDetail.stock} onChange={handleInputChange}/>
              <button className='NewProductSubmitButton' class="btn btn-primary btn-lg btn-block mt-2 ml-5" name='submit' type='submit' onClick={e=>editSubmit(e)} >CONFIRMAR MODIFICACIÓN</button>
          </form>}
        </div>

        {/* <div>
          <h3 class="mt-5 ml-2">Eliminar un producto</h3>
          {<form  onSubmit={e=>deleteSubmit(e)} >
            <div class="form-row mt-2 ml-5">
              <input type='number' class="form-control mt-2 ml-5" name='id' autoComplete='off' placeholder='id del producto a modificar' onChange={handleInputChange}/>
                <button>Delete</button>
                </div>
            </form>}
        </div> */}
      </div>
   )
}



export default (GestionProductos)
