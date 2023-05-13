import React from 'react';
import s from './Card.module.css';
import { useDispatch } from 'react-redux';
import { rotateCardAction } from '../../store/wordsReducer';

const Card = ({ rus, eng, lang, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.word_card} onClick={() => dispatch(rotateCardAction(id))}>
      {lang === 'rus' ? rus : eng}
    </div>
  );
};

export default Card;
