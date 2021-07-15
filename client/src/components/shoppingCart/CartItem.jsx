import React from 'react';


function CartItem() {
    return (
      <div>
        <h3>Elementos del Carrito</h3>
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