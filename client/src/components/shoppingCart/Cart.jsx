import React from 'react';


function Cart({data, addToCart}) {
    return (
      <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article> </article>
        <h3>Carrito</h3>
        <article> </article>
      </div>
      
    )
  }

  export default Cart;

  /*
import React from 'react';
// import styles from './Cards.css';
import Card from './Card.jsx';


export default function Cards({cities, onClose }) {
  // console.log(cities);
  if (cities) {
    return (
      <div >
        {cities.map((c, index) =>
         <Card
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
              key={index}
             
            />)
        }
      </div>
    );
  }else{
      return (
        <div> Sin cityes </div>
      )
  }

};
  */