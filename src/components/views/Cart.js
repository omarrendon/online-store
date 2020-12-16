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
  console.log(total);

  return (
    <div>
      <div className="">
        <h1>PRODUCT SELECTED</h1>
      </div>

      <div className="">
        {item.map((product) => (
          <div className="" key={product.id}>
            <div className="">
              <p>NAME: {product.name}</p>
              <p>PRICE: ${product.price}</p>
              <p>AMOUNT: {product.amount}</p>

              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
              <hr />
            </div>
          </div>
        ))}
        {<h3>Total Price: ${total}</h3>}
      </div>
    </div>
  );
};
