import React from 'react';
import s from './ProductItem.module.css';

const ProductItem = ({ title, price, discountPercentage }) => {
  return (
    <div className={s.product_item}>
      <h2>Title: {title}</h2>
      <p>Price: {price} $</p>
      <p>Discount: {discountPercentage} $</p>
    </div>
  );
};

export default ProductItem;
