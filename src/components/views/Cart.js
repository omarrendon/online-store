import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, removeFromCart } from "../actions/cartActions";

export const Cart = () => {
  const { item } = useSelector(item => item.cart);
  const dispatch = useDispatch();

  const itemMap = item[0];

  console.log(item[0]);

  const handleDeleteProduct = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className="">
        <h1>PRODUCT SELECTED</h1>
      </div>

      <div className="">
        {item[0] &&
          item[0].map(product => (
            <div className="" key={product.id}>
              {product.amount >= 1 ? (
                <div className="">
                  <p>NAME: {product.name}</p>
                  <p>PRICE: ${product.price}</p>
                  <p>AMOUNT: {product.amount}</p>
                  <hr />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
