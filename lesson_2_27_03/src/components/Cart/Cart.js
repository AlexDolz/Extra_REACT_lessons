import React from "react";
import s from "./Cart.module.css";

export const Cart = ({ id, name, price, count, incrCart, decrCart }) => {
  return (
    <div className={s.cart__inner}>
      <p>{name}</p>
      <p>{price}</p>
      <div className={s.triggers}>
        <button onClick={() => decrCart(id)}>-</button>
        <p>{count}</p>
        <button onClick={() => incrCart(id)}>+</button>
      </div>
    </div>
  );
};
