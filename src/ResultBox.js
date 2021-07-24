import React from "react";
import "./ResultBox.css";
import { Link } from "react-router-dom";
import logo from "./images/quiz2.gif";
function ResultBox({ score }) {
  console.log("score in resultbox:", score);
  return (
    <div className="score-board">
      <div className="score">
        <div className="score_image">
          <img
            style={{
              height: "200px",
              width: "200px",
              textAlign: " center",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={logo}
          />
        </div>
        <h3>Your score is {score ? score : 0} / 5 correct answer ! ! !</h3>
      </div>
      <div className="result_button">
        <Link to="/playagain">
          <button className="playBtn"> Play Again</button>
        </Link>
      </div>
    </div>
  );
}

export default ResultBox;
