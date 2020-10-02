import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, removeFromCart } from "../actions/cartActions";

export const Cart = () => {
  const {item} = useSelector(item => item.cart);
  const dispatch = useDispatch();

  // const producto = item[0].item[1];
  console.log(item);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  const handleDeleteProduct = ( id ) => {
    dispatch( removeFromCart(id))
  };

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
              <button onClick={ () => handleDeleteProduct(product.id)}>Delete</button>
              <hr/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
