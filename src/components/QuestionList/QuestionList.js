import React, { useEffect } from 'react';
import AcceptRejectButtons from '../Button/AcceptRejectButton.js';
import QuestionListStyles from './QuestionList.styles.js';

let QuestionList = ({ questions, onClick }) => {

  useEffect(() => {
    console.log(questions)
  }, [questions])
  
  return (<> 
    <style jsx>
      {QuestionListStyles}
    </style>  
    <table className="questions">
      <thead>
        <tr>
          <th>Question</th>
          <th>Askee</th>
          <th>Response</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {questions.length > 0 ? questions.map((q, idx) => (
          <tr key={idx}>
            <td>{q.question}</td>
            <td>{q.askee}</td>
            <td>{q.status}</td>
            <td>{q.status === 'Unanswered' && <AcceptRejectButtons onClick={onClick} data={q} />}</td>
          </tr>
         )) : <></>
        }
      </tbody>
    </table>
  </>);
};

export default QuestionList;
