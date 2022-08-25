import React from 'react';
import ScoreStyles from './Score.styles.js';

let Score = ({ score = 0 } = {}) => (
  <div className="scoreContainer">
    <style jsx>
      {ScoreStyles}
    </style>
    <h2 className="score">Score: {score}</h2>
  </div>
);

export default Score;
