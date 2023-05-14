import React from 'react';
import s from './AddForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewWordAction } from '../../store/wordsReducer';

const AddForm = () => {
  let dispatch = useDispatch();

  const createCard = event => {
    event.preventDefault();

    const { eng, rus } = event.target;

    const newCard = {
      id: uuidv4(),
      eng: eng.value,
      rus: rus.value,
      lang: 'eng',
    };
    dispatch(addNewWordAction(newCard));
    console.log(newCard);
    event.target.reset();
  };

  return (
    <form className={s.form} onSubmit={createCard}>
      <Input name='rus' placeholder='Enter word in russian' />
      <Input name='eng' placeholder='Enter word in english' />
      <Button text='Add word' className={s.add_button} />
    </form>
  );
};

export default AddForm;
