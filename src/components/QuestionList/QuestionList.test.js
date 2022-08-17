import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';

import QuestionList from './QuestionList.js';

describe('QuestionList component renders', async assert => {
  const questionList = (questions) => render(<QuestionList questions={questions} />);
  
  {
    const $ = questionList([]);
    assert({
      given: 'A QuestionList component with a prop questions=[]',
      should: 'render only a header row',
      actual: $('table > tbody > tr').html(),
      expected: null
    });
  }

  {
    const $ = questionList([{ question: "what?", askee: "child", status: "Unanswered" }]);
    assert({
      given: 'A QuestionList component with questions in the questions prop',
      should: 'render a table with those questions',
      actual: $('table > tbody > tr > td').text(),
      expected: 'what?childUnansweredAcceptedRejected',
    });
  }
});
