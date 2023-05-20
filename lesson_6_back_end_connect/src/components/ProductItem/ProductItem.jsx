import React from 'react';

const ProductItem = ({ title, price }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ProductItem;
