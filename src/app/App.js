import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar.js';
import AppStyles from './App.styles.js';
import { getQuestions, updateQuestion } from '../features/rejection/rejectionSlice';
import { getUser } from '../features/user/userSlice.js';
import QuestionGrid from '../components/QuestionGrid/QuestionGrid.js';
import Sidebar from '../components/Sidebar/Sidebar.js';

const App = ({ title = 'Rejection', subtitle = 'You Have to Lose to Win' } = {}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const updateAQuestion = ({ id, question, askee, status }) => dispatch(updateQuestion({ id, question, askee, status }))
  const questions = useSelector((state) => getQuestions(state));
  const user = useSelector((state) => getUser(state));
  
  return (
    <>
      <style jsx>
        {AppStyles}
      </style>
      <div className="app-container">
        <Navbar title={title} subtitle={subtitle} user={user} />
        <div className="app-grid">
          <Sidebar handleModalOpen={handleOpen} user={user} />
          <div className="app-content">
            <QuestionGrid questions={questions} onClick={updateAQuestion} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
