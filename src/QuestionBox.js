import React, { useState } from "react";
import "./QuestionBox.css";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState([]);
 
  return (
    <div className="questionBox">
      <div className="question">
        <h3>{question}</h3>
      </div>
      <div className="questionOption">
        {options.map((text, index) => (
          <button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAnswer();
              selected(text);
            }}
          >
       
            {text}
          </button>
        ))}
      </div>
	 
    </div>
	 
  );
};

export default QuestionBox;
