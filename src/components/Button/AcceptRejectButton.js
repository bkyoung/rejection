import React from 'react';
import ButtonStyles from './Button.styles.js';

const AcceptRejectButtons = ({ data, onClick }) => {
  return (
    <>
      <style jsx>
        {ButtonStyles}
      </style>
      <div className="buttonContainer acceptRejectButtonGroup">
        <button className={'updateQuestion acceptQuestion'} onClick={() => onClick({ ...data, status: 'Accepted' })}>Accepted</button>
        <button className={'updateQuestion rejectQuestion'} onClick={() => onClick({ ...data, status: 'Rejected' })}>Rejected</button>
      </div>
    </>
  );
}

export default AcceptRejectButtons;
