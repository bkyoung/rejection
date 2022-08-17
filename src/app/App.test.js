import React from 'react';
import { Provider } from 'react-redux';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import store from './store.js';
import App from './App.js';

describe('App component renders', async assert => {
  const $ = render(<Provider store={store}><App title={'testtitle'} subtitle={'testsubtitle'}/></Provider>);
  assert({
    given: 'An App component with a prop title="testtitle"',
    should: 'render an H1 with the word "testtitle"',
    actual: $('h1').html().trim(),
    expected: 'testtitle'
  });
  assert({
    given: 'An App component with a prop subtitle="testsubtitle"',
    should: 'render an H3 with the word "testsubtitle"',
    actual: $('h3').html().trim(),
    expected: 'testsubtitle'
  });
});