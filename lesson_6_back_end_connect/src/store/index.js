import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './Reducers/productsReducer';

const rootReducer = combineReducers({
  // categories: categoriesReducer,
  products: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
