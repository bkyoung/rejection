import React, { useState } from 'react';
import RulesStyles from './Rules.styles.js';
import { IconX } from '@tabler/icons';

const Rules = ({ open, handleClose }) => {
  const onClick = () => {
    handleClose();
  }
  
  return (
    <>
      <style jsx>
        {RulesStyles}
      </style>
      <div className={`rules-container ${open ? 'open' : 'close'}`}>
        <div className="rules-modal-container">
          <div className="rules-modal">
            <span className="close-button">
              <IconX onClick={onClick} />
            </span>
            <h2>Game Info</h2>
            <h3>Rules</h3>
            There is one rule in this game:
              <ol>
                <li>You must have a request be rejected by a human being at least <em><b>once per day</b></em>.</li>
              </ol>
            <h3>Scoring</h3>
            A score is assigned based on responses to your requests:
            <ol>
              <li>If your request is accepted, you receive 1 point</li>
              <li>If your request is rejected, you receive 10 points</li>
            </ol>
            Ask for more things outside your comfort zone more often, and you will find yourself winning a lot more.  How long can you make your rejection streak last?
            <h2>Other Info</h2>
            <h3>User Account</h3>
            We promise we will never spam you or sell your information to others.
            <ol>
              <li>If you wish to persist your questions and score between game sessions, you can create an account linked to your public Google ID by simply logging in.</li>
              <li>If you choose to proceed as an Anonymous user, the game will still work, but all information will be erased upon refreshing or closing your session.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rules;
