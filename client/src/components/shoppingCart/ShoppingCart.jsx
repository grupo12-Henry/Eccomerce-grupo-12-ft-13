import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { addProductCart, removeProductCart, ClearCart, getProducts ,ADD_TO_CART} from '../../actions';
// import ProductCart from './ProductCart';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import CartShp from './CartShp'
import StyledDiv from './Styled';
import './shoppingCart.css';

function ShoppingCart(props) {
  const dispatch = useDispatch()
  const cart = useSelector( (state) => state.productCart)
  const product = useSelector((state) => state.products);

  const [allProducts, setAllProducts] = useState([]);


useEffect(() => {
  const dbProducts = () => {
    setAllProducts(product);
  };
  dbProducts();
}, [product]);


const addToCart = (id) => {
  dispatch(addProductCart(id))
}


const delFromCart = () => {}

const clearCart = () => {
  dispatch(ClearCart())
}

    return (
     
      <div className='container-productos' >
         <div  class="container-fluid">
         <div class="row">
         <h3>Carrito</h3>
       <article>
         {CartShp}
         <button onClick={() => clearCart()}>Limpiar Carrito</button>
         {cart.length?cart.map( (item, index) => 
         <CartItem className='Article' key={index} data={item} delFromCart={delFromCart}/>
         ):null}
       </article>
         <article class='box'>
        
         </article>
        </div>
         </div>
     </div>

      
      
      
    )
  }


  export default ShoppingCart;