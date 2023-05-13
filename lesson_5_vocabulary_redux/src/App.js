import React from 'react';
import './App.css';
import AddForm from './components/AddForm/AddForm';
import CardContainer from './components/CardsContainer/CardContainer';

const App = () => {
  return (
    <div>
      <AddForm />
      <CardContainer />
    </div>
  );
};

export default App;
