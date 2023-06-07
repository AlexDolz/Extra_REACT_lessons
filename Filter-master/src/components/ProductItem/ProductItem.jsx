import React from 'react';
import s from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/cartReducer';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, discountPercentage } = product;

  const handleClick = event => {
    event.preventDefault();
    dispatch(addToCartAction(product));
  };

  return (
    <div className={s.product_item}>
      <h2>Title: {title}</h2>
      <p>Price: {price} $</p>
      <p>Discount: {discountPercentage} $</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
