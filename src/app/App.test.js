import React from 'react';
import { Provider } from 'react-redux';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import store from './store.js';
import App from './App.js';

describe('App component renders', async assert => {
  const $ = render(<Provider store={store}><App /></Provider>);
  assert({
    given: 'A default App with no user logged in',
    should: 'render the page',
    actual: $('.nothing-to-display').text(),
    expected: 'No Rejections Yet'
  });
});