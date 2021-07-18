import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { addProductCart, removeProductCart, ClearCart } from '../../actions';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import './shoppingCart.css';

function ShoppingCart(props) {
  const dispatch = useDispatch()
  const cart = useSelector( (state) => state.productCart);
  const product = useSelector((state) => state.products);
  const localStorage = useSelector((state) => state.arrayStorages);
  const [montoTotal, setMontoTotal] = useState(0);

  const [allProducts, setAllProducts] = useState([]);

  
  useEffect(() => {
  }, [localStorage]);

useEffect(() => {
  const dbProducts = () => {
    setAllProducts(product);
  };
  dbProducts();
}, [product]);

useEffect(() => {
  let aux = 0;
  cart.forEach(e=>  aux = aux + (e.price * e.cantidad))
  setMontoTotal(aux)
}, [cart])


const clearCart = () => {
  window.localStorage.clear('array')
  dispatch(ClearCart())
}

const delFromCart = () => {}
  return (
      <div className='container-productos'>
        <div>
         <h3>Bienvenido a tu Carrito de compras!!</h3>
         <div class="mb-2">Agregaste {cart.length} productos al carrito ✔{" "}</div>
         <div className='container-articulos col-xl-11 row '>
           <hr/>
            <article class='box'>
                {cart.length?cart.map( (item, index) => item!==undefined&&item!=="undefined"?   
                <CartItem className='Article' key={index} data={item} delFromCart={delFromCart}  />
               : console.log(item)  ):null}              
            </article>
            <hr/>
         </div>
         <h4>Monto Total:</h4>
         <h4>${montoTotal}</h4>
         {/* VER CON LOS CHICOS COMO SUMAMOS EL TOTAL */}
        <div className='botones'>
            <button className='btn btn-secondary m-14' >Confirmar Pedido</button>
            <Link to='/home'><button className='btn btn-secondary m-1' variant='success'>Agregar Productos</button></Link>
        </div>
            <button className='btn btn-danger mb-2' onClick={() => clearCart()}>Limpiar Carrito</button>
        </div>        
     </div>
    )
  }

  export default ShoppingCart;