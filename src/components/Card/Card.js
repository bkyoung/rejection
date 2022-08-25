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
          <br />
          <>
            {
              Object.keys(question).length > 0
                ? Object.keys(question).map((field, idx) => (
                  <div className="cardField" key={idx}>
                    <h5 className="fieldName">{field}</h5><h5 className={`fieldValue ${[field]}`}>{question[field]}</h5>
                  </div>
                ))
                : <></>
            }
          </>
            <UpdateQuestion editQuestion={question} open={open} handleClose={handleClose} />
        </div>
        <br />
        <div className="update">
          <Button buttonType="update" title="Update" onClick={handleOpen} />
        </div>
    </div>
    </>
  )
}

export default Card;
