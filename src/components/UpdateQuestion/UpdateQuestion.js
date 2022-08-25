import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestion } from '../../features/rejection/rejectionSlice.js';
import Button from '../Button/Button.js';
import UpdateQuestionStyles from './UpdateQuestion.styles.js';

let UpdateQuestion = ({ editQuestion, open, handleClose}) => {
  const [askee, setAskee] = useState(editQuestion?.askee || '');
  const [id, setId] = useState(editQuestion?.id || '');
  const [question, setQuestion] = useState(editQuestion?.question || '');
  const [status, setStatus] = useState(editQuestion?.status || '');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('dispatching:', { id, question, askee, status })
    dispatch(updateQuestion({ id, question, askee, status }));
    handleClose();
  };

  return (
    <div className="updateQuestionContainer">
      <style jsx>
        {UpdateQuestionStyles}
      </style>
      <div className={`${open ? "modalShow" : "modalHide"} updateQuestionModalContainer`}>
        {open && 
        <div className="updateQuestionModal">
          <form onSubmit={handleSubmit}>
              <input
                id="question"
                placeholder={question || "Question asked"}
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <br />
              <input
                id="askee"
                placeholder={askee || "Who was asked"}
                name="askee"
                value={askee}
                onChange={(e) => setAskee(e.target.value)}
              />
              <br />
              <select id="status" name="status" onChange={(e) => setStatus(e.target.value)}>
                <option selected hidden value={status}>{status}</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
                <option value="Unanswered">Unanswered</option>
              </select>
              <br />
              <Button type="submit" title="Update" />
          </form>
        </div>}
      </div>
    </div>
  );
};

export default UpdateQuestion;
