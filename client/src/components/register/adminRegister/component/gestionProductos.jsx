import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from "react-bootstrap/Dropdown";
import { getProducts, addProduct, editProduct, deleteProduct, getDetail, getNames} from '../../../../actions';
import axios from 'axios'
import {AiOutlineSearch} from 'react-icons/ai';
import CloseIcon from "@material-ui/icons/Close";
import './gestionProductos.css'
// import Auto2 from './searchbarAdmin/searchBarAdmin'

function GestionProductos() {
  const AllProdsForSearch = useSelector(state => state.products);
  const [subcategories,setSubcategories]=useState([])
  const [toggle, setToggle]=useState({
    order:true,//'asc',
    filter:'Vinos',//'Vinos',
    por:true//'name'
  })
  const [AllProducts,setAllProducts ]= useState([]);
  useEffect(() => { 
    console.log(AllProducts);
}, [AllProducts]);
  const productDetail = useSelector(state => state.productDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:3001/admin/productos/subcategories')
    .then((response) =>setSubcategories(response.data))
  },[])
  //Cuando renderiza el componente, me trae todos los productos.
  useEffect(() => { 
      dispatch(getProducts());
  }, []);
  useEffect(() =>axios.get(`http://localhost:3001/admin/productos/order?order=${toggle.order?'ASC':'DESC'}&type=${toggle.por?'name':'price'}&name=${toggle.filter}`)
              .then(response =>{
              setAllProducts(response.data.rows)})
              ,[toggle])
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
    const [array, setArray] = useState([])
    const handleInputChange = (e) => {
        setNewProduct({
          ...newProduct,
          [e.target.name]:e.target.value
        });
    }
    const handleArrayChange = (e) => {
   
      setNewProduct(()=>{return{...newProduct,[e.target.name]:newProduct.subcategories.concat( [e.target.value])}})
      console.log(newProduct.subcategories)
    }
 const handleInputsChange = (e) => {
      let a = []
      e.target.value.split('-').forEach(e=> a.push(e))
        setArray(a);
    } 
  const insertProductInfo = async (e) => {
    e.preventDefault();
    dispatch(getDetail(e.target.value));
  }
  function editSubmit(e) {
    e.preventDefault();
   setNewProduct({...newProduct,subcategories:array})
     setTimeout(() =>editProduct(productDetail.id, newProduct) , 800)
    
  }
  function navChange(e){
    e.preventDefault();
    console.log(e.target.getAttribute('value'))
    const cadenaABooleano = cadena => cadena === "true"
    setToggle({...toggle,[e.target.name]:cadenaABooleano(e.target.value)})   
    if(e.target.name==='filter')setToggle({...toggle,[e.target.name]:e.target.getAttribute('value')})  
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
  ////////////////////////////////////////////////AGREGADO PARA LA SEARCHBAR//////////////////////////////////
  const product = useSelector((state) => state.names)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = product.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  useEffect(() => {
    const dbProducts = () => {
      dispatch(getNames());
    };
    dbProducts();
  }, [dispatch]);

  const handleSearchSubmit = (value) => {
    setAllProducts(value);
    setFilteredData([]);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
      <div class='container-fluid' >
        {/* Tabla de productos */}
        <div className='row'>
           <div id='botonera' className='col-12'> 
                  <div className='row col-12'>                          
                      <button id='bAsc'  class="col-md-2 col-sm-4 col-xl-2 btn btn-sm btn-info mr-1" name='order' value={!toggle.order} onClick={e=>navChange(e)} >{!toggle.order?'ASC':'DESC'} </button>
                      <button id='bPrice' class="col-md-2 col-sm-4 col-xl-2 btn btn-sm btn-info mr-4" name='por' value={!toggle.por} onClick={e=>navChange(e)}>{!toggle.por?'name':'price'}</button>
                        <Dropdown id='combo' class="col-9 col-sm-9 col-md-6 col-xl-3" >
                          <Dropdown.Toggle class="col-9 col-sm-9 col-md-7 col-xl-9 btn btn-sm btn-info" style={{width:'8rem'}} variant="success" id="dropdown-basic-button">
                            {toggle.filter}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={e=>navChange(e)} name="filter"  value='Vinos'>Vinos</Dropdown.Item>
                            <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='cervezas' value='cervezas'>Cervezas</Dropdown.Item>
                            <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='espumantes' value='Espumantes'>Espumantes</Dropdown.Item>
                            <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='whiskys' value='Whiskys'>Whiskys</Dropdown.Item>
                            <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='bebidas' value='Bebidas'>Bebidas</Dropdown.Item>
                            <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='varios' value='varios'>Varios</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                  
                     
                        <input id='search' class='col-7 col-md-5 col-sm-7 col-xl-5 form form-control-sm ' type="text" placeholder='Search...' value={wordEntered} onChange={handleFilter}/>
                              {filteredData.length !== 0 && (
                                <div >
                                  {filteredData.slice(0, 5).map((value, key) => {
                                    return (
                                      <button className="dataItem"   value={value}  onClick={ (e) =>{ handleSearchSubmit(value)}}>
                                        <p>{value.name} </p>
                                      </button>);
                                   })}
                               </div>
                              )}
                       
                </div>                     
            </div>   
                {/* ////TERMINA LA BOTONERA//// */}          
                {/* ////AGREGADO//// */}  
            {/* ////empieza la tabla//// */}
          <div id='tabla'  className='col-10'>
          <h3 class='col-10'>Ver Productos</h3>
            <table 
                class="table table-sm table-bordered"
                data-toggle="table"
                data-pagination="true"
                data-search="true"
                data-url="data.json">
                <thead>
                    <tr>
                    <th style={{width:'1rem'}} scope="col" data-field="id" data-sortable="true" >ID</th>
                    <th  style={{width:'3rem'}} scope="col" data-field="name" data-sortable="true" >Nombre</th>
                    {/* <th style={{width:'3rem'}} scope="col" data-field="maker" data-sortable="true" >Fabricante</th> */}
                    <th style={{width:'2rem'}} scope="col" data-field="type" data-sortable="true" >Categoria</th>
                    {/* <th style={{width:'3rem'}} scope="col" data-field="subcategories" data-sortable="false" >Subcategoria</th> */}
                    <th id='Stock'  scope="col" data-field="stock" data-sortable="false" >Stock</th>
                    <th id='Price'  scope="col" data-field="price" data-sortable="true" >Precio</th>
                    <th style={{width:'3rem'}} scope="col" data-field="price" data-sortable="true" >Modificar</th>
                    <th style={{width:'3rem'}} scope="col" data-field="price" data-sortable="true" >Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(AllProducts)? AllProducts.map(prod => (
                            <tr>
                            <th style={{width:'1rem'}} >{prod.id}</th>
                            <td style={{width:'3rem'}} >{prod.name}</td>
                            {/* <td style={{width:'3rem'}}>{prod.maker}</td> */}
                            <td style={{width:'2rem'}} >{prod.type}</td>
                            {/* <td style={{width:'3rem'}}>{prod.subcategories}</td> */}
                            <td id='cStock' >{prod.stock}</td>                            
                            <td id='cPrice' >{prod.price}</td>
                            <td style={{width:'3rem'}} >
                              <button id='bModificar' class="btn btn-sm btn-info" value={prod.id} onClick={(e) => insertProductInfo(e)} >
                                  Modificar
                              </button>
                            </td>
                            <td style={{width:'3rem'}}>
                              <button id='bEliminar' class="btn btn-sm btn-danger" value={prod.id} onClick={(e) => deleteSubmit(e)} >
                                  Eliminar
                              </button>
                            </td>
                            </tr>
                        )) : ( 
                          <tr>
                            <th scope="row">{AllProducts.id}</th>
                            <td>{AllProducts.name}</td>
                            <td>{AllProducts.maker}</td>
                            <td>{AllProducts.type}</td>
                            <td>{AllProducts.subcategories}</td>
                            <td>{AllProducts.stock}</td>                            
                            <td>{AllProducts.price}</td>
                            <td >
                              <button class="btn btn-sm btn-info" value={AllProducts.id} onClick={(e) => insertProductInfo(e)} >
                                  Modificar
                              </button>
                            </td>
                            <td >
                              <button class="btn btn-sm btn-danger" value={AllProducts.id} onClick={(e) => deleteSubmit(e)} >
                                  Eliminar
                              </button>
                            </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
          </div> 




                        {/* ////empieza el form crear//// */}
                        <div id='formCrear' className='col-xl-5 col-md-7 col-sm-8 col-12 col-md-6 form'  >
                          <h3>Crear un producto</h3>
                          {<form >
                              <input type='text' class="form-control " autoComplete='off' name='name' placeholder ='nombre del producto' onChange={handleInputChange}/>
                              <input type='text' class="form-control " autoComplete='off' name='Description' placeholder='descripcion' onChange={handleInputChange}/>
                              <select class="form-control mt-2 ml-2" name="type" onChange={handleInputChange}>
                                        <option key='vinos' value='Vinos'>Vinos</option>
                                        <option key='cervezas' value='cervezas'>Cervezas</option>
                                        <option key='espumantes' value='Espumantes'>Espumantes</option>
                                        <option key='whiskys' value='Whiskys'>Whiskys</option>
                                        <option key='bebidas' value='Bebidas'>Bebidas</option>
                                        <option key='varios' value='varios'>Varios</option>
                                </select>
                              <input type='text' class="form-control " autoComplete='off' name='image' placeholder='url de imagen' onChange={handleInputChange}/>
                              <input type='text' class="form-control " autoComplete='off' name='maker' placeholder='fabricante' onChange={handleInputChange}/>
                              <input type='number' class="form-control " autoComplete='off' name='price' placeholder='precio' onChange={handleInputChange}/>
                              {//<input type='text' class="form-control mt-2 ml-2" autoComplete='off' name='subcategories' placeholder='sub-categoria' onChange={handleArrayChange}/>
                              <select class="form-control " name="subcategories" onChange={handleArrayChange} >
                              {subcategories&&subcategories.map(categoria=> <option key={categoria}value={categoria}>{categoria}</option>)}
                                
                              </select>

                              }                       
                              <p >{newProduct.subcategories}</p>
                              <input type='number' class="form-control" autoComplete='off' name='stock' placeholder='stock' onChange={handleInputChange}/>
                              <button className='NewProductSubmitButton' name='submit' type='submit' class="btn btn-primary btn-lg btn-block " onClick={e=>handleSubmit(e)}>CREAR</button>
                          </form>}
                        </div>


                        {/* ////empieza el form editar//// */}
                        <div id='formModificar' className='col-xl-5 col-md-7 col-sm-8 col-12 col-md-6'>
                          <h3>Modificar un producto</h3>
                          {<form >
                              <input type='number'class="form-control " name='id' autoComplete='off' value={productDetail.id}/>
                              <input type='text' class="form-control " name='name' placeholder ={productDetail.name} onChange={handleInputChange}/>
                              <input type='text' class="form-control " name='Description' placeholder={productDetail.Description} onChange={handleInputChange}/>
                              <select class="form-control " name="type" onChange={handleInputChange}>
                                        <option key='vinos' value='Vinos'>Vinos</option>
                                        <option key='cervezas' value='cervezas'>Cervezas</option>
                                        <option key='espumantes' value='Espumantes'>Espumantes</option>
                                        <option key='whiskys' value='Whiskys'>Whiskys</option>
                                        <option key='bebidas' value='Bebidas'>Bebidas</option>
                                        <option key='varios' value='varios'>Varios</option>
                              </select>
                              <input type='text' class="form-control " name='image' placeholder='url de imagen' onChange={handleInputChange}/>
                              <input type='text' class="form-control " name='maker' placeholder={productDetail.maker} onChange={handleInputChange}/>
                              <input type='number' class="form-control" name='price' placeholder={productDetail.price} onChange={handleInputChange}/>
                              <input type='text' class="form-control " name='subcategories' placeholder={productDetail.subcategories} onChange={handleInputsChange}/>
                              <p >Separa las sub-categorias con un guion medio " - " </p>
                              <input type='number' class="form-control " name='stock' placeholder={productDetail.stock} onChange={handleInputChange}/>
                              <button className='NewProductSubmitButton' class="btn btn-primary btn-lg btn-block " name='submit' type='submit' onClick={e=> editSubmit(e) } >CONFIRMAR MODIFICACIÓN</button>
                          </form>}
                          </div>
        </div>
      </div>
        
   )
}



export default (GestionProductos)



// return (
//   <div class='container d-flex flex-column' >
//     {/* Tabla de productos */}
//     <div class='container d-flex flex-column mt-05 ml-3 mr-03 mb-3'>
//     <ol className="d-flex " style={{listStyle:'none'}}>
      
//       <li class="mt-3 "> <button class="btn btn-sm btn-info" name='order' value={!toggle.order} onClick={e=>navChange(e)} >{!toggle.order?'ASC':'DESC'} </button></li>
//       <li class="mt-3 ml-3 "><button  class="btn btn-sm btn-info" name='por' value={!toggle.por} onClick={e=>navChange(e)}>{!toggle.por?'name':'price'}</button></li>
//       <li class="ml-5">
//         <Dropdown >
//               <Dropdown.Toggle class="btn btn-sm btn-info"  variant="success" id="dropdown-basic-button">
//                 {toggle.filter}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={e=>navChange(e)} name="filter"  value='Vinos'>Vinos</Dropdown.Item>
//                 <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='cervezas' value='cervezas'>Cervezas</Dropdown.Item>
//                 <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='espumantes' value='Espumantes'>Espumantes</Dropdown.Item>
//                 <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='whiskys' value='Whiskys'>Whiskys</Dropdown.Item>
//                 <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='bebidas' value='Bebidas'>Bebidas</Dropdown.Item>
//                 <Dropdown.Item onClick={e=>navChange(e)} name="filter" key='varios' value='varios'>Varios</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown></li>

//             {/* ////AGREGADO//// */}

//             <li>
//               <div class='form form-control-sm mt-2 ml-2 d-flex flex-column' className="search">
//                 <div className="searchInputs">
//                   <input
//                     class='form form-control-sm mt-1 ml-2 d-flex flex-column'
//                     type="text"
//                     placeholder='Search...'
//                     value={wordEntered}
//                     onChange={handleFilter}
//                   />
//                 </div>
//                 {filteredData.length !== 0 && (
//                   <div class="d-flex flex-column" className="dataResult">
//                     {filteredData.slice(0, 5).map((value, key) => {
//                       return (
//                         <button class="btn btn-sm btn-light d-flex flex-column" 
//                             className="dataItem" 
//                             value={value}
//                             onClick={ (e) =>{ handleSearchSubmit(value)}}>
//                           <p>{value.name} </p>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </li>
//             </ol>


//             {/* ////AGREGADO//// */}
      
      
//       <h3 class='mt-03 ml-3 mr-03 mb-3'>Ver Productos</h3>
//       <div class="table-responsive">
//         <table 
//             class="table table-sm table-bordered mt-05 ml-3 mr-03 mb-3 "
//             data-toggle="table"
//             data-pagination="true"
//             data-search="true"
//             data-url="data.json">
//             <thead>
//                 <tr>
//                 <th scope="col" data-field="id" data-sortable="true" >ID</th>
//                 <th scope="col" data-field="name" data-sortable="true" >Nombre</th>
//                 <th scope="col" data-field="maker" data-sortable="true" >Fabricante</th>
//                 <th scope="col" data-field="type" data-sortable="true" >Categoria</th>
//                 <th scope="col" data-field="subcategories" data-sortable="false" >Subcategoria</th>
//                 <th scope="col" data-field="stock" data-sortable="false" >Stock</th>
//                 <th scope="col" data-field="price" data-sortable="true" >Precio</th>
//                 <th scope="col" data-field="price" data-sortable="true" >Modificar</th>
//                 <th scope="col" data-field="price" data-sortable="true" >Eliminar</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     Array.isArray(AllProducts)? AllProducts.map(prod => (
//                         <tr>
//                         <th scope="row">{prod.id}</th>
//                         <td>{prod.name}</td>
//                         <td>{prod.maker}</td>
//                         <td>{prod.type}</td>
//                         <td>{prod.subcategories}</td>
//                         <td>{prod.stock}</td>                            
//                         <td>{prod.price}</td>
//                         <td >
//                           <button class="btn btn-sm btn-info" value={prod.id} onClick={(e) => insertProductInfo(e)} >
//                               Modificar
//                           </button>
//                         </td>
//                         <td >
//                           <button class="btn btn-sm btn-danger" value={prod.id} onClick={(e) => deleteSubmit(e)} >
//                               Eliminar
//                           </button>
//                         </td>
//                         </tr>
//                     )) : ( 
//                       <tr>
//                         <th scope="row">{AllProducts.id}</th>
//                         <td>{AllProducts.name}</td>
//                         <td>{AllProducts.maker}</td>
//                         <td>{AllProducts.type}</td>
//                         <td>{AllProducts.subcategories}</td>
//                         <td>{AllProducts.stock}</td>                            
//                         <td>{AllProducts.price}</td>
//                         <td >
//                           <button class="btn btn-sm btn-info" value={AllProducts.id} onClick={(e) => insertProductInfo(e)} >
//                               Modificar
//                           </button>
//                         </td>
//                         <td >
//                           <button class="btn btn-sm btn-danger" value={AllProducts.id} onClick={(e) => deleteSubmit(e)} >
//                               Eliminar
//                           </button>
//                         </td>
//                         </tr>
//                     )
//                 }
//             </tbody>
//         </table>
//       </div>
//     </div>



//     <div class='d-flex'>
//                     <div className='CrearProducto'  class="form ml-5">
//                       <h3>Crear un producto</h3>
//                       {<form >
//                           <input type='text' class="form-control mt-2 ml-2" autoComplete='off' name='name' placeholder ='nombre del producto' onChange={handleInputChange}/>
//                           <input type='text' class="form-control mt-2 ml-2" autoComplete='off' name='Description' placeholder='descripcion' onChange={handleInputChange}/>
//                           <select class="form-control mt-2 ml-2" name="type" onChange={handleInputChange}>
//                                     <option key='vinos' value='Vinos'>Vinos</option>
//                                     <option key='cervezas' value='cervezas'>Cervezas</option>
//                                     <option key='espumantes' value='Espumantes'>Espumantes</option>
//                                     <option key='whiskys' value='Whiskys'>Whiskys</option>
//                                     <option key='bebidas' value='Bebidas'>Bebidas</option>
//                                     <option key='varios' value='varios'>Varios</option>
//                             </select>
//                           <input type='text' class="form-control mt-2 ml-2" autoComplete='off' name='image' placeholder='url de imagen' onChange={handleInputChange}/>
//                           <input type='text' class="form-control mt-2 ml-2" autoComplete='off' name='maker' placeholder='fabricante' onChange={handleInputChange}/>
//                           <input type='number' class="form-control mt-2 ml-2" autoComplete='off' name='price' placeholder='precio' onChange={handleInputChange}/>
//                           {//<input type='text' class="form-control mt-2 ml-2" autoComplete='off' name='subcategories' placeholder='sub-categoria' onChange={handleArrayChange}/>
//                           <select class="form-control mt-2 ml-2" name="subcategories" onChange={handleArrayChange} >
//                           {subcategories&&subcategories.map(categoria=> <option key={categoria}value={categoria}>{categoria}</option>)}
                            
//                           </select>

//                           }
                          
                          
                          
//                           <p class='mt-2 ml-3'>{newProduct.subcategories}</p>
//                           <input type='number' class="form-control mt-2 ml-2" autoComplete='off' name='stock' placeholder='stock' onChange={handleInputChange}/>
//                           <button className='NewProductSubmitButton' name='submit' type='submit' class="btn btn-primary btn-lg btn-block mt-2 ml-2" onClick={e=>handleSubmit(e)}>CREAR</button>
//                       </form>}
//                     </div>







//                 <div className='EditarProducto' class='form ml-5'>
//                   <h3>Modificar un producto</h3>
//                   {<form >
//                       <input type='number'class="form-control mt-2 ml-2" name='id' autoComplete='off' value={productDetail.id}/>
//                       <input type='text' class="form-control mt-2 ml-2" name='name' placeholder ={productDetail.name} onChange={handleInputChange}/>
//                       <input type='text' class="form-control mt-2 ml-2" name='Description' placeholder={productDetail.Description} onChange={handleInputChange}/>
//                       <select class="form-control mt-2 ml-2" name="type" onChange={handleInputChange}>
//                                 <option key='vinos' value='Vinos'>Vinos</option>
//                                 <option key='cervezas' value='cervezas'>Cervezas</option>
//                                 <option key='espumantes' value='Espumantes'>Espumantes</option>
//                                 <option key='whiskys' value='Whiskys'>Whiskys</option>
//                                 <option key='bebidas' value='Bebidas'>Bebidas</option>
//                                 <option key='varios' value='varios'>Varios</option>
//                       </select>
//                       <input type='text' class="form-control mt-2 ml-2" name='image' placeholder='url de imagen' onChange={handleInputChange}/>
//                       <input type='text' class="form-control mt-2 ml-2" name='maker' placeholder={productDetail.maker} onChange={handleInputChange}/>
//                       <input type='number' class="form-control mt-2 ml-2" name='price' placeholder={productDetail.price} onChange={handleInputChange}/>
//                       <input type='text' class="form-control mt-2 ml-2" name='subcategories' placeholder={productDetail.subcategories} onChange={handleInputsChange}/>
//                       <p class='mt-2 ml-3'>Separa las sub-categorias con un guion medio " - " </p>
//                       <input type='number' class="form-control mt-2 ml-2" name='stock' placeholder={productDetail.stock} onChange={handleInputChange}/>
//                       <button className='NewProductSubmitButton' class="btn btn-primary btn-lg btn-block mt-2 ml-2 mb-5" name='submit' type='submit' onClick={e=> editSubmit(e) } >CONFIRMAR MODIFICACIÓN</button>
//                   </form>}
//                 </div>




//     </div>
//   </div>
// )
// }