import React, { useEffect } from 'react';
import Question from '../Question/Question.js';
import QuestionListStyles from './QuestionList.styles.js';

let QuestionList = ({ questions, onClick }) => {
  const lastIndex = questions.length - 1
  useEffect(() => {
    console.log(questions)
  }, [questions])
  
  return (<> 
    <style jsx>
      {QuestionListStyles}
    </style>  
    <div className="questions">
      <div className="questions-header">
          <div className="header-block p25">Question</div>
          <div className="header-block p25">Askee</div>
          <div className="header-block w125">Response</div>
          <div className="header-block w175"></div>
      </div>
      <div>
        {questions.map((question, idx) => (
          <Question className={idx === lastIndex && 'last' } key={idx} question={question} onClickHandler={onClick} />
         ))
        }
      </div>
    </div>
  </>);
};

export default QuestionList;
