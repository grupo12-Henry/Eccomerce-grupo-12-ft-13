import React from "react";
import "./Options.css";

const Navegacion = (props) => {
  const options = [
    {
      text: "Busqueda",
      handler: props.actionProvider.busqueda,
      id: 1,
    },
    { 
      text: "Usuarios", //login, register, logout
      handler: props.actionProvider.usuario,
      id: 2 
    },
    { 
      text: "Pedidos", //pedidos anteriores, como hacer un pedido, carrito
      handler: props.actionProvider.pedidos,
      id: 3 
    },
    // { 
    //   text: "Favoritos", //guardar favoritos
    //   handler: props.actionProvider.favoritos,
    //   id: 4 
    // },
  
  ]
  

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Navegacion;
