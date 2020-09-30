import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { products } from "../data";

export const Card = () => {
  const dispatch = useDispatch();

  const [productSelect, setProductSelect] = useState({
    id: null,
    name: "",
    price: null
  });

  useEffect(() => {
    console.log(productSelect);
    dispatch(addToCart(productSelect));
  }, [productSelect, dispatch]);

  const handleAddToCart = (id, name, price) => {
    console.log("LOG 1", id, name, price);
    setProductSelect({
      id,
      name,
      price
    });
  };

  return (
    <div>
      {products.map(product => (
        <div className="card" key={product.id}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button
            onClick={() =>
              handleAddToCart(product.id, product.name, product.price)
            }
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};
