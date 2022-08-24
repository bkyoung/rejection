import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Score from './Score.js';

describe('Score component renders', async assert => {
  {
    const $ = render(<Score />);
    assert({
      given: 'no props',
      should: 'render a score of zero',
      actual: $('.scoreContainer .score').text(),
      expected: 'Score: 0'
    });
  }
  {
    const $ = render(<Score score={10} />);
    assert({
      given: 'a specific score as a prop',
      should: 'render thst score',
      actual: $('.score').text(),
      expected: 'Score: 10'
    });
  }
});
