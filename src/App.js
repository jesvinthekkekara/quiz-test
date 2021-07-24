import React, { useState } from "react";
import "./App.css";
import QAsection from './QAsection';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Quiz from './Quiz'
import QuestionBox from './QuestionBox'

function App() {
 
  return (
    <Router>
      <div>
       
         

            <Switch>
            <Route exact path="/quiz">
                <Quiz/>
              </Route>
              <Route exact path="/playagain">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route> 
             
           
            </Switch>
         
      </div>
    </Router>
  );
}

export default App;
