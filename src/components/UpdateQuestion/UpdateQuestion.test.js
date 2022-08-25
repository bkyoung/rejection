import React from 'react';
import { Provider } from 'react-redux';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import store from '../../app/store.js';
import UpdateQuestion from './UpdateQuestion.js';
import { createQuestion } from '../../features/rejection/rejectionSlice.js';

describe('UpdateQuestion component renders', async assert => {
  const handleClose = () => open = false;
  {
    const { payload } = createQuestion()
    const $ = render(<Provider store={store}><UpdateQuestion editQuestion={payload} open={false} handleClose={handleClose} /></Provider>);
    assert({
      given: 'modal is closed',
      should: 'render nothing',
      actual: $('.buttonContainer button').text(),
      expected: ''
    });
  }
  {
    const { payload } = createQuestion({ question: 'what?', askee: 'me' })
    const $ = render(<Provider store={store}><UpdateQuestion editQuestion={payload} open={true} handleClose={handleClose} /></Provider>);
    assert({
      given: 'modal is open',
      should: 'render a form with an "Update" button',
      actual: $('.buttonContainer').text(),
      expected: 'Update'
    });
  }
});
