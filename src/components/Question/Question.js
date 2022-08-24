import React from 'react';
import AcceptRejectButtons from '../Button/AcceptRejectButton.js';
import QuestionStyles from './question.styles.js';

const Question = ({ question, onClickHandler, ...props }) => {
  const { className } = props
  const { question: q, askee, status } = question
  return (<> 
    <style jsx>
      {QuestionStyles}
    </style> 
    <div
      className={className ? className.toString().concat(' ', 'question-container') : 'question-container'}
    >
      <div className="question-item p25">{q}</div>
      <div className="question-item p25">{askee}</div>
      <div className="question-item w125 status">{status}</div>
      <div className="w175">
      {status === 'Unanswered' && <AcceptRejectButtons data={question}  onClick={onClickHandler} />}
      </div>
    </div>
    </>
  );
};

export default Question;
