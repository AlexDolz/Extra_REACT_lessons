import React from 'react';
import s from './Buttons.module.css';

const Button = ({ text }) => {
  return <button className={s.button}>{text}</button>;
};

export default Button;
