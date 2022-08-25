import React, { useState } from 'react';
import Button from '../Button/Button.js';
import { IconX } from '@tabler/icons';
import addQuestionStyles from './AddQuestion.styles.js';

let AddQuestion = ({ dispatch, open, handleClose}) => {
  const [askee, setAskee] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ question, askee });
    setAskee('');
    setQuestion('');
    handleClose();
  };

  return (
    <div className="addQuestionContainer">
      <style jsx>
        {addQuestionStyles}
      </style>
      <div className={`${open ? "modalShow" : "modalHide"} addQuestionModalContainer`}>
        {open && 
        <div className="addQuestionModal">
          <form onSubmit={handleSubmit}>
              <span className="close">
                <IconX onClick={handleClose} />
              </span>
              <input
                id="question"
                placeholder="Question asked"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <br />
              <input
                id="askee"
                placeholder="Who was asked"
                name="askee"
                value={askee}
                onChange={(e) => setAskee(e.target.value)}
              />
              <br />
              <Button type="submit" title="Save" />
          </form>
        </div>}
      </div>
    </div>
  );
};

export default AddQuestion;
