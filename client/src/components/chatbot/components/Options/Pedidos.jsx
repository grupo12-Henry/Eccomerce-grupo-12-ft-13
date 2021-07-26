import React from "react";
import "./Options.css";

const Pedidos = (props) => {
  const options = [
    {
      text: "Hacer un pedido",
      handler: props.actionProvider.pedido,
      id: 1,
    },
    { 
      text: "Carrito", //pedidos anteriores, como hacer un pedido, carrito
      handler: props.actionProvider.carrito,
      id: 2 
    },
    { 
        text: "Pedidos anteriores", //login, register, logout
        handler: props.actionProvider.pedidosAnteriores,
        id: 3 
      }
  
  ]
  

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Pedidos;
