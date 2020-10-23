import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import { products } from "../data";
import { removeFromCart } from "../actions/cartActions";

export const Cart = () => {
  const { item } = useSelector(item => item.cart);
  const dispatch = useDispatch();

  console.log("ITEMS", item);

  const handleRemoveProduct = id => {
    // TODO: Do a dispatch of an action
    // dispatch(removeFromCart(id));
    console.log(id);
  };

  return (
    <div>
      <div className="">
        <h1>PRODUCT SELECTED</h1>
      </div>

      <div className="">
        {item &&
          item.map( product =>
              product?.id && (
                <div className="" key={product.id}>
                  <p>NAME: {product.name}</p>
                  <p>PRICE: ${product.price} </p>
                  <p>AMOUNT: {product.amount}</p>
                  <p>TOTAL : $</p>
                  <button onClick={() => handleRemoveProduct(product.id)}>
                    Delete
                  </button>
                  <hr />
                </div>
              )
          )}
      </div>
    </div>
  );
};
