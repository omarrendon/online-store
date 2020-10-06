import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { addToFavorite } from "../actions/favoriteActions";
import { products } from "../data";

export const Card = () => {
  const dispatch = useDispatch();

  const [productSelected, setProductSelected] = useState({
    id: null,
    name: "",
    price: null,
    amount: null
  });

  const [favoriteSelect, setFavoriteSelect] = useState({
    id: null,
    name: '',
    price: null,
  });

  useEffect(() => {
    console.log('PRODUCT TO DISPATCH', productSelected);
    dispatch(addToCart(productSelected, products));
  }, [productSelected]);

  useEffect(() => {
    dispatch(addToFavorite(favoriteSelect));
  }, [favoriteSelect])

  const handleAddToCart = (id, name, price) => {
    console.log("PRODUCT SELECTED", id, name, price);
    setProductSelected({
      id,
      name,
      price,
      amount: 0
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
    <div className="">
        <div className="">
          <h1>PRODUCTS</h1>
        </div>
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
