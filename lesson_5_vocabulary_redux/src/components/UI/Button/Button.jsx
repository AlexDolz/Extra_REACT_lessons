import React from 'react';
import s from './Buttons.module.css';
import classNames from 'classnames';

const Button = ({ text, className, onClick }) => {
  const buttonClasses = classNames(s.button, className);
  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
