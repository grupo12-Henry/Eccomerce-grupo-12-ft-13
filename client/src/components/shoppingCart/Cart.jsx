import React, { useState} from 'react';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'


function Cart({data, addToCart}) {

  const dispatch = useDispatch()
  const cart = useSelector( (state) => state.productCart)
    
  const clearCart = ( {itemQuantity}) => {}
  return (
      <div class="shadow-none p-3 mt-2 mb-4 bg-light rounded">
      <h3 class="d-flex justify-content-center">Carrito de Compras</h3>
      <div class="d-flex justify-content-end">
      </div>
      {/* <div>
      <a href="compras" class="cart" target="_blank" rel="nofollow"><i class="fas fa-shopping-cart"></i><span>Carrito</span>
        <span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">2</span>
      </a>
    </div> */}
     <article>          
       {cart.map( (item, index) => 
       <CartItem key={index} data={item} />
       )}
     </article>
     <div class="d-flex justify-content-end">
       <button type="button" class="btn btn-danger" onClick={() => clearCart()}>Limpiar Carrito</button>
     </div>
     </div>
      
    )
  }

  export default Cart;