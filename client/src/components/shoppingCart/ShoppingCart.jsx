import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { addProductCart, removeProductCart, ClearCart, getProducts ,ADD_TO_CART, addLocalStorage, getLocalStorage, deleteLocalStorage } from '../../actions';
// import ProductCart from './ProductCart';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'

import './shoppingCart.css';
import Button from 'react-bootstrap/Button';



//HAGO ESTO PARA VER SI SE GUARDO LO MIO!
function ShoppingCart(props) {
  const dispatch = useDispatch()
  const cart = useSelector( (state) => state.productCart);
  const product = useSelector((state) => state.products);
  const localStorage = useSelector((state) => state.arrayStorages);
  const [montoTotal, setMontoTotal] = useState(0);

  const [allProducts, setAllProducts] = useState([]);

  //consologuea el localStorage
  useEffect(() => {
    console.log(localStorage)
  }, [localStorage]);

useEffect(() => {
  const dbProducts = () => {
    setAllProducts(product);
  };
  dbProducts();
}, [product]);


const addToCart = (id) => {
  dispatch(addProductCart(id))
}

const Calculo = ()=>{ cart.map(e=> setMontoTotal(montoTotal+(e.cantidad*e.price)))};


const clearCart = () => {
  window.localStorage.clear('array')
  dispatch(ClearCart())
}

const delFromCart = () => {}
  return (
      <div className='container-productos' >
        <div>
         <h3>Carrito</h3>
         <div className='container-articulos col-xl-11 row '>
           <hr>
           </hr>
            <article class='box'>
                {/* {CartShp} */}
                {cart.length?cart.map( (item, index) => item!==undefined&&item!=="undefined"? ({Calculo},
                <CartItem className='Article' key={index} data={item} delFromCart={delFromCart}  />)
                              :null):null}              
            </article>
            <hr>
           </hr>
         </div>
         <h4>Monto Total:</h4>
         <h4>${montoTotal}</h4>
         {/* VER CON LOS CHICOS COMO SUMAMOS EL TOTAL */}
        <div className='botones'>
            <button className='boton' onClick={() => clearCart()}>Limpiar Carrito</button>
            <button className='boton' >Confirmar Pedido</button>
            <Link to='/home'><button className='boton' variant='success'>Agregar Productos</button></Link>
        </div>
           {/* <button variant='success'>Success</button>
          <button variant="danger">Danger</buton> */}
        </div>        
     </div>
    )
  }


  export default ShoppingCart;