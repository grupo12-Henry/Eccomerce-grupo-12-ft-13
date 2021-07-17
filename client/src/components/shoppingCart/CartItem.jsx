import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { removeProductCart } from '../../actions';
import './CartItem.css';

function CartItem({ data }) {
  // const [state, setState]= useState(1)
  const [precioTotal, setPrecioTotal] = useState(data.price * data.cantidad)
  const ProductsCart = useSelector((state) => state.productCart)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   setPrecioTotal(data.cantidad * data.price)
  // }, [data.cantidad])

  const delFromCart = () => {
    let array = JSON.parse(window.localStorage.getItem("array"));
    window.localStorage.setItem("array", JSON.stringify(array.filter(e=>e.id!==data.id)))
    dispatch(removeProductCart(data.id))
    
    console.log(data.id)
  }


  const handleCountChange = (e) => {
    data.cantidad = (e.target.value);
    let array = JSON.parse(window.localStorage.getItem("array"));
    window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.concat([data]) : array=[data]))
    setPrecioTotal(e.target.value * data.price)
    //console.log(state)
  }


  return (
    <div >
        <div className='container-item row'>
          <img src={data.image} className='Img col-2' alt='imagen' />
          <h6 className='col-3' >{data.name}</h6>
          <h6 className='col-2'>${data.price}.00</h6>
          <input type='number' min={1} max={12} onChange={handleCountChange} value={data.cantidad} className='counter col-1' name='count' autoComplete='off' />
          <h6 className='col-2'>$ {precioTotal}.00</h6>
          <button type="button" className='button col-1' onClick={() => delFromCart()} >❌</button>

        </div>
    </div>

  //    <div >
  //    <StyledDiv>
  //      <div class='container' className='container-carrito'>
  //        <img src={data.image} className='Img' alt='imagen' />
  //        <h6 >{data.name}</h6>
  //        <h6 >${data.price}.00</h6>
  //        <input type='number' min={1} max={12} onChange={handleCountChange} value={data.cantidad} className='counter' name='count' autoComplete='off' />
  //        <h6 >$ {precioTotal}.00</h6>
  //        <button type="button" className='button' onClick={() => delFromCart()} >❌</button>

  //      </div>
  //    </StyledDiv>
  //  </div>
  )
}

export default CartItem;