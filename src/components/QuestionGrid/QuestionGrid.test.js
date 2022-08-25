import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import QuestionGridComponent from './QuestionGrid.js';
import { Provider } from 'react-redux';
import store from '../../app/store.js';
import { createQuestion } from '../../features/rejection/rejectionSlice.js';

describe('QuestionGrid component renders', async assert => {
  const QuestionGrid = (questions = []) => render(<Provider store={store}><QuestionGridComponent questions={questions} /></Provider>);
  
  {
    const questions = []
    const $ = QuestionGrid();
    assert({
      given: 'no questions',
      should: 'render no questions',
      actual: $('.questionContainer').length,
      expected: 0
    });
  }

  {
    const { payload } = createQuestion({ question: "what?", askee: "child", status: "Unanswered" })
    const $ = QuestionGrid([payload]);
    assert({
      given: 'questions',
      should: 'render the questions',
      actual: $('.questionContainer').length,
      expected: 1,
    });
  }
});
