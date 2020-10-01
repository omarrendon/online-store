import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const item = useSelector(item => item.cart);

  console.log(item);

  return (
    <div>
      <div className="">
        <h1>PRODUCT SELECTED</h1>
      </div>

      {item.map(product => (
        <div className="" key={product.id}>
          {product.id && (
            <div className="">
              <li>ID: {product.id}</li>
              <li>NAME:{product.name}</li>
              <li>PRICE: ${product.price}</li>
              <hr/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
