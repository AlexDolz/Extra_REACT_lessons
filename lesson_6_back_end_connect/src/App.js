import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from './requests/requests';
import ProductItem from './components/ProductItem/ProductItem';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  console.log(products);

  const discountProducts = products.filter(elem => elem.discont_price);
  const indexArray = [];
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * discountProducts.length);
    indexArray.push(discountProducts[randomIndex]);
  }
  console.log(indexArray);

  return (
    <div>
      {indexArray.map((elem, index) => (
        <ProductItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default App;
