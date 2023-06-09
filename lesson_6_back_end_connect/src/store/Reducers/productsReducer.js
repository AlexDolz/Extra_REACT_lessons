const GET_PRODUCTS = 'GET_PRODUCTS';

const defaultState = [];

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};

export const getProductsAction = payload => ({
  type: GET_PRODUCTS,
  payload,
});
