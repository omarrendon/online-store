import React from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { addToFavorite } from "../actions/favoriteActions";
import { products } from "../data";

import "../styles/card.css";

export const Card = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleLikeProduct = (id) => {
    dispatch(addToFavorite(id));
  };

  return (
    <div>
      <div className="card-title">
        <h2>Choose yours products</h2>
      </div>
      <div className="card">
        {products.map((product) => (
          <div className="card-container" key={product.id}>
            <img src={product.image} className="card-image" />
            <span className="card-span">{product.name}</span>
            <span className="card-span"> {product.description}</span>
            <span className="card-span">Price: ${product.price}</span>
            <span className="card-span">Quantity: {product.quantity}</span>
            <div className="card-box-button">
              <button
                className="card-button Add"
                onClick={() => handleAddToCart(product.id)}
              >
                Add
              </button>
              <button
                className="card-button Favorite"
                onClick={() => handleLikeProduct(product.id)}
              >
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
