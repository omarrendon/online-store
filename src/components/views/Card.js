import React from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { addToFavorite } from "../actions/favoriteActions";
import { products } from "../data";

export const Card = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleLikeProduct = (id) => {
    dispatch(addToFavorite(id));
  };

  return (
    <div className="">
      <div className="">
        <h1>PRODUCTS</h1>
      </div>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <hr />
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => handleAddToCart(product.id)}>Add</button>
          <button onClick={() => handleLikeProduct(product.id)}>Like</button>
          <hr />
        </div>
      ))}
    </div>
  );
};
