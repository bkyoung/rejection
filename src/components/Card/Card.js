import React, { useState } from 'react';
import Button from '../Button/Button.js';
import UpdateQuestion from '../UpdateQuestion/UpdateQuestion.js';
import CardStyles from './Card.styles.js';

const Card = ({ question }) => {
  const [open, setOpen] = useState(false)
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <style jsx>
      {CardStyles}
    </style>
      <div className={`cardContainer ${question.status.toLowerCase()}`}>
        <div className="questionContainer">
          <h3 className="cardTitle">{question.status}</h3>
          <h4 className="cardSubtitle">by {question.askee}</h4>
          <hr />
          <div>
            {
              Object.keys(question).length &&
              Object.keys(question).map((field, idx) => field !== 'id' && (
                <div className="cardField" key={idx}>
                  <h4 className="fieldName">{field}</h4>:<p className={`fieldValue ${[field]}`}>{question[field]}</p>
                </div>
              ))
            }
          </div>
        </div>
        <br />
        <div className="update">
          <Button buttonType="update" title="Update" onClick={handleOpen} />
        </div>
    </div>
    <UpdateQuestion editQuestion={question} open={open} handleClose={handleClose} />
    </>
  )
}

export default Card;
