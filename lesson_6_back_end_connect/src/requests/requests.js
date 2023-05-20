import { getProductsAction } from '../store/Reducers/productsReducer';

const baseUrl = 'http://localhost:3333';

const productsUrl = baseUrl + '/products/all';

export const fetchProductList = () => {
  return function (dispatch) {
    fetch(productsUrl)
      .then(res => res.json())
      .then(data => dispatch(getProductsAction(data)));
  };
};
