import React from "react";

import "./Options.css";

const Pescados = (props) => {
  const options = [
    {
      text: "Ceviche y Tiraditos",
      handler: props.actionProvider.ceviche,
      id: 1,
    },
    { 
      text: "Sushi",
      handler: props.actionProvider.sushi,
      id: 2 
    },
    { 
      text: "Mariscos y paella",
      handler: props.actionProvider.mariscos,
      id: 3 
    },
    { 
      text: "Pescado al horno",
      handler: props.actionProvider.pezHorno,
      id: 4 
    },
  ]
  

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Pescados;
