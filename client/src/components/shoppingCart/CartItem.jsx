import React from 'react';
import StyledDiv from './Styled';
import { useSelector, useDispatch } from 'react-redux'
import {useState, useEffect} from 'react'
import { removeProductCart } from '../../actions';


function CartItem({data}) {
  // const [state, setState]= useState(1)
  const[precioTotal, setPrecioTotal]= useState(data.price*data.cantidad)
  const ProductsCart = useSelector( (state) => state.productCart)
  const dispatch = useDispatch()

  useEffect(() => {
    setPrecioTotal(data.cantidad*data.price)
  }, [data.cantidad])
  
  const delFromCart = () => {
    dispatch(removeProductCart(data.id))
    console.log(data.id)
  }


  const handleCountChange = (e) => {
    data.cantidad=(e.target.value);
    setPrecioTotal(e.target.value*data.price)
    //console.log(state)
  }


    return (
      <div >
        <StyledDiv>
        <div class='container' className='container-carrito'> 
         <img src={data.image} className='Img'/>
          <h6 class='ml-4 mr-5'>{data.name}</h6>
          <h6 class='ml-5 mr-5'>${data.price}.00</h6>
          <input type='number'class="ml-5 mr-5" min={1} max={12} onChange={handleCountChange} value={data.cantidad} className='counter' name='count' autoComplete='off'/>
          <h6 class='ml-5' >$ {precioTotal}.00</h6>
          <button type="button" class="ml-5 mr-5 btn bg-cart" className='button' onClick={() => delFromCart()} >❌</button>

       </div>
        </StyledDiv>
       </div>
    )
  }

  export default CartItem;