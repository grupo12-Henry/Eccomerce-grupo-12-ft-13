import React, { useState, useEffect } from "react";

import "./Quiz.css";

const FlashCard = ({ question, answer, link, incrementIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <>
      <div
        className="flashcard-container"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer && question}
        {showAnswer && answer}
        {showAnswer && link && (<a href={link}>Ver Recomendación</a>)}
      </div>
      {showAnswer && (
        <button onClick={incrementIndex} className="flashcard-button">
          Siguiente
        </button>
      )}
    </>
  );
};

export default FlashCard;
