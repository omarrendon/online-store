import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, getProducts } from "../actions/cartActions";
import { addToFavorite } from "../actions/favoriteActions";
import { products } from "../data";

export const Card = () => {
  const dispatch = useDispatch();

  const [productSelected, setProductSelected] = useState({});
  const [favoriteSelect, setFavoriteSelect] = useState({
    id: null,
    name: '',
    price: null,
  });
  
  useEffect(() => {
    console.log('PRODUCT TO DISPATCH', productSelected);
    dispatch(addToCart(productSelected));
  }, [productSelected]);
   
  useEffect(() => {
    dispatch(addToFavorite(favoriteSelect));
  }, [favoriteSelect])

  const handleAddToCart = (id) => {
    console.log("PRODUCT SELECTED", id);
    setProductSelected({id});   
  };

  const handleLikeProduct = (id, name, price) => {
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
                handleAddToCart(product.id)
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
