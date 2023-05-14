import { words } from '../data';

const defaultState = words;

const ADD_NEW_WORD = 'ADD_NEW_WORD';
const ROTATE_CARD = 'ROTATE_CARD';
const ROTATE_ALL_CARDS_TO_ENG = 'ROTATE_ALL_CARDS_TO_ENG';
const ROTATE_ALL_CARDS_TO_RUS = 'ROTATE_ALL_CARDS_TO_RUS';
const DELETE_CARD_ON_DOUBLE_CLICK = 'DELETE_CARD_ON_DOUBLE_CLICK';

export const wordReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_WORD:
      return [...state, action.payload];

    case ROTATE_CARD:
      const copyState = [...state];
      const targetItem = copyState.find(elem => elem.id === action.payload);
      targetItem.lang = targetItem.lang === 'rus' ? 'eng' : 'rus';
      return [...copyState];

    case ROTATE_ALL_CARDS_TO_ENG:
      return state.map(elem => ({
        ...elem,
        lang: 'eng',
      }));

    case ROTATE_ALL_CARDS_TO_RUS:
      return state.map(elem => ({
        ...elem,
        lang: 'rus',
      }));
    case DELETE_CARD_ON_DOUBLE_CLICK:
      return state.filter(elem => elem.id !== action.payload);

    default:
      return state;
  }
};

export const addNewWordAction = payload => ({
  type: ADD_NEW_WORD,
  payload,
});
export const rotateCardAction = payload => ({
  type: ROTATE_CARD,
  payload,
});
export const rotateAllCardsToEngAction = () => ({
  type: ROTATE_ALL_CARDS_TO_ENG,
});
export const rotateAllCardsToRusAction = () => ({
  type: ROTATE_ALL_CARDS_TO_RUS,
});
export const deleteCardOnDoubleClickAction = payload => ({
  type: DELETE_CARD_ON_DOUBLE_CLICK,
  payload,
});
