import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';

import AddQuestion from './AddQuestion.js';

describe('AddQuestion component renders', async assert => {
  const createQuestion = (questionList = []) => (question) => questionList.concat([question]);
  const open = false
  const handleClose = () => open = false;
  {
    const $ = render(<AddQuestion createQuestion={createQuestion()} />);
    assert({
      given: 'An AddQuestion component',
      should: 'not render a button with the text "Add Question"',
      actual: $('.addQuestionContainer .buttonContainer button').text(),
      expected: ''
    });
  }
});
