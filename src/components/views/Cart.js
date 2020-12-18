import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../actions/cartActions";

export const Cart = () => {
  const { item } = useSelector((item) => item.cart);
  const { total } = useSelector((total) => total.cart);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(removeFromCart(id));
  };
  console.log(item);
  return (
    <div>
      <div className="card-title">
        {item.length >= 1 ? (
          <h2>Products in the basket</h2>
        ) : (
          <h2>Basket empty</h2>
        )}
      </div>

      <div className="card">
        {item.map((product) => (
          <div className="card-container" key={product.id}>
            <img src={product.image} className="card-image" />
            <span className="card-span">{product.name}</span>
            <span className="card-span">PRICE: ${product.price}</span>
            <span className="card-span">AMOUNT: {product.amount}</span>

            <button
              className="card-button Favorite"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="card-total-price">{<h3>Total Price: ${total}</h3>}</div>
    </div>
  );
};
