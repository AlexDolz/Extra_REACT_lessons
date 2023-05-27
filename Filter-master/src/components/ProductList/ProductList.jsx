import React, { useEffect } from 'react';
import s from './ProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../../request';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  const products = useSelector(store =>
    store.products?.filter(product => product.rangeVisible)
  );
  console.log('productsList', products);

  return (
    <div className={s.products_container}>
      {products.map((elem, index) => (
        <ProductItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductList;
