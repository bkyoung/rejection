import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Score from './Score.js';

describe('Score component renders given score', async assert => {
  {
    const $ = render(<Score />);
    assert({
      given: 'A Score component',
      should: 'render a score of zero when score is empty',
      actual: $('.scoreContainer .score').text(),
      expected: 'Score: 0'
    });
  }
});
