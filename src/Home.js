import React from "react";
import "./Home.css";
import logo from "./images/quiz.gif";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    backButton: {
      marginTop: "5px",
    },
  })
);
function Home() {
  console.log("Home");
  const classes = useStyles();
  return (
    <div className="quiz">
      <div className="quiz_window">
        <img src={logo} />

        <Link to="/quiz">
          <div>
            <button type="submit" className="quiz_button">
              START TEST
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
