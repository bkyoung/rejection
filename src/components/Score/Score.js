import React from 'react';
import { connect } from 'react-redux';
import { getScore } from '../../features/rejection/rejectionSlice';
import ScoreStyles from './Score.styles.js';

let Score = ({ score = 0 } = {}) => (
  <div className="scoreContainer">
    <style jsx>
      {ScoreStyles}
    </style>
    <h1 className="score">Score: {score}</h1>
  </div>
);

export default Score;
