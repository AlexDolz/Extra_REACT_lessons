import React from 'react';
import s from './CardsContainer.module.css';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const CardContainer = () => {
  let words = useSelector(store => store.words);

  return (
    <div className={s.cards_container}>
      {words.map((elem, index) => (
        <Card key={index} {...elem} />
      ))}
    </div>
  );
};

export default CardContainer;
