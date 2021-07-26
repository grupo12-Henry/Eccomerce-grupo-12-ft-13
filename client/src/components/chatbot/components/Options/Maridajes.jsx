import React from "react";

import "./Options.css";

const Maridajes = (props) => {
  const options = [
    {
      text: "Carnes",
      handler: props.actionProvider.carnes,
      id: 1,
    },
    { 
      text: "Pescados",
      handler: props.actionProvider.pescados,
      id: 2
    },
    { 
      text: "Otros platos",
      handler: props.actionProvider.otrosPlatos,
      id: 3
    },
  ]
  

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Maridajes;
