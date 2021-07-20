import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProductCart, removeProductCart, ClearCart } from '../../actions';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import './shoppingCart.css';
import Loading from '../loading/Loading';
import { orderPost } from '../../actions';
import { useAuth } from "../../contexts/AuthContext";


function ShoppingCart(props) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.productCart);
  const product = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const localStorage = useSelector((state) => state.arrayStorages);
  const [montoTotal, setMontoTotal] = useState(0);

  const [allProducts, setAllProducts] = useState([]);
  const montoTotalPedido = useSelector((state) => state.montoTotalPedido);


  // const user= JSON.parse(window.localStorage.getItem('user'));
  // const {currentUser}= useAuth()
  // console.log(currentUser)
  // let ids=''
  // if (currentUser){ ids = currentUser.v.b;}
  // useEffect(() => {
  // }, [localStorage]);

  useEffect(() => {
    // console.log(localStorage)
  }, [localStorage]);


  // const dbProducts = () => {
  //     setAllProducts(product);
  //   };
  //   dbProducts();
  // }, [product]}

  // console.log('usuarioooooo', currentUser.metadata.a)

  const addToCart = (el) => {
    // dispatch(addLocalStorage(el));
    dispatch(addProductCart(el.id));
    console.log();
  };

useEffect(() => {
  let aux = 0;
  cart.forEach(e=>  aux = aux + (e.price * e.cantidad))
  setMontoTotal(aux)
}, [cart])

  console.log('carrito con emi', cart)
  const clearCart = () => {
    window.localStorage.clear('array')
    dispatch(ClearCart())
  }

// const Calculo = ()=>{ cart.map(e=> setMontoTotal(montoTotal+(e.cantidad*e.price)))};
  //idClient,ticket, date,bill, paymentMethod,adress,mail,shippingDate,state,products,freight,guideNumber,cost,ivaCondition,ivaCost,subtotal,cantidad
//  console.log('santiuser', user)
  
  const order=()=>{
    let completo = user? {idClient:user.id, adress:user.adress, products:cart, paymentMethod:'efectivo', mail:user.mail, Total:montoTotal}:null
    dispatch(orderPost(completo));
    console.log(cart);
    clearCart();
    alert('pedido confirmado')
  }
  console.log('carrito', cart)

  const delFromCart = () => { }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 400);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {

    return (
      <div className='container-productos'>
        <div>
          <h3>Bienvenido a tu Carrito de compras!!</h3>
          <div class="mb-2">Agregaste {cart.length} productos al carrito ✔{" "}</div>
          <div className='container-articulos col-xl-11 row '>
            <hr />
            <article class='box'>
              {cart.length ? cart.map((item, index) => item !== undefined && item !== "undefined" ? 
                <CartItem className='Article' key={item.id} data={item} delFromCart={delFromCart}  onChange={() => console.log('funciona')}/>
                : console.log(item)) : null}
            </article>
            <hr />
          </div>
          <h4>Monto Total:</h4>
          <h4>${montoTotal}</h4>
          <h4></h4>
          {/* VER CON LOS CHICOS COMO SUMAMOS EL TOTAL */}
          <div className='botones'>
            <button className='btn btn-secondary m-14' onClick={order} >Confirmar Pedido</button>
            <Link to='/home'><button className='btn btn-secondary m-1' variant='success'>Agregar Productos</button></Link>
          </div>
          <button className='btn btn-danger mb-2' onClick={() => clearCart()}>Limpiar Carrito</button>
        </div>
      </div>
    )
  }
}

export default ShoppingCart;
