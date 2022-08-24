import React from 'react';
import { Provider } from 'react-redux';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import store from './store.js';
import App from './App.js';

describe('App component renders', async assert => {
  const $ = render(<Provider store={store}><App title={'testtitle'} subtitle={'testsubtitle'}/></Provider>);
  assert({
    given: 'A title  of "testtitle"',
    should: 'render the heading "testtitle"',
    actual: $('.title').html().trim(),
    expected: 'testtitle'
  });
  assert({
    given: 'A subtitle of "testsubtitle"',
    should: 'render an with the subheading "testsubtitle"',
    actual: $('.subtitle').html().trim(),
    expected: 'testsubtitle'
  });
});