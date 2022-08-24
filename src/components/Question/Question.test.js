import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';

import Question from './Question.js';

describe('Question component renders', async assert => {
  const question = ({ question, onClickHandler, ...props }) =>
    render(
      <Question
        question={question}
        onClick={onClickHandler}
        className={props.className
          ? props.className.concat(' ', 'question-container')
          : 'question-container'}
      />
    );
  
  {
    const $ = question({ question: {}, onClickHandler: {} });
    assert({
      given: 'an empty question',
      should: 'render an empty question',
      actual: $('.status').text(),
      expected: ""
    });
  }

  {
    const $ = question({ question: { question: "what?", askee: "child", status: "Unanswered" }, onClickHandler: () => {} });
    assert({
      given: 'a question',
      should: 'render the question',
      actual: $('.status').text(),
      expected: "Unanswered",
    });
  }
});
