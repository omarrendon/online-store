import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { addToFavorite } from "../actions/favoriteActions";
import { products } from "../data";

export const Card = () => {
  const dispatch = useDispatch();

  const [productSelected, setProductSelected] = useState({});
  const [favoriteSelect, setFavoriteSelect] = useState({});

  useEffect(() => {
    console.log("PRODUCT TO DISPATCH", productSelected);
    dispatch(addToCart(productSelected));
  }, [productSelected]);

  const handleAddToCart = (id) => {
    console.log("PRODUCT SELECTED", id);
    setProductSelected({ id });
  };

  useEffect(() => {
    dispatch(addToFavorite(favoriteSelect));
    // console.log(favoriteSelect);
  }, [favoriteSelect]);

  const handleLikeProduct = (id) => {
    setFavoriteSelect(id);
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
