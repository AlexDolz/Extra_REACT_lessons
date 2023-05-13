import { combineReducers, createStore } from 'redux';
import { wordReducer } from './wordsReducer';

const rootReducer = combineReducers({
  words: wordReducer,
});

export const store = createStore(rootReducer);
