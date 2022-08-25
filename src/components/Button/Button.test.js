import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';

import Button from './Button.js';

describe('Button component renders', async assert => {
  {
    const $ = render(<Button title="test" />);
    assert({
      given: 'A Button named "test"',
      should: 'render a button with the word "test"',
      actual: $('.buttonContainer').text(),
      expected: 'test'
    });
  }
});
