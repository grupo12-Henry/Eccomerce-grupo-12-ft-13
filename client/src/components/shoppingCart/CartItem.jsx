import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { removeProductCart, addProductCart, updateProductCart, getProducts } from '../../actions';
import './CartItem.css';

function CartItem({ data }) {
  const [precioTotal, setPrecioTotal] = useState(data.price * data.cantidad)
  const ProductsCart = useSelector((state) => state.productCart)
  const product = useSelector((state) => state.products);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts());
}, []);



useEffect(() => {
  dispatch(getProducts());
  let element = product.find(prod => prod.id === data.id)
  if(element && element.stock !== data.stock){
    data.stock = element.stock
  }
  setPrecioTotal(data.cantidad<data.stock ? data.cantidad * data.price: data.stock*data.price)
}, [precioTotal])

  useEffect(() => {
    // let element = product.find(prod => prod.id === data.id)
    // if(element.stock !== data.stock){
    //   data.stock = element.stock
    // }
}, []);
 

  const delFromCart = () => {
    let array = JSON.parse(window.localStorage.getItem("array"));
    window.localStorage.setItem("array", JSON.stringify(array.filter(e=>e.id!==data.id)))
    dispatch(removeProductCart(data.id))
  }

  const alertStock = () => {
    let element = product.find(prod => prod.id === data.id)
    console.log(element)
    console.log(element.stock)
    console.log(data.cantidad)
    if(element.stock === data.cantidad){
      alert('No se pueden agregar mas unidades de este producto por falta de Stock')
    }
  }

  const handleCountChange = (e) => {
    data.cantidad = parseInt((e.target.value));
    let array = JSON.parse(window.localStorage.getItem("array"));

    window.localStorage.setItem("array", JSON.stringify((!!array)?array.filter(e => e.id !== data.id).concat([{...data, cantidad: parseInt(data.cantidad)}]):array=[{...data, cantidad: parseInt(data.cantidad)}]))
    dispatch(updateProductCart({...data, cantidad:data.cantidad>data.stock?data.stock:data.cantidad}))//typeof data.cantidad === Number ?:1
    setPrecioTotal((data.cantidad>data.stock)?data.stock * data.price:data.cantidad*data.price)
  }
  return (
     <div id='contenedor' className='container-item d-flex row'>
            <img src={data.image} className='Img col-sm-2' alt='imagen' />
            <h6 id='iName' className='col-12 col-sm-3' >{data.name}</h6>
            <h6 id='iPrice'className='col-1 col-sm-2'>${data.price}</h6>
            <input id='iCounter' className='col-3  counter col-sm-1' type='number' min={1} max={data.stock} onClick={alertStock} onChange={handleCountChange} value={(data.cantidad>data.stock)? data.stock:data.cantidad}  name='count' autoComplete='off' />
            <h6 id='iPriceT'className='col-1  col-sm-2 '>${precioTotal}</h6>
            <button id='bClear' type="button" className='btn btn-danger col-1 col-sm-1 ' onClick={() => delFromCart()} >✖</button>
        <hr />
        
    </div>
  )
}

export default CartItem;