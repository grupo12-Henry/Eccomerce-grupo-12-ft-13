import React from "react";

import "./Options.css";

const OtrosPlatos = (props) => {
  const options = [
    {
      text: "Pastas",
      handler: props.actionProvider.pastas,
      id: 1,
    },
    { 
      text: "Risotto",
      handler: props.actionProvider.risotto,
      id: 2 
    },
    { 
      text: "Vegetales",
      handler: props.actionProvider.vegetales,
      id: 3 
    },
    { 
      text: "Picadas",
      handler: props.actionProvider.picadas,
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

export default OtrosPlatos;
