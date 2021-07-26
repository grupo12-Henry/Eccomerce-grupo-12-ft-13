import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Navegación",
      handler: props.actionProvider.navegacion,
      id: 1,
    },
    { 
      text: "Maridajes",
      handler: props.actionProvider.maridajes,
      id: 2 
    },
    
  ] 

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
