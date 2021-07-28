import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProductCart, ClearCart, removeProductCart, getProducts } from '../../actions';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import './shoppingCart.css';
import Loading from '../loading/Loading';
// import { orderPost } from '../../actions';
import { useHistory } from "react-router-dom";
import NavModal from '../navModal/navModal';
import FormCompras from './FormCompras';

function ShoppingCart(props) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.productCart);
  const product = useSelector((state) => state.products);
  console.log('hola emi querido', product?product[0]:'no hay nada')
  const [loading, setLoading] = useState(false);
  let z = product.filter(e=> e.id === 106)
  const localStorage = useSelector((state) => state.arrayStorages);
  const [montoTotal, setMontoTotal] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [form, setForm] = useState(false);
  const history = useHistory()

useEffect(() => {
}, [localStorage]);

useEffect(() => {
    dispatch(getProducts());
}, []);

// useEffect(() => {
  //   if (cart) {return null}
  //   if(window.localStorage.getItem('array')){
    //   cart = JSON.parse(window.localStorage.getItem('array'));
    //   console.log(cart)}
    // }, []);
    
    const addToCart = (el) => {
      dispatch(addProductCart(el.id));
    };
    
    useEffect(() => {
      let aux = 0;
       cart?.forEach(e=> {
        // let element = product.find(prod => prod.id === e.id)
        aux = aux + (e.cantidad * e.price)
        // element.stock >0? aux = aux + (e.price * (e.cantidad>element.stock? element.stock:e.cantidad)):console.log('sin stock')
      })
      // cart?.forEach(e=>e.stock>0? aux = aux + (e.price * (e.cantidad>e.stock?e.stock:e.cantidad)):console.log('sin stock'))
      setMontoTotal(aux)
    }, [cart, montoTotal, product])
    
    const clearCart = () => {
      window.localStorage.removeItem('array')
      dispatch(ClearCart())
    }
    
  let productsArray = cart?.map(el=> {
    return {
      subtotal: el.price * el.cantidad,
      cantidad: el.cantidad,
      id: el.id
    }
  })

  const [isOpen, setIsOpen] = useState(false);

  const order=()=>{
    if(!cart||!cart.length) return history.push('/home');
    let user =  window.localStorage.getItem("user");
    let completo = user? {
        idClient:user.split(',')[0].split(':')[1], 
        adress:user?.split(',')[5]?.split(':')[1], 
        products: productsArray, 
        paymentMethod: 'efectivo', 
        mail: user.split(',')[6]?.split(':')[1], 
        bill: montoTotal
    } : console.log('user is null');
    if (user){
      history.push('/FormCompras')
      // history.push('/pago')
      // dispatch(orderPost(completo));
      //  clearCart();
    // alert('pedido confirmado')
    }else{setIsOpen(true);}
  }

  const delFromCart = () => { }

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {

    return (
      <div className='container-productos'>
        {isOpen === true ?   <NavModal open={isOpen} onClose={() => setIsOpen(false)}/>:null}
        <div>
          <h3>Tu Carrito de compras</h3>
          {/* <div class="mb-2">Tenes {cart?.length||0} productos en tu carrito ✔{" "}</div> */}
          <div class="mb-2">Tenes {cart?.length} productos en tu carrito ✔{" "}</div>
          <div className='container-articulos col-xl-11 row '>
            <hr />
            <article class='box'>
              {cart?.length ? cart.map((item, index) => item !== undefined && item !== "undefined" ? 
                <CartItem className='Article' key={item.id} data={item} delFromCart={delFromCart}  onChange={() => console.log('funciona')}/>
                : console.log(item)) : null}
            </article>
            <hr />
          </div>
          <h4>Total productos:</h4>
          <h4>${montoTotal}</h4>
          <h4></h4>
          {/* VER CON LOS CHICOS COMO SUMAMOS EL TOTAL */}
          <div className='botones'>
            <button className='btn btn-secondary m-14' onClick={order} >Confirmar Pedido</button>
            <Link to='/home'><button className='btn btn-secondary m-1' variant='success'>Agregar Productos</button></Link>
          </div>
          <button className="btn btn-dark mb-2" onClick={() => clearCart()}>
            Limpiar Carrito
          </button>
        </div>
      </div>
    )
  }
}

export default ShoppingCart;




