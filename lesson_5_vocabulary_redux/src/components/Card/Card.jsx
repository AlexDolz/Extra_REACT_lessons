import React from 'react';
import s from './Card.module.css';
import { useDispatch } from 'react-redux';
import { rotateCardAction } from '../../store/wordsReducer';

const Card = ({ rus, eng, lang, id }) => {
  const cardColor = {
    color: lang === 'rus' ? 'white' : 'rgba(41, 128, 185)',
    background: lang === 'rus' ? 'rgba(41, 128, 185)' : 'white',
  };

  const dispatch = useDispatch();
  return (
    <div
      className={s.word_card}
      style={cardColor}
      onClick={() => dispatch(rotateCardAction(id))}
    >
      {lang === 'rus' ? rus : eng}
    </div>
  );
};

export default Card;
