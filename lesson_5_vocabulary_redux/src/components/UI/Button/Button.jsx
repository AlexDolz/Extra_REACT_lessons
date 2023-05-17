import React from 'react';
import classNames from 'classnames';

const Button = ({ text, className, onClick }) => {
  const buttonClasses = classNames(className);
  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
