import React from 'react';
import { Provider } from 'react-redux';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import store from '../../app/store.js';
import Navbar from './Navbar.js';

describe('Navbar component renders', async assert => {
  const user = { id: 1, displayname : 'Test', email: 'test@example.com', photoURL: '' }
  const $ = render(<Provider store={store}><Navbar title={'testtitle'} subtitle={'testsubtitle'} user={user} /></Provider>);
  {
    assert({
      given: 'A title  of "testtitle"',
      should: 'render the heading "testtitle"',
      actual: $('.title').html().trim(),
      expected: 'testtitle.'
    });
  }
  {
    assert({
      given: 'A subtitle of "testsubtitle"',
      should: 'render an with the subheading "testsubtitle"',
      actual: $('.subtitle').html().trim(),
      expected: 'testsubtitle.'
    });
  }
});