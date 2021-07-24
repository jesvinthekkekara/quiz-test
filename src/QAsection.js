import React, { useState,useEffect } from "react";
import questionAPI from "./Questions";
import QuestionBox from './QuestionBox';
import ResultBox from './ResultBox';

function QAsection() {
  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);

    useEffect(() => {
        getQuestions()
        
        
    }, [])
  const getQuestions = () => {
    questionAPI().then((question) => {
      setQuestionBank(question);
    });
  };

  
 


const computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
        setScore(score + 1);
    }
    setResponses(responses < 5 ? responses + 1 : 5);
  };
 
console.log("Score in question box: ",score);


  return (
    <div>
        {questionBank.length > 0 &&
        responses < 5 &&
        questionBank.map(( {question, answers, correct, questionId }) => (
          <QuestionBox
            question={question}
            options={answers}
            key={questionId}
            selected={(answer) => computeAnswer(answer, correct)}
          />
        ))} 

       {responses === 5 ? <ResultBox score={score} /> : null} 
      
 </div>
  )}
export default QAsection;
