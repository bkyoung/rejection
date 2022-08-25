import React, { useEffect } from 'react';
import Card from '../Card/Card.js';
import QuestionGridStyles from './QuestionGrid.styles.js';

let QuestionGrid = ({ questions }) => {  
  return (
    <>
      <style jsx>
        {QuestionGridStyles}
      </style>  
      {questions.length > 0
        ? <>
            <div className="questions-grid">
              {questions.map((question, idx) => (
                <Card
                  key={idx}
                  question={question}
                />
              ))
              }
            </div>
          </>
        : <>
            <div className="no-questions">
              <span className="hint">
                &#8592; Add new requests
              </span>
              <span className="nothing-to-display">
                No Rejections Yet
            </span>
            </div>
          </>
      }
    </>
  );
};

export default QuestionGrid;
