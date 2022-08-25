import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import { Provider } from 'react-redux';
import store from '../../app/store.js';
import Card from './Card.js';

describe('Card component renders', async assert => {
  const card = (question) => render(<Provider store={store}><Card question={question} /></Provider>);
  {
    const question = { id: 1, question: "what?", askee: "child", status: "Unanswered" }
    const $ = card(question);

    assert({
      given: 'a question',
      should: 'render the question',
      actual: $('.status').text(),
      expected: "Unanswered",
    });
  }
});
