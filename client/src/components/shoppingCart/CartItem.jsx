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

  useEffect(() => {
    setPrecioTotal(data.cantidad * data.price)
  }, [data.cantidad])

  const delFromCart = () => {
    let array = JSON.parse(window.localStorage.getItem("array"));
    window.localStorage.setItem("array", JSON.stringify(array.filter(e=>e.id!==data.id)))
    dispatch(removeProductCart(data.id))
  }

  const handleCountChange = (e) => {
    data.cantidad = (e.target.value);
    let array = JSON.parse(window.localStorage.getItem("array"));
    window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.concat([data]) : array=[data]))
    setPrecioTotal(e.target.value * data.price)
  }

  return (
    <div >
        <div className='container-item d-flex row'>
          <img src={data.image} className='Img col-2' alt='imagen' />
          <h6 className='col-3' >{data.name}</h6>
          <h6 className='col-2'>$ {data.price}.00</h6>
          <input type='number' min={1} max={12} onChange={handleCountChange} value={data.cantidad} className='counter col-1' name='count' autoComplete='off' />
          <h6 className='col-2'>$ {precioTotal}.00</h6>
          <button type="button" className='btn btn-danger col-1' onClick={() => delFromCart()} >✖</button>
        </div>
    </div>
  )
}

export default CartItem;