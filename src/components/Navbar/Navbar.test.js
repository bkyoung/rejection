import React from 'react';
import { Provider } from 'react-redux';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import store from '../../app/store.js';
import Navbar from './Navbar.js';

describe('Navbar component renders', async assert => {
  const user = { id: 1, displayname : 'Test', email: 'test@example.com', photoURL: '' }
  const $ = render(<Provider store={store}><Navbar /></Provider>);
  {
    assert({
      given: 'A default navbar with no user logged in',
      should: 'render with user "Anonymous"',
      actual: $('.name').text(),
      expected: 'Anonymous'
    });
  }
  {
    assert({
      given: 'A default navbar with no user logged in',
      should: 'render an with a score of 0',
      actual: $('.score').html().trim(),
      expected: 'Score: 0'
    });
  }
});