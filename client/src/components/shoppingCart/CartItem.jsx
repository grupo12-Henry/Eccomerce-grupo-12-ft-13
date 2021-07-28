import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { removeProductCart, addProductCart, updateProductCart } from '../../actions';
import './CartItem.css';

function CartItem({ data }) {
  // const [state, setState]= useState(1)
  const [precioTotal, setPrecioTotal] = useState(data.price * data.cantidad)
  const ProductsCart = useSelector((state) => state.productCart)
  const product = useSelector((state) => state.products);

  const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getProducts());
// }, []);
// cada vez q cambie el cant, se impacte en el productCart
//crear una action que cambie el valor de la cantidad,
//traerme aqui el useDispatch y ejecutar esa action en el onChange de el cant ese, y le paso la cantidad
//para que cambie el product card, y actualice el localstorage


useEffect(() => {
  let element = product.find(prod => prod.id === data.id)
  if(element.stock !== data.stock){
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
    //VER ESTE PROCEDIMIENTO, AQUI DEBE SETEARSE LA CANTIDAD DEL CARRITO EN PRODUCTCART
  }
// console.log(typeof data.cantidad)
  return (
    <div >
        <div className='container-item d-flex row'>
          <img src={data.image} className='Img col-2' alt='imagen' />
          <h6 className='col-3' >{data.name}</h6>
          <h6 className='col-2'>$ {data.price}.00</h6>
          <input type='number' min={1} max={data.stock} onClick={alertStock} onChange={handleCountChange} value={(data.cantidad>data.stock)? data.stock:data.cantidad} className='counter col-1' name='count' autoComplete='off' />
          <h6 className='col-2'>$ {precioTotal}.00</h6>
          <button type="button" className='btn btn-danger col-1' onClick={() => delFromCart()} >✖</button>
        </div>
    </div>
  )
}

export default CartItem;