import React from 'react';
import ButtonStyles from './Button.styles.js';

const buttonClasses = {
  default: 'default',
  accept: 'acceptRejectButtonGroup acceptQuestion',
  reject: 'acceptRejectButtonGroup rejectQuestion',
}

const Button = ({ title, onClick, buttonType = 'default' } = {}) => {
  const buttonClass = buttonClasses[buttonType];
  return (
    <>
      <style jsx>
        {ButtonStyles}
      </style>
      <div className={`buttonContainer ${buttonClass}`}>
        <button onClick={onClick ? onClick : () => { }}>{title}</button>
      </div>
    </>
  );
}

export default Button;
