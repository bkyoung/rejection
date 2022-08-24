import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';

import QuestionList from './QuestionList.js';

describe('QuestionList component renders', async assert => {
  const questionList = (questions) => render(<QuestionList questions={questions} />);
  
  {
    const $ = questionList([]);
    assert({
      given: 'no questions',
      should: 'render no questions',
      actual: $('.question-container').length,
      expected: 0
    });
  }

  {
    const $ = questionList([{ question: "what?", askee: "child", status: "Unanswered" }]);
    assert({
      given: 'questions',
      should: 'render the questions',
      actual: $('.question-container').length,
      expected: 1,
    });
  }
});
