import React from 'react';
import ButtonStyles from './Button.styles.js';

const buttonClasses = {
  default: 'default',
  inverted: 'inverted',
  anonymous: 'anonymous',
}

const Button = ({ title, ...props } = {}) => {
  const makeClassName = () => {
    let { className, buttonType } = props;
    let buttonClass = buttonClasses[buttonType] || 'default';
    buttonClass = className ? buttonClass.concat(' ', className) : buttonClass;
    return `buttonContainer ${buttonClass}`;
  }

  let { onClick } = props;

  if (!onClick) onClick = () => {};
  
  const classNames = makeClassName()

  return (
    <>
      <style jsx>{ButtonStyles}</style>
      <button className={classNames} onClick={onClick}>{title}</button>
    </>
  );
}

export default Button;
