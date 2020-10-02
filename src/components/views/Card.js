import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { addToFavorite } from "../actions/favoriteActions";
import { products } from "../data";

export const Card = () => {
  const dispatch = useDispatch();

  const [productSelect, setProductSelect] = useState({
    id: null,
    name: "",
    price: null
  });

  const [favoriteSelect, setFavoriteSelect] = useState({
    id: null,
    name: '',
    price: null,
  });

  useEffect(() => {
    console.log(productSelect);
    dispatch(addToCart(productSelect));
  }, [productSelect]);

  useEffect(() => {
    dispatch(addToFavorite(favoriteSelect));
  }, [favoriteSelect])

  const handleAddToCart = (id, name, price) => {
    console.log("LOG ADD TO CART", id, name, price);
    setProductSelect({
      id,
      name,
      price
    });
  };

  const handleLikeProduct = (id, name, price) => {
    console.log("LOG ADD TO FAVORITE", id, name, price);
    setFavoriteSelect({
      id,
      name,
      price
    });
  };

  return (
    <div>
      {products.map(product => (
        <div className="card" key={product.id}>
          <hr />
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
          <button
            onClick={() =>
              handleLikeProduct(product.id, product.name, product.price)
            }
          >
            Like
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};
