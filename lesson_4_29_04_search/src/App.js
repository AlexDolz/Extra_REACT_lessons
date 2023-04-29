import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const url = 'https://fakestoreapi.com/products';

  const [products, setProducts] = useState([]);
  const [findedProducts, setFindedProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const search = event => {
    event.preventDefault();
    const data = event.target.product.value;
    const tempProducts = products.filter(elem =>
      elem.description.includes(data)
    );
    setFindedProducts([...tempProducts]);
  };
  console.log(findedProducts);

  return (
    <div>
      <form onSubmit={search}>
        <input type='text' placeholder='title' name='product' />
        <button>Search</button>
      </form>
      <div>
        {findedProducts.map((elem, index) => {
          return (
            <div key={index}>
              <p>{elem.title}</p>
              <p>Description: {elem.description}</p>
              <p>Price: {elem.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
