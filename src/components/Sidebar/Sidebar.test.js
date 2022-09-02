import React from 'react';
import { Provider } from 'react-redux';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import store from '../../app/store.js';
import Sidebar from './Sidebar.js';

describe('Sidebar component renders', async assert => {
  const handleModalOpen = () => open = true;
  const $ = render(<Provider store={store}><Sidebar handleModalOpen={handleModalOpen}/></Provider>);
  {
    assert({
      given: 'a default sidebar',
      should: 'have an add question item',
      actual: $('.add-question').length,
      expected: 1
    });
  }
  {
    assert({
      given: 'a default sidebar',
      should: 'have a rules item',
      actual: $('.rules').length,
      expected: 1
    });
  }
  {
    assert({
      given: 'a default sidebar',
      should: 'have a login item',
      actual: $('.login').length,
      expected: 1
    });
  }
});