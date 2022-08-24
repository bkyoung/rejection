import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppStyles from './App.styles.js';
import { createQuestion, getQuestions, getScore, updateQuestion } from '../features/rejection/rejectionSlice';
import AddQuestion from '../components/AddQuestion/AddQuestion.js';
import QuestionList from '../components/QuestionList/QuestionList.js';
import Score from '../components/Score/Score.js';

const App = ({ title = 'Rejection', subtitle = 'You Have to Lose to Win' } = {}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const addNewQuestion = ({ question, askee }) => dispatch(createQuestion({ question, askee }));
  const updateAQuestion = ({ id, question, askee, status }) => dispatch(updateQuestion({ id, question, askee, status }))
  const questions = useSelector((state) => getQuestions(state));
  const score = useSelector((state) => getScore(state));
  
  return (
    <>
      <style jsx>
        {AppStyles}
      </style>
      <div className="appcontainer">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
        <br />
        <Score score={score} />
        <br />
        <br />
        <AddQuestion open={open} handleClose={handleClose}  handleOpen={handleOpen} dispatch={addNewQuestion} />
        <br />
        <br />
        <QuestionList questions={questions} onClick={updateAQuestion} />
      </div>
    </>
  );
};

export default App;
