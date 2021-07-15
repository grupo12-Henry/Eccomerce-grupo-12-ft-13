import React from 'react';
import StyledDiv from './Styled';
import { useSelector, useDispatch  } from 'react-redux'
import {useState} from 'react'
import { removeProductCart } from '../../actions';


function CartItem({data}) {

  const [state, setState]= useState(1)
  const[precioTotal, setPrecioTotal]= useState(data.price*state)
  const ProductsCart = useSelector( (state) => state.productCart)
  const dispatch = useDispatch()

  if(data.estado){
    setState(state+1)
  }
  
  const delFromCart = () => {
    dispatch(removeProductCart(data.id))
    console.log(data.id)
  }


  const handleCountChange = (e) => {
    setState(e.target.value);
    setPrecioTotal(e.target.value*data.price)
    //console.log(state)
  }


  // function onRemove(id) {

  //   setCities(oldCities => oldCities.filter(c => c.id != id));
  // }

    return (
      <div >
        <StyledDiv>
        <div class='container' className='container-carrito'> 
         <img src={data.image} className='Img'/>
          <h6 class='ml-4 mr-5'>{data.name}</h6>
          <h6 class='ml-5 mr-5'>✏${data.price}.00</h6>
          <input type='number'class="ml-5 mr-5" min={1} max={12} onChange={handleCountChange} className='counter' name='count' autoComplete='off'/>
          <h6 class='ml-5' >$ {precioTotal}.00</h6>
          <button type="button" class="ml-5 mr-5 btn bg-cart" className='button' onClick={() => delFromCart()} >❌</button>

       </div>
        </StyledDiv>
       </div>
    )
  }

  export default CartItem;


  /*
  import React from 'react'
import styles from '../styles/Card.css';

export default function Card({ name, max, min, img, onClose }) {
  // acá va tu código
  return (
    <div className={styles.Contenedor} >
      <button onClick={onClose} className={styles.boton} >  X</button>
      <h5>{name}</h5>
      <div className={styles.temp} >
        <div>
          <h6>Max</h6>
          <h6>{max}</h6>
        </div>
        <div>
          <h6>Min</h6>
          <h6>{min}</h6>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="No se encontro la imagen" />
      </div>
    </div>
  );
};
  
  
  
  */