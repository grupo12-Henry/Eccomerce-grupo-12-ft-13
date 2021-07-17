import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProductCart, removeProductCart, incrementCartQuantity, decrementCartQuantity } from '../../actions/index';


function CartItem({data, quantity }) {

  const dispatch =useDispatch()
  const [state, setState]= useState(1)
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const[precioTotal, setPrecioTotal]= useState(data.price)
  
  const delFromCart = () => {
    dispatch(removeProductCart(data.id))
  }

  const handleCountChange = (e) => {
    setState(e.target.value);
    setPrecioTotal((e.target.value)  * data.price)
  }
  

  const handleQuantityChange = (e) => {
      const value = e.target.value;
      console.log(value)
      if(value > 0 && value <= 10) {
          setItemQuantity(value);
          dispatch(addProductCart(data.id));
      }
  };

  const incrementOrDecrement = (e, type) => {
    const value = itemQuantity;
    console.log(type, value);
    if(type === 'inc' && value < 10) {
        setItemQuantity(itemQuantity + 1);
        dispatch(incrementCartQuantity(data.id));
    }
    if(type === 'desc' && value > 1) {
        setItemQuantity(itemQuantity - 1);
        dispatch(decrementCartQuantity(data.id));
    }
};
const formatMoney = (price) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

  return (
    <div class=" justify-content-center align-items-center p-1 mt-2 mb-2">
    <button type="button" class="btn btn-outline-secondary">
          🛒<a href="/order" target="_blank" rel="nofollow" class="badge badge-light">
          <span id="cart_menu_num" data-action="cart-can" class=" rounded-circle">{itemQuantity}</span></a>
        </button>
    <div class='d-flex justify-content-center row mb-5 '>
      <div class="col-md-10 shadow p-3 mb-5 bg-body rounded">
        <div class="p-2"><h3> Producto agregado del Carrito ✔</h3></div>
        <article class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
          <div class="mr-1"><img width="80" src={data.image} alt='' /></div>
          <div class="d-flex flex-column align-items-center product-details"><h2>{data.name}</h2></div>
          <h4 class="text-grey">$ {data.price}.00</h4>
          <input type='number' min={1} max={12}
            onChange={handleCountChange} name='count' autoComplete='off'/>
          <h4 class="ml-2">TOTAL</h4> <h3 class='ml-2'> $ {precioTotal}.00</h3>----LO NUEVO
          <div className="col-4 col-sm-4 col-md-4">
                    <div >
                        <input
                            onClick={(e) => {incrementOrDecrement(e, 'inc')}}
                            type="button" value="+" />
                            <input
                                onChange={handleQuantityChange}
                                type="number" step="1" max="10" min="1" value={itemQuantity} title="Qty"
                                   size="4" />
                                <input
                                    onClick={(e) => {incrementOrDecrement(e, 'desc')}}
                                    type="button" value="-" />
                    </div>
                </div>--HASTA AQUI
          <button class="ml-3 mr-3 font-weight-bold btn btn-outline-danger" onClick={() => delFromCart()}>✖</button>
        </article>
        <br />
        <div class="d-flex justify-content-end">
        <button type="button" class=" font-weight-bold btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
    </div>
  )
}

  export default CartItem;

