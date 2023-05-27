const defaultState = [];

const GET_PRODUCTS = 'GET_PRODUCTS';
const SORT_BY_DEFAULT = 'SORT_BY_DEFAULT';
const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC';
const SORT_BY_PRICE_ASC = 'SORT_BY_PRICE_ASC';

const SORT_BY_RANGE = 'SORT_BY_RANGE';

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload].map(product => ({
        ...product,
        rangeVisible: true,
      }));

    case SORT_BY_DEFAULT:
      const copyState = [...state];
      return copyState.sort((a, b) => a.id - b.id);

    case SORT_BY_PRICE_DESC:
      const copyState2 = [...state];
      return copyState2.sort((a, b) => a.price - b.price);

    case SORT_BY_PRICE_ASC:
      const copyState3 = [...state];
      return copyState3.sort((a, b) => b.price - a.price);

    case SORT_BY_RANGE:
      console.log(action.payload);
      const { from, to } = action.payload;

      return state.map(product => ({
        ...product,
        rangeVisible: product.price >= from && product.price <= to,
      }));

    default:
      return state;
  }
};

export const getProductsAction = payload => ({ type: GET_PRODUCTS, payload });
export const sortByDefaultAction = () => ({ type: SORT_BY_DEFAULT });
export const sortByPriceDescAction = () => ({ type: SORT_BY_PRICE_DESC });
export const sortByPriceAscAction = () => ({ type: SORT_BY_PRICE_ASC });
export const sortByRangeAction = payload => ({ type: SORT_BY_RANGE, payload });
