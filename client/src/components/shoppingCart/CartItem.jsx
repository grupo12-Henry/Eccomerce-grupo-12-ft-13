import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { removeProductCart, addProductCart, updateProductCart } from '../../actions';
import './CartItem.css';

function CartItem({ data }) {
  // const [state, setState]= useState(1)
  const [precioTotal, setPrecioTotal] = useState(data.price * data.cantidad)
  const ProductsCart = useSelector((state) => state.productCart)
  const dispatch = useDispatch()

  // cada vez q cambie el cant, se impacte en el productCart
  //crear una action que cambie el valor de la cantidad,
  //traerme aqui el useDispatch y ejecutar esa action en el onChange de el cant ese, y le paso la cantidad
  //para que cambie el product card, y actualice el localstorage

 

  useEffect(() => {
    setPrecioTotal(data.cantidad * data.price)
  }, [precioTotal])

 

  const delFromCart = () => {
    let array = JSON.parse(window.localStorage.getItem("array"));
    window.localStorage.setItem("array", JSON.stringify(array.filter(e=>e.id!==data.id)))
    dispatch(removeProductCart(data.id))
  }

  const handleCountChange = (e) => {
    data.cantidad = (e.target.value);
    let array = JSON.parse(window.localStorage.getItem("array"));
    window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.concat([data]) : array=[data]))
    dispatch(updateProductCart({...data, cantidad:data.cantidad>data.stock?data.stock:data.cantidad}))//typeof data.cantidad === Number ?:1
    setPrecioTotal((data.cantidad>data.stock)?data.stock * data.price:data.cantidad*data.price)
    //VER ESTE PROCEDIMIENTO, AQUI DEBE SETEARSE LA CANTIDAD DEL CARRITO EN PRODUCTCART
  }
// console.log(typeof data.cantidad)
  return (
    <div >
        <div className='container-item d-flex row'>
          <img src={data.image} className='Img col-2' alt='imagen' />
          <h6 className='col-3' >{data.name}</h6>
          <h6 className='col-2'>$ {data.price}.00</h6>
          <input type='number' min={1} max={data.stock} onChange={handleCountChange} value={(data.cantidad>data.stock)? data.stock:data.cantidad} className='counter col-1' name='count' autoComplete='off' />
          <h6 className='col-2'>$ {precioTotal}.00</h6>
          <button type="button" className='btn btn-danger col-1' onClick={() => delFromCart()} >✖</button>
        </div>
    </div>
  )
}

export default CartItem;