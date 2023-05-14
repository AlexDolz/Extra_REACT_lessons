import React from 'react';
import './App.css';
import AddForm from './components/AddForm/AddForm';
import CardContainer from './components/CardsContainer/CardContainer';
import Button from './components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import {
  rotateAllCardsToEngAction,
  rotateAllCardsToRusAction,
} from './store/wordsReducer';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <AddForm />
      <CardContainer />
      <div className='app_buttons'>
        <Button
          onClick={() => dispatch(rotateAllCardsToRusAction())}
          text='RUS'
          className='app_button'
        />
        <Button
          onClick={() => dispatch(rotateAllCardsToEngAction())}
          text='ENG'
          className='app_button'
        />
      </div>
    </div>
  );
};

export default App;
