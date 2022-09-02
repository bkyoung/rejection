import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar.js';
import AppStyles from './App.styles.js';
import { getQuestions } from '../features/question/questionSlice';
import QuestionGrid from '../components/QuestionGrid/QuestionGrid.js';
import Sidebar from '../components/Sidebar/Sidebar.js';

const App = () => {
  const questions = useSelector((state) => getQuestions(state));

  return (
    <>
      <style jsx>
        {AppStyles}
      </style>
      <div className="app-container">
        <Navbar />
        <div className="app-grid">
          <Sidebar />
          <div className="app-content">
            <QuestionGrid questions={questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
