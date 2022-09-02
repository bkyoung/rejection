import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';
import { getQuestions } from '../../features/question/questionSlice.js';
import { getUser, isLoggedIn } from '../../features/user/userSlice.js';
import QuestionGridStyles from './QuestionGrid.styles.js';

let QuestionGrid = ({ questions }) => {
  const loggedIn = useSelector(state => isLoggedIn(state));
  const questionsInState = useSelector(state => getQuestions(state));
  const user = useSelector(state => getUser(state));
  useEffect(() => {}, [questions])
  return (
    <>
      <style jsx>
        {QuestionGridStyles}
      </style>  
      {questions.length > 0
        ? <>
            <div className="questions-grid">
              {questions.map((question, idx) => (
                <Card
                  key={idx}
                  question={question}
                />
              ))
              }
            </div>
          </>
        : <>
            <div className="no-questions">
              <span className="nothing-to-display">
                No Rejections Yet
              </span>
            </div>
          </>
      }
    </>
  );
};

export default QuestionGrid;
