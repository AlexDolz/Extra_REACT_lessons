import React from 'react';
import s from './Input.module.css';

const Input = ({ name, placeholder }) => {
  return (
    <input
      autoComplete='off'
      className={s.input}
      type='text'
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
