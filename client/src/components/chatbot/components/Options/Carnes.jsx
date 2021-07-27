import React from "react";

import "./Options.css";

const Carnes = (props) => {
  const options = [
    {
      text: "Pollo",
      handler: props.actionProvider.pollo,
      id: 1,
    },
    { 
      text: "Cerdo",
      handler: props.actionProvider.cerdo,
      id: 2 
    },
    { 
      text: "Res horneada",
      handler: props.actionProvider.resHorno,
      id: 3 
    },
    { 
      text: "Asado",
      handler: props.actionProvider.asado,
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

export default Carnes;
